import React from "react";
import { useParams } from "react-router-dom";
import destinations from "../data/destinatioData.json";

import styles from "./DetailsOfDestination.module.css";

const DetailsOfDestination = () => {
  const { id } = useParams();
  const destination = destinations.find((dest) => dest.id === parseInt(id));

  if (!destination) {
    return <div className={styles.notFound}>Destination not found.</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{destination.name}</h1>
        <p>
          {destination.region} - {destination.category}
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={destination.image} alt={destination.name} />
      </div>
      <div className={styles.details}>
        <h2>About {destination.name}</h2>
        <p>{destination.description}</p>
      </div>
      <div className={styles.attractions}>
        <h3>Top Attractions</h3>
        <ul>
          {destination.attractions.map((attraction, index) => (
            <li key={index}>{attraction}</li>
          ))}
        </ul>
      </div>
      <a href="/destinations" className={styles.backButton}>
        Back to Destinations
      </a>
    </div>
  );
};

export default DetailsOfDestination;

//With API from Nurdos

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import styles from "./DetailsOfDestination.module.css";

// const DetailsOfDestination = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [destination, setDestination] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDestination = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`https:/API/destinations/${id}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch destination details.");
//         }
//         const data = await response.json();
//         setDestination(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDestination();
//   }, [id]);

//   if (loading) {
//     return <div className={styles.container}>Loading destination details...</div>;
//   }

//   if (error) {
//     return <div className={styles.container}>Error: {error}</div>;
//   }

//   if (!destination) {
//     return <div className={styles.notFound}>Destination not found.</div>;
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <h1>{destination.name}</h1>
//         <p>
//           {destination.region} - {destination.category}
//         </p>
//       </div>
//       <div className={styles.imageContainer}>
//         <img src={destination.image} alt={destination.name} />
//       </div>
//       <div className={styles.details}>
//         <h2>About {destination.name}</h2>
//         <p>{destination.description}</p>
//       </div>
//       <div className={styles.attractions}>
//         <h3>Top Attractions</h3>
//         <ul>
//           {destination.attractions.map((attraction, index) => (
//             <li key={index}>{attraction}</li>
//           ))}
//         </ul>
//       </div>
//       <button onClick={() => navigate("/destinations")} className={styles.backButton}>
//         Back to Destinations
//       </button>
//     </div>
//   );
// };

// export default DetailsOfDestination;
