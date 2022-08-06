// When site loads, the current time will be available
window.onload = currentTime();

// Setting the current time and date
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM do YYYY, h:mm:ss a"));

// Getting the exact hour of the day and adding classes to determine whether the hour is in the past, present, or future
function currentTime() {
    var now = moment().hour();

    if (now > 8) {
        $("#8am").addClass("past");
    } else if (now == 8) {
        $("#8am").addClass("present");
    } else {
        $("#8am").addClass("future");
    }

    if (now > 9) {
        $("#9am").addClass("past");
    } else if (now == 9) {
        $("#9am").addClass("present");
    } else {
        $("#9am").addClass("future");
    }

    if (now > 10) {
        $("#10am").addClass("past");
    } else if (now == 10) {
        $("#10am").addClass("present");
    } else {
        $("#10am").addClass("future");
    }

    if (now > 11) {
        $("#11am").addClass("past");
    } else if (now == 11) {
        $("#11am").addClass("present");
    } else {
        $("#11am").addClass("future");
    }

    if (now > 12) {
        $("#12pm").addClass("past");
    } else if (now == 12) {
        $("#12pm").addClass("present");
    } else {
        $("#12pm").addClass("future");
    }

    if (now > 13) {
        $("#1pm").addClass("past");
    } else if (now == 13) {
        $("#1pm").addClass("present");
    } else {
        $("#1pm").addClass("future");
    }

    if (now > 14) {
        $("#2pm").addClass("past");
    } else if (now == 14) {
        $("#2pm").addClass("present");
    } else {
        $("#2pm").addClass("future");
    }

    if (now > 15) {
        $("#3pm").addClass("past");
    } else if (now == 15) {
        $("#3pm").addClass("present");
    } else {
        $("#3pm").addClass("future");
    }

    if (now > 16) {
        $("#4pm").addClass("past");
    } else if (now == 16) {
        $("#4pm").addClass("present");
    } else {
        $("#4pm").addClass("future");
    }

    if (now > 17) {
        $("#5pm").addClass("past");
    } else if (now == 17) {
        $("#5pm").addClass("present");
    } else {
        $("#5pm").addClass("future");
    }
};

// If user clicks the "Save" button, this will keep it in the local storage and on the schedule
var saveInput = $(".saveBtn");
saveInput.click(function(event) {
    event.preventDefault();
    var input = $(this).siblings(".textInputs").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, JSON.stringify(input));
})

savedInputsFunct();

function savedInputsFunct() {
    var timeInput = $(".time-block");
    timeInput.each(function() {
        var timeInputEl = $(this).attr("id");
        var inputEl = JSON.parse(localStorage.getItem(timeInputEl));
        $(this).children(".textInputs").val(inputEl);
    })
}