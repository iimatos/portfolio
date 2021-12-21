export default function isOnView() {
  const questions = document.querySelectorAll('.faq_box_question');

  const options = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0,
  };

  function animate(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const item = entry.target;
        item.classList.add('spinButton');
      }
    });
  }

  const observer = new IntersectionObserver(animate, options);

  questions.forEach((question) => {
    observer.observe(question);
  });
}
