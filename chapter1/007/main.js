const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

document.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;

  horizontal.style.top = `${y}px`;
  vertical.style.left = `${x}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  tag.style.left = `${x}px`
  tag.style.top = `${y}px`
  tag.innerHTML = `${x}, ${y}`;
});