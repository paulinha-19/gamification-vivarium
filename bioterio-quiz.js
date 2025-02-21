// Dados das questões
const quizData = [
  {
    id: "question1",
    panoramaId: "img1",
    mediaIndex: 1,
    type: "multiple-choice",
    question:
      "Qual é a principal medida de segurança ao manusear resíduos perigosos?",
    options: [
      { letter: "A", answer: "Usar luvas e máscara", correct: true },
      { letter: "B", answer: "Manusear com as mãos limpas", correct: false },
      { letter: "C", answer: "Armazenar sem etiqueta", correct: false },
      { letter: "D", answer: "Descartar sem segregação", correct: false },
    ],
  },
  {
    id: "question2",
    panoramaId: "img2",
    mediaIndex: 2,
    type: "ordering",
    question: "Organize os passos para descarte correto de resíduos químicos:",
    options: [
      { letter: "A", answer: "Etiquetar corretamente", order: 1 },
      { letter: "B", answer: "Armazenar em local apropriado", order: 2 },
      { letter: "C", answer: "Separar os tipos de resíduos", order: 3 },
      { letter: "D", answer: "Descartar conforme regulamentação", order: 4 },
    ],
  },
  {
    id: "question3",
    panoramaId: "img3",
    mediaIndex: 3,
    type: "image-selection",
    question:
      "Selecione os itens corretos de EPI para manuseio de materiais biológicos:",
    options: [
      { letter: "A", answer: "Óculos de proteção", correct: true },
      { letter: "B", answer: "Avental descartável", correct: true },
      { letter: "C", answer: "Chinelo", correct: false },
      { letter: "D", answer: "Luvas de látex", correct: true },
      { letter: "E", answer: "Máscara", correct: true },
      { letter: "F", answer: "Boné", correct: false },
    ],
  },
];

// Função para renderizar a pergunta dentro do modal
function renderQuestion(panoramaId) {
  const modalContent = document.getElementById("quizModalContent");
  modalContent.innerHTML = ""; // Limpa conteúdo anterior

  // Filtra a pergunta pelo panorama atual
  const question = quizData.find((q) => q.panoramaId === panoramaId);

  if (!question) {
    modalContent.innerHTML =
      "<p>Nenhuma pergunta disponível para este panorama.</p>";
    return;
  }

  // Cria o HTML da pergunta e alternativas
  let questionHTML = `
    <h2 class="quiz-title">${question.id} — ${question.question}</h2>
    <div class="quiz-options">
  `;

  question.options.forEach((option) => {
    questionHTML += `
      <button class="quiz-option" data-question-id="${question.id}" data-answer="${option.letter}">
     <span class="option-letter">${option.letter}</span>
        <span class="option-text">${option.answer}</span>
      </button>
    `;
  });

  questionHTML += "</div><button id='confirmAnswer' class='confirm-btn'>OK</button>";

  modalContent.innerHTML = questionHTML;

  // Adiciona evento de clique para capturar resposta
  document.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", function () {
      document
        .querySelectorAll(".quiz-option")
        .forEach((btn) => btn.classList.remove("selected"));
      this.classList.add("selected");
    });
  });

  document
    .getElementById("confirmAnswer")
    .addEventListener("click", function () {
      const selected = document.querySelector(".quiz-option.selected");
      if (selected) {
        const questionId = selected.getAttribute("data-question-id");

        // Salvar progresso no cookie e na variável local
        saveProgress(questionId);

        // Atualiza a memória local para garantir que a mudança seja refletida imediatamente
        const progress = getProgress();
        console.log("Progresso atualizado em tempo real:", progress);

        closeQuizModal();
      } else {
        alert("Selecione uma resposta antes de confirmar.");
      }
    });
}

// Função para abrir o modal do quiz e carregar a pergunta correta
function openQuizModal(panoramaId) {
  console.log("Abrindo modal do quiz para:", panoramaId);
  document.getElementById("quizModalContainer").style.display = "flex";
  renderQuestion(panoramaId);
}

// Função para fechar o modal
function closeQuizModal() {
  document.getElementById("quizModalContainer").style.display = "none";
}

// Função para salvar progresso nos cookies (última questão respondida e panorama associado)
function saveProgress(questionId) {
  let questionData = quizData.find((q) => q.id === questionId);

  if (!questionData) return;

  let progress = {
    lastQuestion: questionId,
    lastPanorama: questionData.panoramaId,
  };

  document.cookie = `quizProgress=${JSON.stringify(
    progress
  )};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  console.log("Progresso salvo:", progress);
}

// Função para recuperar progresso salvo
function getProgress() {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    let [name, value] = cookie.split("=");
    if (name === "quizProgress") {
      return JSON.parse(decodeURIComponent(value));
    }
  }
  return null; // Retorna null se não houver progresso salvo
}

// Função para recuperar parâmetros da URL
function getURLParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name); // Retorna o valor do parâmetro na URL (ex: "img2")
}

// Redirecionamento ao iniciar o tour (baseado na última questão respondida)
window.onload = function () {
  const progress = getProgress(); // Pega o último progresso salvo nos cookies

  if (progress && progress.lastPanorama) {
    const currentPanorama = getURLParameter("media-name"); // Pega o panorama atual da URL

    if (currentPanorama !== progress.lastPanorama) {
      // Se o panorama atual não for igual ao último salvo, redireciona

      console.log("Redirecionando para panorama salvo:", progress.lastPanorama);
      window.location.replace(`index.htm?media-name=${progress.lastPanorama}`);
    } else {
      console.log("O usuário já está no panorama correto:", currentPanorama);
    }
  } else {
    console.log("Nenhuma questão respondida, iniciando do primeiro panorama.");
  }
};
