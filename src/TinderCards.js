import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      picture:
        "https://media.npr.org/assets/img/2021/04/25/ap21114783083708_custom-75a1c4f0411b4d20016eb8696f1a4ea2519f599d-s1100-c50.jpg",
    },
    {
      name: "Jeff Bezos",
      picture:
        "https://www.wired.com/wp-content/uploads/2019/01/Culture_GeeksGuide_Bezos.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outofFrame = (name) => {
    console.log(name + " lef the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outofFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.picture})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
