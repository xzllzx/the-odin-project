const container = document.querySelector("#container");

const red_para = document.createElement("p");
red_para.classList.add("content");
red_para.setAttribute("color", "red");
red_para.textContent = "Hey I'm red!";

container.appendChild(red_para);

const blue_head = document.createElement("h3");
blue_head.setAttribute("color", "blue");
blue_head.textContent = "I'm a blue h3!";

container.appendChild(blue_head);

const blackpink = document.createElement("div");

blackpink.style.border = "solid black";
blackpink.style.backgroundColor = "pink";

const div_h1 = document.createElement("h1");
div_h1.textContent = "I'm in a div";
const div_p = document.createElement("p");
div_p.textContent = "Me too!";

blackpink.appendChild(div_h1);
blackpink.appendChild(div_p);

container.appendChild(blackpink);

const btn = document.createElement("button");
btn.style.height = "100px";
btn.style.width = "1000px";
btn.textContent = "Click me!";

btn.addEventListener("click", function (e) {
  console.log(e.target);
  const new_color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  e.target.style.background = new_color;
  e.target.textContent = `I am now ${new_color}`;
  //   e.target.style.background = "#FF2222";
});
container.appendChild(btn);
