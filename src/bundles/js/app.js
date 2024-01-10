import '../scss/app.scss'
import 'Assets/base.css';

const bootstrap = require('bootstrap/js/index.esm.js');

document.querySelectorAll('[data-bs-toggle="tooltip"], .tooltip')
  .forEach(tooltip => {
    new bootstrap.Tooltip(tooltip)
  });

document.querySelectorAll('.copy-to-cb')
  .forEach(copyBtn => {
    copyBtn.addEventListener('click', (event) => {
      let value = event.target.textContent;

      if (event.target.getAttribute('data-copy-value') && event.target.getAttribute('data-copy-value') !== null) {
        value = event.target.getAttribute('data-copy-value');
      }

      navigator.clipboard.writeText(value);
      event.target.classList.add('copied');

      // alert(`${value} Copied to clipboard!`);

      setTimeout(function(){
        event.target.classList.remove('copied');
      }, 2000);
    });
  });