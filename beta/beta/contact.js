function email_comments() {
    /* If both an email and a name are not entered, pop up an alert box telling
    	the user to enter both and try again.  This prevents blank emails
    	from being sent, and makes sure the team can follow up with the order. */
    if ($("#comment").val() == "") {
    	alert("Oops!  Please leave a comment before you submit!")} else {
    
    /* Gets relevant information from the inputs/HTML to be used in the email */
    var msg = {from_name:  "",
               from_email: "",
               subject: "Comments from Website",
               body: $("#comment").val()}
	
	/*Sends the email using the PHP script */
    $.post( $("#contact").attr("action"),
       msg,
       
       /* Alerts the user if their message has been sent or not by dynamically changing
       the HTML */
       function (response) {
           console.log(response.status);
           if(response.status == "ok") {
               $("#mail_response")
                   .html("Your comment was sent!")
                   .addClass("ok");
           } else {
               $("#mail_response")
                   .html("Your comment was <em>not</em> sent")
                   .addClass("failed");
           }
       },
       "json");
}
}
//Attach the email_comments function to the merch submit button
$("#contactSubmitButton").click(email_comments);