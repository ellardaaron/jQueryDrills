$('#btnSubmit').click(function (e) {
    e.preventDefault();
    var submitValue = $('#textInput').val();
    alert(submitValue);
});

function manage(txt) {
    var bt = document.getElementById('btnSubmit');
    if (textInput.value != '') {
        bt.disabled = false;
    }
    else {
        bt.disabled = true;
    }
};

//This creates a div in the html

$('<div id = "submitItems" ></div>').appendTo('body');

//This takes what has been typed in the form and puts it in the div as an h2

$('#btnSubmit').click(function(){
    var submitValue = $( '#textInput' ).val();
    let item = '<h2>' + submitValue + '</h2>';
    $('#submitItems').append(item);
});

//This changes the color and border radius of the h2 element

$(document).ready(function() {
    $('#submitItems').bind("mouseover", function(){
        var color  = $(this).css("background-color");

        $(this).css("background", "red");

        $(this).bind("mouseout", function(){
            $(this).css("background", color);
        })    
    }) 

    $('#submitItems').bind("mouseover", function(){
        var thisBorderBoi  = $(this).css("border-radius");

        $(this).css("borderRadius", "20px");

        $(this).bind("mouseout", function(){
            $(this).css("borderRadius", thisBorderBoi);
        })    
    }) 

})





$('<ul id = "submitItemsList" ></ul>').appendTo('body');

$('#btnSubmit').click(function () {
    var submitValue = $('#textInput').val();
    let listItem = $('<li></li>');
    listItem.text(submitValue);
    $('#submitItemsList').append(listItem);

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      


    listItem.dblclick(function () {
        listItem.css("color", getRandomColor());
    })
    
    listItem.click(function () {
        listItem.remove();
    })


});