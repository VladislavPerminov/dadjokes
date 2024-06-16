$(document).ready(() => {
 const jokeSubmitForm = $("form.submit-joke-form");
 const jokeInput = $('input#joke-info');
 const punchlineInput = $('input#punchline');
 const genreInput = $("input#genre")
 jokeSubmitForm.on("submit", function(event){
     event.preventDefault();
     console.log("testing");
     var jokeData = {
         joke: jokeInput.val().trim(),
         punchline: punchlineInput.val().trim(),
         genre: genreInput.val().trim(),
     };

     if(!jokeData.joke || !jokeData.punchline){
         alert("nope");
         return;
     }
     submitJoke(jokeData.joke, jokeData.punchline, jokeData.genre);
     jokeInput.val("");
     punchlineInput.val("");
     genreInput.val("");
 })
 function submitJoke(name, punchline, genre) {
    $.post("/api/submitjoke", {
      name: name,
      punchline: punchline,
      genre: genre,
    })
      .then(function() {
        window.location.replace("/home");
      }).catch(function(err) {
        console.log(err);
      }); 
  }
});