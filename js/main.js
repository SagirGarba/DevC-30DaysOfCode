

  $("#getting-started")
  .countdown("2020/04/25", function(event) {
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
  .countdown("2020/05/25", function(event) {
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
