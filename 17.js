var tarikhpetarikh = new Date();
function formatDate(pd){
    var date =pd.getDate();
    var month =pd.getMonth();   
    month++;
    var year = pd.getFullYear();
    return date + "/" + month+"/"+year;
}
function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
console.log(addZero(tarikhpetarikh.getDate())+"/"+addZero(tarikhpetarikh.getMonth())+"/"+addZero(tarikhpetarikh.getFullYear()) +
" " +addZero(tarikhpetarikh.getHours())+":"+addZero(tarikhpetarikh.getMinutes())+":"+addZero(tarikhpetarikh.getSeconds()));