"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Kevin Ramirez
   Date:   2-3-20

	
*/
//Variables for the chart
var thisDay =  new Date("August 30,2018");
var tableHTML = "<table id='eventTable'><caption> Upcoming Events</caption><tr><th>Date</th><th>Event</th><th>Price</th></tr>";
var endDate = new Date(thisDay.getTime()+14*24*60*60*1000);

//for loop for the eventDates
for(var i = 0; i < eventDates.length; i++){
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();

   //If statements for different dates
   if( thisDay <= eventDate && thisDay <= endDate){
      tableHTML += "<tr>";
      tableHTML += "<td>" + eventDay + "@" + eventTime + "</td>";
      tableHTML += "<td>" + eventDescriptions[i] + "</td>";
      tableHTML += "<td>"+ eventPrices[i]+"</td>";
      tableHTML += "</tr>";
   }
   
}
tableHTML += "</table>";

document.getElementById("eventList").innerHTML = tableHTML;