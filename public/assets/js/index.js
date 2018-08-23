$(function() {
    // click
    console.log('cells interlinked');
    $('#submit-btn').on('click', function(event) {
        event.preventDefault();        
        var newburger = {
            burger_name: $('#burgerName').val().trim()
          };
          // Send POST request.
          $.ajax('/api/burgers', {
            type: 'POST',
            data: newburger
          }).then(
            function() {
                console.log('js created');
              // Reload
              location.reload();
            } );    
    }
        );   
        //  click 
        $(document).on('click', '.devour-btn', function(event) {
            event.preventDefault();
            // alert('hi');
            var id = $(this).data('id');
            var devouredState = {
                devoured: true
            }
            // Send the PUT request.
            $.ajax('/api/burgers/' + id, {
              type: 'PUT',
              data: devouredState
            }).then(
              function() {
                  console.log('js action');
                // Reload           
                location.reload();
              }
            );
          });
    
    });
    