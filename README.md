# Daily-Schedule-Planner

## Description
In this homework assignment, I was able to use what I learned about HTML, CSS, and Javscript, and put it together to create a daily schedule planner. This was also combined with my learned knowledge of Bootstrap. In this project, I created a daily schedule that showed the current date and time at the top of the screen. If the work schedule already passed the current time, the box will be red. If the work schedule was the current time, the box will be green. If the work schedule is in the future of the current time, the box will be yellow. Once the user inputs a description of their work schedule and clicks the "Save" icon, the input will be saved in the local storage along with the time. In addition, if the user refreshes the webpage, their inputs will not disappear.

## Codes in HTML
- Timeblocks for each different time is written by hour from 8am to 5pm
- Each hour is given its own unique "id" with the same "class"
- The class that shows the time for the schedule has a "col-sm-1", the area where the user inputs text has a "col-sm-10", and the "Save" icon has a "col-sm-1"
- The javascript file is linked at the bottom

## Codes in CSS
- The background color for the hour class on the schedule is changed to blue
- The past, present, and future class is all changed to red, green, and yellow, respectively


## Codes in Javascript
- When the webpage loads, the current time and date will be immediately available for the user to see
- A "var" called "today" will log the current moment and input that text into the "currentDay" id in the HTML
- A function is used to get the current hour and if statements are used every hour to determine the background color of the text input box depending on whether it is in the past, present, or future
- Two different functions are used so that when the user clicks the "Save" icon on the right, the text input description and the hour is logged into the local storage and the inputs do not disappear when the user refreshes the page

## Website Screenshot
![Alttext](/full-website.png)

## Link to Site
[Link](https://lydiakim10.github.io/Daily-Schedule-Planner/)