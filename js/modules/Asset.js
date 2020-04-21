
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
    constructor() {
        this.error = 
            `
                <div class = "pet content">
                    <h1>Error: No content found.</h1>
                </div>
            `
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


    /*Constructs the HTML to be displayed on the screen.*/
    getHTML(){
        if(this.html){
            return this.html;
        }else{
            return this.error;
        }
        
    }
}

export {Asset as default};