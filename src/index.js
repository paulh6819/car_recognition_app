import "./styles.css";

let fileUpload = document.getElementById("file-upload");

function handleFileSelect(event) {
  let file = event.target.files[0];
  console.log("Selected file:", file);

  if (file && file.type.match(/^image\//)) {
    let reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.id = "uploaded-image";

      document.body.appendChild(img);
    };

    reader.readAsDataURL(file);
    alert("TRICKED YOU!!! Just hacked all your data 😂😂😂 - Paul Henderson");
  } else {
    alert("Invalid file type. Please select an image file.");
  }
}

fileUpload.addEventListener("change", handleFileSelect);

document.querySelectorAll("drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("dragover", (e) => {
    dropZoneElement.classList.add("drop-zone--over");
  });
});

const tree = document.getElementById("monkey");

tree.addEventListener("click", (e) => {
  let div = document.createElement("div");
  div.textContent = "THIS IS MY BIG BOY DIV";
  div.style.fontSize = "32";

  tree.parentNode.insertBefore(div, tree.nextSibling);
});

const monkey = document.getElementById("monkey");

monkey.addEventListener("dragover", (event) => {
  event.preventDefault();
  console.log("Dragover event occurred");
  monkey.style.opacity = 0.5;
});

monkey.addEventListener("drop", (event) => {
  event.preventDefault();
  monkey.style.opacity = 1;
  console.log("there has been a drop event");

  const files = event.dataTransfer.files;
  let file;
  if (files.length > 0) {
    file = files[0];
    console.log("Dropped file: butt hole", file);
  }

  let reader = new FileReader();

  console.log(file, "this is the new file check");

  if (file && file.type.match(/^image\//)) {
    console.log(
      "ZZZZZZZZZZZZZZZZZZZZZohhhfuck yeah!!!! WEre on to something!!"
    );

    let reader = new FileReader();

    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.id = "uploaded-image";

      document.body.appendChild(img);
    };

    reader.readAsDataURL(file);
    // Create FormData
    let formData = new FormData();
    formData.append("file", file);

    fetch("https://api.carnet.ai/v2/mmg", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "api-key": "80222305-3516-40e6-8fa4-ced3e7dfd3bd" // replace with your API key
      },
      body: formData
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("CarNET API response:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  console.log("this is the read::::", reader);

  console.log(`files mother fucker:::::: ${files}`);

  for (let i = 0; i < files.length; i++) {
    let fileList = [];
    fileList.push(files[i]);
    console.log(`Dropped file ${i + 1}:`);
    console.log(`Name: ${files[i].name}`);
    console.log(`Type: ${files[i].type}`);
    console.log(fileList);
  }
});

const makeApi = document.getElementById("apiButton");
makeApi.addEventListener("click", () => {
  console.log("this API SHIT WORKINGjjlblblkbgjcchj DAWG");

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
});

let x = 100;
function firstFunc() {
  console.log(x);
  let x = 200;
}

firstFunc();
console.log(x);

if (true) {
  console.log("these NUTS!!!");
}

for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);
