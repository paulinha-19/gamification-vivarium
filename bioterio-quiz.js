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
      {
        id: "badge",
        answer: "Crachá",
        correct: false,
        image: "./media//quiz/badge.png",
      },
      {
        id: "black-jacket",
        answer: "Jaqueta preta",
        correct: false,
        image: "./media//quiz/black-jacket.png",
      },
      {
        id: "bracelet",
        answer: "Pulseira",
        correct: false,
        image: "./media//quiz/bracelet.png",
      },
      {
        id: "buttons",
        answer: "Botons",
        correct: false,
        image: "./media//quiz/buttons.png",
      },
      {
        id: "cap",
        answer: "Boné",
        correct: false,
        image: "./media//quiz/cap.png",
      },
      {
        id: "clock",
        answer: "Relógio",
        correct: false,
        image: "./media//quiz/clock.png",
      },
      {
        id: "cord",
        answer: "Cordão",
        correct: true,
        image: "./media//quiz/cord.png",
      },
      {
        id: "earring",
        answer: "Brinco",
        correct: false,
        image: "./media//quiz/earring.png",
      },
      {
        id: "green-shirt",
        answer: "Camiseta verde",
        correct: true,
        image: "./media//quiz/green-shirt.png",
      },
      {
        id: "half",
        answer: "Meia",
        correct: true,
        image: "./media//quiz/half.png",
      },
      {
        id: "finger",
        answer: "Dedo",
        correct: true,
        image: "./media//quiz/finger.png",
      },
      {
        id: "glasses",
        answer: "Óculos",
        correct: true,
        image: "./media//quiz/glasses.png",
      },
      {
        id: "headset",
        answer: "Fone de ouvido",
        correct: true,
        image: "./media//quiz/headset.png",
      },
      {
        id: "ring",
        answer: "Anel",
        correct: true,
        image: "./media//quiz/ring.png",
      },
      {
        id: "shoe",
        answer: "Sapato",
        correct: true,
        image: "./media//quiz/shoe.png",
      },
      {
        id: "tie",
        answer: "Gravata",
        correct: true,
        image: "./media//quiz/tie.png",
      },
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

let correctSelections = new Set(); // Armazena as imagens corretas selecionadas - questão do tipo image-selection
let answered = false; // Evita que o usuário responda novamente - questão do tipo image-selection

// Função para obter a resposta salva do usuário para uma questão específica
function getSelectedAnswer(questionId) {
  const progress = getProgress();
  return progress.selectedAnswers && progress.selectedAnswers[questionId]
    ? progress.selectedAnswers[questionId]
    : [];
}

// Função para salvar progresso nos cookies
function saveProgress(questionId, selectedAnswers) {
  let questionData = quizData.find((q) => q.id === questionId);
  if (!questionData) return;

  let progress = getProgress();

  // Inicializa selectedAnswers se não existir
  if (!progress.selectedAnswers) {
    progress.selectedAnswers = {};
  }

  // Identifica o tipo de questão
  const isImageSelection = questionData.type === "image-selection";

  // Para múltipla escolha: sempre adiciona a questão como respondida
  if (!isImageSelection) {
    if (!progress.answeredQuestions.includes(questionId)) {
      progress.answeredQuestions.push(questionId);
    }
  } else {
    // Para image-selection, a questão só é marcada como respondida se TODAS as respostas corretas forem selecionadas
    const allCorrectAnswers = questionData.options
      .filter((opt) => opt.correct)
      .map((opt) => opt.id);

    const isFullyCorrect =
      selectedAnswers.length === allCorrectAnswers.length &&
      selectedAnswers.every((ans) => allCorrectAnswers.includes(ans));

    if (isFullyCorrect) {
      if (!progress.answeredQuestions.includes(questionId)) {
        progress.answeredQuestions.push(questionId);
      }
    }
  }

  progress.selectedAnswers[questionId] = selectedAnswers; // Atualiza respostas salvas
  progress.lastQuestion = questionId; // Última questão respondida
  progress.lastPanorama = questionData.panoramaId; // Panorama da última questão respondida

  document.cookie = `quizProgress=${JSON.stringify(
    progress
  )};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
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
  const selectedAnswer = getSelectedAnswer(question.id); // Pega a resposta salva

  let questionHTML = `
   <div class="quiz-modal-content-top">
      <div class="close-btn-modal-container">
        <button class="button-none">
          <i class="close-btn-modal" onclick="closeQuizModal()">&times;</i>
        </button> 
      </div>
    <h2 class="quiz-title">${question.question}</h2>
    </div>
    <div class="quiz-options">
  `;

  question.options.forEach((option) => {
    let extraClass = alreadyAnswered ? "disabled" : "";
    let iconContent = option.letter;
    let iconColor = "";
    let backgroundColor = "";

    // Antes do fechamento do modal (apenas cor de fundo)
    if (!alreadyAnswered && selectedAnswer === option.letter) {
      extraClass += " selected"; // Apenas a cor de fundo
    }

    // Após reabrir o modal (aplica a estilização completa)
    if (alreadyAnswered && selectedAnswer === option.letter) {
      extraClass += " selected-option";
    }

    if (alreadyAnswered) {
      if (option.correct) {
        extraClass += " correct";
        iconContent = "✔"; // ✔
        iconColor = "correct-icon";
        backgroundColor = "option-already-answered";
      } else {
        extraClass += " incorrect";
        iconContent = "✖"; // ✖
        iconColor = "incorrect-icon";
        backgroundColor = "option-already-answered";
      }
    }

    questionHTML += `
      <button class="quiz-option ${extraClass}" 
              data-question-id="${question.id}" 
              data-answer="${option.letter}" 
              ${alreadyAnswered ? "disabled" : ""}>
        <span class="option-letter ${iconColor} ${backgroundColor}">${iconContent}</span>
        <span class="option-text">${option.answer}</span>
      </button>
    `;
  });

  // Adiciona o botão "OK" apenas se alreadyAnswered for falso
  if (!alreadyAnswered) {
    questionHTML += `<button id="confirmAnswer" class="confirm-btn" ${
      alreadyAnswered ? "disabled" : ""
    }>OK</button>`;
  }

  modalContent.innerHTML = questionHTML;

  // Evento para destacar a opção selecionada antes da confirmação
  if (!alreadyAnswered) {
    document.querySelectorAll(".quiz-option").forEach((button) => {
      button.addEventListener("click", function () {
        document
          .querySelectorAll(".quiz-option")
          .forEach((btn) =>
            btn.classList.remove("selected", "selected-option")
          );
        this.classList.add("selected"); // Apenas fundo cinza antes do fechamento
      });
    });

    document
      .getElementById("confirmAnswer")
      .addEventListener("click", function () {
        const selected = document.querySelector(".quiz-option.selected");
        if (selected) {
          const questionId = selected.getAttribute("data-question-id");
          const selectedAnswer = selected.getAttribute("data-answer");

          document.querySelectorAll(".quiz-option").forEach((btn) => {
            const answerLetter = btn.getAttribute("data-answer");
            const isCorrect = question.options.find(
              (opt) => opt.letter === answerLetter
            ).correct;

            let iconSpan = btn.querySelector(".option-letter");
            let textSpan = btn.querySelector(".option-text");

            // Se for a opção selecionada, destaca a opção selecionada
            if (btn.classList.contains("selected")) {
              btn.classList.add("selected-option");
            }

            if (isCorrect) {
              btn.classList.add("correct");
              iconSpan.textContent = "✔"; // ✅
              iconSpan.classList.add("correct-icon");
              iconSpan.classList.add("correct-background");
            } else {
              btn.classList.add("incorrect");
              iconSpan.textContent = "✖"; // ❌
              iconSpan.classList.add("incorrect-icon");
              iconSpan.classList.add("incorrect-background");
            }
            btn.classList.add("disabled");
            btn.disabled = true;

            // Remove a letra original para evitar duplicação
            textSpan.textContent = question.options.find(
              (opt) => opt.letter === answerLetter
            ).answer;
          });

          saveProgress(questionId, selectedAnswer);
          const confirmAnswer = document.getElementById("confirmAnswer");
          confirmAnswer.disabled = true;
          confirmAnswer.style.display = "none";
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

// Função para recuperar progresso salvo
function getProgress() {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    let [name, value] = cookie.split("=");
    if (name === "quizProgress") {
      let parsed = JSON.parse(decodeURIComponent(value));
      if (!parsed.selectedAnswers) {
        parsed.selectedAnswers = {}; // Garante que sempre tenha um objeto vazio
      }
      return parsed;
    }
  }
  return {
    answeredQuestions: [],
    lastQuestion: null,
    lastPanorama: null,
    selectedAnswers: {},
  };
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
