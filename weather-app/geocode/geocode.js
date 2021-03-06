  

var geocodeAddress = (address,callback) =>{
    var encodeAddress = encodeURIComponent(address);
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCKGuMClLfhlZnbEwzZl2GtNH-KamHRaQk&address=${encodeAddress}`,
        json:true
    },(error,response,body) =>{
        if(error)
        {
            callback('unable to connect to google services');
        }else if(body.status === 'ZERO_RESULTS'){
            callback('unable to find that address');
        }else if(body.status === 'OK'){
            callback(undefined,{
                address:body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng
            });
        }
    
    });
};

module.exports.geocodeAddress = geocodeAddress;