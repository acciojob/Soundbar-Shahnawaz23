//your JS code here. If required.
// Sounds array
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// Function to stop all playing sounds
function stopSounds() {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound);
    if (audio) {
      audio.pause();
      audio.currentTime = 0; // Reset playback to the beginning
    }
  });
}

// Create audio elements dynamically
sounds.forEach((sound) => {
  const audio = document.createElement("audio");
  audio.id = sound;
  audio.src = `./sounds/${sound}.mp3`;
  document.body.appendChild(audio);
});

// Add event listeners to buttons
document.getElementById("buttons").addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("btn")) {
    // Stop all sounds before playing the new one
    stopSounds();

    // Play the selected sound
    const sound = target.getAttribute("data-sound");
    const audio = document.getElementById(sound);
    if (audio) {
      audio.play();
    }
  } else if (target.classList.contains("stop")) {
    // Stop button clicked
    stopSounds();
  }
});
