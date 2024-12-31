// script.js
let currentEpisodeIndex = 0;
let episodeUrls = [];

function openEpisodeModal(animeId) {
    // Get the modal element and the video iframe element
    const modal = document.getElementById("episode-modal");
    const videoFrame = document.getElementById("video-frame");

    // Define episode data for each anime (replace with actual data)
    const animeEpisodes = {
        "anime1": ["Episode 1 URL"], // Add episode URLs here
        "anime2": ["Episode 1 URL"], // Add episode URLs here
        "anime3": ["Episode 1 URL", "Episode 2 URL"], // Add episode URLs here
        "anime4": ["Episode 1 URL", "Episode 2 URL", "Episode 3 URL", "Episode 4 URL", "Episode 5 URL", "Episode 6 URL"], // Add episode URLs here
    };

    // Get the episode data for the selected anime
    const episodes = animeEpisodes[animeId];

    // Set the episodeUrls array to the episodes of the selected anime
    episodeUrls = episodes;

    // Display the list of episodes in the modal
    displayEpisodeList(episodes);

    // Show the modal
    modal.style.display = "block";
}

function closeEpisodeModal() {
    // Get the modal element
    const modal = document.getElementById("episode-modal");

    // Clear the episode list and hide the modal
    const episodeList = document.getElementById("episode-list");
    episodeList.innerHTML = "";
    modal.style.display = "none";
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
