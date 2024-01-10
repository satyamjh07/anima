// script.js
let currentEpisodeIndex = 0;
let episodeUrls = [];

function openEpisodeModal(animeId) {
  // Get the modal element and the video iframe element
  const modal = document.getElementById("episode-modal");
  const videoFrame = document.getElementById("video-frame");

  const animeEpisodes = {
    anime1: [
      "https://hentaibar.com/embed/1222",
      "https://hentaibar.com/embed/1223",
      "https://hentaibar.com/embed/1224",
      "https://hentaibar.com/embed/1225",
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
    anime5: [
      "https://hentaibar.com/embed/679",
      "https://hentaibar.com/embed/680",
      "https://hentaibar.com/embed/681",
      "https://hentaibar.com/embed/682",
    ], // Add episode URLs here
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
      "https://hentaihaven.com/wp-content/plugins/player-logic/player.php?data=dTJBWDUxbStXbnNWeTBIZk1wdWJIWHd6Z2F6ZDgwNnNNKzdxUmN0eXZnOWVwYWZCUld1YmtISWVWL0hZazVDdzQ2dWlUSmFHemJCOVAzNDQzQURHREdDZ0drRmVkU1hsQVd2VjRpVGJRUGVQdFRzRHlvb2xPSVA3Q05TUmpBQ2loSTQ1Nmx2VENqVmNQb05OdnZpbDRoNTdwMmIwRXRYWjFTUGZZeHNzOUFET3JpRm1CRjhLMTlJWmozVUFLSWRJeXlIMTI3dmlTNWhLRTF5Q0hQemdJUDBLTmZCcXkyU0k2elBHNEV3dmk1bU5TMmNtYlJSTFF5bXpQZDdVRGtRM0tzYTcyaHhidEtwcWhGTS80MnNmY1E9PTp8Ojp8OnpYa0NXUDgwY08vV1BZS2E3cmI4eXc9PQ==",
      "https://hentaihaven.com/wp-content/plugins/player-logic/player.php?data=VkwzR2hBSzR1L0RiRWYwNCtVSEx6NklBVnRkS1BtTFZjWXMvNk9Eb00xdkFLZkxnSUNvOTJPNTRMY2ZTVjgrRDQ2bWpDOER0SzBMd09HQWdDdXp6eHhQUXlzQlVlbytiWGtFTGhkemRnbEZJTWN6bzJ1bVNuSVk0dXJSd2c1Ni9HUDNOSWxHUmdSanUyYndXMHpicU1lZ1kwTFlvR2taTGxnNXdTWjk4L0UrdWw0bitVM0lXcEgveFBTNmEzZER0VDZWbXJzY3ZYOGRhWXlHMzkzMGZ1UGJDMERhS2dVS2grNWlHRXk3R1FMK0owM2dnY1NFMGxHV2NRVnlsZ20zWVRDUnZzT2ZOUWNyMHVBT0s5WFhYdHc9PTp8Ojp8OnVRMFAyZTlheEVRV21QeE8rQkxUeVE9PQ==",
    ],
    anime9: ["https://hentaibar.com/embed/3012"],
    anime10: [
      "https://hentaibar.com/embed/2040",
      "https://hentaibar.com/embed/2041",
    ],
    anime11: ["https://hentaibar.com/embed/2483"],
    anime12: [
      "https://hentaibar.com/embed/181",
      "https://hentaibar.com/embed/182",
    ],
    anime13: [
      "https://hentaibar.com/embed/1613",
      "https://hentaibar.com/embed/1614",
    ],
    anime14: [
      "https://hentaibar.com/embed/825",
"https://hentaibar.com/embed/826",
"https://hentaibar.com/embed/827",
    ],
    anime15: [
      "https://hentaibar.com/embed/1113",
"https://hentaibar.com/embed/1114",
"https://hentaibar.com/embed/1115",
    ],
    anime16: [
      "https://hentaibar.com/embed/910",
      "https://hentaibar.com/embed/911",
      "https://hentaibar.com/embed/912",
      "https://hentaibar.com/embed/913",
    ],
    anime17: [
      "https://hentaibar.com/embed/761",
      "https://hentaibar.com/embed/762"
    ],
    anime18: [
      "https://hentaibar.com/embed/658",
      "https://hentaibar.com/embed/659",
      "https://hentaibar.com/embed/660",
      "https://hentaibar.com/embed/661",
    ],
    anime19: [
      "https://hentaibar.com/embed/226",
      "https://hentaibar.com/embed/227",
      "https://hentaibar.com/embed/228",
      "https://hentaibar.com/embed/229",
      "https://hentaibar.com/embed/230",
      "https://hentaibar.com/embed/231",
    ],
    anime20: [
      "https://hentaibar.com/embed/77",
      "https://hentaibar.com/embed/78",
    ],
    anime21: [
      "https://hentaibar.com/embed/79",
      "https://hentaibar.com/embed/80",
    ],
    anime22: [
      "https://hentaibar.com/embed/671",
      "https://hentaibar.com/embed/672",
    ],
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
