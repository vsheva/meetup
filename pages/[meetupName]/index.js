import {Fragment} from 'react'
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

export default Detail;


/**
 import {useRouter} from 'next/router'

 const DetailPage =()=>{
    const router= useRouter()
    const newsName = router.query.newsName; //for fetching special

    return <h1>The Detail Page</h1>
}

 export default DetailPage;*/
