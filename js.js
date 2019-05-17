$(document).ready(function () {

    function weather() {

        var URL = /*api call lat&lon*/

        $.getJSON(URL, function(data) {
            console.log(data);
        });
    }
    weather();

});