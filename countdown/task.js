// let second = document.getElementById('second').innerText
        // let start = setInterval(()=> {
        //     if (second > 0) {
        //         second -= 1
        //         document.getElementById('second').innerText = second
        //     }
        //     else {
        //         clearInterval(start);
        //         alert('Вы победили в конкурсе!')
        //     }
        // }, 1000)
          
function format(count) {
    return count >= 10 ? count : '0' + count
}

let time = document.getElementById('time').innerText.split(':')
let [hours, minutes, seconds] = time.map(item => Number(item))
        
let start = setInterval(()=> {
    if ( hours===0 && minutes === 0 && seconds === 0) {
        clearInterval(start);
        alert('Вы победили в конкурсе!')
    }
    else {
        if(minutes === 0 && seconds === 0) {
            hours -= 1
            minutes = 59
            seconds = 59
        }
        else if(seconds === 0) {
            minutes -= 1
            seconds = 59
        }
        else {
            seconds = seconds > 0 ? seconds - 1 : 59
        }
        document.getElementById('time').innerText = `${format(hours)}:${format(minutes)}:${format(seconds)}`
    }
}, 1000)
console.log('Window',window)