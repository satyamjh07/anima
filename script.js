// script.js
let currentEpisodeIndex = 0;
let episodeUrls = [];

function openEpisodeModal(animeId) {
  // Get the modal element and the video iframe element
  const modal = document.getElementById("episode-modal");
  const videoFrame = document.getElementById("video-frame");

  const animeEpisodes = {
    anime1: [
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=dm8wTWtNNlhJMk1VbnordHl2eDdwS1Z2UTJnUTAyYk9LMG9WZnZ4WGFWb1lmN3NLaFpxY1A4K2UvY3FocEZhQ3I4dXdTVjEyMW9GeUxJdUlOOGZDOW41YjFNSCtUSXc4eXJxanVwRktYYXdnSnFkbTY1aHhSN2FHeVdRRXVXWm5QSW1IWlBEdnc3bXBIbnNwNitNMm9tOW8xb3UwSS9OVnBJNjhjUHhISUFXR09nVTdySmdjS3F4RTgzSStQdDdxZS9KaXZUdm1NQWdMYXNGeTd3TG05WnF4OTJNUktxaGoxNnNHNmNhMGltUXBpRmNLdnp1eklQWnI2eHJOdlhJSjU1cGd0UGFSWE90QkU5NVVLY2hQZDFkSEhoc1dLRVBjMkFMcldjTFlHTGJCSXVFRTlTVHVJN0lJNlhrS1k2U1Q6fDo6fDpEV0tsWWpBYWU0Ty9RbEVHK2tFNFlnPT0=",
    ], // Add episode URLs here
    anime2: [
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=eFl1eE5MKzF5b01QSWpnaDRsM29oODNHNGtkNmpiQ20xbXVJeGZnWGd3ZTZNci9XMVA3SW9IK21EVFZkUVd1N1lnUmpDMWovOVBGYWpLOXlmcmg4bm1nNGJKaGRmS3pBN015UU1GZW1qWUFXdDJaTEdyRzZYdUEzWUg1L3dVOWVZSTJJUDhlM3F2YUp4YUJxajB3aHBWMC9NbjJlZy9DRFhPNXFUUXJFVGY3aEJJZ0IyQkxhcjNpZUtVVXZWcExWMDEvN2ZKKzlteC9nbEpXeEJJYm9LTW5FcHFsT1pvTldFUmRxaDAvOFYvOGxia3VITitoWjdPOUlZUHlJRWhtQnI2NUhYMXhpdCtoUWpod1dmT09GMmc9PTp8Ojp8OjI4UDg0K2VKNEZYY0Jrd3h1dGRwdWc9PQ==",
    ], // Add episode URLs here
    anime3: [
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=TDhrSmRGWGZVYlNSRUdpRzUxNmZwWlJoZzE1S2tZMWwvT1dyTWJ0ZWJkSllETDFYNnYvbWM4MmthaC96ZVZBZU9GKzhYZUJpRG5rdmIxOTVGM00xRC9FSmRrZjllbGx1cUZnc0Y5eGlXYllnYi9nKzhSYUlEK2hIQS9lQ3Q4M2ZjU1JCN3cyMGliU2d5dEwzVlNpQ2hXUnNBVDdSbTBVV3Qxdm02c2Yydk9Iakl5UFUwclpaSlNMRHFtbGpVcnU3NFBQMnI5a1QzcWZLeTdTVVJBSHdZR2trYm5QY3Y3QndqUWFUSVA5elhyZz06fDo6fDo3VmUwSEVaVVJMMjI4enA0Qk9taGtnPT0=",
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=NDcvSUxBOTJFU2pnNVFRU2hCN2tBSnhYM1FpUDRwWkwxSUpLQnE0N1FmUEUwSkoyTEYzV201L3lLR2tCL3puSEtIci9uYU1aRHVhdW1HNmdVcmlGdU5kZ3ZpYlNqbjNJcGtrcU13aGVNZ2dVYjU2ZEtPVWtOTnduQ2ZOdmI5MzVOWG9taUR0VmNicEhRZ3RjQ1ZiZ2VGTXlVcU9sdGdlOXFOOGF3czEwbmcxWFlqclJqUmd1a1ZpdEpiUG5QcFZURXRMcmJwOElDYkI0MmlnY1ZnSktvRDdDVXpZUW05VXJuVEJFUFZvSGU4WT06fDo6fDpBQXVjZHdWbEpMdTVib0hJTUxDTWtRPT0=",
    ], // Add episode URLs here
    anime4: [
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=QnR2aGFXYVNTTXExaGlVMVNyTzhZSWRjNElzR1FlVHYvQ1IrY3FwLzZPZmdkUDNBS2xmZ085QTZ5UXV5N2JjQ1lCa0M4K1ZxNXdFbmJUanRraVBxdDcvUktPK1g1dng2aDRMVk5BejNmVTlCOVJacEUrR0ZRcUZIM29WRlZjYjV1ZjFobmtkL2VxVlVscWt3Y0tTYlFtSWZqS1F4aWFrQmdvK1cxK0EwQmhjRDA1Y2NxNkxQL0t5T1o0RGIybVBidGcxUTFFblVGN0NCV1VUZjF6M3ZSdXdJZk56cGkrSlZqTTgxS1Bxb3hMZG4yZlpTRWFGT1FpMXNBemxJek1FSEczTVpjaXY1UXhHRERPUk50a3NyOEpIUkVJR0NWMHphZ1Jwd2syTk1oajgzOXllWEpYNGt6SklVNlVSUVg4alo6fDo6fDpLNHlUTVc3aWJNTXRSbWlncml2dGxnPT0=",
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=bHhQZG92Nmh4Y09haG9PRk9xZHl0cXUyem80RlJIK0ZhYVNyNTRDNytFSTBzT21PV1dYUlV1MDNseGN3cjd2NTJYVVJndjBLSEx3S3gySnV0Z0JZUnoxOGd0a3JPUFdmanhndWExM2xYanRwNUk4YVdXRHR0aVYxUWRkbERCcmNveTJUWEFkdm4rcmQyei91T3JlNHJPZGczcnlYRVd4NTZ3V09yZm5hQWlJYUVUKzVSMGVaZmxoOXRKTVZ3anFrWFVkUVUvQVRsYngzeE1uZzJWK2JYWFh0T0ZhaXl6bnZpNHZNVDAyNC9rVElhVUYvcDVJdWpvWGVSVVQxeTdxWkt4cXFoMDQvcVFtSEI0ZlU1RnBVejVXN0c4eUJTZElKajBkanZtREZpU3kweVZGbisvLzFYQzB0eUR2cnpoa1Y6fDo6fDovMjZ3b3ZBR1lVanFnVmowYkFUOE13PT0=",
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=N3c0amdORkFoS3N3eVFZQVNnVzY4RVNOT0dKMFI0OHJpaXEwVzEyc1pPUkNnVjgyNXd2cTN2eUswRzlSTWhvYlFRQ3p2RjJ5MlhVL0RJeHZQUjRqdXg3QVRxOU9rQ2lPVW52UG81Tm5ZVjhuS1pKa2dCS1c2emFBcTVUSjcvZ2ZYMFl1QmM2MU9DVTFBYW1nOS9BWE8vd0VzeXVYMVk3NndOQ0NSem1Ea3JnQmI2YlMyTVQ3R3V4MDhJZlRoMUxKU0pHdVM1cExqY0hPY0swWUZmODlqTHhBMENCOGI5eDhHU1pKMitsbVUvdzJFMFRJaVZCc3pnRk9CemRZRG42bUdieHFUaFdPU2FSQmZwc29wZmZ4dmxaRzB4d0gyUEE4ciswbC8yTzgrTER1YzZKN2NuLyt5YksvOUR5VDdRT1U6fDo6fDpZNlZxK1VzMnBNRkhpK2wyUVJFY3NnPT0=",
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=TlZjNlFwYTJCVnZqZGRhR2R4aGpVeDJzQ3FUMW5qWm8vMC9TSVo5ZWtZNEJ6TStjaXJSWVhtZHhWNVFjWUkxbFllSlBPNXYwSnBzT3ExVUFzcVZmcExrNndwTEJ3dEZ5bGdabm9JZGxERkRtczdNT0dXZHZyT3N1QTUxWUJjZzhUTEM3T3hoYkV4eThrK1B5WFFsQzVxdmM2U0hxdW4yd3hqUFNjVHJVeFJRcExMOGdScGcwRmxsZnE1MlZrWk8zZFF3OUs4a1k3cW4xdUtZWHMzcFZsRnB0RHI5YVF4cXRWQy9ZZVNSeEMyV0dZZ2s0OFBMaWIydW5IWTRFWFE0UDVkV1VaSklpb09xWFVidVlJZUt0NUwrWUpldkJlWFZEWmpIWGpmeEhIZEFOUDVDYkRLeTEyMEVzQStoOEdYYnQ6fDo6fDpmbzd4MnZrUUJVbEcxVnRPY1FCbjBBPT0=",
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=ZW16dDZ5YTVPSkhxdTdxVmNFYTFPNDEveUtpc0p6S2VYYjE4MGJELzJzTDVRdUxXUDU4NDJOL0hUVFovMTF4QWE4cHdjRkdYQ1Y1RzI4dUlSN0FUTFdqTURKdEp4cjNsS1E4TDU3aTdoVG9CNmliVXYwczF4WG9lRWVMeHhUZzRZL2twa292ZHY0TU9EeDdmckNtTG9yVVZHNGJSZ3NqZXgyN2x3VXE0dFVXUmZxQXJwZWRSRWZ0Snhnb2JJa1AzM09OUnV6blZOYWUzMHBNWUF6R3dld1h4ME9sOEdERlNkd3pWR0loNC9CSGRZSHRuZStaOU9SR3NvYnFXTTRTK1FTV01mSnBlci83TGpWMlF0eHFxMmtkdWdQYW9SNy9JdmQ4YitKODFjenBxZTBlWUluaUZVUzFlMHordHZBU0g6fDo6fDpWWnBicG5OV3VJbytwdDZFSm1iUFpBPT0=",
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=eTgvdy9DbTBEZ3IvK0dqMEVFbHJlUmdxVjV3UUdIU3NNSHZUVHh1VEZNemdZc2NqU2dJMXRDTlBXTUFpQWtOL08vVk8rWFdUY1V2VktFYUhGUkcxZXRsZjVOcWlRU3BTeGd6SXlCRjl4MzMrUXIyVWNCWjRqN0x5UjNOc0pEbVRwSFNzV0RwUU43dGwvaUsrNnlaS3dkRWFEbWtjUEw4WTc5czhGSEJ6R2xpSXdvamVVOHpWRjA2WW1BOCtWV3FRSFZua2RPd1ViZExPWCt0T0U5UXBIbHcyOUxvbVh2VUZmZkpJcldtNEF3SEE5bFlJemFRY2hWY0ZDWFlEKzgzK3lIbm5ObFM0Ykh6eEdMeDFyUDVRQzc3Z1VqWlR2V0NIb1FPeHljY0VaNXdQQnQvWXBtaFIwem1qY003Q0VBSlI6fDo6fDppRTNwSmIwdWlIV1dSc2dmV0w0akpRPT0=",
    ], // Add episode URLs here
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
