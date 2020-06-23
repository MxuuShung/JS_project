var body = document.body;

function goRocket(e){
    console.log(e.keyCode);
    switch(e.keyCode){
        case 97:
            document.querySelector('.rocket-1').style.bottom = '2000px';
        break;
        case 98:
            document.querySelector('.rocket-2').style.bottom = '2000px';
        break;
        case 99:
            document.querySelector('.rocket-3').style.bottom = '2000px';
        break;
    }
}





body.addEventListener('keydown',goRocket,false)