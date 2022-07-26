/**
 * File: SearchParser.js
 * Project: heb-takehome
 * File Created: Sunday, 24th July 2022 12:58:40 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Sunday, 24th July 2022 12:58:40 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

export function Search(array, value, ){
    return array.filter( order => {
        if(value === ""){
            return order;
        }
        else if(Object.values(order).some(val => {
            if(typeof val === "string") {
                return val.toLowerCase().includes(value.toLowerCase());
            }
            else if( typeof val === "int"){
                return val === parseInt(val);
            }
        }))
        {
            return order;
        }
    })
}