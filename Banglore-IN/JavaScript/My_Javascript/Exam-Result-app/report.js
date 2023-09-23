document.getElementById("btn").addEventListener("click", myFunction);

function myFunction() {
  let student_name = document.getElementById("name").value;
  let student_batch = document.getElementById("batch").value;
  let html_Marks = document.getElementById("html").value;
  let css_Marks = document.getElementById("css").value;
  let javascript_Marks = document.getElementById("javascript").value;
  let react_Marks = document.getElementById("react").value;
  let communication_Marks = document.getElementById("mock").value;

  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerText = student_name;
  td1.style.border = "1px solid black";
  td1.style.padding = "5px";
  let td2 = document.createElement("td");
  td2.innerText = student_batch;
  td2.style.border = "1px solid black";
  td2.style.padding = "5px";
  let td3 = document.createElement("td");
  td3.innerText = html_Marks;
  td3.style.border = "1px solid black";
  td3.style.padding = "5px";
  let td4 = document.createElement("td");
  td4.innerText = css_Marks;
  td4.style.border = "1px solid black";
  td4.style.padding = "5px";
  let td5 = document.createElement("td");
  td5.innerText = javascript_Marks;
  td5.style.border = "1px solid black";
  td5.style.padding = "5px";
  let td6 = document.createElement("td");
  td6.innerText = react_Marks;
  td6.style.border = "1px solid black";
  td6.style.padding = "5px";
  let td7 = document.createElement("td");
  td7.innerText = communication_Marks;
  td7.style.border = "1px solid black";
  td7.style.padding = "5px";

  let obtainMarks =
    Number(html_Marks) +
    Number(css_Marks) +
    Number(javascript_Marks) +
    Number(react_Marks) +
    Number(communication_Marks);
  let per = (obtainMarks / 50) * 100;

  let td8 = document.createElement("td");
  td8.innerText = Math.trunc(per) + "%";
  td8.style.border = "1px solid black";
  td8.style.padding = "5px";

  let td9 = document.createElement("td");
  if (per > 35 && per < 60) {
    td9.innerText = "B";
    td9.style.color = "white";
    td9.style.backgroundColor = "blue";
  } else if (per > 60 && per < 85) {
    td9.innerText = "A";
    td9.style.color = "white";
    td9.style.backgroundColor = "green";
  } else if (per > 85) {
    td9.innerText = "A+";
    td9.style.color = "white";
    td9.style.backgroundColor = "gold";
  } else if (per < 35) {
    td9.innerText = "Fail";
    td9.style.color = "white";
    td9.style.backgroundColor = "red";
  }
  tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
  document.querySelector("tbody").append(tr);
}
