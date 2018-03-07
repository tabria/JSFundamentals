function calendar(inputInfo){
    const weekDays = 6;
    const dayCorrection = 1;
    const dayConvert = 1000 * 3600 * 24;
    const firstDay = 1;
    let date = new Date(inputInfo[2], inputInfo[1]-1, inputInfo[0]);
    let calendarTable = "<table>\r\n";
    calendarTable += "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\r\n";

    let dayOfMonth = date.getDate();
    let startOfMonth = new Date(inputInfo[2], inputInfo[1]-1, firstDay);
    let endOfMonth = new Date(inputInfo[2], inputInfo[1], 0);
    let startDate = new Date(inputInfo[2], inputInfo[1]-1, firstDay - startOfMonth.getDay());
    let endDate = new Date(inputInfo[2], inputInfo[1], weekDays - endOfMonth.getDay());

    let dayDifference = Math.ceil((endDate.getTime() - startDate.getTime()) /(dayConvert)) + dayCorrection;
    let rows = dayDifference / (weekDays + dayCorrection);

    for (let k=0; k<rows; k++){
        calendarTable += "<tr>";
        for(let i=1; i<=7; i++){
           if ( startDate< startOfMonth){
                calendarTable += `<td class=\"prev-month\">${startDate.getDate()}</td>`;
            } else if (startDate > endOfMonth){
                calendarTable +=`<td class=\"next-month\">${startDate.getDate()}</td>`;
            } else if (startDate.getDate() === date.getDate()){
                calendarTable += `<td class=\"today\">${startDate.getDate()}</td>`;
            }else{
                calendarTable += `<td>${startDate.getDate()}</td>`;
            }
            startDate.setDate(startDate.getDate() + dayCorrection);
        }
        calendarTable +="</tr>\r\n";
    }
    calendarTable += "</table>";

    console.log(calendarTable);
}

calendar([1, 1, 1900]);