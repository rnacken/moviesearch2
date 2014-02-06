'use strict';

function predicatBy(prop){
    // use to sort array on attribute in json (myArr.sort(predicatBy("name"))
    return function(a,b){
        if( a[prop] > b[prop]){
            return 1;
        }else if( a[prop] < b[prop] ){
            return -1;
        }
        return 0;
    }
}

// usage: log('inside coolFunc',this,arguments);
// http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
// small edit by Ru Nacken
var log = function() {
    if (CONFIG.debugger){
        log.history = log.history || [];   // store logs to an array for reference
        log.history.push(arguments);
        //if(this.console){
            while(log.history.length > 0){
                console.log(log.history.shift()[0]);
            }
            //console.log( Array.prototype.slice.call(arguments) );
        //}
    }
};