// POST api/new-meetup

//in -> req, res object

function handler(req, res) {
    if(req.method ==="POST") {
        const data= req.body;

        const {image, title, address, description}= data;
    }
}

export default handler;