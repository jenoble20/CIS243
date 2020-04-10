import Bookshelf from "./modules/Bookshelf.js";

$(document).ready(function(){
    $(".clickable").click(function(){
        let thisTarget = this.getTargetWindow();

    });

    // this function loads the initial state of the room
    function initiateRoom(){
        console.log('Before Bookshelf Call')
        let newShelf = new Bookshelf('bookshelf','This is a bookshelf');
    }

    function renderWindow(target){
        $("body").innerHTML.append(target);
    }

    initiateRoom();
});
    
