

  $("#getting-started")
  .countdown("2022/07/16", function(event) {
    $("#day").text(
      event.strftime('%D')
    );

    $("#hours").text(
        event.strftime('%H')
      );

      $("#minutes").text(
        event.strftime('%M')
      );

      $("#seconds").text(
        event.strftime('%S')
      );
  });

  $("#getting-starte")
  .countdown("2022/06/11", function(event) {
    $("#day2").text(
      event.strftime('%D')
    );

    $("#hours2").text(
        event.strftime('%H')
      );

      $("#minutes2").text(
        event.strftime('%M')
      );

      $("#seconds2").text(
        event.strftime('%S')
      );
  });
