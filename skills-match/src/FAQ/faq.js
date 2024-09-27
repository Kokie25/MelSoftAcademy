
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {

    const faqItem = question.parentElement;
    faqItem.classList.toggle('active');
    
    const answer = faqItem.querySelector('.faq-answer');
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

    const toggleIcon = question.querySelector('.faq-toggle');
    if (toggleIcon) {
      toggleIcon.textContent = faqItem.classList.contains('active') ? '-' : '+';
    }
  });
});
