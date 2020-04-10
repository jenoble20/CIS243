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
 class Bookshelf extends Asset{
    /**@constructor 
     *
    */
    
    constructor(reference, targetWindow, text){
        super(reference, targetWindow);
        this.text = text;
        this.windowPath = '../../htmlAssets/bookshelf.html'
    }

    logText(){
        console.log(this.text);
    }
 }


 export {Bookshelf as default};