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
  },
  movie4: {
    title: "A Viagem de Chihiro",
    desc: "Sinopse: Uma garota entra em um mundo mágico para salvar seus pais."
  },
  movie5: {
    title: "Ponyo",
    desc: "Sinopse: A amizade entre um garoto e um peixinho mágico que quer ser humana."
  },
  movie6: {
    title: "O Castelo no Céu",
    desc: "Sinopse: Uma aventura em busca de uma cidade flutuante lendária."
  },

  movie7: {
    title: "Akira",
    desc: "Sinopse: Um clássico cyberpunk sobre poderes psíquicos e destruição."
  },
  movie8: {
    title: "O Castelo Animado",
    desc: "Sinopse: Uma jovem amaldiçoada encontra abrigo com um mago excêntrico."
  },
  movie9: {
    title: "Perfect Blue",
    desc: "Sinopse: Um thriller psicológico sobre fama e identidade."
  },
  movie10: {
    title: "Sussurros do Coração",
    desc: "Sinopse: Uma história delicada sobre descobertas e sonhos."
  },
  movie11: {
    title: "O Serviço de Entregas da Kiki",
    desc: "Sinopse: Uma jovem bruxa inicia sua vida independente em uma nova cidade."
  },
  movie12: {
    title: "As Memórias de Marnie",
    desc: "Sinopse: Mistério e amizade em uma emocionante jornada emocional."
  },
  movie13: {
    title: "Princesa Mononoke",
    desc: "Sinopse: Um príncipe se envolve no conflito entre humanos e a natureza."
  },
  movie14: {
    title: "Meu Amigo Totoro",
    desc: "Sinopse: Duas irmãs exploram o campo e encontram criaturas mágicas."
  },
  movie15: {
    title: "Túmulo dos Vagalumes",
    desc: "Sinopse: Um drama comovente sobre sobrevivência e guerra."
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
  const input = document.getElementById("searchInput").value.toLowerCase();
  const movieElements = document.querySelectorAll(".movie");

  movieElements.forEach(movie => {
    const altText = movie.querySelector("img").alt.toLowerCase();
    if (altText.includes(input)) {
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
