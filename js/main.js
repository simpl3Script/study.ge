export default function funcs(){

    let theme = 1;

    const body = document.body;
    let themechanger = [
        document.getElementById('sun'),
        document.getElementById('moon'),
        document.getElementById('eye'),
    ]

    for(let i = 0; i < 3; i++){
        themechanger[i].onclick = () => {
            theme = i+1;
            check();
        }
    }

    document.addEventListener('keydown', (e) => {
        if(e.key == "t"){

            if(theme != 3){
                theme ++;
            } 
            else theme = 1;

            check();

        }
    });

    function check(){
        switch(theme){
            case 1:
                body.classList.replace('dark', 'light');
                body.classList.replace('colorBlind', 'light');
                break;
            case 2:
                body.classList.replace('light', 'dark');
                body.classList.replace('colorBlind', 'dark');
                break;
            case 3:
                body.classList.replace('dark', 'colorBlind');
                body.classList.replace('light', 'colorBlind');
                break;
        }
    }

}

funcs();