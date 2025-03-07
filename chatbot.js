function playSongBasedOnEmotion(emotion) {
  if (emotion === "angry") {
    // Play an "angry" mood song
    moody(0);
  } else if (emotion === "happy") {
    // Play a "happy" mood song
    moody(1);
  } else if (emotion === "sad") {
    // Play a "sad" mood song
    moody(2);
  } else if (emotion === "neutral") {
    // Play a "neutral" mood song
    moody(3);
  } else {
    // Handle unrecognized emotions
    console.log("Unrecognized emotion: " + emotion);
  }
}
