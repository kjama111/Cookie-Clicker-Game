console.log("hello");

async function getUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log(response);

  const data = await response.json();
  console.log(data);
  //data wrangling? Dont know how?
}
getUpgrades();

// const cookieContainer = document.getElementById("cookie-container");

// function createUpgrades(nameContent, costContent, increaseContent) {
//   const name = document.createElement("table");
//   const cost = document.createElement("table");
//   const increase = document.createElement("table");

//   name.textContent = nameContent;
//   cost.textContent = costContent;
//   increase.textContent = increaseContent;

//   cookieContainer.appendChild(name);
//   cookieContainer.appendChild(cost);
//   cookieContainer.appendChild(increase);
// }
// }

//   return data;
// }

// let shopUpgrades = [];

// async function displayUpgrades() {
//   const cookieData = await getUpgrades();

//   cookieData.forEach(function (cookie) {
//     createUpgrades(cookie.name, cookie.cost, cookie.increase);
//   });
// }

// displayUpgrades();

// let cookieCount = 0;

// let stats = {
//   cookieCount: 0,
//   cookiesPerSecond: 0,
// };

// let  cookiesPerSecond = 0;
// let intervalID;

// document.getElementById("cookie-per-second");

// setInterval(function () {
//   console.log("This will go up by 1 cookie per second");
// }, 1000);
// function getShopUpgrades() {}

// function hanldeCookieClick() {}

// addEventListener("click", hanldeCookieClick);

//   ++count;
//   console.log(count);
// }

// cookieCountButton.addEventListener("click", () => {
//   console.log("count:");
// });

function myCookieButton() {
  const numberElement = document.getElementById("cookie-total");
  const number = parseInt(numberElement.innerText, 10) + 1;
  numberElement.innerText = number;
}

// const form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const formData = new FormData(form);

//   localStorage.setItem();
// });

const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
  console.log("Reset");
});
