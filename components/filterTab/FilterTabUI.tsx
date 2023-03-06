import React, { useState } from "react";

const items = [
  { id: 1, name: "Detailed Pr2", category: "detailed" },
  { id: 2, name: "Detailed Pr1", category: "detailed" },
  { id: 3, name: "Mockup Design 1", category: "mockup" },
  { id: 4, name: "SoundCloud Audio", category: "soundcloud" },
  { id: 5, name: "Vimeo Video 1", category: "vimeovideos" },
  { id: 6, name: "Youtube Video 1", category: "youtube" },
];

const TabFilterUI = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
    if (tab === "all") {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) => item.category === tab);
      setFilteredItems(filtered);
    }
  };

  return (
    <div>
      <div>
        <button
          onClick={() => handleTabClick("all")}
          className={activeTab === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => handleTabClick("detailed")}
          className={activeTab === "detailed" ? "active" : ""}
        >
          Detailed
        </button>
        <button
          onClick={() => handleTabClick("mockup")}
          className={activeTab === "mockup" ? "active" : ""}
        >
          Mockups
        </button>
        <button
          onClick={() => handleTabClick("soundcloud")}
          className={activeTab === "soundcloud" ? "active" : ""}
        >
          SoundCloud
        </button>
        <button
          onClick={() => handleTabClick("vimeovideos")}
          className={activeTab === "vimeovideos" ? "active" : ""}
        >
          Vimeo Videos
        </button>
        <button
          onClick={() => handleTabClick("youtube")}
          className={activeTab === "youtube" ? "active" : ""}
        >
          Youtube Videos
        </button>
      </div>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TabFilterUI;
