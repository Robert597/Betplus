import axios from "axios";
import betplus from "../Models/DBSchema.js";

 export const dataController = async (req, res) => {
    const options = {
        method: "GET",
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures/headtohead',
        params: {h2h: '33-34'},
        headers : {
            'X-RapidAPI-Key':
        '63d217a0demshec0815c456c8760p190a53jsnfa42b273f008',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          } 
       }

       try{
        const response = await axios.request(options);

       await response?.data?.response.map( async (data) => {
        let dataExist = await betplus.findOne({fixtureId: data?.fixture?.id});

       
        if(!dataExist){
        const betdata = await betplus.create({
            fixtureId: data?.fixture?.id,
            home: {
                name: data?.teams?.home?.name,
                logo: data?.team?.home?.logo
            },
            away: {
                name: data?.teams?.away?.name,
                logo: data?.team?.away?.logo
            },
            score: {
                home: data?.goals?.home,
                away: data?.goals?.away
            },
            league: data?.league.name,
            date: data?.fixture?.date

        })
    }
       } );

       const feedback = await betplus.find();
        res.status(201).json(feedback);
       }catch(err){
        return res.status(404).json(err.message);
       }
}