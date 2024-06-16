$(document).ready(function() {
    var signUpForm = $("form.signup");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
    
    signUpForm.on("submit", function(event) {
      event.preventDefault();
     console.log("testing");
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        alert("nope");
        return;
      }
    
      signUpUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");

    });
  
    function signUpUser(email, password) {
      $.post("/api/signup", {
        email: email,
        password: password
      })
        .then(function() {
          window.location.replace("/login");
        }).catch(function(err) {
          console.log(err);
        }); 
    }
  });