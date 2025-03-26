import React, { useState } from 'react';
import './SearchSection.css'; // Make sure to create this CSS file

function SearchSection() {
  const [query, setQuery] = useState('');
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/notes?search=' + encodeURIComponent(query));
      const data = await response.json();
      console.log("Search response data:", data);
      
      // Check if data is an array
      if (Array.isArray(data)) {
        setNotes(data);
      } else if (data && Array.isArray(data.notes)) {
        setNotes(data.notes);
      } else if (data && Array.isArray(data.result)) {
        setNotes(data.result);
      } else {
        console.error("Unexpected response format:", data);
        setNotes([]);
      }
    } catch (error) {
      console.error("Error during search:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const renderNote = (note) => {
    if (note.includes("Restricted file:")) {
      return (
        <li key={note} className="search-item restricted">
          <span className="file-name">
            <i className="alert-icon"></i> {note}
          </span>
        </li>
      );
    } else {
      return (
        <li key={note} className="search-item">
          <span className="file-name">{note}</span>
          <a
            className="download-link"
            href={`http://localhost:8080/api/notes/download/${encodeURIComponent(note)}`}
            download={note}
          >
            Download
          </a>
        </li>
      );
    }
  };

  return (
    <section className="search-section">
      <h2 className="search-title">Search Files</h2>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter file name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      
      {loading ? (
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <ul className="search-results">
          {notes.map((note) => renderNote(note))}
        </ul>
      )}
    </section>
  );
}

export default SearchSection;
