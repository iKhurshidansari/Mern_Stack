// new Promise((res, rej)=>{
//     if(false){
//         return res();
//     } else{
//         return rej();
//     }
// })

// .then((result) => {
//     console.log("resolve ho gaya tha");
    
    
// }).catch((err) => {
//     console.log("reject hua tha");
    
// });


//user will ask for a number between 0 se 9 and if the number is below 5 resolve if not reject
// var ans = new Promise((res, rej)=>{
//     var n = Math.floor(Math.random()*10);
//     if(n<5){
//         return res();
//     }else{
//         return rej();
//     }
// })
// .then(result=>{
//     console.log("below");    
// })
// .catch(err=>{
//     console.log("above");
    
// })


//sabse pahle ghar par aao
//gate kholo aur gate lagao
//khana pakao khana khao
//Thodi padhai karo
//sojao kyunki tum thak gaye ho
var ans = new Promise(function(res, rej){
    return res("sabse pahle ghar par aao")
})
var p2 = ans.then(function(data){
    console.log(data);
    return new Promise(function (res, rej){
        return res("gate kholo aur gate lagao");
    })
})
var p3 = p2.then(function(data){
    console.log(data);
    return new Promise(function (res, rej){
        return res("khana pakao khana khao");
    })
})
var p4 = p3.then(function(data){
    console.log(data);
    return new Promise(function (res, rej){
        return res("Thodi padhai karo");
    })
})
var p5 = p4.then(function(data){
    console.log(data);
    return new Promise(function (res, rej){
        return res("Sojao kyunki tum thak gaye ho");
    })
})
p5.then(function(data){
    console.log(data);
})

