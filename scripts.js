let isExplorer = true

function changeCard() {
  const card = document.querySelector('.card')
  const bg = isExplorer ? "ignite" : "explorer"
  isExplorer = !isExplorer
  card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}