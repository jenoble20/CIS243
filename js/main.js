/*Imports data objects representing clickable html assets to be manipulated. See individual files for implementation details
*/
import Bookshelf from "./modules/Bookshelf.js";
import Clock from "./modules/Clock.js";
import Scheduler from "./modules/Scheduler.js";
import Window from "./modules/Window.js";
import Plant from "./modules/Plant.js";
import Notepad from "./modules/Notepad.js";
import Pet from "./modules/Pet.js";


$(document).ready(function(){
    initiateRoom();

    //Clicking on an asset brings up it's pop-up window
    $(".clickable").click(function(){
        let object = $(this).data('obj');
        $('#pop-up').append(object.getHTML());
        $('#pop-up').removeClass('closed').addClass('open');
    });

    //Close the pop-up
    $('#pop-up').click(function(e){
        if(e.target != this){
            //Do nothing if a child is clicked
        }else{
            $(this).removeClass('open').addClass('closed');
            $(this).empty();
        }
    });


    /*BROKEN FUNCTIONALITY*/
    /*
    $('.submit-button').click(function () {
        console.log('Button Clicked');
        let hourInput = $('.hour-input').val();
        let minuteInput = $('.minute-input').val();
        $(this).setDrinkReminder(hourInput, minuteInput);
    });
    */


});




/*FUNCTION DECLARATIONS*/


/**
 * This function creates initial values for the site. It constructs the data objects, as well as tie those objects to the proper html elements.
 */
function initiateRoom() {
    //Bookshelf
    const newShelf = new Bookshelf('bookshelf', 'This is a bookshelf');
    $('.bookshelf').data('obj', newShelf);

    //Clock
    const newClock = new Clock('clock', 'This is a clock');
    $('.clock').data('obj', newClock);

    //Plant
    const newPlant = new Plant('plant', 'This is a plant');
    $('.plant').data('obj', newPlant);

    //scheduler
    const newScheduler = new Scheduler('scheduler', 'This is a scheduler');
    $('.scheduler').data('obj', newScheduler);

    //notepad
    const newNotepad = new Notepad('notepad', 'This is a notepad');
    $('.notepad').data('obj', newNotepad);

    //window
    const newWindow = new Window('window', 'This is a window');
    $('.window').data('obj', newWindow);

    //pet
    const newPet = new Pet('pet', 'This is a pet', 'Brody');
    $('.pet').data('obj', newPet);
}