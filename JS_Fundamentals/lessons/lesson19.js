const fakeRequestProimise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random()*4500) + 500;
        setTimeout(() => {
            if(delay > 2000){
                reject("Connection timeout: " + delay);
            }else{
                resolve("Here is your fake data from " + url);
            }
        }, delay);
    });
};

async function makeTwoRequests(){
    try{
    let data1 = await fakeRequestProimise("fake/call");
    console.log(data1);
    }
    catch(err){
        console.log("There has been an error: " + err);
    }
 }

 makeTwoRequests();
