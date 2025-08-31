import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PropertyListPage from './features/properties/pages/PropertyListPage';
import PropertyDetailPage from './features/properties/pages/PropertyDetailPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PropertyListPage />} />
        <Route path="/property/:id" element={<PropertyDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
