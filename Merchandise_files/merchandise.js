/*
Authors: Cassidy Tanner & Christina Wang
Date: April 23, 2015
Updated: April 29, 2015
Purpose: jQuery functions for the Merchandise page. Updates subtotal and order list through
		a button, and sends email with order information.
Filename: merchandise.js
*/


function calculateSubtotal() {
   
   /* Grab the inputted values for how many of each item the customer wants, then calculate
   		the cost for each item by multiplying that number by the cost of that item */
   
   var white_disc_num = $("#white_disc_quantity").val();
   var white_disc_cost = parseInt(white_disc_num) * 12;
   console.log("White Discs Cost:" + white_disc_cost);
   
   var glow_disc_num = $("#glow_disc_quantity").val();
   var glow_disc_cost = parseInt(glow_disc_num) * 15;
   console.log("Glow Discs Cost:" + glow_disc_cost);
   
   var uv_disc_num = $("#uv_disc_quantity").val();
   var uv_disc_cost = parseInt(uv_disc_num) * 15;
   console.log("UV Discs Cost:" + uv_disc_cost);
   
   var hat_num = $("#hat_quantity").val();
   var hat_cost = parseInt(hat_num) * 15;
   console.log("Hats Cost:" + hat_cost);
   
   var tank_lime_num = $("#tank_lime_quantity").val();
   var tank_lime_cost = parseInt(tank_lime_num) * 15;
   console.log("Lime Tanks Cost:" + tank_lime_cost);
   
   var tank_orange_num = $("#tank_orange_quantity").val();
   var tank_orange_cost = parseInt(tank_orange_num) * 15;
   console.log("Orange Tanks Cost:" + tank_orange_cost);
   
   //Add all of the above cost values together to get the subtotal
   
   var subtotal = white_disc_cost + glow_disc_cost + uv_disc_cost + hat_cost 
   					+ tank_lime_cost + tank_orange_cost;
   	
   	console.log(subtotal);
   	
   	//Update the html to reflect the current subtotal
   	
   	$("#subtotal_blank").text(subtotal);
   	
   	/* Combine all inputted values to create a list of all of the things the client is 
   	ordering, only including the items they have selected (not the ones with zero values).
   	Then, update the HTML to reflect the list of their total order */
   	
   	var order;
   	
   	function individual_order (name, num) {
   		if (num > 0){
   			order = order + " " + name + ": " + num;
   		}
   		return order
   	}
   	
   	function combine_order(){
   		order = "";
   		individual_order("White Discs", white_disc_num);
   		individual_order("Glow Discs", glow_disc_num);
   		individual_order("UV Discs", uv_disc_num);
   		individual_order("Hats", hat_num);
   		individual_order("Lime Tanks", tank_lime_num);
   		individual_order("Orange Tanks", tank_orange_num);
   		console.log("Order is" + order);
   	}
   	
   	combine_order();	
   		
   $("#your_order").text(order);
   				
   	/* Once the user has clicked "Calculate Subtotal", show the form where they can input
   	their name and email to send the order */
   	
   	$("#subtotal_to_submit").show();
   
}

// Attach the previous function to the calculateSubtotal button

$("#calculate_button").click(calculateSubtotal);

//This function takes the input data from the form and emails it to the team's email address
function email_comments() {
    /* If both an email and a name are not entered, pop up an alert box telling
    	the user to enter both and try again.  This prevents blank emails
    	from being sent, and makes sure the team can follow up with the order. */
    if (($("orderer_name").val() == "") || ($("#orderer_email").val() == "")) {
    	alert("Oops!  Please enter both your name and your email and try again :)")} else {
    
    /* Gets relevant information from the inputs/HTML to be used in the email */
    var msg = {from_name:  $("#orderer_name").val(),
               from_email: $("#orderer_email").val(),
               subject: "Merch Order from Website",
               body: $("#your_order").html()}
	
	/*Sends the email using the PHP script */
    $.post( $("#merch_order_form").attr("action"),
       msg,
       
       /* Alerts the user if their message has been sent or not by dynamically changing
       the HTML */
       function (response) {
           console.log(response.status);
           if(response.status == "ok") {
               $("#mail_response")
                   .html("Your order was sent!")
                   .addClass("ok");
           } else {
               $("#mail_response")
                   .html("Your order was <em>not</em> sent")
                   .addClass("failed");
           }
       },
       "json");
}
}
//Attach the email_comments function to the merch submit button
$("#merch_submit_button").click(email_comments);















