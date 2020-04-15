
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

    /**
     * Sets the time the user wants to be alerted for a given notification using UTC. This function can be used for any asset that will notify the user.
     * 
     * @param {integer} hour The military time hour.
     * @param {integer} minute The military time minute.
     */
    setAlertTime(hour, minute) {
        let time = new Date();
        time.setHours(hour);
        time.setMinutes(minute);
        time.setSeconds(0);
        time.setMilliseconds(0);
        return time;
    }
}

export {Asset as default};