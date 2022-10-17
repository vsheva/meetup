import React from 'react'
import {MongoClient, ObjectId} from 'mongodb';
import {Fragment} from "react"
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";

const Detail = (props) => {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description} />
            </Head>
        <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
        </Fragment>
    )
}

export const getStaticPaths = async () => {
    const client = await MongoClient.connect("mongodb+srv://shev1181:a12850000@cluster0.pekmzk1.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

    client.close();

    return {
        fallback: false,
        paths: meetups.map((meetup) => ({params: {meetupId: meetup._id.toString()}}))
    }
}

export const getStaticProps = async (context) => {
    //fetch data from API
    const meetupId = context.params.meetupId

    const client = await MongoClient.connect("mongodb+srv://shev1181:a12850000@cluster0.pekmzk1.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});

    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address:selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        },
        revalidate: 10,
    }
}


export default Detail;


/**
 import {useRouter} from 'next/router'

 const DetailPage =()=>{
    const router= useRouter()
    const newsName = router.query.newsName; //for fetching special

    return <h1>The Detail Page</h1>
}

 export default DetailPage;*/
