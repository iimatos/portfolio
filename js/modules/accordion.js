export default function createAccordion() {
  class Accordion {
    constructor(selectorBox, options) {
      this.boxes = document.querySelectorAll(selectorBox);
      this.answer = options.answer;
      this.question = options.question;
      this.classActive = options.classActive;
      this.button = options.button;
      this.self = this;
    }

    createEvent() {
      this.boxes.forEach((box) => box.addEventListener('click', this.toggle.bind(this)));
    }

    toggle(e) {
      const currentBox = e.currentTarget;
      const respostaBox = currentBox.querySelector(this.answer);
      const questionBox = currentBox.querySelector(this.question);
      const button = questionBox.querySelector(this.button);
      respostaBox.classList.toggle(this.classActive);
      if (respostaBox.classList.contains(this.classActive)) {
        button.innerText = '-';
      } else {
        button.innerText = '+';
      }
    }
  }

  window.addEventListener('load', () => {
    const faq = new Accordion('.faq_box', {
      boxes: '.faq_box',
      answer: '.faq_box_resposta',
      question: '.faq_box_question',
      classActive: 'open',
      button: '.faq_box_button',
    });
    faq.createEvent();
  });
}
