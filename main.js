function input() {
    $("#Add").on("click", function() {
        var x = $("#inputText").val();
        if ($("#inputText").val().length == 0) {
            alert("Input box is empty. Please enter text");
        } 
        else {
            $("ul").append("<li>" + x + "</li>");
        }

        setTimeout(function () {
            $("#inputText").val("");
        },100);
    });
}

function crossOffTask() {
    $("#list").each(function () {
        $(this).on("click", "li", function() {
            $(this).toggleClass("LineThrough");
        });
    });
}

function counter() {
    setInterval(function () {
        var listLen = $("li:not(.LineThrough)").length;
        $("h3").text("Items to do: " + listLen);
    },50);
}

function doubleClickRemove() {
    $("ul").each(function () {
        $(this).on('dblclick', 'li', function() {
            $(this).remove();
        });
    });
}

function clearAll() {
    $("#Remove").click(function () {
        $("ul li").remove();
    });
}

$(document).on("keypress", "input", function(e){
    if(e.which == 13){
        var inputVal = $(this).val();
        var x = $("#inputText").val();
        if ($("#inputText").val().length == 0) {
            alert("Input box is empty. Please enter text");
        } 
        else {
            $("ul").append("<li>" + x + "</li>");
        }

        setTimeout(function () {
            $("#inputText").val("");
        },100);
    }
});

$('html').keyup(function(e){
    if(e.keyCode == 46) {
        $("ul li").remove();
    }
});
 
$(document).ready(function () {
    input();
    crossOffTask();
    counter();
    doubleClickRemove();
    clearAll();
});