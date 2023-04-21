let addUser = (event) => {
  event.preventDefault();

  let form = document.getElementById("user_form");

  let name = form.name.value;
  let batch = form.batch.value;
  let course = form.course.value;
  let age = +form.age.value;
  let mobile = +form.mobile.value;
  let score = +form.score.value;

  let user = { name, batch, course, age, mobile, score };

  console.log(user);
};
