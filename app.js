

        const first = document.getElementById('first');
    const second = document.getElementById('second');
    const third = document.getElementById('third');

    const startHorse = document.getElementById('startHorse');
    const startSelect = document.getElementById('startMin');

    const finishHorse = document.getElementById('finishHorse');
    const finishMin = document.getElementById('finishMin');

    const arrStartHorse = `${Array(24).fill('').map((el, i) => {
        return i === 23 ? `<option selected>${i}</option>` : `<option>${i}</option>`
    })}`
    const arrStartMin = `${Array(60).fill('').map((el, i) => {
        return i === 0 ? `<option selected>${i}</option>` : `<option>${i}</option>`
    })}`
    const arrFinishHorse = `${Array(24).fill('').map((el, i) => {
        return i === 6 ? `<option selected>${i}</option>` : `<option>${i}</option>`
    })}`
    const arrFinishMin = `${Array(60).fill('').map((el, i) => {
        return i === 0 ? `<option selected>${i}</option>` : `<option>${i}</option>`
    })}`

    startHorse.innerHTML = arrStartHorse; startMin.innerHTML = arrStartMin;
    finishHorse.innerHTML = arrFinishHorse; finishMin.innerHTML = arrFinishMin;
    
function result() {
    let dataStart = new Date(); dataStart.setHours(startHorse.value); dataStart.setMinutes(startMin.value);
    let dataFinish = new Date(); dataFinish.setHours(finishHorse.value); dataFinish.setMinutes(finishMin.value); 
    dataFinish.setDate(new Date().getDate() + 1);


    first.innerHTML = resultForFirst();
   // third.innerHTML = paymentThird(dataStart, dataFinish);



    function resultForFirst() {
        let difference =  dataFinish.getTime() - dataStart.getTime();
        let milisec = (difference / 3) * 2;
        
        let data = dataStart;
        
    let string = data.toString().substr(16, 05);
        data.setMilliseconds(milisec)
      

        let ss = new Date().getTime();
        let daat = new Date(1970, 0, 01, 0, 0, 0, ss)
        console.log(daat)
        string += ' --- ' + data.toString().substr(16, 05);
        return  string
    }



    function paymentThird(d1, d2) {
        let difference =  d2.getTime() - d1.getTime();
        
        let string = (difference / 3) * 2;
        //console.log(string / 1000 / 60 / 60)
        return getIsMilisToNormalData(string, dataStart)
    }
}