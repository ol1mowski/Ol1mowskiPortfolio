//Obsługa zegara
let showTime = () => {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let Clock = document.getElementById('timer');

    Clock.innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(showTime, 1000);
//Obsługa zdarzeń
const buttonC = document.querySelector(".test.one");
buttonC.addEventListener('click', () => {
        document.querySelector('.normal').classList.add('arrow');
        document.querySelector('.normal').classList.remove('normal');
        //hidden_content
        let arrow_left = document.querySelector('.arrow');
        arrow_left.addEventListener('click', () => {
            document.getElementById('content').style.display = 'none';
            document.querySelector('.arrow').classList.add('normal');
            document.querySelector('.arrow').classList.remove('arrow');

        });

        document.getElementById('content').style.display = 'block';
    })
    //Powrót