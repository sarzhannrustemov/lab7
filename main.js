window.onload= function() {

titleText = 'Lab7';
document.title = titleText;

let h1_1 = document.querySelector('h1');
h1_1.innerText = "Lab7 Assignment";
h1_1.setAttribute("style", "color: blue");
let hr_1 = document.createElement("hr");
let h2_1 = document.createElement("h2");
h2_1.innerText = "Task";
let p_1 = document.createElement("p");
p_1.innerHTML = " In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques: ";
let ul_1 = document.createElement("ul");
let li_1 = document.createElement("li");
li_1.innerHTML = " find elements in the DOM (<b>5 points</b>);"
let li_2 = document.createElement("li");
li_2.innerHTML = " create/add/remove elements (<b>5 points</b>);"
let li_3 = document.createElement("li");
li_3.innerHTML = " change content of the elements (<b>5 points</b>);"
let li_4 = document.createElement("li");
li_4.innerHTML = " change styles of the elements (<b>5 points</b>);"
let li_5 = document.createElement("li");
li_5.innerHTML = " change attributes of the elements (<b>5 points</b>);"
let li_6 = document.createElement("li");
li_6.innerHTML = " change classes of the elements (<b>5 points</b>)."
ul_1.append(li_1, li_2, li_3, li_4, li_5, li_6);

let hr_2 = document.createElement("hr");
let h2_2 = document.createElement("h2");
h2_2.innerText = "Submission";
let p_2 = document.createElement("p");
p_2.innerHTML = " To submit your work, follow these instructions: ";
let ul_2 = document.createElement("ul");
let li_7 = document.createElement("li");
li_7.innerHTML = " Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>)."
let li_8 = document.createElement("li");
li_8.innerHTML = " Clone this repository to your local machine and work inside it."
let li_9 = document.createElement("li");
li_9.innerHTML = " Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with \"Hello, World!\" message (<b>1 point</b>)."
let li_10 = document.createElement("li");
li_10.innerHTML = " Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>)."
let li_11 = document.createElement("li");
li_11.innerHTML = " Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section)."
let li_12 = document.createElement("li");
li_12.innerHTML = " Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>)."
let li_13 = document.createElement("li");
li_13.innerHTML = " After you finish your work, submit it to the Github (<b>2 points</b>)."
ul_2.append(li_7, li_8, li_9, li_10, li_11, li_12, li_13);

let hr_3 = document.createElement("hr");

document.body.append(hr_1, h2_1, p_1, ul_1, hr_2, h2_2, p_2, ul_2, hr_3);

const lis = document.getElementsByTagName("li");

for (let i = 0; i < lis.length; i++) {
  if (i % 2 == 0) {
  	lis[i].style = "color: green";
  	lis[i].class = "odd";
  } else {
  	lis[i].style = "color: purple";
  	lis[i].class = "even";
  }
}

const h2s = document.getElementsByTagName("h2");

for (i = 0; i < h2s.length; i++) {
  h2s[i].style = "color: red";
}

};
