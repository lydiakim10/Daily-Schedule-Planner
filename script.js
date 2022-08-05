window.onload = currentTime();
window.onload = saveInfo();

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM do YYYY, h:mm:ss a"));

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
