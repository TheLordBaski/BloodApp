const requests = [
    {
        id: 1,
        bloodType: "B+",
        bloodSubType: "RhdPositiv",
        fenotype: "C+c-E-e+K-",
        name: "Zdenek Pecinka",
        age: 47,
        gender: "Male",
        distance: 28,
        date: "12.1.2020",
        time: "2 hrs",
        priority: "urgent",
        city: "Trnava",
    },
    {
        id: 2,
        bloodType: "O-",
        bloodSubType: "RhdPositiv",
        fenotype: "C+c-E-e+K-",
        name: "Michala Kovačičová",
        age: 23,
        gender: "Female",
        distance: 10,
        date: "12.1.2020",
        time: "22 hrs",
        priority: "urgent",
        city: "Bratislava",
    },
    {
        id: 3,
        bloodType: "A+",
        bloodSubType: "RhdPositiv",
        fenotype: "C+c-E-e+K-",
        name: "Patrik Mrázek",
        age: 6,
        gender: "Male",
        distance: 15.3,
        date: "12.1.2020",
        time: "5 hrs",
        priority: "urgent",
        city: "Senica",
    },
    {
        id: 3,
        bloodType: "0+",
        bloodSubType: "RhdPositiv",
        fenotype: "C+c-E-e+K-",
        name: "Filip Einstein",
        age: 26,
        gender: "Male",
        distance: 105.3,
        date: "10.1.2020",
        time: "15 days",
        priority: "urgent",
        city: "Hlohovec",
    },

];

const chart = [
    1.1,
    3,
    1.5,
    2.3,
    3.2,
    7,
    8.2,
    1.2,
    2,
    1.2,
    8,
    3.8,
    5.8,
    3.9,
    5.1,
    0.1,
    6
];

const user = {
    avatar: require('./assets/avatar.jpg')
};

var markers = [
    {
        latitude: 45.65,
        longitude: -78.90,
        title: 'Foo Place',
        subtitle: '1234 Foo Drive'
    }
];

export {requests, chart, user, markers}