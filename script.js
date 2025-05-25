const movies = {
  movie1: {
    title: "Berserk",
    desc: "Sinopse: ação,Dark Fantasy terror."
  },
  movie2: {
    title: "The end Evangelion",
    desc: "Sinopse: drama profundo e envolvente."
  },
  movie3: {
    title: "Vidas ao vento",
    desc: "Sinopse: drama profundo e envolvente.
};

function showInfo(id) {
  document.getElementById("movie-title").innerText = movies[id].title;
  document.getElementById("movie-desc").innerText = movies[id].desc;
  document.getElementById("info-box").classList.remove("hidden");
}

function closeInfo() {
  document.getElementById("info-box").classList.add("hidden");
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
