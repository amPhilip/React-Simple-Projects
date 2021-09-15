import React, { useState } from 'react'
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import items from "./data";

function App() {
  
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterMenu = (category) => {
    const newItems = items.filter((item)=> item.category=== category)
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>The Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterMenu={filterMenu}/>
        <Menu items={items} />
      </section>
    </main>
  )
}

export default App
