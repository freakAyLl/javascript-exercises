let findTheOldest = function(peopleArr) {
    peopleArr.sort((a,b)=>{
        if(a.yearOfDeath===undefined){
            a.yearOfDeath=2020
        }
        if(b.yearOfDeath===undefined){
            b.yearOfDeath=2020
        }
        if(a.yearOfDeath-a.yearOfBirth> b.yearOfDeath-b.yearOfBirth){
            return -1;
        }
        if(a.yearOfDeath-a.yearOfBirth< b.yearOfDeath-b.yearOfBirth){
            return 1;
        }
        return 0
    })
    return peopleArr[0]
}
module.exports = findTheOldest
