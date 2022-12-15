const initOnClickHandler = () => {
  const highlightActiveProduct = (e) => {
    e.currentTarget.classList.toggle('shop__product--active');
    console.log(e.currentTarget.classList);
  };

  const shopProducts = document.querySelectorAll('.shop__product');
  shopProducts.forEach((shopProduct) => {
    shopProduct.addEventListener('click', highlightActiveProduct);
  });
};
initOnClickHandler();
