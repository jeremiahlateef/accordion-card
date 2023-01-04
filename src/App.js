// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import data from "./data";
import FAQQestion from "./Question";

// import graphis from "../src/images/graphic.svg";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="  bg-gray-200 rounded-xl shadow border p-8 m-10 md:flex justify-between align-center">
      <div className="bg-red-100">image</div>
      <div className="bg-green-100">
        <p className="uppercase text-center font-bold text-3xl">faq</p>
        {questions.map((quest) => {
          return <FAQQestion key={quest.id} {...quest}></FAQQestion>;
        })}
      </div>
    </div>
  );
}

export default App;
