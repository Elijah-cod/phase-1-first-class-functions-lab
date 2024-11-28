// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) => {
    return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = (drivers) => [drivers[2], drivers[3]]

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (number) {
    return (fare) => fare * number
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, someFunction) => someFunction(drivers)