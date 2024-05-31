import { parseISO } from 'date-fns';


export const convertEventsToDateEvents = ( events = [] ) => {

    return events.map( event => {

        event.end = parseISO( event.end );
        event.start = parseISO( event.start );

        return event
    });
}

// 55 1054 8020 ext 2