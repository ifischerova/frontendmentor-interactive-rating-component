const items = document.getElementsByClassName("scaleItem");

function activateItem(activatedItem) {
  for (i = 0; i < items.length; i++) {
    if (items[i] === activatedItem) {
      items[i].classList.add("active");
      items[i].ariaChecked=true;
//innerHTML gets the text from clicked li element and send it as the rating to the thank you card
      document.getElementById('rating').innerHTML=items[i].innerHTML;
    } else {
      items[i].classList.remove("active");
      items[i].ariaChecked=false;
    }
  }
}

for (i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    activateItem(this);
  });
}

function showThankYou() {
  const thankYouCard = document.getElementsByClassName("thankYouCard");
  const feedbackCard = document.getElementsByClassName("feedbackCard");

  thankYouCard[0].classList.toggle("hidden");
  feedbackCard[0].classList.toggle("hidden");
}
