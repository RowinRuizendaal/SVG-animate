const paragraph = document.querySelector('.container p')

const interval = setInterval(getTime, 1000);





function getTime () {
    const date = new Date();
    let curr_hour = date.getHours();
    let curr_min = date.getMinutes();
    let curr_sec = date.getSeconds();

    if (curr_sec < 10) {
        curr_sec = `0${curr_sec}`
    } 
    if ( curr_min < 10) {
        curr_min = `0${curr_min}`
    } 
    if (curr_hour < 10 ){
        curr_hour = `0${curr_hour}`
    }

    paragraph.innerHTML = `${curr_hour}:${curr_min}:${curr_sec}`
}
