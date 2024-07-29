/**
 * 
 * This helper.js contains some functions which are used in to get final results
 * These functions are written here as the UI layer should be used to execute any logic rather it is only responsible for the UI
 */

export const viewCountGenerator = function(viewCount){
    if(viewCount>1000000){
        return viewCount = parseFloat(viewCount/1000000).toFixed(1) + " M";
    }
    else if(viewCount>1000){
        return viewCount = parseFloat(viewCount/1000).toFixed(1) + " k";
    }
    else{
        return viewCount;
    }
}