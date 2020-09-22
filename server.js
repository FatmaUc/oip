const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const users = [];

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
    res.send('App Works !!!!');
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
    return data;
    
    var json = JSON.stringify(data);
    var fs = require("fs");
    fs.writeFile('malaysia.json', json,function(err) {
       if (err) throw err;
        console.log('complete');
        });

    });


});
app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});