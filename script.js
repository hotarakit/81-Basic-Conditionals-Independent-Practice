// set the correct username and password combination below
let correctUsername = "hotarakit@att.net";
let correctPassword = "attgsm";



$("button").click(function() {
    let username = $(".username").val();
    let password = $(".password").val();
    
    
    // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE
    if (username === correctUsername && password === correctPassword) {
       $(".message").text("Correct, Redirecting you to att.com"); 
       var url = "https://www.att.com";
$(location).attr('href',url);
    console.log(username);
    console.log(password);}
    
    
    
    
    
    
    
    
    



});
