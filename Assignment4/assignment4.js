// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
"use strict";


$(document).ready(function() {

    $.ajax({
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        url: "http://localhost:3000/actors",
        data: {
            get_param: "value"
        },
        success: function(data) {
            $.each(data, function(i, id) {

                var starFlag;
                if (id.starred) {
                    starFlag = "star";
                } else {
                    starFlag = "star_border";
                }
                $(".mdl-list").append("<div class='mdl-list__item'><span class='mdl-list__item-primary-content'>  <i class='material-icons mdl-list__item-avatar'>person</i> <span>" + id.name + "</span> </span> <a class = 'mdl-list__item-secondary-action' href = '#' > <i class = 'material-icons togi' >" + starFlag + "</i></a > </div > ");

            });

        }
    });
});



$("#buttonadd").click(function() {

    var textcontent = $("#sample3").val();

    if (textcontent !== "" && (isNaN(textcontent) !== false)) {



        var data = {
            "name": textcontent,
            "starred": false
        };
        $.ajax({
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            url: "http://127.0.0.1:3000/actors",
            async: true,
            data: JSON.stringify(data),
            success: function() {
                location.reload(true);
            }
        });
    } else {

        alert("Please enter a valid input");


    }

});


$("body").delegate(".togi", "click", function() {

    var namestar;
    var arr;
    var indexx;
    if ($(this).text() === "star") {
        $(this).text("star_border");
        indexx = $(this).index(".togi") + 1;
        namestar = $(this).parent().siblings().children("span").text();
        arr = {

            "name": namestar,
            "starred": false
        };
        $.ajax({
            type: "PUT",
            dataType: "json",
            contentType: "application/json",
            url: "http://127.0.0.1:3000/actors/" + indexx,
            async: true,
            data: JSON.stringify(arr),
            success: function() {
                location.reload(true);
            }
        });

    } else {
        $(this).text("star");

        indexx = $(this).index(".togi") + 1;
        namestar = $(this).parent().siblings().children("span").text();

        arr = {

            "name": namestar,
            "starred": true
        };

        $.ajax({
            type: "PUT",
            dataType: "json",
            contentType: "application/json",
            url: "http://127.0.0.1:3000/actors/" + indexx,
            async: true,
            data: JSON.stringify(arr),
            success: function() {
                location.reload(true);
            }
        });


    }



});