/**
 * @class Data representation of the bookshelf in the main room.
 * 
 * This is a child of the 'Asset' class.
 * 
 */
import Asset from "./Asset.js";


/**
 * @param {string} text Placeholder text
 * 
 */
class Clock extends Asset {
    /**@constructor*/
    constructor(targetWindow, text) {
        super(targetWindow);
        this.text = text;
    }
}


export {Clock as default};