var day = 'Sunday'

if(day == "Friday"){
    console.log("Alarm at 9 am");
}
else if (day == "Tuesday" || day == "Wednesday" || day == "Thursday"){
    console.log("Alarm at 4 am");
}
else if (day == "Saturday" || day == "Sunday"){
    console.log("Alarm at 8 am");
}
else{
    console.log("Alarm at 7 am");
}