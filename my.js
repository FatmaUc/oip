

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
            'Confirmed': value.total_confirmed,
            'Recover': value.total_recovered,
            'Deaths': value.total_deaths

        };

       
}      

    
    console.log(data);

    var json = JSON.stringify(data);
    
    var fs = require("fs");
    fs.writeFile('malaysia.json', json,function(err) {
       if (err) throw err;
        console.log('complete');
        });

    });
