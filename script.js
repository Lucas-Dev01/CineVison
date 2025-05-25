const movies = {
  movie1: {
    title: "Berserk",
    desc: "Sinopse: Ação, dark fantasy e terror."
  },
  movie2: {
    title: "The End of Evangelion",
    desc: "Sinopse: Drama profundo e envolvente."
  },
  movie3: {
    title: "Vidas ao Vento",
    desc: "Sinopse: Drama histórico comovente e inspirador."
  }
};

function showInfo(id) {
  document.getElementById("movie-title").innerText = movies[id].title;
  document.getElementById("movie-desc").innerText = movies[id].desc;
  document.getElementById("info-box").classList.remove("hidden");
}

function closeInfo() {
  document.getElementById("info-box").classList.add("hidden");
}

function searchMovies() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const movies = document.querySelectorAll(".movie");

  movies.forEach(movie => {
    const altText = movie.querySelector("img").alt.toLowerCase();

    if (altText.includes(input) || input === "") {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}

const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
  sideMenu.style.left = '0';
});

closeMenu.addEventListener('click', () => {
  sideMenu.style.left = '-250px';
});
