// Add an event listener to the button
// Log 'Yeah, you clicked me' to the console when the user clicks on the button
$('.button1').click(() => {
    $('.debug').text('Yeah, you clicked me');
});

// When the user clicks on the second button change the first button's text
$('.button2').click(() => {
    $('.button1').text("Text changed upon click of second button");
});

// When the user clicks on this button, change the background-color of each button
// $('.button3').click(() => {
// $('.button1, .button2, .button3').css('background-color', 'salmon');
// });

// Exercise 1
// Add an input to your previous webpage, its default value should be "blue"
// set input field's defaultValue
input_value = $('#color_input').defaultValue = "blue";
// input_value = document.getElementById("color_input").defaultValue = "blue";
input = document.getElementById("color_input").focus();
$('.button3').css('background-color', input_value);

//When the user clicks on the last button read the desired color (value) from the input
let number_of_clicks = 0;
$('.button3').click(() => {
    input_value = document.getElementById("color_input").value;

    // Exercise 2 (optional)
    // Change the behavior by ignoring all the clicks after the first one.
    // So even if the input has changed, keep the previous color if it has already changed once.

    // first check if input value is a true color, and not the default blue, and not empty, and there were no click before
    function isColor(strColor) {
        var s = new Option().style;
        s.color = strColor;
        return s.color == strColor;
    }
    if (isColor(input_value) && input_value != "blue" && input_value != "" && number_of_clicks === 0) {
        // Change the buttons' background-color to the given color
        $('.button3').css('background-color', input_value);
        number_of_clicks = number_of_clicks + 1;
    }
});


// $('.debug').text(input_value);
// document.getElementsByClassName('debug').innerHTML = "debug";