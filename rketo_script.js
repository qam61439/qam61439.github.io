"use strict";

/*


   Keto Script
   Author: Quentin Marrow
   Date:   July 10, 2023
   
   Filename: rketo_script.js

*/


/* Alert method using Javascript embedded within Recipes and Meal Ideas HTML */

/* Create and Call Javascript function that keeps track of the current date and time-Appears on Contact Us page */
	var currentDay = new Date();
	var dateStr = currentDay.toLocaleDateString();
	var timeStr = currentDay.toLocaleTimeString();
	document.getElementById("dtNow").innerHTML = dateStr + "&nbsp;" + timeStr;

	/* Math Method, specified interval and countdown function appears on 
	Rural South Keto Festival page and embedded within HTML */