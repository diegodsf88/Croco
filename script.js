const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    card.textContent = "Crocodile Fact " + (index + 1);
  });
});
