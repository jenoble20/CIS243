/**
 * @class Data representation of the pet in the main room.
 * 
 * This is a child of the 'Asset' class.
 * 
 */
import Asset from "./Asset.js";


class Pet extends Asset {
    /**
     * @constructor
     */
    constructor(name){
        super();
        this.name = name;
        this.html = 
            `
                <div class="pet content">
                    <form>
                        <input class="hour-input" type="text" placeholder="hour"></input>
                        <input class="minute-input" type="text" placeholder="minute"></input>
                        <input class="submit-button" type="submit" value="Submit"></input>
                    </form>
                </div>
            `;
        this.hour;
        this.minute;
    }

    getName(){
        return this.name;
    }

    changeName(newName){
        this.name = newName;
    }

    /**
     * 
     * @param {integer} hour 
     * @param {integer} minute 
     */
    setDrinkReminder(hour, minute){
        this.hour = hour;
        this.minute = minute;
        this.reminderTime = this.setAlertTime(hour, minute);
        console.log(`You will be reminded at ${this.reminderTime}`);
    }

}

export {Pet as default};