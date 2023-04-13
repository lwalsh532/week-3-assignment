// a crowdsourced dataset of favorite pizza places we made in class
const evictionData =
    [
        {
            "address": "84-53 Dana Court, Queens, NY 11379",
            "total_hpd_violations": 505,
            "longitude": -73.8686,
            "latitude": 40.72318
        },
        {
            "address": "709 West 170 Street, Manhattan, NY 10032",
            "total_hpd_violations": 355,
            "longitude": -73.9422,
            "latitude": 40.8438
        },
        {
            "address": "90-38 170 Street, Queens, NY 11432",
            "total_hpd_violations": 311,
            "longitude": -73.7902,
            "latitude": 40.70768
        },
        {
            "address": "705 West 170 Street, Manhattan, NY 10032",
            "total_hpd_violations": 306,
            "longitude": -73.9421,
            "latitude": 40.84374
        },
        {
            "address": "410 West 46 Street, Manhattan, NY 10036",
            "total_hpd_violations": 279,
            "longitude": -73.9916,
            "latitude": 40.76122
        },
        {
            "address": "331 East 14 Street, Manhattan, NY 10003",
            "total_hpd_violations": 191,
            "longitude": -73.9835,
            "latitude": 40.73193
        },
        {
            "address": "440 West 45 Street, Manhattan, NY 10036",
            "total_hpd_violations": 187,
            "longitude": -73.9931,
            "latitude": 40.76106
        },
        {
            "address": "452 West 36 Street, Manhattan, NY 10018",
            "total_hpd_violations": 164,
            "longitude": -73.9977,
            "latitude": 40.75554
        },
        {
            "address": "338 East 61 Street, Manhattan, NY 10065",
            "total_hpd_violations": 151,
            "longitude": -73.9617,
            "latitude": 40.76103
        },
        {
            "address": "104 West 83 Street, Manhattan, NY 10024",
            "total_hpd_violations": 117,
            "longitude": -73.9742,
            "latitude": 40.78467
        },
        {
            "address": "438 West 45 Street, Manhattan, NY 10036",
            "total_hpd_violations": 111,
            "longitude": -73.9931,
            "latitude": 40.76103
        },
        {
            "address": "190 East 3 Street, Manhattan, NY 10009",
            "total_hpd_violations": 94,
            "longitude": -73.9836,
            "latitude": 40.72285
        },
        {
            "address": "412 West 46 Street, Manhattan, NY 10036",
            "total_hpd_violations": 87,
            "longitude": -73.9917,
            "latitude": 40.76125
        },
        {
            "address": "1585 3 Avenue, Manhattan, NY 10128",
            "total_hpd_violations": 78,
            "longitude": -73.9523,
            "latitude": 40.78078
        },
        {
            "address": "63-36 Woodhaven Boulevard, Queens, NY 11374",
            "total_hpd_violations": 44,
            "longitude": -73.8688,
            "latitude": 40.72343
        }
    ]


mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';

const NYC_COORDINATES = [-74.00214, 40.71882]

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v11', // style URL
    center: NYC_COORDINATES, // starting position [lng, lat]
    zoom: 10, // starting zoom
    bearing: 0,
    pitch: 0
});



evictionData.forEach(function (evictionRecord) {
    const popup = new mapboxgl.Popup({ offset: 20 }).setText(
        `The address of this property owned by Jonathan Santana is ${evictionRecord['address']}. It has ${evictionRecord['total_hpd_violations']} unresolved HPD violations as of 2022.`
    );


    // using the color orange for all my buildings given they are all owned by the same landlord.
    let color = '#f78002'




    // map center point
    new mapboxgl.Marker({
        color: color
    })
        .setLngLat([evictionRecord.longitude, evictionRecord.latitude])
        .setPopup(popup)
        .addTo(map);
})

// event listeners

$('#fly-to-the-east-village').on('click', function () {
    map.flyTo({
        center: [-73.981873, 40.726292],
        zoom:13
    })
})

$('#fly-to-midtown').on('click', function () {
    map.flyTo({
        center: [-73.981823, 40.767995],
        zoom: 13
    })
})

$('#fly-to-washington-heights').on('click', function () {
    map.flyTo({
        center: [-73.9421, 40.84374],
        zoom:17
    })
})


$('#fly-to-queens').on('click', function () {
    map.flyTo({
        center: [-73.827354, 40.715676],
        zoom: 12
    })
})

$('#return-to-base').on('click', function () {
    map.flyTo({
        center: [-74.00214, 40.71882],
        zoom:10
    })
})
