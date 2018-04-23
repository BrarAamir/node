const yargs = require('yargs');
const axios = require('axios');
const argv = yargs.options({
    a:{
        demand:true,
        alias:'address',
        describe:'Address To fatch weater For',
        string:true
    }  
})
.help()
.argv;
var encodeAddress = encodeURIComponent(argv.address); 
var url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCKGuMClLfhlZnbEwzZl2GtNH-KamHRaQk&address=${encodeAddress}`;

axios.get(url).then((response) =>{
    if(response.data.status === 'ZERO_RESULTS'){
         throw new Error('unable to find that address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherurl =`https://api.darksky.net/forecast/cd1e96726530a4888256c82b3665b4c1/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherurl);
}).then((response) =>{
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`Its currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((e) => {
    if(e.code === 'ENOTFOUND'){
        console.log('unable to connect to API server');
    }else{
        console.log(e.message);
    }
});