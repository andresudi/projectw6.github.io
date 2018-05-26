
// to get RNG
function getComputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'elephant';
    if (comp >= 0.34 && comp < 0.67) return 'human';
    return 'ant';
}

// rules
function getResult(comp,p) {
    if (p === comp) return 'DRAW eh?';
    if (p === 'elephant') return (comp === 'human') ? 'Ok you won' : 'Haha noob';
    if (p === 'human') return (comp === 'elephant') ? 'Haha noob' : 'Ok you won';
    if (p === 'ant') return (comp === 'human') ? 'Haha noob' : 'Ok you won';
}

// const pilihan = document.querySelectorAll('li img');
// pilihan.forEach(function(pil) {
//     pil.addEventListener('click', function () {
//         const pilhanComputer = getComputer()
//         const pilihanPlayer = pil.className;
//         const hasil = getResult(pilihanComputer, pilihanPlayer);

//         const imgComputer = document.querySelector('.img-computer');
//         imgComputer.setAttribute('src', 'pic/' + pilihanComputer + '.png');

//         const info = document.querySelector('.info');
//         info.innerHTML = hasil;
//     })
// });

// for elephant

const pElephant = document.querySelector('.elephant')
pElephant.addEventListener('click', function () {
    const pilihanComputer = getComputer()
    const pilihanPlayer = pElephant.className;
    const hasil = getResult(pilihanComputer, pilihanPlayer)
    
    // console.log('comp: ' + pilihanComputer)
    // console.log('player: ' + pilihanPlayer)
    // console.log('hasil: ' + hasil)
    
    const imgComputer = document.querySelector('.img-computer');
    imgComputer.setAttribute('src', 'pic/' + pilihanComputer + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

// for human

const pHuman = document.querySelector('.human')
pHuman.addEventListener('click', function () {
    const pilihanComputer = getComputer()
    const pilihanPlayer = pHuman.className;
    const hasil = getResult(pilihanComputer, pilihanPlayer)

    // console.log('comp: ' + pilihanComputer)
    // console.log('player: ' + pilihanPlayer)
    // console.log('hasil: ' + hasil)

    const imgComputer = document.querySelector('.img-computer');
    imgComputer.setAttribute('src', 'pic/' + pilihanComputer + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

// for ant 

const pAnt = document.querySelector('.ant')
pAnt.addEventListener('click', function () {
    const pilihanComputer = getComputer()
    const pilihanPlayer = pAnt.className;
    const hasil = getResult(pilihanComputer, pilihanPlayer)

    // console.log('comp: ' + pilihanComputer)
    // console.log('player: ' + pilihanPlayer)
    // console.log('hasil: ' + hasil)

    const imgComputer = document.querySelector('.img-computer');
    imgComputer.setAttribute('src', 'pic/' + pilihanComputer + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

