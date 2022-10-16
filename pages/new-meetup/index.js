//localhost:3000/new-meetup

import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import React from "react";


const NewMeetupPage = () => {

    const addMeetupHandler= async(enteredMeetupData)=>{
        const response = await fetch("/api/new-meetup", {
            method: 'POST',
            body:JSON.stringify(enteredMeetupData),
            headers: {'Content-Type': 'application/json'}
        })
        const data = await response.json()

        console.log(data)
    }

    return  <NewMeetupForm  onAddMeetup={addMeetupHandler}/>
}

export default NewMeetupPage;
