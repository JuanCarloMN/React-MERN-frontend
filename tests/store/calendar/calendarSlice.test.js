import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from '../../../src/store/calendar/calendarSlice';
import { calendarWithActiveEventsState, calendarWithEventsState, events, initialState } from '../../fixtures/calendarStates';

describe('Pruebas en calendarSlice', () => {

    test('Debe de regresar el estado por defecto', () => {
    
        const state = calendarSlice.getInitialState()
        expect( state ).toEqual( initialState );
    })

    test('onSetActiveEvent debe de activar el evento', () => {
    
        const state = calendarSlice.reducer( calendarWithEventsState, onSetActiveEvent( events[0] ) );

        expect( state.activeEvent ).toEqual( events[0] );
    })
    
    test('onAddNewEvent debe de agregar el evento', () => {
    
        const newEvent = {
            id: '3',
            title: 'Cumpleaños de Valentina',
            notes: 'Alguna nota de Vale',
            start: new Date('2024-10-08 13:00:00'),
            end: new Date('2024-10-08 15:00:00'),
        }

        const state = calendarSlice.reducer( calendarWithEventsState, onAddNewEvent( newEvent ) );
        expect( state.events ).toEqual( [ ...events, newEvent ] );
    });
    
    test('onUpdateEvent debe de actualizar el evento', () => {
    
        const updatedEvent = {
            id: '1',
            title: 'Cumpleaños de Valentina',
            notes: 'Alguna nota de Vale',
            start: new Date('2024-10-08 13:00:00'),
            end: new Date('2024-10-08 15:00:00'),
        }

        const state = calendarSlice.reducer( calendarWithEventsState, onUpdateEvent( updatedEvent ) );
        expect( state.events ).toContain( updatedEvent )
    });

    test('onDeleteEvent debe de borrar el evento activo', () => {

        const state = calendarSlice.reducer( calendarWithActiveEventsState, onDeleteEvent() );
        expect( state.activeEvent ).toBe( null );
        expect( state.events ).not.toContain( events[0] );
    });
    
    test('onLoadEvents debe de establecer los eventos', () => {
    
        const state = calendarSlice.reducer( initialState, onLoadEvents( events ) );
        expect( state.isLoadingEvents ).toBeFalsy();
        expect( state.events ).toEqual( events );
    });
    
    test('onLogoutCalendar debe de limpiar el estado', () => {
        const state = calendarSlice.reducer( calendarWithActiveEventsState, onLogoutCalendar() );
        expect( state ).toEqual( initialState );
    });
    
})
