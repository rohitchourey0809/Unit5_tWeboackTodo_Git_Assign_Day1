// *  import loader file

import "./index.css";
import image1 from "../image/funny.png";
import image2 from "../image/Dragon.png";
console.log("hello react");

let image = document.createElement("img");
image.setAttribute("id", "picture1");
image.src = image1;

document.getElementById("pic").append(image);

document.querySelector("form").addEventListener("submit", TodoSubmit);

function TodoSubmit(event) {
  event.preventDefault();

  const items = document.querySelector("#items").value;
  //   items.color = blue;
  console.log(items);

  const root = document.getElementById("root");
  root.setAttribute("id", "root");

  root.append(items);
}
