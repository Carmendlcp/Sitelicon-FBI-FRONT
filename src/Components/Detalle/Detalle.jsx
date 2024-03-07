import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Detalle.css'

const Detalle = () => {
  const [fugitive, setFugitive] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchFugitive = async () => {
      try {
        const response = await fetch(`https://api.fbi.gov/@wanted-person/${id}`);
        const data = await response.json();
        console.log(data)
        setFugitive(data);
      } catch (error) {
        console.error("Error fetching fugitive:", error);
      }
    };

    fetchFugitive();
  }, [id]);

  return (
    <div className="detalle-container">
      {fugitive && (
        <div className="fugitive-details">
          <div className="top-container">
            <div className="left-container">
              <img src={fugitive.images[0].large} alt={fugitive.title} />
            </div>
            <div className="right-container">
              <h2>{fugitive.title}</h2>
              <ul>
                <li><strong>Sex:</strong> {fugitive.sex}</li>
                <li><strong>Age Range:</strong> {fugitive.age_range}</li>
                <li><strong>Hair:</strong> {fugitive.hair}</li>
                <li><strong>Eyes:</strong> {fugitive.eyes}</li>
              </ul>
            </div>
          </div>
          <div className="center-container">
            <h3>Details:</h3>
            <p>{fugitive.details}</p>
          </div>
          <div className="bottom-container">
            <h3>Additional Images:</h3>
            <div className="additional-images">
              {fugitive.images.slice(1).map((image, index) => (
                <img key={index} src={image.large} alt={fugitive.title} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detalle;

