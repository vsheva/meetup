import MeetupList from '../components/meetups/MeetupList';
import React from "react";

const meetups = [
    {
        id: "m1",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        title: "1st - Marienplatz and the new city hall",
        address: "Marienplatz 8, 80331 München, Germany",
        description: "This is a beautiful meeting"
    },

    {
        id: "m2",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Reichstag_Berlin_Germany.jpg/2880px-Reichstag_Berlin_Germany.jpg",
        title: "2nd - The Reichstag",
        address: "Platz der Republik 1, 11011 Berlin, Germany",
        description: "This is a lovely meeting"
    },

    {
        id: "m3",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Ishtar_gate_in_Pergamon_museum_in_Berlin..jpg/1024px-Ishtar_gate_in_Pergamon_museum_in_Berlin.jpg",
        title: "3rd - Pergamonmuseum",
        address: "Bodestrasse 1-3, 10178 Berlin, Germany",
        description: "This is a lovely meeting"

    }
]


const HomePage = (props) => {
    return <MeetupList meetups={props.meetings}/>
}

/**
export const getServerSideProps = async (context) => {
    const req = context.req   // - for authentication + often
    const res = context.res

    //fetch data from API
    return {
        props: {
            meetings: meetups,
        },
    }
}*/


 export async function getStaticProps() {
    //fetch data from API
    return {
        props: {
            meetings: meetups,
        },
        revalidate:1,
    }
}

export default HomePage;
