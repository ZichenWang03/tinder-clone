import React, {useState, useEffect} from 'react';
import TinderCard from "react-tinder-card";
import database from './firebase';
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([]);
    // kinda like if loop
    useEffect(() => {
      const unsubscribe = database.collection('people').onSnapshot((snapshot) => 
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
      return () => {
        //clean up
        unsubscribe();
      }
    }, [people]);
    //bad 
    // const people = []
    // people.push('abby', 'becky', 'carina')

    //good (push to an array in react)
    //setPeople([...people, 'becky', 'calina']) 
    //...people is a spread operator.
    //setPeople is modifier of people
    return (
      <div>

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
