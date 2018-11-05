$(function() {

    // page is now ready, initialize the calendar...
    $('#calendar').fullCalendar({
    // put your options and callbacks here
        defaultView: 'agendaWeek',
        header: {
        left: 'today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
        },
        titleFormat:'dddd',
        columnHeaderFormat: 'dddd',
        weekNumbers: false,
        weekNumbersWithinDays: true,
        weekNumberCalculation: 'ISO',
        
        editable: true,
        eventLimit: true, // allow "more" link when too many events

        events:[
            {
                title: 'hungry',
                start: '2018-11-02T16:00:00'
            }
        ]
    })

    

    });