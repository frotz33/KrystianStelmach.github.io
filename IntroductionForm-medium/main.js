const calendarDates = document.querySelector('.contact-form__calendar-dates');

const chooseDay = (e) => {
  const day = e.target;
  // contact-form__calenar-date czy ma ta klase
  // const days = document.querySelectorAll('.contact-form__calendar-date');
  const dayActive = document.querySelector(
    '.contact-form__calenar-date--active'
  );
  //days lenght 0 -> zakonczenie funkcji
  // if (days.length == 0) return;
  // po clicku nadajemy clase calenar-date--active
  if (dayActive) {
    dayActive.classList.remove('contact-form__calenar-date--active');
  }
  // czy to dobry element jest klikniety
  day.classList.add('contact-form__calenar-date--active');
  //query selector na clase calenar-date--active, null, jezeli by cos znalazlo to tylko temu elementowi usuwamy ta klase
};
// 30 dni = 30 event listenerow -> 1 event listener na rodzica, e.target => event bubbling/ propagation
calendarDates.addEventListener('click', chooseDay);
