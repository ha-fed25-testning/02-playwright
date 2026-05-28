// Förslag till lösning på 2.4


function isItRaining(moistureLevel) {
  // Check if input is a number
  if (typeof moistureLevel !== "number") {
    return "Invalid moisture level";
  }

  // Value must be between 0 and 1
  if (moistureLevel < 0 || moistureLevel > 1) {
    return "Invalid moisture level";
    // Förbättringförslag: annat meddelande, så man kan skilja dem åt
  }

  return moistureLevel >= 0.8;
}

module.exports = isItRaining;