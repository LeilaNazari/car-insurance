//variables

const form = document.querySelector("#request-quote");
const html = new HTMLUI();
//addEventListener

document.addEventListener("DOMContentLoaded", function () {
  //dispklay year
  
  html.makeYears();
});

//submit form

form.addEventListener("submit", function (e) {
  e.preventDefault();


  //read value from the form
  const make = document.querySelector("#make").value;
  const year = document.querySelector("#year").value;
  const level = document.querySelector("input[name='level']:checked").value;
  

  //check the value is empty


  if (make==='' || year==='' || level==='') {
    html.displayError('please enter all fields correctly')
  }else{
    console.log('alright');
  }
});
//objects

function HTMLUI() {}

//show this year
HTMLUI.prototype.makeYears = function () {
  let persianNumbers = [
      /۰/g,
      /۱/g,
      /۲/g,
      /۳/g,
      /۴/g,
      /۵/g,
      /۶/g,
      /۷/g,
      /۸/g,
      /۹/g,
    ],
    arabicNumbers = [
      /٠/g,
      /١/g,
      /٢/g,
      /٣/g,
      /٤/g,
      /٥/g,
      /٦/g,
      /٧/g,
      /٨/g,
      /٩/g,
    ],
    fixNumbers = function (str) {
      if (typeof str === "string") {
        for (var i = 0; i < 10; i++) {
          str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
      }
      return str;
    };

  //get max year
  let date = new Date().toLocaleDateString("fa-IR"),
    thisyear = date.slice(0, 4);
  max = fixNumbers(thisyear);

  //get min year
  let min = max - 20;

  //access to the select tag
  let selectyear = document.querySelector("#year");

  //creat for loop for option tag
  for (let i = max; i >= min; i--) {
    //creat option
    const option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    //append option to thr selectyear
    selectyear.appendChild(option);
  }
};


//display error in the form


HTMLUI.prototype.displayError=function(error){
const div=document.createElement('div')
div.classList='error'
div.innerText=error
form.insertBefore(div,document.querySelector('.btn-box'))
}