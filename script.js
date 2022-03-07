let btnAdd = document.querySelector("#Add");
let table = document.querySelector("table");
let btnTotalCost = document.querySelector("#totalCost");
let salesTaxbtn = document.querySelector("#salesTax");
let itemType = document.querySelector("#itemType");
let itemName = document.querySelector("#itemName");
let price = document.querySelector("#price");
let quantity = document.querySelector("#quantity");
let totalItemsCost = document.querySelector("#totalItemsCost");
let salesTaxItems = document.querySelector("#salesTaxItems");

let totalItemsCost0 = 0;
const item = []; //for Total Cost
const tax = []; //for tax

const calculateTax = function (itemType) {
  let salesTaxRate;
  if (
    itemType.value === "Books" ||
    itemType.value === "Medicine" ||
    itemType.value === "Food"
  ) {
    salesTaxRate = 0;
  } else if (itemType.value === "Imported") {
    salesTaxRate = 0.05;
  } else {
    salesTaxRate = 0.1;
  }
  return salesTaxRate;
};

const display = function () {
  let type = itemType.value;
  let name = itemName.value;
  let iPrice = parseFloat(price.value);
  let taxRate = calculateTax(itemType);
  let iQuantity = parseFloat(quantity.value);
  let salesTax = taxRate * (Number(quantity.value) * parseFloat(price.value));

  table.classList.add("show");

  let Icost = Number(quantity.value) * parseFloat(price.value) + salesTax;
  let template = `
                <tr>
                    <td>${type}</td>
                    <td>${name}</td>
                    <td>${iPrice}</td>
                    <td>${iQuantity}</td>
                    <td>${Icost.toFixed(2)}</td>

                </tr>`;

  table.innerHTML += template;
  item.push(Icost);
  tax.push(salesTax);
};

console.log(tax);
btnAdd.addEventListener("click", display);

btnTotalCost.addEventListener("click", () => {
  let sum = 0;
  for (let i = 0; i < item.length; i++) {
    sum = sum + item[i];
  }
  totalItemsCost.textContent = sum.toFixed(2);
});
salesTaxbtn.addEventListener("click", () => {
  let sum = 0;
  for (let i = 0; i < tax.length; i++) {
    sum = sum + tax[i];
  }
  salesTaxItems.textContent = sum.toFixed(2);
});
