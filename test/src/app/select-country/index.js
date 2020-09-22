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
    
});