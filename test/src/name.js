var axios = require('axios'); // package 
console.log('starting a server');

//get the api of corona tracker 

axios ({
    method:'GET',
    url:'https://api.oip.tmrnd.com.my/app/t/opendata.oip.tm.com.my/coronatracker/1.0.0/country?startDate=2020-03-01&endDate=2020-09-15&countryCode=MY',
    headers:{
        Authorization:'Bearer f40bf964-1ab3-34b1-bf82-6f13d3286d47'
    }
    // the country name has been deleted as the entire data is of Malaysia only 

    
}).then((result) => {


    var obj = result.data ;
    var data = {};
    for([index ,value] of obj.entries()){
        data[index] = {
            'Last updated':value.last_updated,
            'recovered' : value.total_recovered,
            'deaths': value.total_deaths,
            'confirmed': value.total_confirmed
            
        };
    
    
    }

    var dateFormat = require('dateFormat');
    var newdate = new Date(value.last_updated);
    dateFormat (newdate ,"d ,m dS , yy ,h:MM:ss TT");
    console.log(data);

});


// district data 
axios ({
    method:'GET',
    url:'https://api.oip.tmrnd.com.my/app/t/opendata.oip.tm.com.my/covid19kkm/1.0.0/district',
    headers:{
        Authorization:'Bearer f40bf964-1ab3-34b1-bf82-6f13d3286d47'
    }
    // data contained a large amount of null values, all the null values have been dropped
    // 
}).then((result) => { 
    //console.log(result);
    var object = result.data;
    for([k,v] of object.entries()){ // iterate through each block of data
        for (var key in v) { 
            if (v[key] === null || v[key] === undefined) { // if any value is null or undefined
                delete v[key]; // delete the value
            }
        }
    }

    console.log(object);
});

 
axios ({
    method:'GET',
    url:'https://api.oip.tmrnd.com.my/app/t/opendata.oip.tm.com.my/covid19/1.0.0/country',
    headers:{
        Authorization:'Bearer f40bf964-1ab3-34b1-bf82-6f13d3286d47'
    }
    // name  of the values displayed has been changed
}).then((result) => {
    var obj = {};
    for ([index, value ] of result.data.entries()){
        obj[index] = {
            'Country name': value.Country,
            'Confirmed cases': value.Confirmed,
            'Recovered cases': value.Recovered,
            'Number of Deaths' : value.Deaths,
        };
    }
    console.log(obj);
});