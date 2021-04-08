/**
 * @typedef {Object} DataPoint
 * @property {string} name
 * @property {number} cumulativeCases
 * @property {number} newCasesLast7Days
 */

/**
 * @typedef {Object} Snapshot
 * @property {string} date
 * @property {DataPoint[]} dataPoints
 */

/**
 *
 * @returns {Snapshot[]}
 */
export function getCoronaData() {
    return [
        {
            date: '04.02.2021',
            dataPoints: [
                {
                    name: 'Ammerbuch',
                    cumulativeCases: 297,
                    newCasesLast7Days: 7
                },
                {
                    name: 'Bodelshausen',
                    cumulativeCases: 109,
                    newCasesLast7Days: 2
                },
                {
                    name: 'Dettenhausen',
                    cumulativeCases: 103,
                    newCasesLast7Days: 1
                },
                {
                    name: 'Dußlingen',
                    cumulativeCases: 154,
                    newCasesLast7Days: 2
                },
                {
                    name: 'Gomaringen',
                    cumulativeCases: 218,
                    newCasesLast7Days: 1
                },
                {
                    name: 'Hirrlingen',
                    cumulativeCases: 90,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Kirchentelllinsfurt',
                    cumulativeCases: 171,
                    newCasesLast7Days: 5
                },
                {
                    name: 'Kusterdingen',
                    cumulativeCases: 225,
                    newCasesLast7Days: 6
                },
                {
                    name: 'Mössingen',
                    cumulativeCases: 646,
                    newCasesLast7Days: 4
                },
                {
                    name: 'Nehren',
                    cumulativeCases: 82,
                    newCasesLast7Days: 1
                },
                {
                    name: 'Neustetten',
                    cumulativeCases: 131,
                    newCasesLast7Days: 3
                },
                {
                    name: 'Ofterdingen',
                    cumulativeCases: 155,
                    newCasesLast7Days: 6
                },
                {
                    name: 'Rottenburg',
                    cumulativeCases: 1231,
                    newCasesLast7Days: 18
                },
                {
                    name: 'Starzach',
                    cumulativeCases: 145,
                    newCasesLast7Days: 1
                },
                {
                    name: 'Tübingen',
                    cumulativeCases: 2183,
                    newCasesLast7Days: 29
                },
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 5875,
                    newCasesLast7Days: 82
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 8564,
                    newCasesLast7Days: 165
                },
            ],
        },
        {
            date: '11.02.2021',
            dataPoints: [
                {
                    name: 'Ammerbuch',
                    cumulativeCases: 298,
                    newCasesLast7Days: 1
                },
                {
                    name: 'Bodelshausen',
                    cumulativeCases: 111,
                    newCasesLast7Days: 2
                },
                {
                    name: 'Dettenhausen',
                    cumulativeCases: 103,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Dußlingen',
                    cumulativeCases: 158,
                    newCasesLast7Days: 4
                },
                {
                    name: 'Gomaringen',
                    cumulativeCases: 222,
                    newCasesLast7Days: 4
                },
                {
                    name: 'Hirrlingen',
                    cumulativeCases: 91,
                    newCasesLast7Days: 1
                },
                {
                    name: 'Kirchentelllinsfurt',
                    cumulativeCases: 173,
                    newCasesLast7Days: 2
                },
                {
                    name: 'Kusterdingen',
                    cumulativeCases: 231,
                    newCasesLast7Days: 6
                },
                {
                    name: 'Mössingen',
                    cumulativeCases: 661,
                    newCasesLast7Days: 5
                },
                {
                    name: 'Nehren',
                    cumulativeCases: 84,
                    newCasesLast7Days: 2
                },
                {
                    name: 'Neustetten',
                    cumulativeCases: 133,
                    newCasesLast7Days: 2
                },
                {
                    name: 'Ofterdingen',
                    cumulativeCases: 157,
                    newCasesLast7Days: 2
                },
                {
                    name: 'Rottenburg',
                    cumulativeCases: 1241,
                    newCasesLast7Days: 10
                },
                {
                    name: 'Starzach',
                    cumulativeCases: 146,
                    newCasesLast7Days: 1
                },
                {
                    name: 'Tübingen',
                    cumulativeCases: 2201,
                    newCasesLast7Days: 18
                },
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 5938,
                    newCasesLast7Days: 58
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 8644,
                    newCasesLast7Days: 84
                },
            ],
        },
        {
            date: '18.02.2021',
            dataPoints: [
                {
                    name: 'Ammerbuch',
                    cumulativeCases: 298,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Bodelshausen',
                    cumulativeCases: 115,
                    newCasesLast7Days: 4
                },
                {
                    name: 'Dettenhausen',
                    cumulativeCases: 103,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Dußlingen',
                    cumulativeCases: 158,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Gomaringen',
                    cumulativeCases: 224,
                    newCasesLast7Days: 2
                },
                {
                    name: 'Hirrlingen',
                    cumulativeCases: 92,
                    newCasesLast7Days: 1
                },
                {
                    name: 'Kirchentelllinsfurt',
                    cumulativeCases: 177,
                    newCasesLast7Days: 4
                },
                {
                    name: 'Kusterdingen',
                    cumulativeCases: 238,
                    newCasesLast7Days: 7
                },
                {
                    name: 'Mössingen',
                    cumulativeCases: 665,
                    newCasesLast7Days: 14
                },
                {
                    name: 'Nehren',
                    cumulativeCases: 84,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Neustetten',
                    cumulativeCases: 133,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Ofterdingen',
                    cumulativeCases: 179,
                    newCasesLast7Days: 22
                },
                {
                    name: 'Rottenburg',
                    cumulativeCases: 1254,
                    newCasesLast7Days: 13
                },
                {
                    name: 'Starzach',
                    cumulativeCases: 147,
                    newCasesLast7Days: 1
                },
                {
                    name: 'Tübingen',
                    cumulativeCases: 2238,
                    newCasesLast7Days: 37
                },
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 6036,
                    newCasesLast7Days: 96
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 8748,
                    newCasesLast7Days: 102
                },
            ],
        },
        {
            date: '25.02.2021',
            dataPoints: [
                {
                    name: 'Ammerbuch',
                    cumulativeCases: 302,
                    newCasesLast7Days: 4
                },
                {
                    name: 'Bodelshausen',
                    cumulativeCases: 115,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Dettenhausen',
                    cumulativeCases: 103,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Dußlingen',
                    cumulativeCases: 158,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Gomaringen',
                    cumulativeCases: 229,
                    newCasesLast7Days: 5
                },
                {
                    name: 'Hirrlingen',
                    cumulativeCases: 93,
                    newCasesLast7Days: 1
                },
                {
                    name: 'Kirchentelllinsfurt',
                    cumulativeCases: 184,
                    newCasesLast7Days: 7
                },
                {
                    name: 'Kusterdingen',
                    cumulativeCases: 241,
                    newCasesLast7Days: 3
                },
                {
                    name: 'Mössingen',
                    cumulativeCases: 689,
                    newCasesLast7Days: 24
                },
                {
                    name: 'Nehren',
                    cumulativeCases: 85,
                    newCasesLast7Days: 1
                },
                {
                    name: 'Neustetten',
                    cumulativeCases: 135,
                    newCasesLast7Days: 2
                },
                {
                    name: 'Ofterdingen',
                    cumulativeCases: 183,
                    newCasesLast7Days: 4
                },
                {
                    name: 'Rottenburg',
                    cumulativeCases: 1270,
                    newCasesLast7Days: 16
                },
                {
                    name: 'Starzach',
                    cumulativeCases: 149,
                    newCasesLast7Days: 2
                },
                {
                    name: 'Tübingen',
                    cumulativeCases: 2257,
                    newCasesLast7Days: 19
                },
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 6106,
                    newCasesLast7Days: 86
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 8883,
                    newCasesLast7Days: 146
                },
            ],
        },
        {
            date: '04.03.2021',
            dataPoints: [
                {
                    name: 'Ammerbuch',
                    cumulativeCases: 305,
                    newCasesLast7Days: 3
                },
                {
                    name: 'Bodelshausen',
                    cumulativeCases: 119,
                    newCasesLast7Days: 4
                },
                {
                    name: 'Dettenhausen',
                    cumulativeCases: 104,
                    newCasesLast7Days: 1
                },
                {
                    name: 'Dußlingen',
                    cumulativeCases: 161,
                    newCasesLast7Days: 3
                },
                {
                    name: 'Gomaringen',
                    cumulativeCases: 230,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Hirrlingen',
                    cumulativeCases: 93,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Kirchentelllinsfurt',
                    cumulativeCases: 186,
                    newCasesLast7Days: 2
                },
                {
                    name: 'Kusterdingen',
                    cumulativeCases: 246,
                    newCasesLast7Days: 5
                },
                {
                    name: 'Mössingen',
                    cumulativeCases: 705,
                    newCasesLast7Days: 16
                },
                {
                    name: 'Nehren',
                    cumulativeCases: 89,
                    newCasesLast7Days: 4
                },
                {
                    name: 'Neustetten',
                    cumulativeCases: 135,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Ofterdingen',
                    cumulativeCases: 186,
                    newCasesLast7Days: 3
                },
                {
                    name: 'Rottenburg',
                    cumulativeCases: 1287,
                    newCasesLast7Days: 17
                },
                {
                    name: 'Starzach',
                    cumulativeCases: 149,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Tübingen',
                    cumulativeCases: 2282,
                    newCasesLast7Days: 25
                },
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 6188,
                    newCasesLast7Days: 80
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 9050,
                    newCasesLast7Days: 148
                },
            ],
        },
        {
            date: '11.03.2021',
            dataPoints: [
                {
                    name: 'Ammerbuch',
                    cumulativeCases: 308,
                    newCasesLast7Days: 3
                },
                {
                    name: 'Bodelshausen',
                    cumulativeCases: 122,
                    newCasesLast7Days: 3
                },
                {
                    name: 'Dettenhausen',
                    cumulativeCases: 104,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Dußlingen',
                    cumulativeCases: 165,
                    newCasesLast7Days: 4
                },
                {
                    name: 'Gomaringen',
                    cumulativeCases: 235,
                    newCasesLast7Days: 5
                },
                {
                    name: 'Hirrlingen',
                    cumulativeCases: 93,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Kirchentelllinsfurt',
                    cumulativeCases: 187,
                    newCasesLast7Days: 1
                },
                {
                    name: 'Kusterdingen',
                    cumulativeCases: 246,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Mössingen',
                    cumulativeCases: 713,
                    newCasesLast7Days: 8
                },
                {
                    name: 'Nehren',
                    cumulativeCases: 91,
                    newCasesLast7Days: 2
                },
                {
                    name: 'Neustetten',
                    cumulativeCases: 136,
                    newCasesLast7Days: 1
                },
                {
                    name: 'Ofterdingen',
                    cumulativeCases: 190,
                    newCasesLast7Days: 4
                },
                {
                    name: 'Rottenburg',
                    cumulativeCases: 1309,
                    newCasesLast7Days: 22
                },
                {
                    name: 'Starzach',
                    cumulativeCases: 152,
                    newCasesLast7Days: 3
                },
                {
                    name: 'Tübingen',
                    cumulativeCases: 2308,
                    newCasesLast7Days: 26
                },
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 6269,
                    newCasesLast7Days: 80
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 9237,
                    newCasesLast7Days: 176
                },
            ]
        },
        {
            date: '18.03.2021',
            dataPoints: [
                {
                    name: 'Ammerbuch',
                    cumulativeCases: 319,
                    newCasesLast7Days: 11
                },
                {
                    name: 'Bodelshausen',
                    cumulativeCases: 129,
                    newCasesLast7Days: 7
                },
                {
                    name: 'Dettenhausen',
                    cumulativeCases: 105,
                    newCasesLast7Days: 1
                },
                {
                    name: 'Dußlingen',
                    cumulativeCases: 178,
                    newCasesLast7Days: 8
                },
                {
                    name: 'Gomaringen',
                    cumulativeCases: 283,
                    newCasesLast7Days: 3
                },
                {
                    name: 'Hirrlingen',
                    cumulativeCases: 94,
                    newCasesLast7Days: 1
                },
                {
                    name: 'Kirchentelllinsfurt',
                    cumulativeCases: 187,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Kusterdingen',
                    cumulativeCases: 251,
                    newCasesLast7Days: 5
                },
                {
                    name: 'Mössingen',
                    cumulativeCases: 719,
                    newCasesLast7Days: 6
                },
                {
                    name: 'Nehren',
                    cumulativeCases: 96,
                    newCasesLast7Days: 5
                },
                {
                    name: 'Neustetten',
                    cumulativeCases: 139,
                    newCasesLast7Days: 3
                },
                {
                    name: 'Ofterdingen',
                    cumulativeCases: 192,
                    newCasesLast7Days: 2
                },
                {
                    name: 'Rottenburg',
                    cumulativeCases: 1361,
                    newCasesLast7Days: 52
                },
                {
                    name: 'Starzach',
                    cumulativeCases: 159,
                    newCasesLast7Days: 7
                },
                {
                    name: 'Tübingen',
                    cumulativeCases: 2329,
                    newCasesLast7Days: 21
                },
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 6390,
                    newCasesLast7Days: 121
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 9519,
                    newCasesLast7Days: 266
                },
            ]
        },
        {
            date: '25.03.2021',
            dataPoints: [
                {
                    name: 'Ammerbuch',
                    cumulativeCases: 328,
                    newCasesLast7Days: 9
                },
                {
                    name: 'Bodelshausen',
                    cumulativeCases: 131,
                    newCasesLast7Days: 2
                },
                {
                    name: 'Dettenhausen',
                    cumulativeCases: 105,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Dußlingen',
                    cumulativeCases: 178,
                    newCasesLast7Days: 8
                },
                {
                    name: 'Gomaringen',
                    cumulativeCases: 241,
                    newCasesLast7Days: 3
                },
                {
                    name: 'Hirrlingen',
                    cumulativeCases: 96,
                    newCasesLast7Days: 2
                },
                {
                    name: 'Kirchentelllinsfurt',
                    cumulativeCases: 190,
                    newCasesLast7Days:3
                },
                {
                    name: 'Kusterdingen',
                    cumulativeCases: 254,
                    newCasesLast7Days: 3
                },
                {
                    name: 'Mössingen',
                    cumulativeCases: 728,
                    newCasesLast7Days: 9
                },
                {
                    name: 'Nehren',
                    cumulativeCases: 96,
                    newCasesLast7Days: 0
                },
                {
                    name: 'Neustetten',
                    cumulativeCases: 146,
                    newCasesLast7Days: 7
                },
                {
                    name: 'Ofterdingen',
                    cumulativeCases: 195,
                    newCasesLast7Days: 3
                },
                {
                    name: 'Rottenburg',
                    cumulativeCases: 1433,
                    newCasesLast7Days: 72
                },
                {
                    name: 'Starzach',
                    cumulativeCases: 169,
                    newCasesLast7Days: 10
                },
                {
                    name: 'Tübingen',
                    cumulativeCases: 2361,
                    newCasesLast7Days: 32
                },
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 6561,
                    newCasesLast7Days: 163
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 9890,
                    newCasesLast7Days: 342
                },
            ]
        },
        {
            date: '26.03.2021',
            dataPoints: [
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 6601,
                    newCasesLast7Days: 169
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 9962,
                    newCasesLast7Days: 338
                },
            ]
        },
        {
            date: '27.03.2021',
            dataPoints: [
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 6654,
                    newCasesLast7Days: 196
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 10002,
                    newCasesLast7Days: 311
                },
            ]
        },
        {
            date: '28.03.2021',
            dataPoints: [
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 6691,
                    newCasesLast7Days: 226
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 10044,
                    newCasesLast7Days: 347
                },
            ]
        },
        {
            date: '29.03.2021',
            dataPoints: [
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 6716,
                    newCasesLast7Days: 239
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 10068,
                    newCasesLast7Days: 334
                },
            ]
        },
        {
            date: '30.03.2021',
            dataPoints: [
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 6762,
                    newCasesLast7Days: 252
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 10142,
                    newCasesLast7Days: 345
                },
            ]
        },
        {
            date: '31.03.2021',
            dataPoints: [
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 6812,
                    newCasesLast7Days: 282
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 10213,
                    newCasesLast7Days: 355
                },
            ]
        },
        {
            date: '01.04.2021',
            dataPoints: [
                {
                    name: 'Ammerbuch',
                    cumulativeCases: 344,
                    newCasesLast7Days: 16
                },
                {
                    name: 'Bodelshausen',
                    cumulativeCases: 135,
                    newCasesLast7Days: 4
                },
                {
                    name: 'Dettenhausen',
                    cumulativeCases: 107,
                    newCasesLast7Days: 2
                },
                {
                    name: 'Dußlingen',
                    cumulativeCases: 187,
                    newCasesLast7Days: 9
                },
                {
                    name: 'Gomaringen',
                    cumulativeCases: 243,
                    newCasesLast7Days: 2
                },
                {
                    name: 'Hirrlingen',
                    cumulativeCases: 97,
                    newCasesLast7Days: 1
                },
                {
                    name: 'Kirchentelllinsfurt',
                    cumulativeCases: 197,
                    newCasesLast7Days: 7
                },
                {
                    name: 'Kusterdingen',
                    cumulativeCases: 258,
                    newCasesLast7Days: 4
                },
                {
                    name: 'Mössingen',
                    cumulativeCases: 767,
                    newCasesLast7Days: 39
                },
                {
                    name: 'Nehren',
                    cumulativeCases: 97,
                    newCasesLast7Days: 1
                },
                {
                    name: 'Neustetten',
                    cumulativeCases: 154,
                    newCasesLast7Days: 8
                },
                {
                    name: 'Ofterdingen',
                    cumulativeCases: 204,
                    newCasesLast7Days: 9
                },
                {
                    name: 'Rottenburg',
                    cumulativeCases: 1533,
                    newCasesLast7Days: 100
                },
                {
                    name: 'Starzach',
                    cumulativeCases: 176,
                    newCasesLast7Days: 7
                },
                {
                    name: 'Tübingen',
                    cumulativeCases: 2466,
                    newCasesLast7Days: 105
                },
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 6874,
                    newCasesLast7Days: 301
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 10297,
                    newCasesLast7Days: 381
                },
            ]
        },
        {
            date: '02.04.2021',
            dataPoints: [
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 6932,
                    newCasesLast7Days: 311
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 10402,
                    newCasesLast7Days: 398
                },
            ]
        },
        {
            date: '03.04.2021',
            dataPoints: [
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 6955,
                    newCasesLast7Days: 280
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 10408,
                    newCasesLast7Days: 351
                },
            ]
        },
        {
            date: '04.04.2021',
            dataPoints: [
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 6976,
                    newCasesLast7Days: 271
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 10437,
                    newCasesLast7Days: 358
                },
            ]
        },
        {
            date: '05.04.2021',
            dataPoints: [
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 6992,
                    newCasesLast7Days: 249
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 10476,
                    newCasesLast7Days: 358
                },
            ]
        },
        {
            date: '06.04.2021',
            dataPoints: [
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 7009,
                    newCasesLast7Days: 227
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 10490,
                    newCasesLast7Days: 308
                },
            ]
        },
        {
            date: '07.04.2021',
            dataPoints: [
                {
                    name: 'Landkreis Tübingen',
                    cumulativeCases: 7066,
                    newCasesLast7Days: 236
                },
                {
                    name: 'Landkreis Reutlingen',
                    cumulativeCases: 10580,
                    newCasesLast7Days: 342
                },
            ]
        },
    ]
}