import axios from "axios";

async function getActivity(){
    try{
        const response = await axios.get("http://www.boredapi.com/api/activity/");
        console.log(response.data);
        const response2 = await axios.get("http://www.boredapi.com/api/activity?type=busywork");
        console.log(response2.data);
    }catch(err){
        console.error(err); 
    }
}



getActivity();