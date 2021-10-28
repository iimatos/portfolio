export default function accordeon() {
  function handleAccordeon() {
    const tabAccordeon = document.querySelectorAll('.faq_item_question');

    function openTab(e) {
      const question = e.currentTarget;
      const resposta = question.nextElementSibling;
      const tabSpan = question.querySelector('.faq_item_question_button');
      resposta.classList.toggle('open');
      const hasClass = resposta.classList.contains('open');
      if (hasClass) {
        tabSpan.innerText = '-';
      } else {
        tabSpan.innerText = '+';
      }
    }

    tabAccordeon.forEach((tab) => {
      tab.addEventListener('click', openTab);
    });
  }

  window.addEventListener('load', handleAccordeon);
}
