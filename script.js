//scroll rész, sticky header
window.onscroll = () => {
let header= document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100)
}

// REGEX
const form = document.querySelector('form');
const fullNameInput = document.querySelector('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const mobileNumberInput = document.querySelector('input[type="number"]');
const emailSubjectInput = document.querySelector('input[type="text"]');
const messageInput = document.querySelector('textarea');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Regex minták
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^\d+$/;

  // Név ellenőrzése
  if (!nameRegex.test(fullNameInput.value)) {
    alert("Kérem adja meg helyesen a teljes nevét!");
    return;
  }

  // Email ellenőrzése
  if (!emailRegex.test(emailInput.value)) {
    alert("Kérem adjon meg egy helyes email címet!");
    return;
  }

  // Mobilszám ellenőrzése
  if (!mobileRegex.test(mobileNumberInput.value)) {
    alert("Kérem adjon meg egy helyes mobilszámot!");
    return;
  }

  // Email tárgyának ellenőrzése, ha nincs szöveg csak szóköz visszaadja az alertet
  if (!nameRegex.test(emailSubjectInput.value)) {
    alert("Kérem adjon meg egy helyes email tárgyat!");
    return;
  }

  // Üzenet ellenőrzése
  if (messageInput.value.trim() === '') {
    alert("Kérem írjon üzenetet!");
    return;
  }

  // CAPTCHA ellenőrzése
  var userInput = document.getElementById("captcha-input").value;
  var captchaNumber = parseInt(document.getElementById("captcha").textContent);

  if (parseInt(userInput) === captchaNumber) {
    // Ha a CAPTCHA helyes, elküldjük az űrlapot
    alert("Sikeres üzenet küldés!");
    myForm.submit();
  } else {
    // Ha a CAPTCHA helytelen, hibaüzenetet jelenítünk meg
    alert("Kérlek, add meg a helyes választ a CAPTCHA-hoz!");
    // Új CAPTCHA generálása
    generateCaptcha();
  }
});

// Ellenőrizzük, hogy a cookie-t már elfogadták-e
if (!getCookie('cookie_accepted')) {
  // Ha még nem fogadták el a cookie-t, megjelenítjük a figyelmeztetést
  document.getElementById('cookie-banner').style.display = 'block';
}

// Elfogadás gomb eseménykezelője
document.getElementById('cookie-accept-btn').addEventListener('click', function() {
  // Beállítjuk a cookie-t
  setCookie('cookie_accepted', true, 365);

  // Elrejtjük a figyelmeztetést
  document.getElementById('cookie-banner').style.display = 'none';
});

// Cookie beállítása
function setCookie(name, value, days) {
  var expires = '';
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

// Cookie lekérdezése
function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
          c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
      }
  }
  return null;
}


//Összehúzásra a nyil menjen a szöveggel.
function setArrowPosition() {
  const arrowUp = document.querySelector('.resume-content .arrow-up');
  const arrowDown = document.querySelector('.resume-content .arrow-down');
  const contentWidth = document.querySelector('.resume-content').offsetWidth;
  const arrowsWidth = arrowUp.offsetWidth;

  arrowUp.style.left = `${(contentWidth - arrowsWidth) / 2}px`;
  arrowDown.style.left = `${(contentWidth - arrowsWidth) / 2}px`;
}

window.addEventListener('resize', setArrowPosition);
setArrowPosition();

// CAPTCHA generálása és megjelenítése
function generateCaptcha() {
  var captchaNumber = Math.floor(Math.random() * 100) + 1;
  var captchaElement = document.getElementById("captcha");
  captchaElement.textContent = captchaNumber;
  return captchaNumber;
}

// Ellenőrzés az űrlap elküldésekor
var myForm = document.querySelector("form");
myForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // CAPTCHA ellenőrzése
  var userInput = document.getElementById("captcha-input").value;
  var captchaNumber = parseInt(document.getElementById("captcha").textContent);

  if (parseInt(userInput) === captchaNumber) {
    // Ha a CAPTCHA helyes, elküldjük az űrlapot
    myForm.submit();
  } else {
    // Ha a CAPTCHA helytelen, hibaüzenetet jelenítünk meg
    alert("Kérlek, add meg a helyes választ a CAPTCHA-hoz!");
    // Új CAPTCHA generálása
    generateCaptcha();
  }
});

// CAPTCHA generálása az oldal betöltésekor
generateCaptcha();