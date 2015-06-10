$(document).ready(function () {

    // page is now ready, initialize the calendar...

    //$('#fcCalendar').fullCalendar({
    //    // put your options and callbacks here
    //});

    $('#fcBurgasLab').fullCalendar({
	//	lang: 'bg',
        googleCalendarApiKey: 'AIzaSyA_oNPwTyszWp-Nzqvx5FYmgT3mhdkahxo',
       // events: {
        //    googleCalendarId: 'burgaslab@gmail.com'		//,
		//	// className: 'nice-event'
        //},
		eventSources: [
            {
                googleCalendarId: 'burgaslab@gmail.com',
				className: 'lab-events'
            },
            {
                googleCalendarId: 'oj49agjtjs2inkpg4ubalspvq0@group.calendar.google.com',
                className: 'it-events'
            }
        ],
        eventMouseover: function (calEvent, jsEvent) {
			var css = '';
			if(calEvent.source && calEvent.source.className && calEvent.source.className.length > 0) {
				css = calEvent.source.className[0];
			}
			
            var tooltip = '<div class="tooltipevent ' + css +'">' + calEvent.title + '</div>';
            $("body").append(tooltip);
            
			$(this).mouseover(function (e) {
                $(this).css('z-index', 10000);
                $('.tooltipevent').fadeIn('500');
                $('.tooltipevent').fadeTo('10', 1.9);
            }).mousemove(function (e) {
                $('.tooltipevent').css('top', e.pageY + 10);
                $('.tooltipevent').css('left', e.pageX + 20);
            });
        },
        eventMouseout: function (calEvent, jsEvent) {
            $(this).css('z-index', 8);
            $('.tooltipevent').remove();
        },
        eventClick: function (calEvent, jsEvent, view) {
			jsEvent.preventDefault();
			if(calEvent.description && calEvent.description.lastIndexOf('http', 0) === 0) {
				window.open(calEvent.description, '_blank');
			}
			else{
				window.open(calEvent.url, '_blank');
			}
        }
    });

});