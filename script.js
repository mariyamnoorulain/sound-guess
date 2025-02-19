// List of sounds (replace with your own sound files)
const sounds = [
  { name: "rain", file: "sound/45220__digifishmusic__rain-on-paving-increases-after-thunder.mp3" },
  { name: "bird", file: "sound/167926__ginerantoni1__turdusmerula.mp3" },
  { name: "drum", file: "sound/211148__unfa__acoustic-drums-rock-bossa-nova-mp3.mp3" },
  { name: "baby", file: "sound/458645__jamesmbock__babygiggle.mp3" },
  { name: "lion", file: "sound/567803__iut_paris8__poujade_eva_2020_2021_roaroflionson2.wav" },
  { name: "dog", file: "sound/608732__yunjish__pomeranian-small-dog-barking.mp3" },
  { name: "guitar", file: "sound/guitar.mp3" },
  { name: "piano", file: "sound/piano.wav" },
  { name: "afsos", file: "sound/AFSOS.mp3" },
  { name: "levitating", file: "sound/levitating.mp3" },
  { name: "wavy", file: "sound/Wavy.mp3" },
  { name: "pehli dafa", file: "sound/Pehli Dafa.mp3" },

  { name: "departure lane", file: "sound/departure lane.mp3" },
  
  
];

let currentSound = null;
let currentAudio = null; // To track the currently playing audio
let score = 0;

// Function to play a random sound
function playRandomSound() {
  const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
  currentSound = randomSound;

  // Stop the previous audio if it's playing
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0; // Reset audio to the start
  }

  // Play the new sound
  currentAudio = new Audio(randomSound.file);
  currentAudio.play().catch((error) => {
    console.error("Error playing sound:", error);
    alert("Click the button again to play the sound.");
  });
}

// Play a random sound when the button is clicked
document.getElementById("play-sound").addEventListener("click", () => {
  playRandomSound();
});

// Submit guess
document.getElementById("submit-guess").addEventListener("click", () => {
  const guess = document.getElementById("guess-input").value.trim();

  if (guess.toLowerCase() === currentSound.name.toLowerCase()) {
    document.getElementById("feedback").textContent = "Correct!";
    score++;
    document.getElementById("score").textContent = score;

    // Stop the current sound
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0; // Reset audio to the start
    }

    // Play the next sound
    playRandomSound();
  } else {
    // If the guess is incorrect
    document.getElementById("feedback").textContent = `Incorrect! The correct answer was "${currentSound.name}".`;

    // Stop the current sound
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0; // Reset audio to the start
    }

    // Play the next sound
    playRandomSound();
  }

  // Clear the input field
  document.getElementById("guess-input").value = "";
});