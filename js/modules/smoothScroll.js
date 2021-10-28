export default function smoothScroll() {
  const smooth = () => {
    const btns = document.querySelectorAll('a[href^="#"]');

    const handleEvent = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      const section = document.querySelector(href);

      section.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    };

    btns.forEach((btn) => {
      btn.addEventListener('click', handleEvent);
    });
  };
  smooth();
}
