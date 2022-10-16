import React from 'react'
import MeetupDetail from "../../components/meetups/MeetupDetail";

const Detail = () => {
    return (
        <MeetupDetail
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Reichstag_Berlin_Germany.jpg/2880px-Reichstag_Berlin_Germany.jpg"
            title="A first meetup"
            address="Marienplatz 8, 80331 München, Germany"
            description="The meetup description"
        />
    )
}

export const getStaticPaths = () => {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupName: "m1",
                },
            },
            {
                params: {
                    meetupName: "m2",
                }
            }
        ]
    }
}


export const getStaticProps = async (context) => {
    //fetch data from API
    const meetupName = context.params.meetupName
    console.log(meetupName)

    return {
        props: {
            meetupData: {
                id: meetupName,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Reichstag_Berlin_Germany.jpg/2880px-Reichstag_Berlin_Germany.jpg",
                title: "A first meetup",
                address: "Marienplatz 8, 80331 München, Germany",
                description: "The meetup description",
            }
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
