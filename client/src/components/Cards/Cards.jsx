import { useState } from "react";
import Card from "../card/Card";
import "./cards.css";

export default function Cards() {
  const PF = "http://localhost:5005/images/Images/";
  const [items, setItems] = useState(
    [
      { id: 1, img: PF + "html.png", stat: "" },
      { id: 1, img: PF + "html.png", stat: "" },
      { id: 2, img: PF + "css.png", stat: "" },
      { id: 2, img: PF + "css.png", stat: "" },
      { id: 3, img: PF + "js.png", stat: "" },
      { id: 3, img: PF + "js.png", stat: "" },
      { id: 4, img: PF + "scss.png", stat: "" },
      { id: 4, img: PF + "scss.png", stat: "" },
      { id: 5, img: PF + "react.png", stat: "" },
      { id: 5, img: PF + "react.png", stat: "" },
      { id: 6, img: PF + "vue.png", stat: "" },
      { id: 6, img: PF + "vue.png", stat: "" },
      { id: 7, img: PF + "angular.png", stat: "" },
      { id: 7, img: PF + "angular.png", stat: "" },
      { id: 8, img: PF + "nodejs.png", stat: "" },
      { id: 8, img: PF + "nodejs.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
}
