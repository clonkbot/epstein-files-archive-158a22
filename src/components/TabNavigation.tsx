import React from 'react';
import { Category, Document } from '../data/documents';

interface TabNavigationProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  documents: Document[];
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
  documents,
}) => {
  const getDocumentCount = (categoryId: string) => {
    if (categoryId === 'all') return documents.length;
    return documents.filter(doc => doc.category === categoryId).length;
  };

  return (
    <nav className="relative mt-8 mb-6">
      <div className="flex flex-wrap gap-1">
        {categories.map((category, index) => {
          const isActive = activeCategory === category.id;
          const count = getDocumentCount(category.id);

          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                relative group px-4 py-3 font-mono text-xs tracking-wider uppercase
                transition-all duration-200 border-t border-l border-r
                ${isActive
                  ? 'bg-[#1a1a1a] text-[#d4a500] border-[#2a2520] -mb-px z-10'
                  : 'bg-[#0f0f0f] text-[#5a5550] border-[#1a1a1a] hover:text-[#8a8580] hover:bg-[#141414]'
                }
              `}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <span className="relative">
                {category.name}
                <span className={`
                  ml-2 px-1.5 py-0.5 text-[0.6rem] rounded-sm
                  ${isActive ? 'bg-[#d4a500]/20 text-[#d4a500]' : 'bg-[#1a1a1a] text-[#5a5550]'}
                `}>
                  {count}
                </span>
              </span>

              {isActive && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d4a500]" />
              )}
            </button>
          );
        })}
      </div>

      <div className="border-b border-[#2a2520]" />
    </nav>
  );
};
