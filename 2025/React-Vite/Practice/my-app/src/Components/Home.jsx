import React, { useState } from "react";

const Home = () => {
  const [form, setForm] = useState({ title: "", userId: "" });

  const commonHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "userId" ? Number(value) : value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form);
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => console.log("Response:", data))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={form.title}
          placeholder="Enter your title"
          onChange={commonHandler}
        />
        <br />
        <label htmlFor="userId">UserId</label>
        <input
          id="userId"
          name="userId"
          type="number"
          value={form.userId}
          placeholder="Enter your User ID"
          onChange={commonHandler}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
