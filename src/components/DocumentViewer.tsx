import React, { useState } from 'react';
import { Document } from '../data/documents';
import { DocumentCard } from './DocumentCard';
import { DocumentModal } from './DocumentModal';

interface DocumentViewerProps {
  documents: Document[];
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({ documents }) => {
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');

  const sortedDocuments = [...documents].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
    }
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <p className="font-mono text-xs text-[#5a5550] tracking-wider">
          <span className="text-[#d4a500]">{documents.length}</span> DOCUMENTS FOUND
        </p>

        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-[#5a5550]">SORT:</span>
          <button
            onClick={() => setSortBy('date')}
            className={`font-mono text-xs px-2 py-1 transition-colors ${
              sortBy === 'date'
                ? 'text-[#d4a500] bg-[#d4a500]/10'
                : 'text-[#5a5550] hover:text-[#8a8580]'
            }`}
          >
            DATE
          </button>
          <button
            onClick={() => setSortBy('title')}
            className={`font-mono text-xs px-2 py-1 transition-colors ${
              sortBy === 'title'
                ? 'text-[#d4a500] bg-[#d4a500]/10'
                : 'text-[#5a5550] hover:text-[#8a8580]'
            }`}
          >
            TITLE
          </button>
        </div>
      </div>

      {sortedDocuments.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 mb-4 border-2 border-dashed border-[#2a2520] flex items-center justify-center">
            <svg className="w-8 h-8 text-[#5a5550]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="font-mono text-sm text-[#5a5550]">NO MATCHING DOCUMENTS</p>
          <p className="text-xs text-[#3a3530] mt-2">Try adjusting your search or category filter</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {sortedDocuments.map((doc, index) => (
            <DocumentCard
              key={doc.id}
              document={doc}
              index={index}
              onClick={() => setSelectedDoc(doc)}
            />
          ))}
        </div>
      )}

      {selectedDoc && (
        <DocumentModal
          document={selectedDoc}
          onClose={() => setSelectedDoc(null)}
        />
      )}
    </div>
  );
};
