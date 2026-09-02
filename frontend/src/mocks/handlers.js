import { http, HttpResponse } from 'msw';

//revisit walk handler

export const handlers = [
    http.get('/api/walks', () => {
        return HttpResponse.json([
            { id: 1, name: 'Alyth Den', date: '01/08/2026' },
            { id: 2, name: 'Kinpurney Hill', date: '02/08/2026' },
            { id: 3, name: 'Lundie Crags', date: '03/08/2026' }
        ]);
    }),
    http.get('/api/climb/munro', () => {
        return HttpResponse.json([
            {
                id: 1,
                date: '24/12/2017',
                munro: {
                    name: 'Mayar',
                    altitude: 928
                }
            },
            {
                id: 2,
                date: '24/12/2017',
                munro: {
                    name: 'Dreish',
                    altitude: 947
                }
            },
            {
                id: 3,
                date: '10/08/2019',
                munro: {
                    name: 'Sgùrr na Banachdich',
                    altitude: 965
                }
            },
            {
                id: 4,
                date: '24/04/2021',
                munro: {
                    name: 'Mount Keen',
                    altitude: 939
                }
            },
            {
                id: 5,
                date: '29/10/2024',
                munro: {
                    name: 'Ben More',
                    altitude: 966
                }
            },
            {
                id: 6,
                date: '12/07/2025',
                munro: {
                    name: 'Càrn Aosda',
                    altitude: 917
                }
            },
            {
                id: 7,
                date: '12/07/2025',
                munro: {
                    name: "Càrn a' Ghèoidh",
                    altitude: 975
                }
            },
            {
                id: 8,
                date: '12/07/2025',
                munro: {
                    name: 'The Cairnwell',
                    altitude: 933
                }
            },
            {
                id: 9,
                date: '12/07/2025',
                munro: {
                    name: 'Glas Maol',
                    altitude: 1068
                }
            },
            {
                id: 10,
                date: '12/07/2025',
                munro: {
                    name: 'Creag Leacach',
                    altitude: 987
                }
            }
        ]
        );
    })
];