const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const users = [];

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('App Running !!!!');

});
app.get('/my',(req,res) => {
var axios = require('axios'); // package 
console.log('starting a server');
//get the api of corona tracker 
axios ({
    method:'GET',
    url:'https://api.oip.tmrnd.com.my/app/t/opendata.oip.tm.com.my/coronatracker/1.0.0/country?startDate=2020-01-01&endDate=2020-12-31&countryCode=MY',
    headers:{
        Authorization:'Bearer f40bf964-1ab3-34b1-bf82-6f13d3286d47'
    }
    // the country name has been deleted as the entire data is of Malaysia only 
}).then((result) => {
    var obj = result.data ;
    var data =[]
    var moment = require('moment'); // moment packages 
    for([index ,value] of obj.entries()){
        var newdate = moment(new Date(value.last_updated)).format('YYYY-MM-DD')  ; 
             data[index] = {
            'Last Updated': newdate,
            'Deaths': value.total_deaths,
            'Confirmed': value.total_confirmed
   
        };     
}      
    console.log(data);
    res.status(200).json(data);
    var json = JSON.stringify(data);
    var fs = require("fs");
    fs.writeFile('malaysia.json', json,function(err) {
       if (err) throw err;
       res.send('App Returning data !!!!');
        });

    });

});

app.get('/country',(req,res)=>{
    var axios = require('axios'); // package 

axios ({
    method:'GET',
    url:'https://api.oip.tmrnd.com.my/app/t/opendata.oip.tm.com.my/covid19/1.0.0/country',
    headers:{
        Authorization:'Bearer f40bf964-1ab3-34b1-bf82-6f13d3286d47'
    }
    // name  of the values displayed has been changed
}).then((result) => {
    console.log(result);
    var obj = result.data;
   
    var json = JSON.stringify(obj);
    var fs = require("fs");
    fs.writeFile('myjsonfile.json', json,function(err) {
        if (err) throw err;
        console.log('complete');
        });
        res.status(200).json(obj);
});

})

app.get('/state',(req,res)=>{
    
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
    res.status(200).json(newdata);
    var json = JSON.stringify(newdata);
    var fs = require("fs");
    fs.writeFile('states.json', json,function(err) {
       if (err) throw err;
        console.log('complete');
        });    
})
})
app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});