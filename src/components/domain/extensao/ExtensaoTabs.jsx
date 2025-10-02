const ExtensaoTabs = ({ tabs, activeTab, onTabSelect }) => {
  return (
    <div className="tabs-container" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`tab-link ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabSelect(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ExtensaoTabs;
