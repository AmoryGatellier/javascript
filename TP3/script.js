/* 
fetch("data.json")
.then(response => response.json())
.then(data => console.log(data))

let pays = prompt('pays');
let ville;

function createDom(element_name,text,parent){
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup
}

let ul = createDom('ul','',document.body)

async function getData() {
    try {
    const response = await fetch(`http://universities.hipolabs.com/search?country=${pays}`);
    const data = await response.json();
    
    if (data.length >= 100){
        ville = prompt('ville');
        const response2 = await fetch(`http://universities.hipolabs.com/search?name=${ville}&country=${pays}`)
        const data2 = await response2.json();
        const data3 = data2.map(y => y.name)
        data3.forEach(element => {
            createDom('li',element,ul)
        });
    }else{
        const data4 = data.map(y => y.name)
        data4.forEach(element => {
            createDom('li',element,ul)
        });
    }
    } catch (error) {
        console.error(error);
    }
}
getData()
*/
