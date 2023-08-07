const timeBar = document.querySelector('.nav-element__time');

setInterval(() => {
    const date = new Date();

    let hrs = date.getHours();
    let min = date.getMinutes();

    if(min < 9){
        timeBar.textContent = `${hrs}:0${min}`;
    }else{
        timeBar.textContent = `${hrs}:${min}`;
    }
}, 1000);
