export interface Climb {
    id: number,
    date: string,
    type: 'munro' | 'graham',
    hill: {
        name: string,
        altitude: number
    }
}