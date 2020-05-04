/**
 * @class Data representation of the window in the main room.
 * 
 * This is a child of the 'Asset' class.
 * 
 */
import Asset from "./Asset.js";



class Window extends Asset {

    constructor(){
        super();
        this.color = '#FFFFFF'
    }

    getTime() {
        return this.time;
    }

    setColor(hour) {
        console.log(`WINDOW HOUR: ${hour}`);
        if (20 <= hour && hour <= 23 || 0 <= hour && hour <= 8) {
            this.color =  '#110055';
            console.log("NIGHTTIME");
        } else {
            this.color = '#228DFF';
            console.log("DAYTIME");
        }
    }

    getColor(){
        return this.color;
    }
    
}


export {Window as default};