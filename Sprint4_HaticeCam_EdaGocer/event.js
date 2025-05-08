$(document).ready(function() {
    $(".event-item").on("click", function() {
        var eventId = $(this).data("event");

        $(".event-info-content").hide();

        $("#" + eventId + "-info").fadeIn();
    });
});
