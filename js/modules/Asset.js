
/**
 * @class General asset representing an interactable object on the screen.
 */
/**
  *
  * @param {string} reference Reference name of the object
  * @param {string} targetWindow Class or ID to target the appropriate pop-up window.
  */
class Asset {
    
    /**@constructor*/
    constructor(targetWindow) {
        this.targetWindow = targetWindow;
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