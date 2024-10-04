const btn = document.querySelector("button");
let counter = 0;
btn.addEventListener("click", () => {
  if (counter < 10) {
    counter++;
    console.log(counter);
  }
});

const input = document.querySelector("input");
const arr = [];
btn.addEventListener("click", () => {
  if (input) {
    //console.log(input.value);

    let val = input.value;

    arr.push(val);

    //console.log(arr);

    //document.querySelector("p").innerHTML = arr.find(checkName);

    function checkName(name) {
      return name;
    }

    const strName = arr.map(checkName);

    console.log(strName.toString());

    document.querySelector("p").innerHTML = strName.toString().split(",");
  }

  input.value = "";
});
