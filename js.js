$(document).ready(function () {

    // Get location
    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        weather(lat, long)
    }

    function error() {
        console.log('error');
    }

    function weather(lat, long) {

        var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

        $.getJSON(URL, function (data) {
            console.log(data);
            updateDOM(data);
        });
    }

    function updateDOM(data) {

        var city = data.name;
        var temp = Math.round(data.main.temp);
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;
        var ws = Math.round(data.wind.speed);
        var wd = data.wind.deg;
        var pressure = data.main.pressure;
        var humidity = data.main.humidity;

        function wdarrow(x) {
            if (x >= 22.5) {
                return '&#8601;';
            } else if (x >= 47.5) {
                return '&#8592;';
            } else if (x >= 112.5) {
                return '&#8598;';
            } else if (x >= 157.5) {
                return '&#8593;';
            } else if (x >= 202.5) {
                return '&#8599;';
            } else if (x >= 247.5) {
                return '&#8594';
            } else if (x >= 292.5) {
                return '&#8600;';
            } else if (x >= 337.5) {
                return '&#8595;';
            } else {
                return '&#8595;';
            }
        }

        var wda = wdarrow(wd);

        $('#city').html(city);
        $('#temp').html(temp);
        $('#desc').html(desc);
        $('#icon').attr('src', icon);
        $('#ws').html(ws);
        $('#wd').html(wda);
        $('#pressure').html(pressure);
        $('#humidity').html(humidity);
    }
});