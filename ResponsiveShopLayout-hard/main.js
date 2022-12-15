// const shop = document.querySelector('.shop');
// shop null
// es modules
const initOnClickHandler = () => {
  // czasownik w funkcji
  const highlightActiveProduct = (e) => {
    const clickedElement = e.target;
    const parentClickedElement = clickedElement.parentElement;
    // if (!parentClickedElement) {
    //   return
    //   throw new Error()
    //   console.log('nie ma takiego elelemtnu')
    // }

    const parentHasClassShop =
      clickedElement.parentElement.classList.contains('shop');
    if (!clickedElement.classList.contains('shop__product')) {
      return;
    }

    // if (clickedElement.parentElement == document.body) return;
    else if (!parentHasClassShop) {
      clickedElement.parentElement.classList.toggle('shop__product--active');
    } else if (parentHasClassShop) {
      clickedElement.classList.toggle('shop__product--active');
    }

    // if (element.classList.contains('shop__product')) {
    //   element.classList.toggle('shop__product--active');
    //   // do tego momentu działa ale dodaje klase dla calego .shop
    // } else return;
    // if (e.target.classList.contains('shop')) return;
  };

  const shop = document.querySelector('.shop');
  shop.addEventListener('click', highlightActiveProduct);
};
initOnClickHandler();
