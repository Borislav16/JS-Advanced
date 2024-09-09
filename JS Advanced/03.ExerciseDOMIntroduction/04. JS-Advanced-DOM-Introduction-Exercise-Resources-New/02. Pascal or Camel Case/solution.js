function solve() {
  debugger;
  const text = document.getElementById('text').value;
  const givenCase = document.getElementById('naming-convention').value;

  if (givenCase != "Camel Case" && givenCase != "Pascal Case") {
    document.getElementById('result').textContent = 'Error!';
  } else {
    let arr = text.split(" ");
    let result = [];
    for (let word of arr) {
      let copy = word.split("");
      let mod = [];
      for (let i = 0; i < copy.length; i++) {
        if (i == 0) {
          mod.push(copy[i].toUpperCase());
        } else {
          mod.push(copy[i].toLowerCase());
        }
      }
      result.push(mod.join(""));
    }
    if (givenCase == "Camel Case") {
      result[0] = result[0].toLowerCase();
    }
    document.getElementById('result').textContent = result.join("");
  }
}