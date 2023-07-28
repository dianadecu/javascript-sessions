import fetch from "node-fetch";

async function getActivity(){
    try{
        const res = await fetch("http://www.boredapi.com/api/activity/");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("http://www.boredapi.com/api/activity?type=social");
        const data2 = await res2.json();
        console.log(data2);
    }catch(err){
        console.log(err);
    }   
}
// async function getActivity(){
//     try{
//         const res = await fetch("http://www.boredapi.com/api/activity/")​;
//         const data = await res.json();
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
//}
// function getActivity() {​
//     fetch("http://www.boredapi.com/api/activity/")​
//     .then((res) => {​
//         return res.json();​
//     })​ 
//     .then((data) => {​
//         console.log(data);​ 
//         return fetch("http://www.boredapi.com/api/activity?type=recreational");​  
//     })​
//     .then((res) => res.json())​
//     .then((data) => {​
//         console.log(data);​
//     })
//     .catch((err)=> {
//         console.log(err);
//     });
// }​

//  function getActivity() {​
//     fetch("http://www.boredapi.com/api/activity?type=recreational")​
//     .then((res) => {​
//          return res.json();​
//     })​
//     .then((data) => {​
//           console.log(data);​
//     });​
//     }​
//     ​

getActivity();​