/**
 * Created by es-mac on 2015. 12. 28..
 */
$(document).ready(function () {


    $(".ouch").click(function (event) {
        alert("You clicked me! ouch!");
    });

    $("p").hover(function () {
            $(this).css('color', 'red');
        },
        function () {
            $(this).css('color', 'blue');
        });

    $("#about-btn").addClass('btn btn-primary')

    $("#about-btn").click(function (event) {
        msgstr = $("#msg").html();
        msgstr = msgstr + "o";
        $("#msg").html(msgstr);
    });
});