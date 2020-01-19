const requests = [
    {
        id: 1,
        bloodType: "B+",
        name: "Zdenek Pecinka",
        age: 47,
        gender: "Male",
        distance: 28,
        time: "2 hrs",
        priority: "urgent",
    },
    {
        id: 2,
        bloodType: "O-",
        name: "Michala Kovačičová",
        age: 23,
        gender: "Female",
        distance: 10,
        time: "22 hrs",
        priority: "urgent",
    },
    {
        id: 3,
        bloodType: "A+",
        name: "Patrik Mrázek",
        age: 6,
        gender: "Male",
        distance: 15.3,
        time: "12.1.2020",
        priority: "urgent",
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

export { requests, chart, user }