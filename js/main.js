console.log("Warsztat - ustaw tłu elementów html");

const setBackgound = () => {
    let p1 =  document.querySelector('.first');
    let p2 =  document.querySelector('.last');

    p1.classList.toggle('bg-red');
    p2.classList.toggle('bg-yellow');

}


let btnSetBackground = document.getElementById('set-background');

btnSetBackground.addEventListener('click', setBackgound);