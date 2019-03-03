const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const startHorse = document.getElementById('startHorse');
const startSelect = document.getElementById('startMin');
const finishHorse = document.getElementById('finishHorse');
const finishMin = document.getElementById('finishMin');

const arrFinishHorse = createSelect(24, 6);
const arrStartHorse = createSelect(24, 21);
const arrFinishMin = createSelect(60, 30);
const arrStartMin = createSelect(60, 0);

function createSelect(el1, el2) {
    let result = `${Array(el1).fill('').map((el, i) => {
        return i === el2 ? `<option selected>${i}</option>` : `<option>${i}</option>`
    })}`
    return result;
}

startHorse.innerHTML = arrStartHorse; startMin.innerHTML = arrStartMin;
finishHorse.innerHTML = arrFinishHorse; finishMin.innerHTML = arrFinishMin;
    
function result() {
    let dataStart = new Date(); dataStart.setHours(startHorse.value); dataStart.setMinutes(startMin.value);
    let dataFinish = new Date(); dataFinish.setHours(finishHorse.value); dataFinish.setMinutes(finishMin.value); 
    let x = 0;
    +startHorse.value > +finishHorse.value ? x = 1 : x = 0;
    dataFinish.setDate(new Date().getDate() + parseInt(x));

    first.innerHTML = resultForFirst();
    second.innerHTML = resultForSecond();
    third.innerHTML = resultForThird();

    function resultForFirst() {
        let difference =  dataFinish.getTime() - dataStart.getTime();
        let res = dataStart.getTime() + (difference / 3) * 2;
        return `${dataStart.toString().substr(16, 05)} 
            --- ${(new Date(1970, 0, 1, 2, 0, 0, res)).toString().substr(16, 05)}`;   
    }

    function resultForSecond() {
        let difference = dataFinish.getTime() - dataStart.getTime();
        let res = dataStart.getTime() + ((difference / 3) * 2) / 2;
        let res2 = dataStart.getTime() + (difference / 3) * 2;
        return `${dataStart.toString().substr(16, 05)} 
            --- ${(new Date(1970, 0, 1, 2, 0, 0, res)).toString().substr(16, 05)} ||
            ${(new Date(1970, 0, 1, 2, 0, 0, res2)).toString().substr(16, 05)} 
            --- ${dataFinish.toString().substr(16, 05)}`;   
    }

    function resultForThird() {
        let difference = dataFinish.getTime() - dataStart.getTime();
        let res = dataFinish.getTime() - (difference / 3) * 2;
        let horse = Math.round((difference / 3) * 2 / 100 / 60 / 60);
        let min =  (difference / 3) * 2 / 100 / 60 / 60 / 60;
        return `${(new Date(1970, 0, 1, 2, 0, 0, res)).toString().substr(16, 05)} 
            --- ${dataFinish.toString().substr(16, 05)}<br><br>
           Каждому получется: ${convertMS((difference / 3) * 2)}`;   
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
}