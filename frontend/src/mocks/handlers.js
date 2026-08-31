import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('/api/walks', () => {
        return HttpResponse.json([
            { id: 1, name: 'Alyth Den', date: '01/08/2026' },
            { id: 2, name: 'Kinpurney Hill', date: '02/08/2026' },
            { id: 3, name: 'Lundie Crags', date: '03/08/2026' }
        ]);
    }),
    http.get('/api/munros', () => {
        return HttpResponse.json([
            { id: 1, name: 'Mayar', altitude: 928, date: '24/12/2017' },
            { id: 2, name: 'Dreish', altitude: 947, date: '24/12/2017' },
            { id: 3, name: 'Sgùrr na Banachdich', altitude: 965, date: '10/08/2019' },
            { id: 4, name: 'Mount Keen', altitude: 939, date: '24/04/2021' },
            { id: 5, name: 'Ben More', altitude: 966, date: '29/10/2024' },
            { id: 6, name: 'Càrn Aosda', altitude: 917, date: '12/07/2025' },
            { id: 7, name: 'Càrn a\' Ghèoidh', altitude: 975, date: '12/07/2025' },
            { id: 8, name: 'The Cairnwell', altitude: 933, date: '12/07/2025' },
            { id: 9, name: 'Glas Maol', altitude: 1068, date: '12/07/2025' },
            { id: 10, name: 'Creag Leacach', altitude: 987, date: '12/07/2025' }
        ]);
    })
];