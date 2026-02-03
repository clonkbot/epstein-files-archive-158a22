import React from 'react';
import { Document } from '../data/documents';

interface DocumentCardProps {
  document: Document;
  index: number;
  onClick: () => void;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({ document, index, onClick }) => {
  const getRedactionLevel = (level: string) => {
    switch (level) {
      case 'heavily':
        return { label: 'HEAVILY REDACTED', color: '#c41e3a' };
      case 'partial':
        return { label: 'PARTIALLY REDACTED', color: '#d4a500' };
      default:
        return { label: 'DECLASSIFIED', color: '#22c55e' };
    }
  };

  const redaction = getRedactionLevel(document.redactionLevel);

  return (
    <article
      className="document-card cursor-pointer group"
      onClick={onClick}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className="stamp"
        style={{ color: redaction.color, borderColor: redaction.color }}
      >
        {redaction.label}
      </div>

      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-[#1a1a1a] border border-[#2a2520] flex items-center justify-center group-hover:border-[#d4a500]/50 transition-colors">
          <svg className="w-6 h-6 text-[#5a5550] group-hover:text-[#d4a500] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>

        <div className="flex-1 min-w-0 pr-24">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[0.65rem] text-[#5a5550] tracking-wider">
              {document.documentId}
            </span>
            <span className="text-[#2a2520]">•</span>
            <span className="font-mono text-[0.65rem] text-[#5a5550]">
              {new Date(document.releaseDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
          </div>

          <h3 className="font-mono text-base font-semibold text-[#e8e4dd] mb-2 group-hover:text-[#d4a500] transition-colors">
            {document.title}
          </h3>

          <p className="text-sm text-[#8a8580] mb-4 line-clamp-2 font-serif">
            {document.summary}
          </p>

          <div className="flex flex-wrap gap-1">
            {document.individuals.slice(0, 5).map((individual) => (
              <span key={individual} className="individual-tag">
                {individual}
              </span>
            ))}
            {document.individuals.length > 5 && (
              <span className="individual-tag text-[#d4a500]">
                +{document.individuals.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#d4a500]/0 via-[#d4a500]/20 to-[#d4a500]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
    </article>
  );
};
