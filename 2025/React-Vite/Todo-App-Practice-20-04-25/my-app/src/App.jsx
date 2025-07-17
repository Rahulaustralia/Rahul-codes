import React, { lazy, Suspense } from "react";
import MyTodo from "./Components/MyTodo";
import Arrayofobj from "./Components/Arrayofobj";
import MyCom from "./Components/MyCom";
import Search from "./Components/Search";
import Test1 from "./Components/Test1";
import Form from "./Components/Form";
const MyLazy = lazy(() => import("./Components/Lazy"));

const App = () => {
  return (
    <div>
      {/* <MyTodo /> */}
      <br />
      <hr />
      {/* <Arrayofobj /> */}
      <br />
      {/* <MyCom /> */}
      <br />
      {/* <Search /> */}
      <br />
      <Test1 />
      <br />
      <Form />
      <br />
      <Suspense fallback={<div> Loading... </div>}>
        <MyLazy />
      </Suspense>
    </div>
  );
};

export default App;
