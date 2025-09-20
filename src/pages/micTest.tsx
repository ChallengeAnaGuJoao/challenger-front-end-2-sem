// src/pages/MicSelectTest.tsx
import React, { useEffect, useRef, useState } from "react";

/**
 * MicSelectTest
 * - lista microfones disponíveis
 * - permite escolher qual usar
 * - inicia/para captura e mostra uma barra de volume (RMS)
 *
 * Observações:
 * - precisa rodar em HTTPS ou localhost
 * - o navegador só mostra labels (nomes) depois que o usuário conceder permissão
 */

type MicDevice = {
  deviceId: string;
  label: string;
};

export default function MicSelectTest(): JSX.Element {
  const [devices, setDevices] = useState<MicDevice[]>([]);
  const [selected, setSelected] = useState<string>("default");
  const [listening, setListening] = useState(false);
  const [level, setLevel] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [permissionAsked, setPermissionAsked] = useState(false);

  const streamRef = useRef<MediaStream | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataRef = useRef<Uint8Array | null>(null);
  const rafRef = useRef<number | null>(null);

  // Enumera dispositivos (não garante labels se ainda não tiver permissão)
  async function enumerateMics() {
    try {
      const list = await navigator.mediaDevices.enumerateDevices();
      const mics = list
        .filter((d) => d.kind === "audioinput")
        .map((d) => ({ deviceId: d.deviceId, label: d.label || "Microfone (não nomeado)" }));
      setDevices(mics);
      // se não houver selected configurado e existir algum, setar 'default' ou primeiro
      if (!devices.length && mics.length > 0 && selected === "default") {
        // keep default as option, user can choose explicit device
      }
    } catch (err: any) {
      console.error("enumerateDevices erro:", err);
      setError(String(err?.message || err));
    }
  }

  // Força pedir permissão antes de listar labels — útil quando labels aparecem vazios
  async function requestPermissionAndList() {
    setError(null);
    try {
      setPermissionAsked(true);
      // pede permissão mínima: audio true
      const s = await navigator.mediaDevices.getUserMedia({ audio: true });
      // pra que labels apareçam, precisamos fechar essa stream depois de enumerar
      streamRef.current = s;
      await enumerateMics();
      // interrompe a stream de permissão (não a de teste, só essa temporária)
      s.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    } catch (err: any) {
      console.error("Permissão negada ou erro:", err);
      setError("Permissão para microfone negada ou erro: " + (err?.message ?? err));
    } finally {
      // re-enumerate pra garantir atualização
      await enumerateMics();
    }
  }

  // inicia captura usando selected deviceId (ou default se 'default')
  async function startListening() {
    setError(null);
    try {
      // se já estiver ouvindo, reinicia
      if (listening) {
        stopListening();
      }

      const constraints: MediaStreamConstraints =
        selected && selected !== "default"
          ? { audio: { deviceId: { exact: selected } } }
          : { audio: true };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

      // AudioContext cross-browser
      const AC = (window as any).AudioContext || (window as any).webkitAudioContext;
      const audioCtx: AudioContext = new AC();
      audioCtxRef.current = audioCtx;

      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 2048;
      source.connect(analyser);

      analyserRef.current = analyser;
      dataRef.current = new Uint8Array(analyser.frequencyBinCount);

      setListening(true);
      // comece o loop
      rafRef.current = requestAnimationFrame(drawLevel);
    } catch (err: any) {
      console.error("Erro ao iniciar microfone:", err);
      setError("Erro ao iniciar captura: " + (err?.message ?? err));
      setListening(false);
    }
  }

  // para tudo e limpa
  function stopListening() {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (audioCtxRef.current) {
      try { audioCtxRef.current.close(); } catch { /* ignore */ }
      audioCtxRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    analyserRef.current = null;
    dataRef.current = null;
    setListening(false);
    setLevel(0);
  }

  // se usuário trocar device enquanto ouvindo, reinicia com novo device
  useEffect(() => {
    if (!listening) return;
    // restart capture with new device
    (async () => {
      stopListening();
      // delay micro pra garantir stop (opcional)
      await new Promise((r) => setTimeout(r, 150));
      startListening();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  // desenha barra de nível
  function drawLevel() {
    const analyser = analyserRef.current;
    const data = dataRef.current;
    if (!analyser || !data) {
      rafRef.current = requestAnimationFrame(drawLevel);
      return;
    }
    // cast para evitar erro de tipagem TS
    analyser.getByteTimeDomainData(data as Uint8Array);

    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      const v = (data[i] - 128) / 128;
      sum += v * v;
    }
    const rms = Math.sqrt(sum / data.length);
    setLevel(rms);
    rafRef.current = requestAnimationFrame(drawLevel);
  }

  // cleanup on unmount
  useEffect(() => {
    enumerateMics();
    return () => {
      stopListening();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // percentage visual (sensibilidade ajustável)
  const pct = Math.min(level * 300, 100);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-clarinho p-6">
      <div className="w-full max-w-lg bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-roxo-escuro mb-4">Teste de Microfone — Selecionar dispositivo</h2>

        {error && <div className="mb-3 text-sm text-red-600">{error}</div>}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Microfone</label>
          <div className="flex gap-2">
            <select
              className="flex-1 border rounded p-2"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              <option value="default">Padrão do sistema</option>
              {devices.map((d) => (
                <option key={d.deviceId} value={d.deviceId}>
                  {d.label || `Microfone ${d.deviceId}`}
                </option>
              ))}
            </select>
            <button
              onClick={requestPermissionAndList}
              className="px-3 py-2 rounded border text-sm"
            >
              Listar / Permitir
            </button>
            <button
              onClick={enumerateMics}
              className="px-3 py-2 rounded border text-sm"
              title="Atualiza lista (não pede permissão)"
            >
              Atualizar
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Dica: clique em “Listar / Permitir” para que o navegador solicite permissão e mostre os nomes dos dispositivos.
          </p>
        </div>

        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2">Nível de áudio</div>
          <div className="w-full h-4 bg-gray-200 rounded overflow-hidden">
            <div
              style={{
                width: `${pct}%`,
                height: "100%",
                transition: "width 120ms linear",
                background: pct > 66 ? "#16a34a" : pct > 33 ? "#f59e0b" : "#ef4444",
              }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Silêncio</span>
            <span>RMS: {level.toFixed(3)}</span>
          </div>
        </div>

        <div className="flex gap-3">
          {!listening ? (
            <button
              onClick={startListening}
              className="flex-1 px-4 py-2 bg-verde-escuro text-white rounded"
            >
              Iniciar (usar selecionado)
            </button>
          ) : (
            <button
              onClick={stopListening}
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded"
            >
              Parar
            </button>
          )}
          <button
            onClick={() => {
              stopListening();
              setSelected("default");
              enumerateMics();
            }}
            className="px-3 py-2 border rounded"
          >
            Reset
          </button>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          Rodando em: <span className="font-medium">{permissionAsked ? "permissão solicitada" : "sem permissão ainda"}</span>
        </p>
      </div>
    </div>
  );
}
