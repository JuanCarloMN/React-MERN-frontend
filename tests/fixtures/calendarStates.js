
export const events =  [
    {
        id: '1',
        title: 'Cumpleaños de Juan Carlo',
        notes: 'Alguna nota',
        start: new Date('2024-08-20 13:00:00'),
        end: new Date('2024-08-20 15:00:00'),
    },
    {
        id: '2',
        title: 'Cumpleaños de Perla',
        notes: 'Alguna nota de Perla',
        start: new Date('2024-02-27 13:00:00'),
        end: new Date('2024-02-27 15:00:00'),
    },
]

export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null
}

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [ ...events ],
    activeEvent: null
}

export const calendarWithActiveEventsState = {
    isLoadingEvents: false,
    events: [ ...events ],
    activeEvent: { ...events[0] }
}
