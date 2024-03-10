let stapleFoodsHTML = '';

stapleFoods.forEach((stapleFood, index) => {
  stapleFoodsHTML += `
    <div class="item-container" id="stapleItem-${index}">
      <div class="nameE">${stapleFood.nameE}</div>
      <div class="nameC">${stapleFood.nameC}</div>
      <div class="input"> 
        <select class="valueSelector" data-index="${index}" data-type="staple">
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
        </select>
      </div>

      <div class="unit">${stapleFood.unit}</div>
      <div class="kcal">${stapleFood.kcal}</div>
      <div class="showKcal" id="result-staple-${index}">0</div>
    </div>
  `;
});

document.querySelector('.js-stapleFood-grid').innerHTML = stapleFoodsHTML;

let condimentsHTML = '';

condiments.forEach((condiment, index) => {
  condimentsHTML += `
    <div class="item-container" id="condimentItem-${index}">
      <div class="nameE">${condiment.nameE}</div>
      <div class="nameC">${condiment.nameC}</div>
      <div class="input"> 
        <select class="valueSelector" data-index="${index}" data-type="condiment">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div class="unit">${condiment.unit}</div>
      <div class="kcal">${condiment.kcal}</div>
      <div class="showKcal" id="result-condiment-${index}">0</div>
    </div>
  `;
});

document.querySelector('.js-condiments-grid').innerHTML = condimentsHTML;

let fruitsHTML = '';

fruits.forEach((fruit, index) => {
  fruitsHTML += `
    <div class="item-container" id="fruitItem-${index}">
      <div class="nameE">${fruit.nameE}</div>
      <div class="nameC">${fruit.nameC}</div>
      <div class="input"> 
        <select class="valueSelector" data-index="${index}" data-type="fruit">
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="400">400</option>
        <option value="500">500</option>
        </select>
      </div>
      <div class="unit">${fruit.unit}</div>
      <div class="kcal">${fruit.kcal}</div>
      <div class="showKcal" id="result-fruit-${index}">0</div>
    </div>
  `;
});

document.querySelector('.js-fruits-grid').innerHTML = fruitsHTML;

let vegetablesHTML = '';

vegetables.forEach((vegetable, index) => {
  vegetablesHTML += `
    <div class="item-container" id="vegetableItem-${index}">
      <div class="nameE">${vegetable.nameE}</div>
      <div class="nameC">${vegetable.nameC}</div>
      <div class="input"> 
        <select class="valueSelector" data-index="${index}" data-type="vegetable">
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="400">400</option>
        <option value="500">500</option>
        </select>
      </div>
      <div class="unit">${vegetable.unit}</div>
      <div class="kcal">${vegetable.kcal}</div>
      <div class="showKcal" id="result-vegetable-${index}">0</div>
    </div>
  `;
});

document.querySelector('.js-vegetables-grid').innerHTML = vegetablesHTML;

let meatEggDairysHTML = '';

meatEggDairys.forEach((meatEggDairy, index) => {
  meatEggDairysHTML += `
    <div class="item-container" id="meatEggDairyItem-${index}">
      <div class="nameE">${meatEggDairy.nameE}</div>
      <div class="nameC">${meatEggDairy.nameC}</div>
      <div class="input"> 
        <select class="valueSelector" data-index="${index}" data-type="meatEggDairy">
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="400">400</option>
        <option value="500">500</option>
        </select>
      </div>
      <div class="unit">${meatEggDairy.unit}</div>
      <div class="kcal">${meatEggDairy.kcal}</div>
      <div class="showKcal" id="result-meatEggDairy-${index}">0</div>
    </div>
  `;
});

document.querySelector('.js-meatEggDairys-grid').innerHTML = meatEggDairysHTML;

// 获取所有选择器元素
var selectElements = document.querySelectorAll(".valueSelector");

// 遍历所有选择器元素，为每个添加事件监听器
selectElements.forEach((selectElement) => {
  selectElement.addEventListener("change", updateKcal);
});

// 更新显示热量的函数
function updateKcal(event) {
  // 获取被选中的值
  var selectedValue = parseInt(event.target.value);

  // 获取对应的对象
  var index = event.target.getAttribute("data-index");
  var type = event.target.getAttribute("data-type");
  var item;

  switch (type) {
    case "staple":
      item = stapleFoods[index];
      var resultElement = document.getElementById(`result-staple-${index}`);
      break;
    case "condiment":
      item = condiments[index];
      var resultElement = document.getElementById(`result-condiment-${index}`);
      break;
    case "fruit":
      item = fruits[index];
      var resultElement = document.getElementById(`result-fruit-${index}`);
      break;
    case "vegetable":
      item = vegetables[index];
      var resultElement = document.getElementById(`result-vegetable-${index}`);
      break;
    case "meatEggDairy":
      item = meatEggDairys[index];
      var resultElement = document.getElementById(`result-meatEggDairy-${index}`);
      break;
  }

  // 计算并更新显示热量的元素内容
  resultElement.textContent = item.kcal * selectedValue;
}



//增加button


// 获取所有选择器元素
var selectElements = document.querySelectorAll(".valueSelector");

// 遍历所有选择器元素，为每个添加事件监听器
selectElements.forEach((selectElement) => {
  selectElement.addEventListener("change", updateKcal);
});

// 获取计算按钮元素
var calculatorButton = document.getElementById("calculator");

// 为按钮添加点击事件监听器
calculatorButton.addEventListener("click", calculateTotalKcal);

// 更新显示热量的函数
function updateKcal(event) {
  // 获取被选中的值
  var selectedValue = parseInt(event.target.value);

  // 获取对应的对象
  var index = event.target.getAttribute("data-index");
  var type = event.target.getAttribute("data-type");
  var item;

  switch (type) {
    case "staple":
      item = stapleFoods[index];
      var resultElement = document.getElementById(`result-staple-${index}`);
      break;
    case "condiment":
      item = condiments[index];
      var resultElement = document.getElementById(`result-condiment-${index}`);
      break;
    case "fruit":
      item = fruits[index];
      var resultElement = document.getElementById(`result-fruit-${index}`);
      break;
    case "vegetable":
      item = vegetables[index];
      var resultElement = document.getElementById(`result-vegetable-${index}`);
      break;
    case "meatEggDairy":
      item = meatEggDairys[index];
      var resultElement = document.getElementById(`result-meatEggDairy-${index}`);
      break;
  }

  // 计算并更新显示热量的元素内容
  resultElement.textContent = item.kcal * selectedValue;
}

// 计算总热量的函数
function calculateTotalKcal() {
  var totalKcal = 0;

  // 遍历所有选择器元素，累加热量值
  selectElements.forEach((selectElement) => {
    var selectedValue = parseInt(selectElement.value);
    var index = selectElement.getAttribute("data-index");
    var type = selectElement.getAttribute("data-type");
    var item;

    switch (type) {
      case "staple":
        item = stapleFoods[index];
        break;
      case "condiment":
        item = condiments[index];
        break;
      case "fruit":
        item = fruits[index];
        break;
      case "vegetable":
        item = vegetables[index];
        break;
      case "meatEggDairy":
        item = meatEggDairys[index];
        break;
    }

    totalKcal += item.kcal * selectedValue;
  });

  // 更新显示总热量的元素内容
  var totalKcalElement = document.querySelector(".totalKcal");
  totalKcalElement.textContent = "Total Calorie: " + totalKcal;
}
