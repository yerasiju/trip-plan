import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import destinations from "../data/destinatioData.json";
import styles from "../styles/Destination.module.css";

const Destinations = () => {
  const [regionFilter, setRegionFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const navigate = useNavigate();

  const filteredDestinations = destinations.filter(
    (dest) =>
      (regionFilter ? dest.region === regionFilter : true) &&
      (categoryFilter ? dest.category === categoryFilter : true)
  );

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Where to Go Next?</h1>
        <p className={styles.subtitle}>
          Explore breathtaking destinations worldwide and plan your next
          adventure.
        </p>
      </header>

      <div className={styles.filters}>
        <select
          className={styles.select}
          onChange={(e) => setRegionFilter(e.target.value)}
          value={regionFilter}
        >
          <option value="">All Regions</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          {/* Add other regions */}
        </select>
        <select
          className={styles.select}
          onChange={(e) => setCategoryFilter(e.target.value)}
          value={categoryFilter}
        >
          <option value="">All Categories</option>
          <option value="City">City</option>
          {/* Add other categories */}
        </select>
      </div>

      {/* Destination Cards */}
      <ul className={styles.cardGrid}>
        {filteredDestinations.map((dest) => (
          <li
            key={dest.id}
            className={styles.card}
            onClick={() => navigate(`/destination/${dest.id}`)}
          >
            <img
              src={dest.image}
              alt={dest.name}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3>{dest.name}</h3>
              <p>{dest.description.slice(0, 60)}...</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Destinations;
