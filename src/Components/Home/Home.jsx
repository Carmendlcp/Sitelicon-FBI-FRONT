import React, { useState, useEffect } from "react";
import FBI from "../../Api/FBI.js";
import './Home.css';
import Pagination from "../../Core/Paginacion.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const [fugitives, setFugitives] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchFugitives = async () => {
      try {
        const data = await FBI.getFugitives();
        setFugitives(data.items);
        setTotalPages(Math.ceil(data.items.length / 12)); 
      } catch (error) {
        console.error("Error fetching fugitives:", error);
      }
    };

    fetchFugitives();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFugitives = fugitives.filter((fugitive) =>
    fugitive.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

   const startIndex = (currentPage - 1) * 12;
   const endIndex = startIndex + 12;
   const currentFugitives = filteredFugitives.slice(startIndex, endIndex);
 
   const goToNextPage = () => {
     setCurrentPage((prevPage) => prevPage + 1);
   };
 
   const goToPrevPage = () => {
     setCurrentPage((prevPage) => prevPage - 1);
   };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={searchTerm}
        onChange={handleSearch}
        className="search-filter"
      />
      <ul className="fugitives-list">
  {currentFugitives.map((fugitive) => (
    <li key={fugitive.uid} className="fugitive-item">
    <Link to={`/fugitives/${fugitive.uid}`}>
      <img src={fugitive.images[0].large} alt={fugitive.title} />
      </Link>
      <p className="fugitive-title">{fugitive.title}</p>
      
    </li>
  ))}
</ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={goToNextPage}
        onPrevPage={goToPrevPage}
      />
    </div>
  );
};

export default Home;


