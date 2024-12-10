import {
  allTea,
  updateRedNums,
  saveToLocalStorage,
  savedItems,
} from "./script.js";

const shopItm = document.getElementById("shopItems");
const popupBg = document.getElementById("popupbBg");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

function addShopItms() {
  shopItm.innerHTML = "";
  if (savedItems != -null) {
    savedItems.forEach((item, index) => {
      const allShpItm = document.createElement("div");
      allShpItm.className =
        "flex snap-start justify-between p-8 w-[95%] ml-auto mr-auto border-4 rounded-[55px] border-orange-300";
      allShpItm.id = index;
      const lItms = document.createElement("div");
      lItms.className = "flex gap-8";
      const shpImg = document.createElement("img");
      shpImg.src = item.img;
      shpImg.className = "w-[175px] h-[175px]";
      lItms.appendChild(shpImg);

      const textCon = document.createElement("div");
      textCon.className = "flex flex-col gap-4 w-[55%]";

      const mainText = document.createElement("span");
      mainText.className = "text-4xl";
      mainText.innerText = item.name;

      const btmText = document.createElement("span");
      btmText.className =
        "text-xl text-gray-500 bg-gradient-to-b transition delay-[25ms] duration-300 ease-in-out active:scale-110";
      btmText.innerText = item.description;

      const rItms = document.createElement("div");
      rItms.className = "flex gap-14 items-center";

      const buyBtn = document.createElement("button");
      buyBtn.className =
        "text-2xl bg-orange-300 rounded-[50px] pt-2 pb-2 pl-12 pr-12 transition delay-[25ms] duration-300 ease-in-out hover:scale-110";
      buyBtn.innerText = "КУПИТЬ";
      buyBtn.onclick = popupInput;

      const priceText = document.createElement("span");
      priceText.className =
        "w-[270px] text-right font-thin text-gray-600 text-5xl";
      priceText.innerText = item.price + " РУБ";

      const btnCon = document.createElement("div");
      btnCon.className = "flex gap-4";

      const delBtn = document.createElement("button");
      delBtn.className =
        "font-normal text-gray-500 transition delay-[25ms] duration-300 ease-in-out hover:scale-110 hover:text-red-400 text-2xl ";
      delBtn.innerText = "X";
      delBtn.onclick = () => removeItem(index);

      textCon.appendChild(mainText);
      textCon.appendChild(btmText);
      lItms.appendChild(textCon);
      rItms.appendChild(priceText);
      btnCon.appendChild(delBtn);
      btnCon.appendChild(buyBtn);
      rItms.appendChild(btnCon);

      allShpItm.appendChild(lItms);
      allShpItm.appendChild(rItms);

      shopItm.appendChild(allShpItm);
    });
  } else {
    const nonediv = document.createElement("div");
    nonediv.className =
      "flex justify-around items-center mt-32 p-8 w-[75%] ml-auto mr-auto border-8 rounded-[55px] border-orange-300";
    const sadImg = document.createElement("img");
    sadImg.className = "w-[15%]";
    sadImg.src = "../assets/sadTea.svg";

    const nTextCon = document.createElement("div");
    nTextCon.className = "flex  flex-col gap-16";
    const mainText = document.createElement("h1");
    mainText.className = "text-8xl";
    mainText.innerText = "корзина пуста";
    const bottomText = document.createElement("a");
    bottomText.className =
      "text-4xl text-center bg-orange-300 rounded-[50px] pt-2 pb-2 items-center w-[40%] transition delay-[25ms] duration-300 ease-in-out hover:scale-110";
    bottomText.innerText = "КУПИТЬ";
    bottomText.href = "../pages/poductItems.html";
    nTextCon.appendChild(mainText);
    nTextCon.appendChild(bottomText);

    nonediv.appendChild(sadImg);
    nonediv.appendChild(nTextCon);
    shopItm.appendChild(nonediv);
  }
}

function popupInput() {
  popupBg.classList.replace("opacity-0", "opacity-100");
  popupBg.classList.remove("pointer-events-none");
  popup.classList.replace("scale-0", "scale-100");
}

closePopup.addEventListener("click", () => {
  popupBg.classList.replace("opacity-100", "opacity-0");
  popupBg.classList.add("pointer-events-none");
  popup.classList.replace("scale-100", "scale-0");
});

function removeItem(index) {
  savedItems.splice(index, 1);

  saveToLocalStorage();
  updateRedNums();
  addShopItms();
}
updateRedNums();
addShopItms();
