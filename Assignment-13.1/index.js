var arr = ["messi","ronaldo","neymar","xavi","pogba"];    //array of strings
var n = arr.length * 1000; 
var delay = new Promise(function (resolve,reject) {         //created new promise
    setTimeout(resolve,n);
})

// called promise that returns result after n seconds 
delay.then(function(){
    var newString = arr.map(x => x.toUpperCase())           
    console.log(newString)
})