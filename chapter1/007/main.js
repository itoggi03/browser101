const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

// target 이미지가 다운받아지기 전에 getBoundingClientRect 되는 것을 막기 위해 load 된 후 실행하도록 변경
addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;

    /*
    성능 개선 전
    top, left를 쓰면 layout부터 다시 하기 때문에 성능이 나쁘다. 
    그래서 아래처럼 transform으로 바꿔줌!
      */
    // horizontal.style.top = `${y}px`;
    // vertical.style.left = `${x}px`;
    // target.style.left = `${x}px`;
    // target.style.top = `${y}px`;

    // tag.style.left = `${x}px`
    // tag.style.top = `${y}px`

    horizontal.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;

    tag.innerHTML = `${x}, ${y}`;
  });
});
