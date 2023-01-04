import React, { useState } from "react";
import arrowUp from "../src/images/icon-arrow-down.svg";

const Question = ({ question, answer }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="flex justify-between align-center py-5 border-b-2 border-solid border-red-200">
      <div>
        <p className="text-base mb-1">{question}</p>
        {showInfo && <p className="text-base ">{answer}</p>}
      </div>
      <div>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <img src={arrowUp} alt="arrow up button" />
          ) : (
            <img src={arrowUp} alt="arrow up button" />
          )}
        </button>
      </div>
    </article>
  );
};

export default Question;
