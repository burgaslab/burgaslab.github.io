$(document).ready(function () {

    // page is now ready, initialize the calendar...

    //$('#fcCalendar').fullCalendar({
    //    // put your options and callbacks here
    //});

    $('#fcBurgasLab').fullCalendar({
	//	lang: 'bg',
        googleCalendarApiKey: 'AIzaSyA_oNPwTyszWp-Nzqvx5FYmgT3mhdkahxo',
        events: {
            googleCalendarId: 'burgaslab@gmail.com'		//,
			// className: 'nice-event'
        },
        eventMouseover: function (calEvent, jsEvent) {
            var tooltip = '<div class="tooltipevent" style="">' + calEvent.title + '</div>';
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