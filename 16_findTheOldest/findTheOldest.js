const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();

    return people.reduce((oldest, person) => {
        const deathYear = person.yearOfDeath || currentYear; 
        const age = deathYear - person.yearOfBirth;

        if (!oldest || age > (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth) {
            return person; //asigns current person to oldest
        }

        return oldest;
    }, null);
};
// Do not edit below this line
module.exports = findTheOldest;
