const navigation = document.querySelector('.navigation');

const scrollWebsite = () => {
  if (window.scrollY >= 100) {
    navigation.classList.add('navigation--active');
    return;
  }
  navigation.classList.remove('navigation--active');
};

window.addEventListener('scroll', scrollWebsite);
