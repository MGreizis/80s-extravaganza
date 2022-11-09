/**
 * This is the entire list of quirky music videos. It calls `buildInitialPlaylist()`
 * to initialize its video list to keep the top section readable.
 *
 * WARNING: do not change or delete this code
 */
const database = {
  title: "80s Extravaganza database",
  videos: buildInitialPlaylist(),
  author: "BugSlayer",
};

// !! Display every artist in the DOM from the playlist object by appending them to a div with the id "playlist"
// Use the `playlist` object from the `playlist.js` file

// function displayArtists() {
//   const playlist = document.getElementById("playlist");
//   playlist.innerHTML = "";
//   for (let i = 0; i < database.videos.length; i++) {
//     const artist = document.createElement("div");
//     artist.innerHTML = database.videos[i].artist;
//     playlist.appendChild(artist);
//   }
// };

// Function to display the songs in the DOM, along with the artist and duration. wrapping them in an article tag with the class 'card m-2 p-2'
function addArticleTag() {
  const playlist = document.getElementById("playlist");
  playlist.innerHTML = "";
  for (let i = 0; i < database.videos.length; i++) {
    const song = document.createElement("article");
    song.className = "card m-2 p-2";
    playlist.appendChild(song);
  }
};

// Append a div with the class of 'media' to each article tag with the class 'card m-2 p-2'
function addMediaDiv() {
  const playlist = document.getElementById("playlist");
  const cards = playlist.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    const mediaDiv = document.createElement("div");
    mediaDiv.className = "media";
    cards[i].appendChild(mediaDiv);
  }
};

// Append a div with the class of 'media-left' to each div with the class of 'media'
function addMediaLeftDiv() {
  const playlist = document.getElementById("playlist");
  const mediaDivs = playlist.querySelectorAll(".media");
  for (let i = 0; i < mediaDivs.length; i++) {
    const mediaLeftDiv = document.createElement("div");
    mediaLeftDiv.className = "media-left";
    mediaDivs[i].appendChild(mediaLeftDiv);
  }
};

// Append a p tag with the class of 'image is-64x64' to each div with the class of 'media-left'
// The p tag should contain an img tag with the src attribute set to the value of the `thumbnail` property of the video object
function addImage() {
  const playlist = document.getElementById("playlist");
  const mediaLeftDivs = playlist.querySelectorAll(".media-left");
  for (let i = 0; i < mediaLeftDivs.length; i++) {
    const image = document.createElement("p");
    image.className = "image is-64x64";
    image.innerHTML = "<img src='https://img.youtube.com/vi/" + database.videos[i].videoId + "/0.jpg'>";
    mediaLeftDivs[i].appendChild(image);
  }
};

// Append a div with the class of 'media-content' to each div with the class of 'media'
function addMediaContentDiv() {
  const playlist = document.getElementById("playlist");
  const mediaDivs = playlist.querySelectorAll(".media");
  for (let i = 0; i < mediaDivs.length; i++) {
    const mediaContentDiv = document.createElement("div");
    mediaContentDiv.className = "media-content";
    mediaDivs[i].appendChild(mediaContentDiv);
  }
};

// Append a div with the class of 'content' to each div with the class of 'media-content'
function addContentDiv() {
  const playlist = document.getElementById("playlist");
  const mediaContentDivs = playlist.querySelectorAll(".media-content");
  for (let i = 0; i < mediaContentDivs.length; i++) {
    const contentDiv = document.createElement("div");
    contentDiv.className = "content";
    mediaContentDivs[i].appendChild(contentDiv);
  }
};

// Function that adds a link to the video in the content div with the artist and song title
function addLink() {
  const playlist = document.getElementById("playlist");
  const contentDivs = playlist.querySelectorAll(".content");
  for (let i = 0; i < contentDivs.length; i++) {
    const link = document.createElement("a");
    link.href = "https://www.youtube.com/watch?v=" + database.videos[i].videoId;
    link.target = "_blank";
    link.innerHTML = database.videos[i].artist.bold() + " - " + database.videos[i].title;
    contentDivs[i].appendChild(link);
  }
};

// Append a div with the class of 'media-right' to each div with the class of 'media'
function addMediaRightDiv() {
  const playlist = document.getElementById("playlist");
  const mediaDivs = playlist.querySelectorAll(".media");
  for (let i = 0; i < mediaDivs.length; i++) {
    const mediaRightDiv = document.createElement("div");
    mediaRightDiv.className = "media-right";
    mediaDivs[i].appendChild(mediaRightDiv);
  }
};

// Calculate total duration of all songs in the playlist
function calculateTotalDuration() {
  let totalDuration = 0;
  for (let i = 0; i < database.videos.length; i++) {
    totalDuration += database.videos[i].duration;
  }
  return totalDuration;
};

  let totalSeconds = calculateTotalDuration();
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  
  console.log("hours: " + hours);
  console.log("minutes: " + minutes);
  console.log("seconds: " + seconds);


// If you want strings with leading zeroes:
minutes = String(minutes).padStart(2, "0");
hours = String(hours).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");
console.log(hours + ":" + minutes + ":" + seconds);

// Append a span with the class of 'has-text-grey-light' to each div with the class of 'media-right'
// The span should contain the duration of the video in minutes and seconds
function addDuration() {
  const playlist = document.getElementById("playlist");
  const mediaRightDivs = playlist.querySelectorAll(".media-right");
  for (let i = 0; i < mediaRightDivs.length; i++) {
    const duration = document.createElement("span");
    duration.className = "has-text-grey-light";
    duration.innerHTML = Math.floor(database.videos[i].duration / 60) + ":" + String(database.videos[i].duration % 60).padStart(2, "0");
    mediaRightDivs[i].appendChild(duration);
  }
};

// Convert the result of the `calculateAirtime()` function to hours, minutes and seconds
function convertToHours() {
  let totalAirtime = 0;
  for (let i = 0; i < database.videos.length; i++) {
    totalAirtime += database.videos[i].duration;
  }
  const airtime = document.getElementById("airtime");
  airtime.innerHTML = "";
  airtime.innerHTML = hours + ":" + minutes + ":" + seconds;
};

// Whenever the user fills the input fields, the input should be saved to the database and a new song should be added to the playlist and the airtime should be updated and displayed
// Don't push the video object to the database if the input fields are empty
function addSong() {
  const playlist = document.getElementById("playlist");
  const artist = document.getElementById("artist");
  const title = document.getElementById("title");
  const duration = document.getElementById("duration");
  const videoId = document.getElementById("video-id");
  const newSong = {
    videoId: videoId.value,
    duration: +duration.value,
    artist: artist.value,
    title: title.value,
  };
  if (artist.value == "" ||  title.value == "" || duration.value == "" || videoId.value == "") {
    console.log('not pushing empty');
  } else {
    database.videos.push(newSong);
    console.log(newSong);
    console.log(database.videos);
  }
};

// Add a click event listener to the button with the id of 'add-button' that calls the `addSong()` function
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addSong);

/**
 * Initializes the app when the page is fully loaded.
 *
 * Instead placing the code outside of a function, this ensures that all expected
 * DOM elements are loaded and available. It is a good practice in Javascript,
 * and might prevent some funky errors.
 */
window.addEventListener("load", function () {
  addArticleTag();
  addMediaDiv();
  addMediaLeftDiv();
  addImage();
  convertToHours();
  addMediaContentDiv();
  addContentDiv();
  addLink();
  addMediaRightDiv();
  addDuration();
  addSong();
});

/**
 * Helper function that generates an array of quirky 80s videos. It is used to
 * create the database
 *
 * WARNING - DO NOT REMOVE OR CHANGE this function in any way! It is used in
 *           more ways than you can think of
 *
 * @returns an Array that contains data about some quirky 80s videos
 */
function buildInitialPlaylist() {
  return [
    {
      videoId: "UMPC8QJF6sI",
      duration: 224,
      artist: "Visage",
      title: "Fade to Grey",
    },
    {
      videoId: "aGSKrC7dGcY",
      duration: 280,
      artist: "Depeche Mode",
      title: "Enjoy the Silence",
    },
    {
      videoId: "RZ2oXzrnti4",
      duration: 223,
      artist: "The Specials",
      title: "Ghost Town",
    },
    {
      videoId: "xJeWySiuq1I",
      duration: 297,
      artist: "Ultravox",
      title: "Vienna",
    },
    {
      videoId: "ijxk-fgcg7c",
      duration: 634,
      artist: "The Cure",
      title: "Lullaby",
    },
    {
      videoId: "d5XJ2GiR6Bo",
      duration: 204,
      artist: "Orchestral Manouvres in the Dark",
      title: "Enola Gay",
    },
    {
      videoId: "W8r-tXRLazs",
      duration: 201,
      artist: "The Buggles",
      title: "Video Killed The Radio Star",
    },
    {
      videoId: "zuuObGsB0No",
      duration: 210,
      artist: "Joy Division",
      title: "Love Will Tear Us Apart",
    },
    {
      videoId: "XZVpR3Pk-r8",
      duration: 180,
      artist: "Soft Cell",
      title: "Tainted Love",
    },
    {
      videoId: "Y4QbJRAWvRU",
      duration: 222,
      artist: "Yellow",
      title: "The Race",
    },
    {
      videoId: "ZhIsAZO5gl0",
      duration: 238,
      artist: "Kiss",
      title: "I Was Made For Lovin' You",
    },
    {
      videoId: "qeMFqkcPYcg",
      duration: 214,
      artist: "Eurithmics",
      title: "Sweet Dreams (Are Made Of This)",
    },
    { videoId: "Urw-iutHw5E", duration: 360, artist: "Falco", title: "Jeanny" },
    {
      videoId: "GEnx9xS79Lc",
      duration: 219,
      artist: "Kraftwerk",
      title: "The Model",
    },
    {
      videoId: "ZCb6sHeC7ac",
      duration: 221,
      artist: "The Clash",
      title: "Rock the Casbah",
    },
    {
      videoId: "LQiOA7euaYA",
      duration: 247,
      artist: "Talking Heads",
      title: "Road to Nowhere",
    },
    {
      videoId: "sTsVJ1PsnMs",
      duration: 219,
      artist: "Righeira",
      title: "Vamos a la playa",
    },
    {
      videoId: "OJWJE0x7T4Q",
      duration: 345,
      artist: "Peter Gabriel",
      title: "Sledgehammer",
    },
    {
      videoId: "Yem_iEHiyJ0",
      duration: 250,
      artist: "Frankie Goes To Hollywood",
      title: "Relax",
    },
    {
      videoId: "M43wsiNBwmo",
      duration: 253,
      artist: "Duran Duran",
      title: "The Wild Boys",
    },
    {
      videoId: "8Mp1t-26bKk",
      duration: 270,
      artist: "Grace Jones",
      title: "Slave To The Rhythm",
    },
    {
      videoId: "XfR9iY5y94s",
      duration: 221,
      artist: "Men at Work",
      title: "Down Under",
    },
    {
      videoId: "pHCdS7O248g",
      duration: 295,
      artist: "Blondie",
      title: "Rapture",
    },
    {
      videoId: "NZnryZ5rDbs",
      duration: 206,
      artist: "David Bowie",
      title: "Blue Jean",
    },
    {
      videoId: "9GMjH1nR0ds",
      duration: 248,
      artist: "New Order",
      title: "Blue Monday",
    },
    {
      videoId: "vmwMhjbThKg",
      duration: 241,
      artist: "Orchestral Manouvres in the Dark",
      title: "Maid Of Orleans",
    },
    {
      videoId: "ZCOSPtyZAPA",
      duration: 260,
      artist: "The Cult",
      title: "She Sells Sanctuary",
    },
    {
      videoId: "H9tEvfIsDyo",
      duration: 236,
      artist: "Prince and The Revolution",
      title: "Kiss",
    },
    {
      videoId: "lLLL1KxpYMA",
      duration: 210,
      artist: "Madness",
      title: "Night Boat to Cairo",
    },
    {
      videoId: "4F9DxYhqmKw",
      duration: 257,
      artist: "Enigma",
      title: "Sadeness - Part I",
    },
    {
      videoId: "c_Bv8UkzW7g",
      duration: 265,
      artist: "Alice Cooper",
      title: "How You Gonna See Me Now",
    },
    {
      videoId: "pllRW9wETzw",
      duration: 416,
      artist: "Kate Bush",
      title: "Cloudbusting",
    },
  ];
}

// Log every artist from the buildInitialPlaylist() function
console.log(buildInitialPlaylist().map((video) => video.artist));