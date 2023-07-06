import React from "react";
import { useState } from "react";

function Tabs({ tabs = [], tabInputs = [] }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>

    <div className="tabs justify-center">
      {tabs?.map((tab, index) => (
        <a
          key={index}
          className={`tab ${activeTab === index ? "tab-active" : ""}`}
          onClick={() => handleTabClick(index)}
        >
          {tab.title}
        </a>
      ))}
    </div>
     {tabInputs[activeTab]}
    </>
  );
}

export default Tabs;