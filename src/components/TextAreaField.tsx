import React from "react";

interface TextareaFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}

export const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  rows = 5,
}) => {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
