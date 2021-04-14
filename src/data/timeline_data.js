export const TimelineCategories = {
    city: 'Gemeinden',
    district: 'Landkreise',
    // additionalTimeline: 'Weitere Zeitreihen'
}

export function getTimelineData () {
    return {
        // Ammerbuch: {
        //     inhabitants: 11302,
        //     category: TimelineCategories.city
        // },
        // Bodelshausen: {
        //     inhabitants: 5850,
        //     category: TimelineCategories.city
        // },
        // Dettenhausen: {
        //     inhabitants: 5390,
        //     category: TimelineCategories.city
        // },
        // Dußlingen: {
        //     inhabitants: 6241,
        //     category: TimelineCategories.city
        // },
        // Gomaringen: {
        //     inhabitants: 9077,
        //     category: TimelineCategories.city
        // },
        // Hirrlingen: {
        //     inhabitants: 3135,
        //     category: TimelineCategories.city
        // },
        // Kirchentelllinsfurt: {
        //     inhabitants: 5642,
        //     category: TimelineCategories.city
        // },
        // Kusterdingen: {
        //     inhabitants: 8629,
        //     category: TimelineCategories.city
        // },
        // Mössingen: {
        //     inhabitants: 20455,
        //     category: TimelineCategories.city
        // },
        // Nehren: {
        //     inhabitants: 4376,
        //     category: TimelineCategories.city
        // },
        // Neustetten: {
        //     inhabitants: 3715,
        //     category: TimelineCategories.city
        // },
        // Ofterdingen: {
        //     inhabitants: 5182,
        //     category: TimelineCategories.city
        // },
        // Rottenburg: {
        //     inhabitants: 43843,
        //     category: TimelineCategories.city
        // },
        // Starzach: {
        //     inhabitants: 4335,
        //     category: TimelineCategories.city
        // },
        Tübingen: {
            displayName: 'Stadt Tübingen',
            inhabitants: 91506,
            category: TimelineCategories.city
        },
        'Landkreis Tübingen': {
            inhabitants: 228678,
            category: TimelineCategories.district
        },
        'Landkreis Reutlingen': {
            inhabitants: 287034,
            category: TimelineCategories.district
        }
    };
}