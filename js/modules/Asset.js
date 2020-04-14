
/**
 * @class General asset representing an interactable object on the screen. This object's properties and functions are inherited by any child class.
 */
/**
  *
  * 
  * @param {string} targetWindow Class or ID to target the appropriate pop-up window.
  * @param {string} text Placeholder text for testing...
  */
class Asset {
    
    /**@constructor*/
    constructor(targetWindow, text) {
        this.targetWindow = targetWindow;
        this.text = text;
    }

    setTargetWindow(newID){
        this.targetWindow = newID;
        return this.targetWindow;
    }

    getTargetWindow(path){
        return this.targetWindow;
    }
}

export {Asset as default};