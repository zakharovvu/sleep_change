let dateStart = document.getElementById('dateStart').value = '2019-05-14T21:00'
let dateFinish = document.getElementById('dateFinish').value = '2019-05-15T06:00'
let people1 = document.getElementById('people1')
let people2 = document.getElementById('people2')
let people3 = document.getElementById('people3')

document.addEventListener('click', (e) => handler(e))

document.addEventListener('change', (e) => {
    if (e.target.id === 'dateStart') dateStart = e.target.value
    if (e.target.id === 'dateFinish') dateFinish = e.target.value
    handler(e)
})

function handler(e) {
    if (e.target.id === 'button' || e.target.id === 'dateStart' || e.target.id === 'dateFinish') {
        let difference = Date.parse(dateFinish) - Date.parse(dateStart)
        if (difference < 0) return alert('Error: Дата начала не может быль больше даты конца.')  

        people1.innerHTML = `>>>${getDateForPeople1(difference, dateStart)[0].toLocaleString().slice(11, 17)}
            ---${getDateForPeople1(difference, dateStart)[1].toLocaleString().slice(11, 17)}`
        people2.innerHTML = `>>>${getDateForPeople2(difference, dateStart, dateFinish)[0].toLocaleString().slice(11, 17)}
            ---${getDateForPeople2(difference, dateStart, dateFinish)[1].toLocaleString().slice(11, 17)}
            ||${getDateForPeople2(difference, dateStart, dateFinish)[2].toLocaleString().slice(11, 17)}
            ---${getDateForPeople2(difference, dateStart, dateFinish)[3].toLocaleString().slice(11, 17)}`
        people3.innerHTML = `>>>${getDateForPeople3(difference, dateFinish)[0].toLocaleString().slice(11, 17)}
            ---${getDateForPeople3(difference, dateFinish)[1].toLocaleString().slice(11, 17)}
            <br>Каждому по: ${convertMS(difference / 3 * 2)}`
    }
}


function getDateForPeople1(difference, dateStart) {
    let start = getDateIsMilisec(Date.parse(dateStart))
    let finish = getDateIsMilisec(Date.parse(dateStart) + difference / 3 * 2)
    return [start, finish]
}

function getDateForPeople2(difference, dateStart, dateFinish) {
    let start1 = getDateIsMilisec(Date.parse(dateStart))
    let finish1 = getDateIsMilisec(Date.parse(dateStart) + (difference / 3 * 2) / 2)
    let start2 = getDateIsMilisec(Date.parse(dateFinish) - (difference / 3 * 2) / 2)
    let finish2 = getDateIsMilisec(Date.parse(dateFinish))
    return [start1, finish1, start2, finish2]
}

function getDateForPeople3(difference, dateFinish) {
    let start = getDateIsMilisec(Date.parse(dateFinish) - difference / 3 * 2)
    let finish = getDateIsMilisec(Date.parse(dateFinish))
    return [start, finish]
}

function getDateIsMilisec(ms) {
    let d = new Date(1970, 0, 1, 0, 0, 0, ms)
    d.setHours(d.getHours() + 3)
    return d
}

function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    h += d * 24;
    return h + ':' + m;
}