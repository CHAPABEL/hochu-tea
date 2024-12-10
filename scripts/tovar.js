import {
  savedItems,
  updateRedNums,
  saveToLocalStorage,
  allTea,
} from "./script.js";
const itmList = document.getElementById("itmListCol");

function saveInfo(i) {
  savedItems.push(allTea[i]);
  saveToLocalStorage();
  updateRedNums();
}

function createObj() {
  itmList.innerHTML = "";
  for (let i = 0; i < allTea.length; i++) {
    const div = document.createElement("div");
    div.className =
      "flex text-center flex-col w-[350px] p-5 rounded-xl shrink-0 items-center gap-4";

    const img = document.createElement("img");
    img.className = "w-[75%]";
    img.src = allTea[i].img;
    div.appendChild(img);

    const name = document.createElement("p");
    name.className = "text-4xl border-b-4 border-b-gray-300";
    name.innerText = allTea[i].name;
    div.appendChild(name);

    const disc = document.createElement("p");
    disc.className =
      "text-sm text-center text-black bg-gradient-to-b from-gray-400 to-danger bg-clip-text text-transparent transition delay-[25ms] duration-300 ease-in-out hover:text-black hover:scale-110";
    disc.innerText = allTea[i].description;
    div.appendChild(disc);

    const price = document.createElement("span");
    price.className = "text-4xl font-thin text-gray-600";
    price.innerText = allTea[i].price + " РУБ";
    div.appendChild(price);

    const addBtn = document.createElement("button");
    addBtn.className =
      "text-2xl bg-orange-300 rounded-[50px] pl-12 pr-12 transition delay-[25ms] duration-300 ease-in-out hover:scale-110";
    addBtn.innerText = "КУПИТЬ";

    addBtn.onclick = () => {
      saveInfo(i);
    };
    div.appendChild(addBtn);

    itmList.appendChild(div);
  }
}
updateRedNums();
createObj();
