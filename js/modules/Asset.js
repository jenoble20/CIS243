
/**
 * @class General asset representing an interactable object on the screen.
 */
/**
  *
  * @param {string} reference Reference name of the object
  * @param {string} targetWindow Path to the appropriate file containing the html for the asset
  */
class Asset {
    
    /**@constructor*/
    constructor(reference, targetWindow) {
        console.log('Asset Constructor');
        this.reference = reference;
        this.targetWindow = targetWindow;
    }

    getReference(){
        return this.reference;
    }

    setTargetWindow(newID){
        this.targetWindow = newID;
        return this.targetWindow;
    }

    getTargetWindow(path){
        //This function will access the file provided in the 'path' variable and load the html into the main window as a popup. This will occur when the object is clicked. 
    }
}

export {Asset as default};