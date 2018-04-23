const request = require('request');

var getWeather = (lat,lng,callback)=>{
    request({
        url:`https://api.darksky.net/forecast/cd1e96726530a4888256c82b3665b4c1/${lat},${lng}`,
        json:true
    },(error,response,body) =>{
        if(error){
            callback('Unable To connect to forcast.io server');
        }else if(response.statusCode === 400){
            callback('Unable To Fatech weather');
        }else if(response.statusCode === 200){
            callback(undefined,{
                temperature:body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            });
        }
    });
};
module.exports.getWeather = getWeather;

