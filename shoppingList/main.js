const plusBtn = document.querySelector(".plusBtn");

// 플러스 버튼 눌렀을 때
plusBtn.addEventListener("click", () => {
  addList();
});

// 엔터 눌렀을 때
function enterKey() {
  if (window.event.keyCode == 13) {
    addList();
  }
}

// 입력받은 값을 추가하는 함수
function addList() {
  const list = document.querySelector(".list");
  const input = document.querySelector(".inputBox");
  if (input.value == "") {
    return;
  }

  const item = createItem(input.value);
  list.append(item);

  item.scrollIntoView({ block: "center" });

  input.value = ""; // 입력칸 초기화
}

// 아이템 요소를 만드는 함수
function createItem(text) {
  const item = document.createElement("div");
  item.setAttribute("class", "item");
  item.innerText = text;

  const trashBtn = document.createElement("button");
  trashBtn.setAttribute("class", "trash");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';

  trashBtn.addEventListener("click", () => {
    item.remove();
  });

  item.appendChild(trashBtn);

  return item;
}
