import React from "react";

const Location = () => {
  // Coordinates of your medical shop
  const latitude = 123.456;
  const longitude = -78.910;

  // Function to open Google Maps with the coordinates
  const openGoogleMaps = () => {
    window.open(`https://www.google.com/maps?q=${28.632430},${77.218790}`, "_blank");
  };

  return (
    <div>
      <h2>Visit Our Medical Shop</h2>
      <p>Address: 123 Medical Street, City, Country</p>
      <button onClick={openGoogleMaps}>View Map</button>
    </div>
  );
};

export default Location;
