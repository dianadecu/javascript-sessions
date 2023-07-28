const fakeRequestCallBack = (url, success, failure) => {
    const delay = Math.floor(Math.random()*4500) + 500;
    setTimeout(() => {
        if(delay > 2000){
            failure("Connection timeout: " + delay);
        }else{
            success("Here is your fake data from " + url);
        }
    }, delay);
};

const fakeRequestProimise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random()*4500) + 500;
        setTimeout(() => {
            if(delay > 4000){
                reject("Connection timeout: " + delay);
            }else{
                resolve("Here is your fake data from " + url);
            }
        }, delay);
    });
};



// const result =fakeRequestProimise("fake/url");
// result.then(() => {
//     console.log("IT WORKED");
// })
// .catch(() => {
//     console.log("error");
// })


fakeRequestProimise("fake/page")
.then(() => {
    console.log("Page 1 worked");
   return fakeRequestProimise("fake/page2");
    })
   .then(() =>{
        console.log("Page 2 worked");
        return fakeRequestProimise("page2")

    })
    .then(() => {
        console.log("Page 3 worked");
        return fakeRequestProimise("page3")
    })
    .then(() => {
    console.log("Page 4 worked");
    })
    .catch(() => {
        console.log("A REQUEST FAILED")
    });

// fakeRequestProimise("fake/url").then(() => {
//     console.log("IT WORKED");
// })
// .catch((err) => {
//     console.log("There has been an error: "+err);
// });

//  const result = fakeRequestProimise("fake/url");
// console.log(result);
// setTimeout(()=> {
//     console.log(result);
// }, 5000);

// fakeRequestCallBack("books/page1", function(response){
//     console.log("IT WORKED");
//     console.log(response);
//     fakeRequestCallBack(
//         "books/page1",
//         function(response){
//             console.log("IT WORKED THE 2ND REQUEST");
//             console.log(response);
//         }, 
//         function(err){
//             console.log("ERROR ON 2ND REQUEST");
//         }
//     );
// },
// function(err){
//     console.log("ERROR");
//     console.log(err);
// }
// );