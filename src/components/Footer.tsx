import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0a0a0a] py-6 mt-auto">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[0.65rem] font-mono text-[#3a3530]">
            <span>PUBLIC DOMAIN DOCUMENTS</span>
            <span className="hidden md:inline text-[#2a2520]">•</span>
            <span>FOR EDUCATIONAL PURPOSES</span>
          </div>

          <p className="text-[0.7rem] text-[#4a4540] font-serif">
            Requested by{' '}
            <span className="text-[#5a5550]">@JolupCCTV</span>
            {' · '}
            Built by{' '}
            <span className="text-[#5a5550]">@clonkbot</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
