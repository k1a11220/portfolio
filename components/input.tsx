import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  kind?: "password" | "text";
  type: string;
  register: UseFormRegisterReturn;
  required: boolean;
}

export default function Input({
  label,
  name,
  kind = "password",
  register,
  type,
  required,
}: InputProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {kind === "password" ? (
        <div>
          <input id={name} required={required} {...register} type={type} />
        </div>
      ) : null}
    </div>
  );
}
