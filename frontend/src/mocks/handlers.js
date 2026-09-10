import { http, HttpResponse } from 'msw';

export const handlers = [
    // http.get('/api/walk', () => {
    //     return HttpResponse.json([
    //         {
    //             id: 1,
    //             walkDate: '01/08/2026',
    //             walkRoute: {
    //                 name: 'Alyth Den MOCK',
    //                 distanceMetres: 100
    //             }
    //         },
    //         {
    //             id: 2,
    //             walkDate: '02/08/2026',
    //             walkRoute: {
    //                 name: 'Kinpurney Hill MOCK',
    //                 distanceMetres: 101
    //             }
    //         },
    //         {
    //             id: 3,
    //             walkDate: '03/08/2026',
    //             walkRoute: {
    //                 name: 'Lundie Crags MOCK',
    //                 distanceMetres: 102
    //             }
    //         }
    //     ]);
    // }),
    // http.get('/api/climbedMunro', () => {
    //     return HttpResponse.json([
    //         {
    //             id: 1,
    //             climbDate: '24/12/2017',
    //             munro: {
    //                 name: 'Mayar MOCK',
    //                 altitudeMetres: 928
    //             }
    //         },
    //         {
    //             id: 2,
    //             climbDate: '24/12/2017',
    //             munro: {
    //                 name: 'Dreish MOCK',
    //                 altitudeMetres: 947
    //             }
    //         },
    //         {
    //             id: 3,
    //             climbDate: '10/08/2019',
    //             munro: {
    //                 name: 'Sgùrr na Banachdich MOCK',
    //                 altitudeMetres: 965
    //             }
    //         },
    //         {
    //             id: 4,
    //             climbDate: '24/04/2021',
    //             munro: {
    //                 name: 'Mount Keen MOCK',
    //                 altitudeMetres: 939
    //             }
    //         },
    //         {
    //             id: 5,
    //             climbDate: '29/10/2024',
    //             munro: {
    //                 name: 'Ben More MOCK',
    //                 altitudeMetres: 966
    //             }
    //         },
    //         {
    //             id: 6,
    //             climbDate: '12/07/2025',
    //             munro: {
    //                 name: 'Càrn Aosda MOCK',
    //                 altitudeMetres: 917
    //             }
    //         },
    //         {
    //             id: 7,
    //             climbDate: '12/07/2025',
    //             munro: {
    //                 name: "Càrn a' Ghèoidh MOCK",
    //                 altitudeMetres: 975
    //             }
    //         },
    //         {
    //             id: 8,
    //             climbDate: '12/07/2025',
    //             munro: {
    //                 name: 'The Cairnwell MOCK',
    //                 altitudeMetres: 933
    //             }
    //         },
    //         {
    //             id: 9,
    //             climbDate: '12/07/2025',
    //             munro: {
    //                 name: 'Glas Maol MOCK',
    //                 altitudeMetres: 1068
    //             }
    //         },
    //         {
    //             id: 10,
    //             climbDate: '12/07/2025',
    //             munro: {
    //                 name: 'Creag Leacach MOCK',
    //                 altitudeMetres: 987
    //             }
    //         }
    //     ], {
    //         headers: {
    //             'Cache-Control': 'no-store'
    //         }
    //     });
    // })
];