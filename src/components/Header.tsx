import React from 'react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="relative border-b border-[#2a2520] bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#d4a500] animate-pulse" />
              <span className="font-mono text-[0.65rem] tracking-[0.3em] text-[#8a8580] uppercase">
                Public Records Archive
              </span>
            </div>
            <h1 className="font-mono text-3xl md:text-4xl font-bold tracking-tight text-[#e8e4dd]">
              EPSTEIN FILES
            </h1>
            <p className="text-[#8a8580] text-sm max-w-lg font-serif italic">
              A comprehensive archive of publicly released court documents, flight logs,
              and depositions from the Jeffrey Epstein cases.
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
              <svg
                className="w-4 h-4 text-[#5a5550]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search documents, names..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111111] border border-[#2a2520] text-[#e8e4dd]
                         placeholder-[#5a5550] py-3 pl-11 pr-4 font-mono text-sm
                         focus:outline-none focus:border-[#d4a500] focus:ring-1 focus:ring-[#d4a500]/20
                         transition-all duration-200"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-[0.7rem] font-mono text-[#5a5550] tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-600" />
            <span>DECLASSIFIED</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#d4a500]" />
            <span>PARTIALLY REDACTED</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#c41e3a]" />
            <span>HEAVILY REDACTED</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a500]/30 to-transparent" />
    </header>
  );
};
