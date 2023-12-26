/* console.log(dateTime.getHours())
console.log(dateTime.getMinutes())
console.log(dateTime.getSeconds()) */

let SetTime = () => {
  //create a Date object for get the current time
  let dateTime = new Date();

  //get the element using DOM
  let ampm = document.getElementById("ampm");
  let hour = dateTime.getHours();
  if (12 < hour) {
    hour -= 12;
    ampm.textContent = "PM";

    let sethour = document.getElementById("hrs").innerText = PadZero(hour);
  } else {
    let sethour = document.getElementById("hrs").innerText = PadZero(hour);
    ampm.textContent = "Am";
  }
  let minute = document.getElementById("min").innerText = PadZero(dateTime.getMinutes());
  let second = document.getElementById("sec").innerText =PadZero(dateTime.getSeconds());
};

function PadZero (num){
  return num<10?'0'+num:num
}

setInterval(SetTime, 500);
