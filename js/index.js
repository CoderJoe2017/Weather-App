$(document).ready(function(){
	var long;
	var lat;
navigator.geolocation.getCurrentPosition(function(position) {
		long = position.coords.longitude;
		lat = position.coords.latitude;
	$("#data").html("latitude: " + lat + "<br>longitude: " + long);
		var api = 'https://api.darksky.net/forecast/52a1086cd15bf1c86524d5beaa96f091/'+lat+','+long+'?callback=?';
		$.getJSON(api, function(data){
			var ctemp, ftemp = data.currently.temperature;
				ctemp = Math.round((ftemp-32)/9*5 , -2) + ' °C';
				ftemp = Math.round(ftemp) + ' °F';
			var wind = data.currently.windSpeed;
			var location = data.timezone;
			var weather = 	data.minutely.icon;
			$("#location").html(location);
			$("#wind").html(wind);
			$("#temp").html(ftemp);
			$("#weather").html(weather);
			console.log(location);
			$("#transc").on("click", function(){
				$("#temp").html(ctemp);
    			});
			$("#transf").on("click", function(){
				$("#temp").html(ftemp);
    			});
			if (weather == 'rain')
				$("#icon").prepend('<img src="https://image.flaticon.com/icons/svg/131/131041.svg" />');
			else if (weather == 'clear-day')
			$("#icon").prepend('<img src="https://image.flaticon.com/icons/svg/463/463038.svg" />');
			else if (weather == 'wind')
			$("#icon").prepend('<img src="https://image.flaticon.com/icons/svg/463/463062.svg" />');
			
			else
			$("#icon").prepend('<img src="https://image.flaticon.com/icons/svg/149/149209.svg" />');
			
		});
	});
});