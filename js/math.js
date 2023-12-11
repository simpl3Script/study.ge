export default function main(data){

    const main = document.querySelector('main');

    for(let i = 0; i < data.length; i++){

        let div = `
            <div id="newDiv">
                <div>
                    <h3>${data[i].title}</h3>
                    <p>${data[i].main}</p>
                </div>
            </div>
        `

        main.innerHTML += div;
    }

}