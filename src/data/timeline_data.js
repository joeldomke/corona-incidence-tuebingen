export const TimelineCategories = {
    city: 'Gemeinden',
    district: 'Landkreise',
    // additionalTimeline: 'Weitere Zeitreihen'
}

export function getTimelineData () {
    return {
        Ammerbuch: {
            inhabitants: 11321,
            category: TimelineCategories.city
        },
        Bodelshausen: {
            inhabitants: 5776,
            category: TimelineCategories.city
        },
        Dettenhausen: {
            inhabitants: 5421,
            category: TimelineCategories.city
        },
        Dußlingen: {
            inhabitants: 6287,
            category: TimelineCategories.city
        },
        Gomaringen: {
            inhabitants: 9138,
            category: TimelineCategories.city
        },
        Hirrlingen: {
            inhabitants: 3157,
            category: TimelineCategories.city
        },
        Kirchentelllinsfurt: {
            inhabitants: 5610,
            category: TimelineCategories.city
        },
        Kusterdingen: {
            inhabitants: 8737,
            category: TimelineCategories.city
        },
        Mössingen: {
            inhabitants: 20496,
            category: TimelineCategories.city
        },
        Nehren: {
            inhabitants: 4395,
            category: TimelineCategories.city
        },
        Neustetten: {
            inhabitants: 3733,
            category: TimelineCategories.city
        },
        Ofterdingen: {
            inhabitants: 5276,
            category: TimelineCategories.city
        },
        Rottenburg: {
            inhabitants: 43843,
            category: TimelineCategories.city
        },
        Starzach: {
            inhabitants: 4339,
            category: TimelineCategories.city
        },
        Tübingen: {
            inhabitants: 89998,
            category: TimelineCategories.city
        },
        'Landkreis Tübingen': {
            inhabitants: 227426,
            category: TimelineCategories.district
        },
        'Landkreis Reutlingen': {
            inhabitants: 287445,
            category: TimelineCategories.district
        }
    };
}