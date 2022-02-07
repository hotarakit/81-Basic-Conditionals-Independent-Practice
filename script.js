// 1. English Section:
$(".english-button").click(function(){
    let englishInput = $(".english").val();
        
    
    $(".english-message").text("Correct!");
    
    // display this text if the answer is incorrect
    $(".english-message").text("Wrong! Try again."); 
    
});


// 2. Social Studies section
$(".ss-button").click(function(){
    let ssInput = $(".social-studies").val();

    
});


// 3. Math section
$(".math-button").click(function(){
    let mathInput = Number($(".math").val());
    



});


// 4. Science section



