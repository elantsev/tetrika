// сначала читаем файл из инпута, потом выполняем преобразования согласно заданию:

document.getElementById("file").addEventListener("change", handleFileSelect);

function handleFileSelect(evt) {
  var file = evt.target.files[0];

  if (!file.type.match("text.*")) {
    return alert(file.name + " is not a valid text file.");
  }
  var reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function(e) {
    let names = reader.result.replace(/\"/g, "").split(",");
    task2(names);
  };
}

function task2(names) {
  // 1) Отсортировать все имена в лексикографическом порядке
  names.sort();

  // 2) Посчитать для каждого имени алфавитную сумму – сумму порядковых номеров букв (MAY: 13 + 1 + 25 = 39)

  let arrayOfSumms = names.map(name => sumOfAlphabetNumbers(name));

  function sumOfAlphabetNumbers(word) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = 0;
    for (let i = 0; i < word.length; i++) {
      result += alphabet.indexOf(word[i]) + 1;
    }
    return result;
  }

  // 3) Умножить алфавитную сумму каждого имени на порядковый номер имени в отсортированном списке (индексация начинается с 1). Например, если MAY находится на 63 месте в списке, то результат для него будет 63 * 39 = 2457.

  let arrayOfSummsN = arrayOfSumms.map((sum, i) => sum * (i + 1));

  // 4) Просуммировать произведения из п. 3 по всем именам из файла.

  let finalSumm = arrayOfSummsN.reduce((sum, acc) => sum + acc, 0);
  console.log(finalSumm);

  //   finalSumm =871853874
}
