console.log("page loaded");

    //Click event for adding a burger.
    $(document).on("click", "#submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("we hit button");
        
        //Grab burger name from form field.
        //When user submits burger name, set devoured state to false.
        burgerName =$("#burgerToGo").val().trim();
        var newBurger = {
        burger_name: $("#burgerToGo").val().trim(),
        devoured: 0
        };

        //Send the POST request using ajax.
        $.ajax("/api/"+burgerName, {
        type: "POST",
        data: newBurger
        }).then(
        function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

   

    //Click event for "Devour me" button.
    $(document).on("click", ".btn", function(event) {
        var id = $(this).val();
        var newDevour = $(this).data("newdevour");
    
        var newDevourState = {
          devoured: "true"
        };
    
        // Send the PUT request using ajax.
        $.ajax("/api/update/" + id, {
          type: "PUT",
          data: newDevourState
        }).then(
          function() {
            console.log("changed devour to", newDevour);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });   
