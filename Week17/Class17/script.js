// Opens month calender when click button
$( "#hiddenField" ).datepicker({
      showOn: "button",
        buttonText: "day"
    });

// Changes plus to minus
$(".plus").click(function(){
 $(this).toggleClass(".plus.minus")  
});


