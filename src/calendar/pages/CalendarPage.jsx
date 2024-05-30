import { useState } from 'react';

import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, NavBar } from '../';

import { localizer, getMessegesES } from '../../helpers';
import { useCalendarStore, useUiStore } from '../../hooks';

export const CalendarPage = () => {

    const { openDateModal } = useUiStore();

    const { events, setActiveEvent } = useCalendarStore();
    const [ lastView, setLastView ] = useState(localStorage.getItem('lastView') || 'week');

    const eventStyleGetter = ( event, start, end, isSelected ) => {
        // console.log({ event, start, end, isSelected });

        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        }

        return {
            style
        }
    }
    
    const onDoubleClick = ( event ) => {
        console.log({ doubleclick: event });
        openDateModal();
    }

    const onSelect = ( event ) => {
        console.log({ click: event });
        setActiveEvent( event );
    }

    const onViewChange = ( event ) => {
        localStorage.setItem('lastView', event );
        setLastView( event );
    }

    return (
        <>
            <NavBar />

            <Calendar
                culture='es'
                localizer={ localizer }
                events={ events }
                defaultView={ lastView }
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc( 100vh - 100px )', width: 'calc( 100vw - 10px )' }}
                messages={ getMessegesES() }
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChange }
            />

            <CalendarModal />
            <FabAddNew />
            <FabDelete />
        </>
    )
}
