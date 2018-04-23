const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
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
geocode.geocodeAddress(argv.a,(errorMessage,results) =>{
   if(errorMessage){
     console.log(errorMessage);
   }else{
     console.log(results.address);
     var lat = results.latitude;
     var lng = results.longitude;
     weather.getWeather(lat,lng,(errorMessage,weatherResults) =>{
    if(errorMessage)
    {
      console.log(errorMessage);
    }else{
      console.log(`Its currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
    }
});
   }
});

