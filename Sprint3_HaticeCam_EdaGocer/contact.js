    $(function() {
      $("#thankYouDialog").dialog({
        autoOpen: false,  
        show: { effect: "fade", duration: 500 }, 
        hide: { effect: "fade", duration: 500 }
      });

      $(".contact-form").on("submit", function(event) {
        event.preventDefault();
        $("#thankYouDialog").dialog("open");
        this.reset();
      });
    });

    $(function() {
      $("#myButton").button({
        showLabel: true              
      });
    });