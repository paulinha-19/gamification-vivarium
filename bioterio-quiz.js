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
    feedback: {
      correct:
        "Você acertou! Coloque sua digital na fechadura para acessar a primeira área.",
      incorrect: "Que pena! Resposta errada.",
    },
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
    feedback: {
      correct: "Que ótimo! Toque na fechadura e acesse a área de paramentação.",
      incorrect: "Que pena! Resposta errada.",
    },
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
    feedback: {
      correct: "Parabéns! Você retirou todos os itens! 🎉",
      incorrect: "Que pena! Você não selecionou todos os itens corretamente.",
    },
  },
  {
    id: "question4",
    panoramaId: "img4",
    mediaIndex: 4,
    type: "ordering",
    question:
      "Agora organize  as imagens de acordo com a sequência correta de paramentação e mostre que é sagaz!",
    options: [
      {
        id: "order1",
        answer: "order1",
        order: 1,
        image: "./media//quiz/order-1.png",
      },
      {
        id: "order2",
        answer: "order2",
        order: 2,
        image: "./media//quiz/order-2.png",
      },
      {
        id: "order3",
        answer: "order3",
        order: 3,
        image: "./media//quiz/order-3.png",
      },
      {
        id: "order4",
        answer: "order4",
        order: 4,
        image: "./media//quiz/order-4.png",
      },
      {
        id: "order5",
        answer: "order5",
        order: 5,
        image: "./media//quiz/order-5.png",
      },
      {
        id: "order6",
        answer: "order6",
        order: 6,
        image: "./media//quiz/order-6.png",
      },
      {
        id: "order7",
        answer: "order7",
        order: 7,
        image: "./media//quiz/order-7.png",
      },
      {
        id: "order8",
        answer: "order8",
        order: 8,
        image: "./media//quiz/order-8.png",
      },
      {
        id: "order9",
        answer: "order9",
        order: 9,
        image: "./media//quiz/order-9.png",
      },
      {
        id: "order10",
        answer: "order10",
        order: 10,
        image: "./media//quiz/order-10.png",
      },
      {
        id: "order11",
        answer: "order11",
        order: 11,
        image: "./media//quiz/order-11.png",
      },
      {
        id: "order12",
        answer: "order12",
        order: 12,
        image: "./media//quiz/order-12.png",
      },
      {
        id: "order13",
        answer: "order13",
        order: 13,
        image: "./media//quiz/order-13.png",
      },
      {
        id: "order14",
        answer: "order14",
        order: 14,
        image: "./media//quiz/order-14.png",
      },
      {
        id: "order15",
        answer: "order15",
        order: 15,
        image: "./media//quiz/order-15.png",
      },
      {
        id: "order16",
        answer: "order16",
        order: 16,
        image: "./media//quiz/order-16.png",
      },
    ],
    feedback: {
      correct:
        "Muito bem! Você organizou corretamente a sequência de paramentação!",
      incorrect: "Que pena! Tente novamente organizar corretamente os passos.",
    },
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

// Função para retornar dados da questão correta
function getCorrectAnswers(question, selectedAnswers) {
  let isFullyCorrect = false; // Declarado antes para ser usado no escopo global da função
  if (question.type === "image-selection" || question.type === "ordering") {
    // 🚀 Verifica se todas as respostas corretas foram selecionadas
    const allCorrectAnswers = question.options
      .filter((opt) => opt.correct)
      .map((opt) => opt.id);

    const correctSelectionsCount = selectedAnswers.filter((ans) =>
      allCorrectAnswers.includes(ans)
    ).length;

    isFullyCorrect =
      selectedAnswers.length === allCorrectAnswers.length &&
      selectedAnswers.every((ans) => allCorrectAnswers.includes(ans));

    return { allCorrectAnswers, isFullyCorrect, correctSelectionsCount };
  }
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

  let isFullyCorrect = false; // Declarado antes para ser usado no escopo global da função
  let correctSelectionsCount = 0; // Declarado antes para ser usado no escopo global da função
  let allCorrectAnswers = []; 

  const progress = getProgress();
  const alreadyAnswered = progress.answeredQuestions.includes(question.id);
  const selectedAnswers = getSelectedAnswer(question.id); // Pega a resposta salva

  if (question.type === "image-selection" || question.type === "ordering") {
    // 🚀 Verifica se todas as respostas corretas foram selecionadas
    allCorrectAnswers = question.options
      .filter((opt) => opt.correct)
      .map((opt) => opt.id);

    correctSelectionsCount = selectedAnswers.filter((ans) =>
      allCorrectAnswers.includes(ans)
    ).length;

    isFullyCorrect =
      selectedAnswers.length === allCorrectAnswers.length &&
      selectedAnswers.every((ans) => allCorrectAnswers.includes(ans));
  }

  let gapValue =
    question.type === "image-selection" || question.type === "ordering"
      ? "quiz-options-without-gap"
      : "quiz-options-gap";

  let questionHTML = ``;

  questionHTML = `
   <div class="quiz-modal-content-top">
      <div class="close-btn-modal-container">
        <button class="button-none">
          <i class="close-btn-modal" onclick="closeQuizModal()">&times;</i>
        </button> 
      </div>
    <h2 class="quiz-title">${question.question}</h2>
    </div>
                ${
      question.type === "image-selection"
        ? `<div class="quiz-progress"> <p id="progress-counter">Acertos: ${correctSelectionsCount}/${allCorrectAnswers.length}</p></div>`
        : ""
    }
    <div class="quiz-options ${gapValue}">
  `;

  question.options.forEach((option) => {
    let extraClass = alreadyAnswered ? "disabled" : "";
    let iconContent = "";
    let iconColor = "";
    let backgroundColor = "";

    // Caso seja seleção/ordenação de imagem, exibe a imagem
    if (question.type === "image-selection" || question.type === "ordering") {
      // Mantém respostas corretas já marcadas e permite novas interações até que todas sejam corretas
      if (selectedAnswers.includes(option.id)) {
        extraClass += option.correct ? " selected-correct" : "";
        iconContent = option.correct ? "✅" : "";
      }

      questionHTML += `
      <div class="image-container quiz-option ${extraClass}" 
                 data-question-id="${question.id}" 
              data-answer="${option.id}" 
              ${isFullyCorrect ? "disabled" : ""}>
        <img src="${option.image}" alt="${
        option.answer
      }" class="selectable-image">
        <span class="option-text">${option.answer}</span>
        <span class="icon-feedback">${iconContent}</span>
      </div>
      `;
    } else {
      iconContent = option.letter;

      // Verifica se essa opção foi selecionada pelo usuário
      const wasSelected = selectedAnswers === option.letter;

      // Após reabrir o modal (aplica a estilização completa)
      if (alreadyAnswered && selectedAnswers === option.letter) {
        extraClass += " selected-option";
      }

      if (alreadyAnswered) {
        if (wasSelected) {
          if (option.correct) {
            extraClass += " correct"; // Se foi selecionada e está correta, verde
            iconContent = "✔";
            iconColor = "correct-icon";
          } else {
            extraClass += " incorrect"; // Se foi selecionada e está errada, vermelho
            iconContent = "✖";
            iconColor = "incorrect-icon";
          }
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
    }
  });

  // Adiciona o botão "OK" apenas se alreadyAnswered for falso
  if (!alreadyAnswered && question.type !== "image-selection") {
    questionHTML += `<button id="confirmAnswer" class="confirm-btn" ${
      alreadyAnswered ? "disabled" : ""
    }>OK</button>`;
  }

  questionHTML += `</div>`;
  modalContent.innerHTML = questionHTML;

  // Adiciona eventos de clique apenas se o usuário ainda não acertou tudo
  if (question.type === "image-selection" && !isFullyCorrect) {
    document.querySelectorAll(".image-container").forEach((container) => {
      container.addEventListener("click", function () {
        handleImageClick(this, question);
      });
    });
  }

  // Evento para destacar a opção selecionada antes da confirmação
  if (!alreadyAnswered && question.type !== "image-selection") {
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

    // Function to handle the option selected
    document
      .getElementById("confirmAnswer")
      .addEventListener("click", function () {
        const selected = document.querySelector(".quiz-option.selected");
        if (selected) {
          const questionId = selected.getAttribute("data-question-id");
          const selectedAnswer = selected.getAttribute("data-answer");
          const question = quizData.find((q) => q.id === questionId);

          if (!question) return;

          let isCorrect = question.options.find(
            (opt) => opt.letter === selectedAnswer
          ).correct;

          // Exibe feedback no modal independente do tipo de resposta
          showCompletionModal(questionId, isCorrect);

          // Itera sobre todas as opções da questão
          document.querySelectorAll(".quiz-option").forEach((btn) => {
            const answerLetter = btn.getAttribute("data-answer");

            let iconSpan = btn.querySelector(".option-letter");
            let textSpan = btn.querySelector(".option-text");

            // Se for a opção selecionada, destaca a opção selecionada
            if (btn.classList.contains("selected")) {
              btn.classList.add("selected-option");
            }

            // Apenas a opção selecionada recebe destaque assim que é respondida
            if (btn === selected) {
              btn.classList.add(isCorrect ? "correct" : "incorrect");
              iconSpan.textContent = isCorrect ? "✔" : "✖";
              iconSpan.classList.add(
                isCorrect ? "correct-icon" : "incorrect-icon"
              );
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

// # Funções para questões do tipo: image-selection # //

// Exibe o modal de conclusão dinamicamente com confetes em tela cheia
function showCompletionModal(questionId, isCorrect) {
  const question = quizData.find((q) => q.id === questionId);
  if (!question) return;

  // Define o feedback com base na resposta correta/incorreta
  const message = isCorrect
    ? question.feedback.correct
    : question.feedback.incorrect;

  // Se o modal já existir, remove para recriar atualizado
  const existingModal = document.getElementById("completionModal");
  if (existingModal) {
    existingModal.remove();
  }

  // Criar o modal dinamicamente
  const modal = document.createElement("div");
  modal.id = "completionModal";
  modal.className = "completion-modal";
  // Define a altura correta com base na resposta
  modal.style.height = isCorrect ? "18%" : "15%";
  modal.style.height =
    isCorrect && question.type === "image-selection" ? "16%" : "15%";
  modal.innerHTML = `
  <h2 class="feedback-message">${message}</h2>
  <button onclick="closeBothModals()">Prosseguir</button>
`;

  // Se for uma resposta correta, exibe confetes
  // Criar e adicionar container de confetes na página inteira (somente se for resposta correta)
  if (isCorrect) {
    // Criar e adicionar container de confetes na página inteira
    let confettiContainer = document.createElement("div");
    confettiContainer.id = "confetti-container";
    document.body.appendChild(confettiContainer);
    generateConfetti();
    // Remover os confetes após 5 segundos
    setTimeout(() => {
      confettiContainer.remove();
    }, 5000);
  }

  document.body.appendChild(modal);
  // Exibir o modal
  modal.style.display = "flex";
  modal.style.flexDirection = "column";
}

// Gera cores aleatórias para os confetes
function getRandomColor() {
  const colors = ["#ff0", "#f00", "#0f0", "#00f", "#f0f", "#0ff", "#ff6600"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Função para criar confetes animados
function generateConfetti() {
  const confettiContainer = document.getElementById("confetti-container");

  for (let i = 0; i < 400; i++) {
    // Número de confetes aumentados para cobrir toda a tela
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 100}%`; // Posição aleatória horizontal
    confetti.style.animationDelay = `${Math.random() * 1}s`; // Atraso aleatório
    confetti.style.backgroundColor = getRandomColor(); // Cor aleatória
    confetti.style.width = `${Math.random() * 10 + 5}px`; // Tamanhos variados
    confetti.style.height = `${Math.random() * 20 + 5}px`; // Altura variada

    confettiContainer.appendChild(confetti);
  }
}

// Fecha o modal de conclusão e o modal do quiz
function closeBothModals() {
  const completionModal = document.getElementById("completionModal");
  if (completionModal) {
    completionModal.remove();
  }
}

// Abre modal da questão do tipo image-selection
function openImageSelectionModal() {
  document.getElementById("imageSelectionModal").style.display = "flex";
  renderQuestion();
}

// Fecha modal da questão do tipo image-selection
function closeImageSelectionModal() {
  document.getElementById("imageSelectionModal").style.display = "none";
}

// Função para controlar o clique nas imagens da questão do tipo image-selection
function handleImageClick(container, question) {
  const imageId = container.getAttribute("data-answer");
  const option = question.options.find((opt) => opt.id === imageId);
  const iconSpan = container.querySelector(".icon-feedback");

  let selectedAnswers = getSelectedAnswer(question.id);

  if (option.correct) {
    if (!selectedAnswers.includes(imageId)) {
      selectedAnswers.push(imageId);
    }
    container.classList.add("selected-correct");
    iconSpan.textContent = "✅";
  } else {
    iconSpan.textContent = "❌";
    setTimeout(() => {
      iconSpan.textContent = "";
    }, 500);
  }

  saveProgress(question.id, selectedAnswers); // Salva progresso

  // Se o usuário acertar todas as imagens, exibe modal de conclusão
  const allCorrectAnswers = question.options
    .filter((opt) => opt.correct)
    .map((opt) => opt.id);

  // Atualiza a contagem de acertos no DOM
  const correctSelectionsCount = selectedAnswers.filter((ans) =>
    allCorrectAnswers.includes(ans)
  ).length;
  const progressCounter = document.getElementById("progress-counter");
  if (progressCounter) {
    progressCounter.textContent = `Acertos: ${correctSelectionsCount}/${allCorrectAnswers.length}`;
  }

  const isFullyCorrect =
    selectedAnswers.length === allCorrectAnswers.length &&
    selectedAnswers.every((ans) => allCorrectAnswers.includes(ans));

  // Verifica se todas as imagens corretas foram selecionadas
  if (isFullyCorrect) {
    showCompletionModal(question.id, true);
  }
}
