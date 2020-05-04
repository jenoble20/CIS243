/**
 * @class Data representation of the notepad in the main room.
 * 
 * This is a child of the 'Asset' class.
 * 
 */
import Asset from "./Asset.js";


class Notepad extends Asset {

    /**
     * @constructor
    */
    constructor(){
        super();
        this.html = 
            `
                <div class = "content" >
                    <h1>What would you like to say?</h1> 
                    <form>
                        <label for="entry-field"></label>
                        <textarea id="entry-field" rows="10" cols="30"></textarea>
                        <input type="submit"></button>
                    </form>
                </div>
            `
    }

    addNote(){

    }
}


export {Notepad as default};