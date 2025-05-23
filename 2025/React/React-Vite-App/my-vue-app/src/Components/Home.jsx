import React, { useState } from "react";

const Home = () => {
  const myData = [
    {
      id: 0,
      questionText: "Which browsers support HTML5?",
      answerText:
        "The latest versions of Google Chrome, Apple Safari, Mozilla Firefox, and Opera all support most of the HTML5 features.",
      language: "HTML",
      difficultyLevel: "EASY",
    },
    {
      id: 1,
      questionText: "How to insert a copyright symbol on a browser page?",
      answerText:
        "You can insert a copyright symbol by using &copy; or &#169; in an HTML file.",
      language: "HTML",
      difficultyLevel: "MEDIUM",
    },
    {
      id: 2,
      questionText: "What is the difference between span and div?",
      answerText:
        "A div is a block-level element and a span is an inline element. The div should be used to wrap sections of a document, while use spans to wrap small portions of text, images, etc.",
      language: "HTML",
      difficultyLevel: "HARD",
    },
    {
      id: 3,
      questionText: "Why Use CSS?",
      answerText:
        "CSS is used to define styles for your web pages, including the design, layout, and variations in display for different devices and screen sizes.",
      language: "CSS",
      difficultyLevel: "EASY",
    },
    {
      id: 4,
      questionText: "What is RWD?",
      answerText:
        "RWD stands for Responsive Web Design. This technique is used to display the designed page perfectly on every screen size and device, for example, mobile, tablet, desktop, and laptop. You do not need to create a different page for each device.",
      language: "CSS",
      difficultyLevel: "MEDIUM",
    },
    {
      id: 5,
      questionText:
        "How would you use media queries in a mobile-first approach?",
      answerText: `There’s no way to avoid these nowadays, everyone expects their website to work on mobile devices, even if they don’t specifically ask for it. The most common approach is the mobile-first one. All styles outside of media queries are targeted at mobile devices. Then, through progressively larger media queries, you can style larger screens one step at a time.`,
      language: "CSS",
      difficultyLevel: "HARD",
    },
    {
      id: 6,
      questionText: "Which company developed JavaScript?",
      answerText: "Netscape is the software company who developed JavaScript.",
      language: "JAVASCRIPT",
      difficultyLevel: "EASY",
    },
    {
      id: 7,
      questionText: "What is this keyword in JavaScript?",
      answerText: "This keyword refers to the object from where it was called.",
      language: "JAVASCRIPT",
      difficultyLevel: "MEDIUM",
    },
    {
      id: 8,
      questionText: "What is the difference between null & undefined?",
      answerText:
        "Undefined means a variable has been declared but has not yet been assigned a value. On the other hand, null is an assignment value. It can be assigned to a variable as a representation of no value. Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.",
      language: "JAVASCRIPT",
      difficultyLevel: "HARD",
    },
  ];

  const [selectLanguage, setSelectLanguage] = useState("ALL");
  const handleChange = (e) => {
    setSelectLanguage(e.target.value);
  };

  console.log(selectLanguage);

  const FilterData =
    selectLanguage === "ALL"
      ? myData
      : myData.filter((item) => item.language === selectLanguage);

  return (
    <div>
      <h1> Home </h1>
      <label htmlFor="">Filter by languages</label>

      <select onChange={handleChange}>
        <option value="ALL">ALL</option>
        <option value="JAVASCRIPT">JAVASCRIPT</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
      </select>

      <br />
      {FilterData.map((el) => {
        return (
          <div key={el.id} style={{ border: "2px solid black" }}>
            <h1>Language:- {el.language} </h1>
            <h2> DifficultyLevel {el.difficultyLevel} </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
