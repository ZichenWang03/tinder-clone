import React, {useState} from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
      {
        name: "Elon",
        url:
          "https://en.meming.world/images/en/2/2c/Elon_Musk_Smoking_Weed.jpg",
      },
      {
        name: "Doge",
        url:
          "https://pbs.twimg.com/media/EtXfpgGWYAEIa7y?format=jpg&name=large",
      },
    ]);
    //bad 
    // const people = []
    // people.push('abby', 'becky', 'carina')

    //good (push to an array in react)
    //setPeople([...people, 'becky', 'calina']) 
    //...people is a spread operator.
    //setPeople is modifier of people
    return (
      <div>
        <h1>tinder cards 🙂 </h1>
        <div className="tinderCards__cardContainer">
          {people.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
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

export default TinderCards
