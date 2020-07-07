const config=require('../config');
const request=require('request');
const constants = require('../config');


const weather= function(address,callback){
    const url=constants.openweathermap.BASE_URL + encodeURIComponent(address) + '&appid=' + constants.openweathermap.SECRET_KEY;
    //console.log(url);
    request({url,json:true},(err,{body})=>{
       // console.log(body);
        if(err){
            callback("can't fetch data");
        }
        else if(!body.main||!body.main.temp||!body.name||!body.weather){
            callback("unable to find required data",undefined);
        }
        else {
            callback(undefined,{
                temperature: body.main.temp,
                description: body.weather[0].description,
                cityName:body.name
            })
        }
    });

};

module.exports=weather;