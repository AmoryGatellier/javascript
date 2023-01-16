function createDom(element_name,text,parent){
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup
}

let i = 0;
function number(){
    return i
}

let nav = createDom('nav','Barre de navigation:',document.body);
let diva = createDom('div','',document.body);
let create = createDom('button','Créer',diva);
diva.setAttribute("id", 'diva');

let divb;
let sep;
let formulaire;
let labeltitre;
let letitre;
let labeltexte;
let letexte;
let valid;
let supp;

create.onclick = function() {
    console.log(divb)
    if (divb == undefined || divb.value == 'undefined'){
        divb = createDom('div',' ',diva);
        divb.setAttribute("id", 'divb');

        formulaire = createDom('form','',divb);
        let divc = createDom('div',' ',formulaire);

        labeltitre = createDom('label','Titre : ',divc);
        letitre = createDom('input','',divc);
        let divd = createDom('div',' ',formulaire);

        labeltexte = createDom('label','Texte : ',divd);
        createDom('br',' ',divd)
        letexte = createDom('textarea','',divd);
        letexte.setAttribute("id", 'inputtxt');
    
        valid = createDom('button','Valider',divb);

        valid.onclick = function(){
            divb.remove();
            divb.value = 'undefined';
            i++;

            let divall = createDom ('div','',document.body);
            divall.setAttribute("class", 'articles');

            let x = createDom('h2',letitre.value,divall);
            x.setAttribute("class", 'a'+number());
            x.setAttribute("id", number());

            let y = createDom('p',letexte.value,divall);
            y.setAttribute("class", 'a'+number());
            createDom('div','',nav);

            let a = createDom('a',letitre.value,nav);
            a.setAttribute("href", '#'+number());
            a.setAttribute("class",  'a'+number());

            supp = createDom('button','Retirer',divall);
            supp.setAttribute("class", 'a'+number());
            supp.setAttribute("class", 'lessup');
            

            supp.addEventListener("click", function (){
                divall.remove();
                a.remove();
            })
        }
    }
}