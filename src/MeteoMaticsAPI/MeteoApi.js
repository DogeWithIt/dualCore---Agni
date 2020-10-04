import axios from 'axios';
const url = `https://student_brita:Qd41DLog0YnMf@api.meteomatics.com/`;

const getMeteoData = (position, param) => {
    var first = new Date();
    var last = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const present = ''+last.getFullYear()+'-'+(last.getMonth()+1)+'-'+last.getDate()+'T'+last.getUTCHours()+':'+last.getMinutes()+':'+last.getSeconds()+'Z--'
                    +first.getFullYear()+'-'+(first.getMonth()+1)+'-'+first.getDate()+'T'+first.getUTCHours()+':'+first.getMinutes()+':'+first.getSeconds()+'Z:PT1H'

    const param1 = 't_2m:C';
    const param2 = 'precip_1h:mm';
    const param3 = 'wind_speed_10m:ms';
    const param4 = 'relative_humidity_2m:p';

    const pos = '' + position.x + ',' + position.y;
    const format = 'json';
    const endpoint1 = url+present+'/'+param1+'/'+pos+'/'+format;
    const endpoint2 = url+present+'/'+param2+'/'+pos+'/'+format;
    const endpoint3 = url+present+'/'+param3+'/'+pos+'/'+format;
    const endpoint4 = url+present+'/'+param4+'/'+pos+'/'+format;

    const options = {
        headers: {'Access-Control-Allow-Origin': '*'}
    }
    let endpoint;
    if(param===1){
        endpoint = endpoint1;
    } else if(param===2) {
        endpoint = endpoint2;
    } else if(param===3){
        endpoint = endpoint3;
    } else if(param===4) {
        endpoint = endpoint4;
    }

    axios.get(endpoint, options)
        .then((response) => {
            console.log(response);
        })
}


export default getMeteoData;