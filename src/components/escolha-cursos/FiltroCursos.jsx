const FiltroCursos = ({ filters, setFilters, categories, modalities }) => {
  const handleCheckboxChange = (filterType, value) => {
    setFilters(prevFilters => {
      const newValues = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter(v => v !== value)
        : [...prevFilters[filterType], value];
      return { ...prevFilters, [filterType]: newValues };
    });
  };

  const clearFilters = () => {
    setFilters({ categories: [], modalities: [] });
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md" style={{border: '1px solid #eee'}}>
      <h3 className="text-xl font-bold mb-4" style={{color: 'var(--primary-color)'}}>Filtre por</h3>
      
      <div className="form-group">
        <h4 className="font-semibold mb-2" style={{color: 'var(--primary-color)'}}>Categoria</h4>
        {categories.map(cat => (
          <div key={cat} className="flex items-center my-2">
            <input
              type="checkbox"
              id={cat}
              value={cat}
              checked={filters.categories.includes(cat)}
              onChange={() => handleCheckboxChange('categories', cat)}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor={cat} className="ml-3 text-sm text-gray-600">{cat}</label>
          </div>
        ))}
      </div>

      <div className="form-group mt-6">
        <h4 className="font-semibold mb-2" style={{color: 'var(--primary-color)'}}>Modalidade</h4>
        {modalities.map(mod => (
          <div key={mod} className="flex items-center my-2">
            <input
              type="checkbox"
              id={mod}
              value={mod}
              checked={filters.modalities.includes(mod)}
              onChange={() => handleCheckboxChange('modalities', mod)}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor={mod} className="ml-3 text-sm text-gray-600">{mod}</label>
          </div>
        ))}
      </div>

       <button 
        onClick={clearFilters}
        className="w-full mt-6 btn-page-action btn-secondary"
        style={{fontSize: '0.9rem', padding: '0.8rem'}}
      >
        Limpar Filtros
      </button>
    </div>
  );
};

export default FiltroCursos;
