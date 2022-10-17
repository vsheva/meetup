import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import React from 'react';

const HomePage = props => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React meetups." />
      </Head>
      <MeetupList meetups={props.meetings} />
    </Fragment>
  );
};

export async function getStaticProps() {
  //fetch data from API

  const client = await MongoClient.connect(
    'mongodb+srv://shev1181:a12850000@cluster0.pekmzk1.mongodb.net/meetups?retryWrites=true&w=majority',
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetings: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;

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
