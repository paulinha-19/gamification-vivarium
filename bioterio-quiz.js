// Dados das questões
const quizData = [
  {
    id: "question1",
    panoramaId: "img1",
    mediaIndex: 1,
    type: "multiple-choice",
    question:
      "Nesta plataforma, que dá acesso ao biotério,os agentes biológicos mantidos  representam qual tipo de risco para a saúde humana e para o ambiente?",
    options: [
      {
        letter: "A",
        answer: "Risco individual: moderado; Risco comunitário: baixo",
        correct: false,
      },
      {
        letter: "B",
        answer: "Risco individual: alto; Risco comunitário: moderado",
        correct: true,
      },
      {
        letter: "C",
        answer: "Risco individual: alto; Risco comunitário: alto",
        correct: false,
      },
    ],
  },
  {
    id: "question2",
    panoramaId: "img2",
    mediaIndex: 2,
    type: "multiple-choice",
    question:
      "Você sabe que a entrada aqui é só para os VIPs, né? Nos ambientes de animais só entra quem tem autorização! Isso significa que apenas pessoas treinadas e com permissão especial podem circular por lá. Nenhum usuário externo  pode circular desacompanhado aqui. Por isso, o responsável pelo biotério entra junto com o usuário. Se você já tem a autorização, pode entrar. Mas antes me responde uma pergunta: Como você está se sentindo hoje?",
    options: [
      {
        letter: "A",
        answer: "Tô com a garganta inflamada e tossindo de vez em quando.",
        correct: false,
      },
      {
        letter: "B",
        answer: "Tô me sentindo febril e com dores no corpo",
        correct: false,
      },
      {
        letter: "C",
        answer: "Tô com uma dor de cabeça que vou te contar...",
        correct: false,
      },
      { letter: "D", answer: "Tô bem e com disposição. ", correct: true },
    ],
  },
  {
    id: "question3",
    panoramaId: "img3",
    mediaIndex: 3,
    type: "image-selection",
    question:
      "Opa! Opa! Antes de se paramentar precisamos saber se você sabe o que vai ter que retirar e guardar aqui nas gavetas. Já que você entrou antes em um NBA2,  já conhece a Norma Regulamentadora 32. Então nada de usar adereços enquanto estiver trabalhando em um ambiente de risco biológico! Isso vale para TODO MUNDO, independente do que você faz. Agora toque nos itens que você precisa retirar, antes de se paramentar:",
    options: [
      { letter: "A", answer: "Óculos de proteção", correct: true },
      { letter: "B", answer: "Avental descartável", correct: true },
      { letter: "C", answer: "Chinelo", correct: false },
      { letter: "D", answer: "Luvas de látex", correct: true },
      { letter: "E", answer: "Máscara", correct: true },
      { letter: "F", answer: "Boné", correct: false },
    ],
  },
  {
    id: "question4",
    panoramaId: "img4",
    mediaIndex: 4,
    type: "ordering",
    question: "Organize os passos para descarte correto de resíduos químicos:",
    options: [
      { letter: "A", answer: "Etiquetar corretamente", order: 1 },
      { letter: "B", answer: "Armazenar em local apropriado", order: 2 },
      { letter: "C", answer: "Separar os tipos de resíduos", order: 3 },
      { letter: "D", answer: "Descartar conforme regulamentação", order: 4 },
    ],
  },
];

// Função para obter a resposta salva do usuário para uma questão específica
function getSelectedAnswer(questionId) {
  const progress = getProgress();
  return progress.selectedAnswers && progress.selectedAnswers[questionId]
    ? progress.selectedAnswers[questionId]
    : null;
}


// Função para renderizar a pergunta dentro do modal
function renderQuestion(panoramaId) {
  const modalContent = document.getElementById("quizModalContent");
  modalContent.innerHTML = ""; // Limpa conteúdo anterior

  const question = quizData.find((q) => q.panoramaId === panoramaId);
  if (!question) {
    modalContent.innerHTML =
      "<p>Nenhuma pergunta disponível para este panorama.</p>";
    return;
  }

  const progress = getProgress();
  const alreadyAnswered = progress.answeredQuestions.includes(question.id);

  let questionHTML = `
    <span class="close-btn-modal" onclick="closeQuizModal()">&times;</span>
    <h2 class="quiz-title">${question.question}</h2>
    <div class="quiz-options">
  `;

  question.options.forEach((option) => {
    let extraClass = alreadyAnswered ? "disabled" : "";
    let icon = option.letter;

    if (alreadyAnswered) {
      if (option.correct) {
        extraClass += " correct";
        icon = "✅";
      } else {
        extraClass += " incorrect";
        icon = "❌";
      }
    }

    questionHTML += `
      <button class="quiz-option ${extraClass}" 
              data-question-id="${question.id}" 
              data-answer="${option.letter}" 
              ${alreadyAnswered ? "disabled" : ""}>
        <span class="option-letter">${icon}</span>
        <span class="option-text">${option.answer}</span>
      </button>
    `;
  });

  questionHTML += `<button id="confirmAnswer" class="confirm-btn" ${
    alreadyAnswered ? "disabled" : ""
  }>OK</button>`;
  modalContent.innerHTML = questionHTML;

  if (!alreadyAnswered) {
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

          document.querySelectorAll(".quiz-option").forEach((btn) => {
            const answerLetter = btn.getAttribute("data-answer");
            const isCorrect = question.options.find(
              (opt) => opt.letter === answerLetter
            ).correct;

            if (isCorrect) {
              btn.classList.add("correct");
              btn.innerHTML = `<span class="option-letter">✅</span> <span class="option-text">${btn.innerText}</span>`;
            } else {
              btn.classList.add("incorrect");
              btn.innerHTML = `<span class="option-letter">❌</span> <span class="option-text">${btn.innerText}</span>`;
            }
            btn.classList.add("disabled");
            btn.disabled = true;
          });

          saveProgress(questionId);
          document.getElementById("confirmAnswer").disabled = true;
        } else {
          alert("Selecione uma resposta antes de confirmar.");
        }
      });
  }
}

// Função para abrir o modal do quiz e carregar a pergunta correta
function openQuizModal(panoramaId) {
  console.log("Abrindo modal do quiz para:", panoramaId);
  document.getElementById("quizModalContainer").style.display = "flex";
  renderQuestion(panoramaId);
}

// Função para fechar o modal ao clicar no botão (X) ou fora do modal
function closeQuizModal() {
  document.getElementById("quizModalContainer").style.display = "none";
}

// Função para salvar progresso nos cookies
function saveProgress(questionId) {
  let questionData = quizData.find((q) => q.id === questionId);
  if (!questionData) return;

  let progress = getProgress();
  if (!progress.answeredQuestions.includes(questionId)) {
    progress.answeredQuestions.push(questionId);
  }

  progress.lastQuestion = questionId;
  progress.lastPanorama = questionData.panoramaId;

  document.cookie = `quizProgress=${JSON.stringify(
    progress
  )};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
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
  return { answeredQuestions: [], lastQuestion: null, lastPanorama: null };
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
