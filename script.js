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
   alert("Kérem adja meg a helyes teljes nevét!");
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
  alert("Sikeres üzenet küldés!")
});