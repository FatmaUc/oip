
var axios = require('axios'); // package 
console.log('starting a server');


// COVID19 cases in each states

axios ({
    method:'GET',
    url:'https://api.oip.tmrnd.com.my/app/t/opendata.oip.tm.com.my/covid19kkm/1.0.0/state',
    headers:{
        Authorization:'Bearer f40bf964-1ab3-34b1-bf82-6f13d3286d47'
    }
    // data contained a large amount of null values, all the null values have been dropped
    
}).then((result) => { 
    //console.log(result);
    var newdata = result.data;
    for([k,v] of newdata.entries()){ // iterate through each block of data
        for (var key in v) { 
            if (v[key] === null || v[key] === undefined) { // if any value is null or undefined
                delete v[key]; // delete the value
            }           
        };  
    }
    console.log(newdata);

    var json = JSON.stringify(newdata);
    var fs = require("fs");
    fs.writeFile('states.json', json,function(err) {
       if (err) throw err;
        console.log('complete');
        });    
})