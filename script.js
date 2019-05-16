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
    alert(JSON.stringify(data));
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
      alert(JSON.stringify(data));
    }
  });