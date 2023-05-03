let port = [
  { image: "./Images/logo_01.png" },
  { image: "./Images/logo_02.png" },
  { image: "./Images/logo_03.png" },
  { image: "./Images/logo_04.png" },
];

port.forEach(function (elem) {
  let box = document.createElement("div");
  let avatar = document.createElement("img");
  avatar.setAttribute("src", elem.image);
  box.append(avatar);
  document.getElementById("port-image").append(box);
});

let photo = [
  {
    image: "./Images/img_01.png",
    date: "SEPTEMBER 21, 2017",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque est fuga nam atque,",
  },
  {
    image: "./Images/img_02.png",
    date: "SEPTEMBER 21, 2017",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque est fuga nam atque,",
  },
  {
    image: "./Images/img_03.png",
    date: "SEPTEMBER 21, 2017",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque est fuga nam atque,",
  },
];

photo.forEach(function (elem) {
  let box = document.createElement("div");
  let avatar = document.createElement("img");
  avatar.setAttribute("src", elem.image);

  let myDate = document.createElement("h1");
  myDate = innerText = elem.date;

  let myText = document.createElement("p");
  myText.innerText = elem.text;

  let btn = document.createElement("button");
  btn.innerText = "Read More >";

  box.append(avatar, myDate, myText, btn);
  document.getElementById("news-body").append(box);
});

let last = [
  { image: "./Images/logo_01.png" },
  { image: "./Images/logo_02.png" },
  { image: "./Images/logo_03.png" },
  { image: "./Images/logo_04.png" },
];

last.forEach(function (elem) {
  let box = document.createElement("div");
  let avatar = document.createElement("img");
  avatar.setAttribute("src", elem.image);
  box.append(avatar);
  document.getElementById("copy").append(box);
});
