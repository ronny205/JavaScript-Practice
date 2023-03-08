var day ='Wed'
switch(day){
    case "Tue":
    case "Wed":
    case "Thu":
        console.log("Alarm at 4 am");
        break;
    case "Fri":
        console.log("Alarm at 9 am");
        break;
    case "Sat":
    case "Sun":
        console.log("Alarm at 8 am");
        break;
    case 'Mon':
        console.log("Alarm at 7 am");
}