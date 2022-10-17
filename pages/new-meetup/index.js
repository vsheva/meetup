//localhost:3000/new-meetup

import {useRouter} from "next/router"

import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import React from "react";


const NewMeetupPage = () => {
    const router = useRouter()

    const addMeetupHandler= async(enteredMeetupData)=>{
        const response = await fetch("/api/new-meetup", {
            method: 'POST',
            body:JSON.stringify(enteredMeetupData),
            headers: {'Content-Type': 'application/json'}
        })
        const data = await response.json()

        console.log(data)

        router.push('/');
    }

    return  <NewMeetupForm  onAddMeetup={addMeetupHandler}/>
}

export default NewMeetupPage;

/**
import {useRouter} from "next/router"

import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import React from "react";
import {CollectionInfo as log} from "mongodb/src/operations/list_collections";


const NewMeetupPage = () => {
    const router = useRouter()

    const addMeetupHandler = (enteredMeetupData) => {
        return fetch("/api/new-meetup", {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {'Content-Type': 'application/json'}
        }).then(response => response.json()).then((data) => console.log(data))


        router.push('/');
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}

export default NewMeetupPage;*/
