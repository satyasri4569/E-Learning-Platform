document.querySelectorAll('.quiz-image-container').forEach(item => {
  item.addEventListener('click', function () {
    const quizId = this.getAttribute('data-quiz');

    // Check if the quiz form exists
    const quizForm = document.getElementById(quizId);
    if (!quizForm) {
      console.error(`Quiz form with ID "${quizId}" not found.`);
      return;
    }

    // Clone the quiz form to preserve functionality
    const clonedQuizForm = quizForm.cloneNode(true);

    // Remove any existing "Submit Quiz" button in the cloned form
    const existingSubmitButton = clonedQuizForm.querySelector('button[type="button"]');
    if (existingSubmitButton) {
      existingSubmitButton.remove();
    }

    // Replace the main content with the selected quiz
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = `
      <h1>Quiz</h1>
      <form id="active-quiz" class="quiz-form">
      </form>
      <div id="quiz-result"></div>
      <button type="button" onclick="reloadQuizzes()">Back to Quizzes</button>
    `;

    // Append the cloned form to the new main content
    mainElement.querySelector('#active-quiz').replaceWith(clonedQuizForm);

    // Add the Submit Quiz button to the cloned form
    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Submit Quiz';
    submitButton.onclick = submitQuiz;
    clonedQuizForm.appendChild(submitButton);

    // Show the cloned form
    clonedQuizForm.style.display = 'block';
  });
});

// Function to handle quiz submission and scoring
function submitQuiz() {
  const quizForm = document.querySelector('#active-quiz') || document.querySelector('.quiz-form');
  const formData = new FormData(quizForm);
  let score = 0;

  // Check each answer for correctness
  const questions = [...quizForm.querySelectorAll('p')];
  questions.forEach((question, index) => {
    const inputs = quizForm.querySelectorAll(`input[name="q${index + 1}"]`);
    const isAnswered = [...inputs].some(input => input.checked);
    if (isAnswered) {
      const selectedInput = [...inputs].find(input => input.checked);
      if (selectedInput.value === 'correct') {
        score++;
      }
    }
  });

  const totalQuestions = questions.length;
  const resultDiv = document.getElementById('quiz-result');
  resultDiv.textContent = `Your score: ${score} / ${totalQuestions}`;
}

// Function to reload the original quiz list
function reloadQuizzes() {
  location.reload();
}
