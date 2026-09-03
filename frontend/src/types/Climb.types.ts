export interface Climb {
    id: number,
    date: string,
    type: 'munro' | 'corbett' | 'graham',
    hill: {
        name: string,
        altitude: number
    }
}