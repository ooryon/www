'use client';

export function Emblem({ className = '' }: { className?: string }) {
  return (
    <img
      src="/transparent-logo.png"
      alt="Ooryon"
      className={`object-contain ${className}`}
    />
  );
}
