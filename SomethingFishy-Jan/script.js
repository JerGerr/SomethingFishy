// Remove .cit and use the production environment when ready. 
// This example is using demo credentials. Please replace 
// {YOUR_APP_CODE} and {YOUR_APP_ID} in your own code 
                    
$.ajax({
  url: 'https://weather.cit.api.here.com/weather/1.0/report.json',
  type: 'GET',
  dataType: 'jsonp',
  jsonp: 'jsonpcallback',
  data: {
    product: 'forecast_7days_simple',
    name: 'Helsinki',
    app_id: '61afjkJiJM5Fl0XVz8QS',
    app_code: 'Cx3x6qK4WJgJkJW6f162Iw'
  },
  success: function (data) {
    //alert(JSON.stringify(data));
  }
});



// Remove .cit and use the production environment when ready. 
                    
$.ajax({
    url: 'https://weather.cit.api.here.com/weather/1.0/report.json',
    type: 'GET',
    dataType: 'jsonp',
    jsonp: 'jsonpcallback',
    data: {
      product: 'forecast_hourly',
      name: 'Helsinki',
      app_id: '61afjkJiJM5Fl0XVz8QS',
      app_code: 'Cx3x6qK4WJgJkJW6f162Iw'
    },
    success: function (data) {
      //console.log(JSON.stringify(data));
      //cons
    }
  });

  $.getJSON("json_data.json", function(json) {
    loadData(json);
  });

function loadData(data)
{
  var row = $('#row'), len = data.length;
  for (var i = 0; i < len; i++)
  {
    temp = data[i];
    row.append('<div class="column" data-id="'+temp.id+'">' +
    '<div class="card">'+
    '<h4 class="card-item card-head">'+temp.session+'</h4>'+
    '<div class="card-item">Location: '+temp.location+'</div>'+
    '<div class="card-item">Temperature: '+temp.temperature+'</div>'+
    '<div class="card-item">Wind: '+temp.wind+'</div>'+
    '<div class="card-item">Humidity: ' + temp.humidity+'</div>'+
    '<div class="card-item">Precipitation: ' + temp.precipitation+'</div>'+
    '<div class="card-item">Water Temperature: ' + temp.water_temperature+'</div>'+
    '<div class="card-item">Fish Type: ' + temp.fishtype+'</div>'+
    '<div class="card-item">Weight: ' + temp.weight+'</div>'+
    '<div class="card-item">Created: ' + temp.created+'</div>'+
    '</div>');
  }
}

