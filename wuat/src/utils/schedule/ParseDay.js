function ParseDay(selectedDay){
    const year = selectedDay.getFullYear();
    const month = selectedDay.getMonth() + 1;
    const day = selectedDay.getDate();
   
    return {'year':year, 'month': month, 'day': day}
}

export default ParseDay;