

import React, { useState } from "react";

import s from "./Accordion.module.css";

const Accordion = ({ isOpen, title, content }) => {
  const [isActive, setIsActive] = useState(isOpen ?? false);

  return (
    <div className={s.accordion}>
      <div className={s.accordion_item}>
        <div
          className={s.accordion_title}
          onClick={() => setIsActive(!isActive)}
        >
          <div>{title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className={s.accordion_content}>{content}</div>}
      </div>
    </div>
  );
};

export default Accordion;