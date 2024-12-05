import React, { useState } from "react";
import Weather from "../components/Weather";
import styles from "../styles/Planner.module.css";

const Planner = () => {
  const [itinerary, setItinerary] = useState([]);
  const [destination, setDestination] = useState("");
  const [activity, setActivity] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addItineraryItem = async () => {
    if (!destination || !activity || !date) {
      alert("All fields are required!");
      return;
    }

    const newItem = { destination, activity, date };

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://6750aba069dc1669ec1bf354.mockapi.io/plan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to plan a trip!");
      }

      const addedItem = await response.json();
      setItinerary([...itinerary, addedItem]);

      setDestination("");
      setActivity("");
      setDate("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const removeItineraryItem = async (index) => {
    const itemToRemove = itinerary[index];

    try {
      const response = await fetch(
        `https://6750aba069dc1669ec1bf354.mockapi.io/plan/${itemToRemove.id}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error("Failed to remove itinerary item");
      }

      const updatedItinerary = itinerary.filter((item, i) => i !== index);
      setItinerary(updatedItinerary);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <section>
        <div className={styles.container}>
          <div className={styles.conImage}>
            <img src="/src/assets/images/11.jpg" alt="Explore" />
          </div>
          <div className={styles.conText}>
            <h1>Plan your trip!</h1>
            <p>
              Discover the world's hidden gems just waiting for you to explore.
              Whether you're seeking the serenity of mountain peaks, the vibrant
              energy of bustling cities, or the tranquility of pristine beaches,
              adventure is calling. Let us help you find your perfect
              destination and turn your dream getaway into reality. The beauty
              of the world is closer than you think — are you ready to take the
              first step?
            </p>
          </div>
        </div>
      </section>
      <section className={styles["weather-section"]}>
        <Weather />
      </section>

      <div id={styles.planner}>
        <h1>Trip Planner</h1>

        <div className={styles["form-container"]}>
          <input
            type="text"
            placeholder="Enter Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            onClick={addItineraryItem}
            className={styles["add-btn"]}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <ul className={styles["itinerary-list"]}>
          {itinerary.map((item, index) => (
            <li key={index} className={styles["itinerary-item"]}>
              <span>
                {item.destination} - {item.activity} on {item.date}
              </span>
              <button
                onClick={() => removeItineraryItem(index)}
                className={styles["remove-btn"]}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Planner;
