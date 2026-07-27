import React from 'react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img src="/logo.png" alt="LeadPilot Logo" className="h-10 w-auto object-contain" />
    </div>
  );
}
