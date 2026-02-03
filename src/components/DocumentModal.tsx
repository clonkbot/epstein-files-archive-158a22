import React, { useEffect } from 'react';
import { Document } from '../data/documents';

interface DocumentModalProps {
  document: Document;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ document, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.document.body.classList.add('overflow-hidden');
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const getRedactionStyle = (level: string) => {
    switch (level) {
      case 'heavily':
        return { label: 'HEAVILY REDACTED', color: '#c41e3a', bg: 'rgba(196, 30, 58, 0.1)' };
      case 'partial':
        return { label: 'PARTIALLY REDACTED', color: '#d4a500', bg: 'rgba(212, 165, 0, 0.1)' };
      default:
        return { label: 'DECLASSIFIED', color: '#22c55e', bg: 'rgba(34, 197, 94, 0.1)' };
    }
  };

  const redaction = getRedactionStyle(document.redactionLevel);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0f0f0f] border border-[#2a2520] animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-[#0f0f0f] border-b border-[#2a2520] p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-[0.6rem] tracking-wider px-2 py-1 border"
              style={{ color: redaction.color, borderColor: redaction.color, background: redaction.bg }}
            >
              {redaction.label}
            </span>
            <span className="font-mono text-xs text-[#5a5550]">{document.documentId}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-[#5a5550] hover:text-[#e8e4dd] hover:bg-[#1a1a1a] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <h2 className="font-mono text-xl font-bold text-[#e8e4dd] mb-2">
            {document.title}
          </h2>

          <div className="flex flex-wrap gap-4 text-xs font-mono text-[#5a5550] mb-6">
            <div>
              <span className="text-[#3a3530]">RELEASED:</span>{' '}
              {new Date(document.releaseDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div>
              <span className="text-[#3a3530]">PAGES:</span> {document.pages}
            </div>
            <div>
              <span className="text-[#3a3530]">SOURCE:</span> {document.source}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-mono text-xs text-[#d4a500] tracking-wider mb-3">SUMMARY</h3>
            <p className="text-[#8a8580] font-serif leading-relaxed">
              {document.summary}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-mono text-xs text-[#d4a500] tracking-wider mb-3">KEY CONTENT</h3>
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-4 font-serif text-sm text-[#8a8580] leading-relaxed">
              {document.content}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-mono text-xs text-[#d4a500] tracking-wider mb-3">
              INDIVIDUALS MENTIONED ({document.individuals.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {document.individuals.map((individual) => (
                <span
                  key={individual}
                  className="font-mono text-xs px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2520] text-[#8a8580] hover:border-[#d4a500]/50 hover:text-[#d4a500] transition-colors cursor-default"
                >
                  {individual}
                </span>
              ))}
            </div>
          </div>

          {document.keyDates && document.keyDates.length > 0 && (
            <div>
              <h3 className="font-mono text-xs text-[#d4a500] tracking-wider mb-3">KEY DATES</h3>
              <div className="space-y-2">
                {document.keyDates.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm">
                    <span className="font-mono text-xs text-[#5a5550] shrink-0 w-24">
                      {item.date}
                    </span>
                    <span className="text-[#8a8580] font-serif">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-[#2a2520] p-4 bg-[#0a0a0a]">
          <p className="font-mono text-[0.65rem] text-[#3a3530] text-center">
            This document is part of publicly released court records. All information displayed
            is from official government releases and court filings.
          </p>
        </div>
      </div>
    </div>
  );
};
