/*
Name : Md . Abib Ahmed Dipto 
project : cit home work 
Date : 03/01/2023
copyright:abibidipto@gmail.com
*/

const img = document.querySelector("#bulb");
const on = document.querySelector("#on");
const off = document.querySelector("#off");

on.addEventListener("click", e => {
  e.preventDefault();
  img.src = "./images/pic_bulbon.gif";
});

off.addEventListener("click", e => {
  e.preventDefault();
  img.src = "./images/pic_bulboff.gif";
});

let ans = window.prompt(
  " Wasting Energy is a bad habbit . will you turn off the switch after using it  ? "
);

if (ans === "no" || ans === "na" || ans === null || ans === "") {
  alert("please save energy");
} else {
  alert(" Thanks for be with us ");
}
