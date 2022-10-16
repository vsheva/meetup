import MeetupList from '../components/meetups/MeetupList';
import React from "react";

const meetups= [
    {
        id:"m1",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        title: "A first meetup",
        address: "Marienplatz 8, 80331 München, Germany",
        description: "This is a beautiful meeting"
    },

    {
        id:"m2",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Reichstag_Berlin_Germany.jpg/2880px-Reichstag_Berlin_Germany.jpg",
        title: "A second meetup",
        address: "Platz der Republik 1, 11011 Berlin, Germany",
        description: "This is a lovely meeting"
    }
]


const HomePage =()=>{
    return <MeetupList meetups={meetups}/>
}

export default HomePage;
