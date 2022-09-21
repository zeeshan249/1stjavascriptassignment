
const getDays = (year, month) => {
    return new Date(year, month,0).getDate();
};
const daysInSeptember = getDays(2021, 7); 
console.log(daysInSeptember);