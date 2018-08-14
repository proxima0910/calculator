// document.body.innerHTML = "";
// let name = "윤지영";
// const age = 16;

function printf(contents) {
  document.body.innerHTML += contents;
  document.body.innerHTML += "<br>";
}

// printf(name);
// printf(age);
// printf(typeof name);
// printf(typeof age);

// name = [
//   "김효진",
//   "한건호",
//   "송가은",
//   "이지호",
//   "이지호2",
//   "이서연",
//   "윤지영",
//   "최윤하"
// ];

// for(let i = 0; i < name.lenth; i++) {
//   if(i%2 === 1) {
//   printf(name[i]);
//     }
// }

const input = document.getElementById("input");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");

let list = [];

button1.onclick = function() {
  list.push(input.value);
  list.push("+");
  input.value = "";
};
button2.onclick = function() {
  list.push(input.value);
  list.push("-");
  input.value = "";
};
button3.onclick = function() {
  list.push(input.value);
  list.push("*");
  input.value = "";
};
button4.onclick = function() {
  list.push(input.value);
  list.push("/");
  input.value = "";
};
button5.onclick = function() {
  list.push(input.value);
  if (list[1] === "+") {
    alert(Number(list[0]) + Number(list[2]));
  } else if (list[1] === "-") {
    alert(Number(list[0]) - Number(list[2]));
  } else if (list[1] === "*") {
    alert(Number(list[0]) * Number(list[2]));
  } else if (list[1] === "/") {
    alert(Number(list[0]) / Number(list[2]));
  }
  list = [];
};
