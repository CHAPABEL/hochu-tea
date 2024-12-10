const redNums = document.getElementById("redNum");

export let savedItems = JSON.parse(localStorage.getItem("item")) || [];

export let allTea = [
  {
    name: "НОВОГОДНИЙ",
    description:
      "Новогодняя коллекция – самый классический, самый рождественский чай из всей коллекции.",
    price: "4000",
    img: "../assets/allTea/TEA1png.png",
  },
  {
    name: "ПУЭР",
    description:
      "Пуэр ценится за свой уникальный процесс выдержки. С годами его вкус становится более мягким и насыщенным.",
    price: "999",
    img: "../assets/allTea/PUER-TEA.png",
  },
  {
    name: "УЛУН",
    description:
      "Имбирное Рождество – самый классический, самый рождественский чай из всей коллекции.",
    price: "1299",
    img: "../assets/allTea/ULUN-TEA.png",
  },
  {
    name: "ЧЕРНЫЙ",
    description:
      "Этот чай – как та самая клюква в сахарной пудре, которую зимними вечерами принято подавать к чаю.",
    price: "599",
    img: "../assets/allTea/BLACK-TEA.png",
  },
  {
    name: "ЗЕЛЕНЫЙ",
    description:
      "Имбирное Рождество – самый классический, самый рождественский чай из всей коллекции.",
    price: "599",
    img: "../assets/allTea/GREEN-TEA.png",
  },
  {
    name: "КЛЮКВЕННЫЙ",
    description:
      "Этот чай – как та самая клюква в сахарной пудре, которую зимними вечерами принято подавать к чаю.",
    price: "1220",
    img: "../assets/allTea/KL-TEA.png",
  },
];

export function updateRedNums() {
  redNums.innerText = savedItems.length ? "+" + savedItems.length : "";
  redNums.className = "text-2xl font-normal text-red-600";
}

export function saveToLocalStorage() {
  localStorage.setItem("item", JSON.stringify(savedItems));
}

updateRedNums();
