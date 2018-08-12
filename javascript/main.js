window.onload = function() {
    var date = new Date();
    var hours = date.getHours();
    document.getElementById("homepageheader").innerHTML = getGreeting(hours);
};

function getGreeting(hours) {
    var greetingText;
    if (hours >=6 && hours < 12) {
        greetingText = "Good morning!";
    } else if (hours >= 12 && hours < 17) {
        greetingText = "Good afternoon!";
    } else if (hours >= 17 && hours < 23) {
        greetingText = "Good Evening!";
    }
    return '<b>' + greetingText + '</b> Digital Literacy Homepage';
}


mouseEvent.onclick.submit
var submit = confirm("Are you sure you want to submit?");{
}if (submit = true){
        text = "Thank you for your submission!";
    }
    else{
        text = ("Are you sure?");
    }
document.getElementById("submit").alertpopupwindow("Thank you")