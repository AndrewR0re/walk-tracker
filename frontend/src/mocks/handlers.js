import { http, HttpResponse } from 'msw';

//revisit walk handler

export const handlers = [
    http.get('/api/walk', () => {
        return HttpResponse.json([
            {
                id: 1,
                date: '01/08/2026',
                walk: {
                    name: 'Alyth Den',
                    length: 100
                }
            },
            {
                id: 2,
                date: '02/08/2026',
                walk: {
                    name: 'Kinpurney Hill',
                    length: 101
                }
            },
            {
                id: 3,
                date: '03/08/2026',
                walk: {
                    name: 'Lundie Crags',
                    length: 102
                }
            }
        ]);
    }),
    http.get('/api/climb?type=munro', ({ request }) => {
        const url = new URL(request.url);
        const type = url.searchParams.get('type');

        if (type === 'munro') {
            return HttpResponse.json([
                {
                    id: 1,
                    date: '24/12/2017',
                    hill: {
                        name: 'Mayar',
                        altitude: 928
                    }
                },
                {
                    id: 2,
                    date: '24/12/2017',
                    hill: {
                        name: 'Dreish',
                        altitude: 947
                    }
                },
                {
                    id: 3,
                    date: '10/08/2019',
                    hill: {
                        name: 'Sgùrr na Banachdich',
                        altitude: 965
                    }
                },
                {
                    id: 4,
                    date: '24/04/2021',
                    hill: {
                        name: 'Mount Keen',
                        altitude: 939
                    }
                },
                {
                    id: 5,
                    date: '29/10/2024',
                    hill: {
                        name: 'Ben More',
                        altitude: 966
                    }
                },
                {
                    id: 6,
                    date: '12/07/2025',
                    hill: {
                        name: 'Càrn Aosda',
                        altitude: 917
                    }
                },
                {
                    id: 7,
                    date: '12/07/2025',
                    hill: {
                        name: "Càrn a' Ghèoidh",
                        altitude: 975
                    }
                },
                {
                    id: 8,
                    date: '12/07/2025',
                    hill: {
                        name: 'The Cairnwell',
                        altitude: 933
                    }
                },
                {
                    id: 9,
                    date: '12/07/2025',
                    hill: {
                        name: 'Glas Maol',
                        altitude: 1068
                    }
                },
                {
                    id: 10,
                    date: '12/07/2025',
                    hill: {
                        name: 'Creag Leacach',
                        altitude: 987
                    }
                }
            ]);
        }

        if (type === 'graham') {
            return HttpResponse.json([
                {
                    id: 10,
                    date: '12/07/2025',
                    hill: {
                        name: 'Mount Blair',
                        altitude: 744
                    }
                }
            ]);
        }
    })
];