import mongoose from "mongoose";

const leagueSchema = new mongoose.Schema({
   fixtureId: {
    type: Number,
    required: true
   },
   home: {
    name: {
        type: String
    }, 
    logo: {
        type: String
    }
   },
   away: {
    name: {
        type: String
    }, 
    logo: {
        type: String
    }
   },
   score: {
    home: {
        type: Number
    },
    away: {
        type: Number
    }
   },
   league: {
    type: String,
    required: true
   },
   date: {
    type: String,
    required: true
   }
});
const betplus =  mongoose.model("League", leagueSchema);
export default betplus;