function GetToday() {
    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth();
    let date = today.getDate();

    let hours = today.getHours();
    let minutes = today.getMinutes();

    let now = year+'.'+month+'.'+date+' '+hours+':'+minutes;
    return now;
}

export default GetToday;