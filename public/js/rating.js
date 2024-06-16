$(document).ready(() => {
    const ratingSelect = $("form#your-rating");
    const ratingInput = $("select#choice");
    
    let jokeid
     $(".joke-item").on("click", function(){
        jokeid = $(this).attr("data-jokeid");
        console.log(jokeid)
    });
    
    ratingSelect.on("submit", function(event){
        event.preventDefault();
        
        var idData = {
             id: jokeid
        };
        
        var ratingData = {
            rating: ratingInput.val().trim()
        };
        console.log(ratingData);
        if(!idData.id){
            alert("Don't You Want to Rate?");
            return;
        };

        submitRating(idData.id,ratingData.rating);
        
    })

   
    function submitRating(id,rating) {
        console.log(id, rating)
        $.post("/api/submitRating", {
            id: id,
            rating: rating
        }).then(function() {
            window.location.reload();
        }).catch(function(err) {
            console.log(err);
        })
    }
})