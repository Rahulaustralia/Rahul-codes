import React, { useState } from "react";

const Arrayofobj = () => {
  const [dataGender, setDataGender] = useState([]);

  const peoples = [
    {
      id: 1,
      name: "Rahul Pandey",
      email: "rahul.pandey@example.com",
      phone: "9876543210",
      city: "Mumbai",
      age: 28,
      gender: "Male",
      language: "English",
      codingSkill: "JavaScript",
    },
    {
      id: 2,
      name: "Anjali Sharma",
      email: "anjali.sharma@example.com",
      phone: "8765432109",
      city: "Delhi",
      age: 26,
      gender: "Female",
      language: "Hindi",
      codingSkill: "JavaScript",
    },
    {
      id: 3,
      name: "Mohit Verma",
      email: "mohit.verma@example.com",
      phone: "7654321098",
      city: "Bengaluru",
      age: 30,
      gender: "Male",
      language: "English",
      codingSkill: "Java",
    },
    {
      id: 4,
      name: "Sneha Kapoor",
      email: "sneha.kapoor@example.com",
      phone: "6543210987",
      city: "Pune",
      age: 27,
      gender: "Female",
      language: "Marathi",
      codingSkill: "Python",
    },
    {
      id: 5,
      name: "Aman Singh",
      email: "aman.singh@example.com",
      phone: "5432109876",
      city: "Hyderabad",
      age: 25,
      gender: "Male",
      language: "Telugu",
      codingSkill: "JavaScript",
    },
    {
      id: 6,
      name: "Priya Mehta",
      email: "priya.mehta@example.com",
      phone: "4321098765",
      city: "Ahmedabad",
      age: 29,
      gender: "Female",
      language: "Gujarati",
      codingSkill: "C++",
    },
    {
      id: 7,
      name: "Ravi Deshmukh",
      email: "ravi.deshmukh@example.com",
      phone: "3210987654",
      city: "Nagpur",
      age: 31,
      gender: "Male",
      language: "Marathi",
      codingSkill: "Python",
    },
    {
      id: 8,
      name: "Neha Patil",
      email: "neha.patil@example.com",
      phone: "2109876543",
      city: "Nashik",
      age: 24,
      gender: "Female",
      language: "Hindi",
      codingSkill: "C++",
    },
    {
      id: 9,
      name: "Arjun Reddy",
      email: "arjun.reddy@example.com",
      phone: "1098765432",
      city: "Chennai",
      age: 32,
      gender: "Male",
      language: "Tamil",
      codingSkill: "Java",
    },
    {
      id: 10,
      name: "Divya Nair",
      email: "divya.nair@example.com",
      phone: "9988776655",
      city: "Kochi",
      age: 27,
      gender: "Female",
      language: "Malayalam",
      codingSkill: "Java",
    },
  ];

  const handleGender = (gender) => {
    let Gender = peoples.filter((el) => {
      return el.gender === gender;
    });
    setDataGender(Gender);
  };

  const handleAge = (order) => {
    let sorted = [...(dataGender.length > 0 ? dataGender : peoples)].sort(
      (a, b) => {
        return order === "HTL" ? b.age - a.age : a.age - b.age;
      }
    );
    setDataGender(sorted);
  };

  return (
    <div>
      <button onClick={() => handleGender("Male")}>Men's Data</button>
      <button onClick={() => handleGender("Female")}>Female's Data</button>

      <br />
      <button onClick={() => handleAge("HTL")}>Age High to Low</button>
      <button onClick={() => handleAge("LTH")}>Age Low to High</button>
      <table border={2} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>City</th>
            <th>Language</th>
            <th>Coading Skills</th>
          </tr>
        </thead>
        <tbody>
          {(dataGender.length > 0 ? dataGender : peoples).map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <th>{el.age}</th>
                <th>{el.gender}</th>
                <td>{el.email}</td>
                <td>{el.phone}</td>
                <td>{el.city}</td>
                <td>{el.language}</td>
                <td>{el.codingSkill}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Arrayofobj;
