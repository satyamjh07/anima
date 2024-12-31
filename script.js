let currentEpisodeIndex = 0;
let episodeUrls = [];

// Function to open the episode modal
function openEpisodeModal(animeId) {
  // Map of anime IDs to their episode URLs
  const animeEpisodes = {
    anime1: [
      "https://hentaibar.com/embed/1222",
      "https://hentaibar.com/embed/1223",
      "https://hentaibar.com/embed/1224",
      "https://hentaibar.com/embed/1225",
    ],
    anime2: [
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=eFl1eE5MKzF5b01Q...",
    ],
    anime3: [
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=TDhrSmRGWGZVYlN...",
    ],
    anime4: [
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=QnR2aGFXYVNTTX...",
    ],
    anime5: [
      "https://hentaibar.com/embed/679",
      "https://hentaibar.com/embed/680",
      "https://hentaibar.com/embed/681",
      "https://hentaibar.com/embed/682",
    ],
    anime6: [
      "https://hentaibar.com/embed/1010",
      "https://hentaibar.com/embed/1011",
    ],
    anime7: [
      "https://hentaibar.com/embed/405",
      "https://hentaibar.com/embed/406",
      "https://hentaibar.com/embed/407",
      "https://hentaibar.com/embed/408",
    ],
    anime8: [
      "https://hentaihaven.com/wp-content/plugins/player-logic/player.php?data=dTJBWDUxbStXbn...",
    ],
  };

  // Validate animeId and get episodes
  if (!animeEpisodes[animeId]) {
    console.error("Invalid anime ID provided!");
    return;
  }

  episodeUrls = animeEpisodes[animeId];
  currentEpisodeIndex = 0;

  // Display the modal and load the first episode
  const modal = document.getElementById("episode-modal");
  const videoFrame = document.getElementById("video-frame");
  modal.style.display = "block";
  videoFrame.src = episodeUrls[currentEpisodeIndex];
}

// Function to load the next episode
function loadNextEpisode() {
  if (currentEpisodeIndex < episodeUrls.length - 1) {
    currentEpisodeIndex++;
    document.getElementById("video-frame").src = episodeUrls[currentEpisodeIndex];
  } else {
    alert("This is the last episode.");
  }
}

// Function to load the previous episode
function loadPreviousEpisode() {
  if (currentEpisodeIndex > 0) {
    currentEpisodeIndex--;
    document.getElementById("video-frame").src = episodeUrls[currentEpisodeIndex];
  } else {
    alert("This is the first episode.");
  }
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("episode-modal");
  const videoFrame = document.getElementById("video-frame");
  modal.style.display = "none";
  videoFrame.src = ""; // Reset video source
}

function openPlayerModal() {
  // Get the player modal element and the video iframe element
  const playerModal = document.getElementById("player-modal");
  const videoFrame = document.getElementById("video-frame");

  // Set the iframe source to the selected episode URL
  videoFrame.src = episodeUrls[currentEpisodeIndex];

  // Show the player modal on the whole screen
  playerModal.style.display = "block";
  document.body.style.overflow = "hidden"; // Disable scrolling on the background content
}

function closePlayerModal() {
  // Get the player modal element and the video iframe element
  const playerModal = document.getElementById("player-modal");
  const videoFrame = document.getElementById("video-frame");

  // Clear the iframe source and hide the player modal
  videoFrame.src = "";
  playerModal.style.display = "none";
  document.body.style.overflow = "auto"; // Enable scrolling on the background content
}

// Function to display the list of episodes
function displayEpisodeList(episodes) {
  const episodeList = document.getElementById("episode-list");
  episodeList.innerHTML = ""; // Clear previous episode list

  episodes.forEach((episodeUrl, index) => {
    const episodeCard = document.createElement("div");
    episodeCard.classList.add("episode-card");
    episodeCard.textContent = `Episode ${index + 1}`;
    episodeCard.addEventListener("click", () => loadEpisode(index));
    episodeList.appendChild(episodeCard);
  });
}

// Function to load a specific episode
function loadEpisode(index) {
  currentEpisodeIndex = index;
  openPlayerModal();
}

const togglemode = () => {
  const toggle = document.getElementById("dark-mode");
  const animecard = document.getElementById("card");
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "#1a1a1a";
    toggle.innerHTML = "Light Mode";
    animecard.style.backgroundColor = "gray";
  } else {
    toggle.innerHTML = "Dark Mode";
    document.body.style.backgroundColor = "white";
    animecard.style.backgroundColor = "red";
  }
};
function toggleOwnerSection() {
  var ownerSection = document.getElementById("ownerSection");
  var body = document.body;

  if (
    ownerSection.style.display === "none" ||
    ownerSection.style.display === ""
  ) {
    ownerSection.style.display = "flex";
    body.style.overflow = "hidden"; // Hide the scrollbar
  } else {
    ownerSection.style.display = "none";
    body.style.overflow = "auto"; // Reset to show the scrollbar
  }
}
