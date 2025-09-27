import React from 'react';
import CheckBox from '@/components/ui/checkbox';

const FilterGroup = ({ title, items, selectedItems, onFilterChange }) => (
  <div className="border border-gray-200 rounded-lg p-4 bg-gray-50/50">
    <h4 className="font-semibold text-gray-700 text-sm mb-3">{title}</h4>
    <div className="flex items-center gap-x-4 flex-wrap">
      {items.map(item => (
        <div key={item} className="flex items-center">
          <CheckBox
            checked={selectedItems.includes(item)}
            onClick={() => onFilterChange(item)}
            size={16}
          />
          <label
            htmlFor={item}
            className="ml-2 text-sm text-gray-600 cursor-pointer whitespace-nowrap"
            onClick={() => onFilterChange(item)}
          >
            {item}
          </label>
        </div>
      ))}
    </div>
  </div>
);

const FiltroCursos = ({ filters, setFilters, categories, modalities }) => {
  const handleCategoryChange = (category) => {
    setFilters(prev => {
      const newCategories = prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category];
      return { ...prev, categories: newCategories };
    });
  };

  const handleModalityChange = (modality) => {
    setFilters(prev => {
      const newModalities = prev.modalities.includes(modality)
        ? prev.modalities.filter(m => m !== modality)
        : [...prev.modalities, modality];
      return { ...prev, modalities: newModalities };
    });
  };

  const clearFilters = () => {
    setFilters({ categories: [], modalities: [] });
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border border-gray-100">
      <div className="flex flex-col lg:flex-row gap-6 lg:items-start">
        <FilterGroup
          title="CATEGORIA"
          items={categories}
          selectedItems={filters.categories}
          onFilterChange={handleCategoryChange}
        />
        <FilterGroup
          title="MODALIDADE"
          items={modalities}
          selectedItems={filters.modalities}
          onFilterChange={handleModalityChange}
        />
        <div className="flex lg:items-center lg:mt-8">
          <button
              onClick={clearFilters}
              className="px-4 py-2 text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-all duration-200 text-sm font-medium"
          >
              Limpar Filtros
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltroCursos;
