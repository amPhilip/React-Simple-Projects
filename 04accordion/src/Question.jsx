import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({title, info}) => {

    const [showInfo, setShowInfo] = useState(false);

    const displayInfo = () => {
        setShowInfo(!showInfo);
    }

  return (
    <div>
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={displayInfo}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {showInfo && <p>{info}</p>}
      </article>
    </div>
  );
};

export default Question;
