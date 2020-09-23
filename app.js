$(document).ready(function () {
    $("#btnSubmit").attr("disabled", true);
    $("<div></div>").appendTo("body");
    $("<ul></ul>").appendTo("body");

    // Handler for .ready() called.
    $('#btnSubmit').on('click', function (e) {
        e.preventDefault();
        let value = $("#words").val();
        let li = $('<li><li/>');
        $(li).append(value);
        $('ul').append(li);

        $(li).click(function () {
            var colorR = Math.floor((Math.random() * 256));
            var colorG = Math.floor((Math.random() * 256));
            var colorB = Math.floor((Math.random() * 256));
            $(this).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
        });

        $( li ).dblclick(function() {
            $( this ).remove();
          });

        //alert(value);
        // let h2 = $('<h2></h2>');
        // $(h2).append(value);
        // $('div').append(h2);

        // $(h2)
        //     .on("mouseenter", function () {
        //         $(this).css({
        //             "background-color": "yellow",
        //             "border-radius": '5px',
        //             // "font-weight": "bolder"
        //         });
        //     })
        //     .on("mouseleave", function () {
        //         var styles = {
        //             backgroundColor: "white",
        //             borderRadius: '0px'
        //             //fontWeight: ""
        //         };
        //         $(this).css(styles);
        //     });



    });

    $(document).keyup(function (e) {
        if ($("#words").val() == '') {
            $("#btnSubmit").attr("disabled", true);
        } else {
            $("#btnSubmit").attr("disabled", false);
        }
    });
});