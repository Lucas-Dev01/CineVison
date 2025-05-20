const movies = {
  movie1: {
    title: "O Filme 1",
    desc: "Sinopse do filme 1: ação, aventura e muita emoção."
  },
  movie2: {
    title: "O Filme 2",
    desc: "Sinopse do filme 2: drama profundo e envolvente."
  }
  // Adicione mais filmes aqui
};

function showInfo(id) {
  document.getElementById("movie-title").innerText = movies[id].title;
  document.getElementById("movie-desc").innerText = movies[id].desc;
  document.getElementById("info-box").classList.remove("hidden");
}

function closeInfo() {
  document.getElementById("info-box").classList.add("hidden");
}
