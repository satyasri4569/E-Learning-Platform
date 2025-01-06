document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.getElementById('progressBar');
  const progressStats = document.getElementById('progressStats');
  const totalQuestions = 10; // Total number of questions in the quiz

  // Simulate progress bar and stats based on the number of questions answered
  let questionsAttempted = Math.floor(Math.random() * totalQuestions) + 1; // Random number between 1 and totalQuestions
  const correctAnswers = Math.floor(Math.random() * (questionsAttempted + 1)); // Random number between 0 and questionsAttempted

  // Calculate percentage
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);

  // Update progress bar
  progressBar.style.width = scorePercentage + '%';
  progressBar.textContent = `${scorePercentage}%`;

  // Update progress stats
  progressStats.innerHTML = `
    <p>Questions Attempted: ${questionsAttempted}/${totalQuestions}</p>
  `;
});
