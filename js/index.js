/**
 * Bài 1: In một bảng số từ 1-100
 */
var printTable = function () {
  var table = "";

  for (var i = 0; i < 100; i += 10) {
    for (var j = 1; j <= 10; j++) {
      if (i === 0 && j < 10) {
        table += `0${i + j} `;
      } else {
        table += `${i + j} `;
      }
    }
    table += "\n";
  }

  console.log(table);
};

printTable();

/**
 * Bài 2: Viết function nhận vào tham số là một mảng số nguyên, tìm và in ra các số
 * nguyên tố trong mảng
 */
var checkPrimes = function (n) {
  if (n < 2) {
    return false;
  }

  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

var findPrimeNumber = function () {
  var arrayNumber = document.querySelector("#txtText2").value;
  arrayNumber = arrayNumber.split(",");
  var result = "";

  for (var i = 0; i < arrayNumber.length; i++) {
    if (checkPrimes(arrayNumber[i])) {
      result += `${arrayNumber[i]} `;
    }
  }

  console.log(`Các số nguyên tố có trong mảng là: ${result}`);
  document.querySelector(
    "#result2"
  ).innerHTML = `Các số nguyên tố có trong mảng là: ${result}`;
};

/**
 * Bài 3: Viết function nhận vào tham số n, tính S=(2+3+4...+n)+2n
 */
var calcSum = function () {
  var n = document.querySelector("#txtText3").value;
  var sum = 0;

  for (var i = 2; i <= n; i++) {
    sum += i;
  }
  sum += 2 * n;

  console.log(`S = ${sum}`);
  document.querySelector("#result3").innerHTML = `S = ${sum}`;
};

/**
 * Bài 4: Viết function nhận vào tham số n, tính số lượng ước số của n
 */
var findDivisor = function () {
  var n = document.querySelector("#txtText4").value;
  var result = "";

  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      result += `${i} `;
    }
  }

  console.log(`Ước số của ${n} là: ${result}`);
  document.querySelector(
    "#result4"
  ).innerHTML = `Ước số của ${n} là: ${result}`;
};

/**
 * Bài 5: Viết chương trình tìm số đảo ngược của 1 số nguyên dương n nhập từ bàn phím
 */
var reverseNumber = function () {
  var n = document.querySelector("#txtText5").value;
  var result = "";

  for (var i = 0; i < n.length; i++) {
    result = n[i] + result;
  }

  console.log(`Số đảo ngược của ${n} là ${result}`);
  document.querySelector(
    "#result5"
  ).innerHTML = `Số đảo ngược của ${n} là ${result}`;
};

/**
 * Bài 6: Tìm x nguyên dương lớn nhất, biết 1+2+3+...+x ≤ 100
 */
var findX = function () {
  var sum = 0;

  for (var i = 0; i <= 100; i++) {
    sum += i;
    if (sum > 100) {
      console.log(`Nguyên dương lớn nhất là: ${--i}`);
      return;
    }
  }
};

findX();

/**
 * Bài 7: Viết function nhận vào số n, in ra bảng cửu chương tương ứng với số đó.
 */
var multiplicationTable = function () {
  var n = document.querySelector("#txtText7").value;
  var table = "";

  for (var i = 0; i <= 10; i++) {
    table += `${n} x ${i} = ${n * i} <br/>`;
  }

  document.querySelector("#result7").innerHTML = table;
};

/**
 * Bài 8: Viết hàm chia bài cho 4 người chơi
 */
var distributeCards = function () {
  var cards = [
    "4K",
    "KH",
    "5C",
    "KA",
    "QH",
    "KD",
    "2H",
    "10S",
    "AS",
    "7H",
    "9K",
    "10D",
  ];
  var players = [[], [], [], []];
  var indexPlayer = 0;

  for (var i = 0; i < cards.length; i++) {
    if (indexPlayer === players.length) {
      indexPlayer = 0;
    }
    players[indexPlayer++].push(cards[i]);
  }

  console.log(players);
};

distributeCards();

/**
 * Bài 9: Tìm chó và gà
 */
var calcAnimals = function () {
  for (var dog = 1; dog < 36; dog++) {
    for (var chicken = 1; chicken < 36; chicken++) {
      if (dog + chicken === 36 && dog * 4 + chicken * 2 === 100) {
        console.log(`Chó: ${dog} con, Gà: ${chicken} con`);
      }
    }
  }
};

calcAnimals();

/**
 * Bài 10: Tìm góc lệch giữa kim giờ và kim phút
 * Theo công thức: 6 * m - 0.5 * (60 * h + m)
 */
var deviationAngle = function () {
  var h = +document.querySelector("#txtHour").value;
  var m = +document.querySelector("#txtMinute").value;

  var result = Math.abs(6 * m - 0.5 * (60 * h + m));

  console.log(`Góc lệch của ${h}:${m} là: ${result} độ`);
  document.querySelector(
    "#result10"
  ).innerHTML = `Góc lệch của ${h}:${m} là: ${result} độ`;
};
