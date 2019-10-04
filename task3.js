// Напишите код, который при клике на любой div внутри root
// будет выводить в консоль цвет его бэкграунда:

let divs = document.querySelectorAll("#root div");

divs.forEach(div => {
  div.addEventListener("click", e => {
    event.stopPropagation(); // с остановкой всплытия надо аккуратно, но тут пожалуй уместно
    console.log(e.target.style.backgroundColor);
  });
});
