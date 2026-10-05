function SearchBar({ searchText, onSearchChange }) {
  return (
    <div className="search-wrapper">
      <label htmlFor="search">Search interns</label>
      <div className="search-input">
        <span aria-hidden="true">⌕</span>
        <input
          id="search"
          type="search"
          placeholder="Search by name or email..."
          value={searchText}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;