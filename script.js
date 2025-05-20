const movies = {
  movie1: {
    title: "Berserk",
    desc: "Sinopse de Berserk: ação,Dark Fantasy terror."
  },
  movie2: {
    title: "The end Evangelion",
    desc: "Sinopse de Eva: drama profundo e envolvente."
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
