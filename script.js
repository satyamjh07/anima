// script.js
let currentEpisodeIndex = 0;
let episodeUrls = [];

function openEpisodeModal(animeId) {
    // Get the modal element and the video iframe element
    const modal = document.getElementById("episode-modal");
    const videoFrame = document.getElementById("video-frame");

    // Define episode data for each anime (replace with actual data)
    const animeEpisodes = {
          anime1: [
      "https://archive.org/embed/midareuchi-1-720p-h1x",
      "https://archive.org/embed/midareuchi-2-720p-h1x",
    ],
          anime2: [
      "https://archive.org/embed/drop-out-1-720p-v2x",
      "https://archive.org/embed/drop-out-2-720p-v2x",
    ],
          anime3: [
      "https://archive.org/embed/insatiable-1-720p-v2u",
      "https://archive.org/embed/insatiable-2-720p-v2u",
    ],
          anime4: [
      "https://archive.org/embed/anano-okuno-ii-tokoro-1",
      "https://archive.org/embed/anano-okuno-ii-tokoro-2",
    ],
          anime5: [
      "https://archive.org/embed/natsu-zuma-1-720p-h1x",
      "https://archive.org/embed/natsu-zuma-2-720p-h1x",
    ],
          anime6: [
      "https://archive.org/embed/seifuku-wa-kita-mama-de-1",
    ],
          anime7: [
      "https://archive.org/embed/soredemo-tsuma-o-aishiteru-2-ep-1-720p-h1x",
      "https://archive.org/embed/soredemo-tsuma-o-aishiteru-2-ep-2-720p-h1x",
    ],
          anime8: [
      "https://archive.org/embed/uchi-no-otouto-maji-de-dekain-dakedo-mi-ni-konai-1_202602",
      "https://archive.org/embed/uchi-no-otouto-maji-de-dekain-dakedo-mi-ni-konai-2_202602",
    ],
          anime9: [
      "https://archive.org/embed/yumemiru-otome-1",
      "https://archive.org/embed/yumemiru-otome-2",
      "https://archive.org/embed/yumemiru-otome-3",
    ],
         anime10: [
      "https://archive.org/embed/tg-new-jm-link-mylfwood.-24.11.07.alexa.payne.and.ashley.alexander.-480p",
      "https://hentaibar.com/embed/1225",
    ], // Add episode URLs here
    anime11: [
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=eFl1eE5MKzF5b01QSWpnaDRsM29oODNHNGtkNmpiQ20xbXVJeGZnWGd3ZTZNci9XMVA3SW9IK21EVFZkUVd1N1lnUmpDMWovOVBGYWpLOXlmcmg4bm1nNGJKaGRmS3pBN015UU1GZW1qWUFXdDJaTEdyRzZYdUEzWUg1L3dVOWVZSTJJUDhlM3F2YUp4YUJxajB3aHBWMC9NbjJlZy9DRFhPNXFUUXJFVGY3aEJJZ0IyQkxhcjNpZUtVVXZWcExWMDEvN2ZKKzlteC9nbEpXeEJJYm9LTW5FcHFsT1pvTldFUmRxaDAvOFYvOGxia3VITitoWjdPOUlZUHlJRWhtQnI2NUhYMXhpdCtoUWpod1dmT09GMmc9PTp8Ojp8OjI4UDg0K2VKNEZYY0Jrd3h1dGRwdWc9PQ==",
    ], // Add episode URLs here
    anime12: [
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=TDhrSmRGWGZVYlNSRUdpRzUxNmZwWlJoZzE1S2tZMWwvT1dyTWJ0ZWJkSllETDFYNnYvbWM4MmthaC96ZVZBZU9GKzhYZUJpRG5rdmIxOTVGM00xRC9FSmRrZjllbGx1cUZnc0Y5eGlXYllnYi9nKzhSYUlEK2hIQS9lQ3Q4M2ZjU1JCN3cyMGliU2d5dEwzVlNpQ2hXUnNBVDdSbTBVV3Qxdm02c2Yydk9Iakl5UFUwclpaSlNMRHFtbGpVcnU3NFBQMnI5a1QzcWZLeTdTVVJBSHdZR2trYm5QY3Y3QndqUWFUSVA5elhyZz06fDo6fDo3VmUwSEVaVVJMMjI4enA0Qk9taGtnPT0=",
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=NDcvSUxBOTJFU2pnNVFRU2hCN2tBSnhYM1FpUDRwWkwxSUpLQnE0N1FmUEUwSkoyTEYzV201L3lLR2tCL3puSEtIci9uYU1aRHVhdW1HNmdVcmlGdU5kZ3ZpYlNqbjNJcGtrcU13aGVNZ2dVYjU2ZEtPVWtOTnduQ2ZOdmI5MzVOWG9taUR0VmNicEhRZ3RjQ1ZiZ2VGTXlVcU9sdGdlOXFOOGF3czEwbmcxWFlqclJqUmd1a1ZpdEpiUG5QcFZURXRMcmJwOElDYkI0MmlnY1ZnSktvRDdDVXpZUW05VXJuVEJFUFZvSGU4WT06fDo6fDpBQXVjZHdWbEpMdTVib0hJTUxDTWtRPT0=",
    ], // Add episode URLs here
    anime13: [
      "https://archive.org/embed/taboo-charming-mother-1",
      "https://archive.org/embed/taboo-charming-mother-2",
      "https://archive.org/embed/taboo-charming-mother-3",
      "https://archive.org/embed/taboo-charming-mother-4",
      "https://archive.org/embed/taboo-charming-mother-5",
      "https://archive.org/embed/taboo-charming-mother-6",
    ], // Add episode URLs here
    anime14: [
      "https://hentaibar.com/embed/679",
      "https://hentaibar.com/embed/680",
      "https://hentaibar.com/embed/681",
      "https://hentaibar.com/embed/682",
    ], // Add episode URLs here
    anime15: [
      "https://hentaibar.com/embed/1010",
      "https://hentaibar.com/embed/1011",
    ],
    anime16: [
      "https://hentaibar.com/embed/405",
      "https://hentaibar.com/embed/406",
      "https://hentaibar.com/embed/407",
      "https://hentaibar.com/embed/408",
    ],
    anime17: [
      "https://hentaihaven.com/wp-content/plugins/player-logic/player.php?data=dTJBWDUxbStXbnNWeTBIZk1wdWJIWHd6Z2F6ZDgwNnNNKzdxUmN0eXZnOWVwYWZCUld1YmtISWVWL0hZazVDdzQ2dWlUSmFHemJCOVAzNDQzQURHREdDZ0drRmVkU1hsQVd2VjRpVGJRUGVQdFRzRHlvb2xPSVA3Q05TUmpBQ2loSTQ1Nmx2VENqVmNQb05OdnZpbDRoNTdwMmIwRXRYWjFTUGZZeHNzOUFET3JpRm1CRjhLMTlJWmozVUFLSWRJeXlIMTI3dmlTNWhLRTF5Q0hQemdJUDBLTmZCcXkyU0k2elBHNEV3dmk1bU5TMmNtYlJSTFF5bXpQZDdVRGtRM0tzYTcyaHhidEtwcWhGTS80MnNmY1E9PTp8Ojp8OnpYa0NXUDgwY08vV1BZS2E3cmI4eXc9PQ==",
      "https://hentaihaven.com/wp-content/plugins/player-logic/player.php?data=VkwzR2hBSzR1L0RiRWYwNCtVSEx6NklBVnRkS1BtTFZjWXMvNk9Eb00xdkFLZkxnSUNvOTJPNTRMY2ZTVjgrRDQ2bWpDOER0SzBMd09HQWdDdXp6eHhQUXlzQlVlbytiWGtFTGhkemRnbEZJTWN6bzJ1bVNuSVk0dXJSd2c1Ni9HUDNOSWxHUmdSanUyYndXMHpicU1lZ1kwTFlvR2taTGxnNXdTWjk4L0UrdWw0bitVM0lXcEgveFBTNmEzZER0VDZWbXJzY3ZYOGRhWXlHMzkzMGZ1UGJDMERhS2dVS2grNWlHRXk3R1FMK0owM2dnY1NFMGxHV2NRVnlsZ20zWVRDUnZzT2ZOUWNyMHVBT0s5WFhYdHc9PTp8Ojp8OnVRMFAyZTlheEVRV21QeE8rQkxUeVE9PQ==",
    ],
    anime18: ["https://hentaibar.com/embed/3012"],
    anime19: [
      "https://hentaibar.com/embed/2040",
      "https://hentaibar.com/embed/2041",
    ],
    anime20: ["https://archive.org/embed/love-es-m-the-animation-1"],
        
    anime21: [
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=U0dOY05KalRXUmpBaERrYzVsK0wyUGs0eElZODFJTmJSL2M0WkVHUjFtdnNmTWxtSG5wcklEcjNuSkVjb2twdjc1NzcreURiakt4MlRTMDVnUmhNeVZ2MUNocURDalVzc1Q4Mlo4WkhGOHZFMHMyS0g2Qng1S2RnVDJmQzVCUWovbzN3VU02YU5QMjRGeGdrVVFaYjFXdTV5YW96SFhRbk1UK2JwcEN5cDJnVjdYL2pmWENYUjNzQnp0cTdVcWVVTFZQVno4RS9zOUpzeTRrZ092ZEZhTk1wb09sWkFWT1Q3bGRxSys0M0N0YXN1a3dUVDFkbDc4eExFY1BnRExaSWcrUUFRTVFqWEJXZGpuYmNNNm1oaWc9PTp8Ojp8OmFDQW5kQnQvMUNvb25Qb3p0ckJjeUE9PQ==",
    ],
    anime22: [
      "https://archive.org/embed/furyou-ni-hamerarete-jusei-suru-kyonyuu-okaa-san-the-animation-1",
      "https://archive.org/embed/furyou-ni-hamerarete-jusei-suru-kyonyuu-okaa-san-the-animation-2",
    ],
    anime23: [
      "https://hentaibar.com/embed/825",
"https://hentaibar.com/embed/826",
"https://hentaibar.com/embed/827",
    ],
    anime24: [
      "https://hentaibar.com/embed/1113",
"https://hentaibar.com/embed/1114",
"https://hentaibar.com/embed/1115",
    ],
    anime25: [
      "https://hentaibar.com/embed/910",
      "https://hentaibar.com/embed/911",
      "https://hentaibar.com/embed/912",
      "https://hentaibar.com/embed/913",
    ],
    anime26: [
      "https://hentaibar.com/embed/761",
      "https://hentaibar.com/embed/762",
    ],
    anime27: [
      "https://archive.org/embed/helter-skelter-hakudaku-no-mura-1",
      "https://archive.org/embed/helter-skelter-hakudaku-no-mura-2",
      "https://archive.org/embed/helter-skelter-hakudaku-no-mura-3",
      "https://archive.org/embed/helter-skelter-hakudaku-no-mura-4",
    ],
    anime28: [
      "https://hentaibar.com/embed/226",
      "https://hentaibar.com/embed/227",
      "https://hentaibar.com/embed/228",
      "https://hentaibar.com/embed/229",
      "https://hentaibar.com/embed/230",
      "https://hentaibar.com/embed/231",
    ],
    anime29: [
      "https://hentaibar.com/embed/77",
      "https://hentaibar.com/embed/78",
    ],
    anime30: [
      "https://hentaibar.com/embed/79",
      "https://hentaibar.com/embed/80",
    ],
    anime31: [
      "https://archive.org/embed/mistreated-bride-1",
      "https://archive.org/embed/mistreated-bride-2_202602",
      "https://archive.org/embed/mistreated-bride-3",
      "https://archive.org/embed/mistreated-bride-4",
    ],
    anime32: [
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=d3JIQjA1SERSMGhJZU9wQm9xcHhRQmtIVDlPUzgrcThBSGE2bmtPMUZ4a21UOGZNb0YwbHBUSGlaOXVDL0JEUnFTTXZvQjRmWis2SGdwWG5iRGR0QkNCYWg3a01ZMUVhMjJ0bEh0Tk9CUnVGUlNvV3dIdVdaOXR1d3ZyNjl2R2dEU0ZUOTRkTEtFcnIzWitvNThlSWtSZ0FZeXBUZ3k5NFFlcXBlL0ZpbUFTSXg1WjEybmhZcnhoTWJzTmhQdmFBVmRIMGt1THdOOEJEKytHQVMvcGpQM3FTWlpnYnFmaHFhTnJTRmRHWjcyY1ZSQ2pFV3pVaFZBSlNZRG4zVUdGaGhXSlFwdlJlaHFablZmYVlWSUsreE1SNkZYejlJNG1kcXZ2TVMvenZuMEZKL0tQV1ZkTU1QSTVONVM5b0REOEk6fDo6fDowU1ZhZTlTQm1wc0Z4MzJrRGFORWdnPT0=",
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=Q2FUQnR3QytjeUxjV0JEcFJpQ0hTbG8walRRT1p4TVJVZjZ4RERWa0xZTENSL3pwZjIzUTRteWVyaW9WTld1OXRZekN0b2hUMFd0NzRJck5TcTl6a3ZoaHU0Nys4NmNBcVdXVzhuZ3ZtWW9XMUsrTkQza1dydVN4T2VPT2dGSnBkbk9zdEwrNlp3bGtGUk5XOGdwZEFZNldmV1RzV1NwSitsNjRRQU9xWWZPb3QxZWM5OVJUMzlCTW5pVkhKWlBSRHpRTmhWMG1WZ2d4T1AxUjVQZ3dOVi9HN1U2NDJWNXFpbGlKa0puWWh3TGpWeFlpS3lwbUhnVnZRS0MrTkI3ZHNMNVZlT0tFbzlqblVJUGRPNzNFSnQ0QVQ0MGJOTFN3ZHpmVkprUU9mcnZlRkJtNHVISkFvODhTYXJHOCsxeDY6fDo6fDprVWtkbFlpTHFGRm9UY0RyVnFtQTNRPT0=",
      ],
    anime33: [
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=TnhaQitBbExxTk84aXJHY1d5VGtxNzdNS0tCY3VyeTlreU9hZm5OaFBLSTM3TjIzNmhlYjVmamFLaUYwVlBmaHBUZ094S1ZWS01DTFNYYWVlN1JSYkxZMjhweTNWeDh3QmRMNGJvUGNaUG1Jbmg4U2JSbVV5SGpSVElFU3FGbnNrRTFPSW1VaVVKZWtyL1V0cWU0OGNlQ0w3MGhrSlJ6RVJkZTdtREZ1UGwzQXJwTVRIc2F5NWRhbitYNTc3cmxOeE9xU000OTFiRUxSVWZFTTlxd2lTakVaVVFiSWtoM0NCakp5MG8wTmQyamRqM1Z5ZkRoMVUzaURGeHJicnpDZzp8Ojp8OnhvU3F3Y0JRczdUa05LOU00b0JVS2c9PQ==",
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=Vy85SXNENXFJQWN0c3BnTG5vbGRRSzNwZjE3YVoyMUF1NlhvZFBxMXF0NG4wdjBkay9FMEV5STBlcVhpTnlPaGxSVTN5NW51RkJtYnJnU2tsQ2pOUVhTQ2dDL2VuV3ZvV0RRMCtGMWNtKzU0RWllYTJmaUdHVXc5b29TSVFxcUVHa29jalQwYVNTOHFpQktpbjIxL1Y2cytmenNvYXFsck9Hb1ppeE45MHYzYnJsUTE3SUgwRkJENGF1a0ZOSGVPRlh4NkpzVWo4d09VK3NvdCsvSGdvREVxc25PV3E5OGFXdTNmajIyT1ErVm9ZSUlnQTdScGoxRUxUQXd1QWE3QTp8Ojp8OmNVWHVNcEc1WWR5YmhMTExtTkN3QXc9PQ==",
      ],
        anime34: [
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=N1pUMmUwRHBhRjI4dmkrT0gzL25saWVhbm5xOHNDakU5dWR4d2w0d01yaTRmWmhkeVJtaEx6ZTZTd2dxODFxelhmdHMvRWpoaXVYVE9ST1d4djFrOHVzWU5mUHdxQVpYS1g0S1B2TDJaUEVkNjJoTVp3NVRXZnpNYWhtaXRGNHdLTVpkc2JHRFM4S1c4YmxNalNRL0FnQ2Q1UjJxa0ZZQ3NjZEdKdThBSXRUbXhZY3NubTh0OEJwVWFVdFo0dHZxZHlkVUthRDBCSk9zeERydkFiMzB4UW1ENFk0bk00OHJwMDdMcHNrMmRNUT06fDo6fDpaY0VHOGp2SVIvRDk1MDBsUmQxRkJBPT0=",
            "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=WExvUjRvd2U5VWx1QXVQWkMxSC8zRWFDRTJGZkJOOER2SHZMTUIxTmV0MGdVdndOK1JHdmxoL01hc2tyMVRiWlpmWU5YMksxTjUvSzFBQlJCeHBKM214TGhRQzNNQXJjM3NjMG1SV0hTWnF3R0tPUVliQW1Ma3F2OHMxVFhld21aMTBuTDJ4RVQybExNdXNTWXczZDlLWTNOUEFsUER2WUFJSmx5YXBNQXlQV2hKWVlPUkxWbWlXazRlWUs5SnNqSUZxUU0rS3o0d3hsRkt3Y21kOVNsOFZKT1FVd09CZVZvREpiSU0wbFRvST06fDo6fDpXbjl3Z2xSbHR5R2hDOUNjeHVHNTF3PT0=",
        ],
        anime35: [
      "https://hentaihaven.xxx/wp-content/plugins/player-logic/player.php?data=Q1V5dFMvUFJsRmRrUE1wWm9UTnpLNDVJMEZtZzlhVE5McGVLbGRhb1VqNC9xdVJ5Z20rTGExQkJBa1RJSXZoUDV3UnZNZVBoVHd0VzN4UXJORWdBK1VRZzZjZ0daMkNZL2M2L0tWOGJVNERSbFh3TUZrczFsLzl6TS9kZmxIdXJUWTU3ZEUzNXpTVU5MckhBK3NiQmIzSlYveGQwY283R2x2SHViV1hzUWtIL2lVR1dTNUVIVnFYUGNiZ2ZCVVRUdnV4SEFOSXhEV3hYMSswb0lGN2ozV0hLb0MzVnNNRTV6SEtxbXByenllZz06fDo6fDpNeVp1eC9OdG96NlRmVmROR0hYYUxRPT0=",
        ],
        anime36: [
      "https://nhplayer.com/v/SVIBa8i1bexjY4b/",
      "https://nhplayer.com/v/ENGc2EQVN6iH5DZ/",
        ],
        anime37: [
      "https://nhplayer.com/v/ejDiZaRdDzKtOA7/",
      "https://nhplayer.com/v/77qZaEH54tCz8rD/",
        ],
        anime38: [
      "https://nhplayer.com/v/X1hVBH7yhZJBAR6/",
      "https://nhplayer.com/v/pDWaGPmHFRzIFgj/",
        ],
        anime39: [
      "https://nhplayer.com/v/IHwKLKqVDtDVkOf/",
       "https://nhplayer.com/v/gY8v9AwDhorebIz/",
        ],
        anime40: [
      
        ],
        anime41: [
      
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







