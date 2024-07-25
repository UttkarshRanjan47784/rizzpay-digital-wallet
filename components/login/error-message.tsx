import React from "react";

export default function ErrorMessage({ message }: { message: string }) {
  return <span className="text-xs font-bold text-red-500">{message}</span>;
}
