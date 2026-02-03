import { useState } from 'react';
import { TabNavigation } from './components/TabNavigation';
import { DocumentViewer } from './components/DocumentViewer';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { documents, categories } from './data/documents';
import './styles.css';

function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.individuals.some(ind => ind.toLowerCase().includes(searchQuery.toLowerCase())) ||
      doc.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="app-container">
      <div className="noise-overlay" />
      <div className="scanline" />

      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="main-content">
        <TabNavigation
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          documents={documents}
        />

        <DocumentViewer documents={filteredDocuments} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
