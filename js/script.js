


function escrevendoLetra() {
    function ativaLetra(elemento) {
        const arrayTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrayTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }
    
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}
escrevendoLetra();

const intervalo = 15000;

setInterval(escrevendoLetra, intervalo);

function menuMobile() {
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')
    
    ativaMenu.addEventListener('click', () => {
        ativaMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });
}
menuMobile();

function sobreMim() {

    const divExperiencia = document.querySelectorAll('.experience-content div');
    const liExperiencia = document.querySelectorAll('.experience-content ul li');
    const divEducation = document.querySelectorAll('.education-content div');
    const liEducation = document.querySelectorAll('.education-content ul li');

    divExperiencia[0].classList.add('ativo')
    divEducation[0].classList.add('ativo')
    liExperiencia[0].classList.add('ativo')
    liEducation[0].classList.add('ativo')
    
    function slideShow(index) {
        divExperiencia.forEach((div) => {
            div.classList.remove('ativo');
        });
        liExperiencia.forEach((botao) => {
            botao.classList.remove('ativo');
        });
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }
    
    function slideShow2(index) {
        divEducation.forEach((div) => {
            div.classList.remove('ativo');
        });
        liEducation.forEach((botao) => {
            botao.classList.remove('ativo');
        });
        divEducation[index].classList.add('ativo');
        liEducation[index].classList.add('ativo');
    }
    
    liExperiencia.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow(index)
        });
    });
    
    liEducation.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow2(index)
        });
    });
}
sobreMim();


const listaAll = document.querySelectorAll('.project-storage ul li');
const buttonGeral = document.querySelectorAll('.project-models ul li');
const buttonAll = document.querySelectorAll('.project-models .all');

function removeClick(index) {
    buttonGeral.forEach((item) => {
        item.classList.remove('ativo');
    });
    buttonGeral[index].classList.add('ativo');
}

buttonGeral.forEach((event, index) => {
    event.addEventListener('click', () => {
        removeClick(index);
    })
})



function showLista(lista, buttom = "all") {
    lista.forEach((item) => {
        item.classList.remove('ativo');
    })
    if(buttom == 'robot') {
        lista[3].classList.add('ativo')
        lista[4].classList.add('ativo')
    }

    if(buttom == 'backend') {
        lista[5].classList.add('ativo')
    }

    if(buttom == 'frontend') {
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
        lista[2].classList.add('ativo')
        lista[6].classList.add('ativo')
        lista[7].classList.add('ativo')
        lista[10].classList.add('ativo')
        lista[11].classList.add('ativo')
        lista[12].classList.add('ativo')
    }

    if(buttom == 'fullstack') {
        lista[8].classList.add('ativo')
        lista[9].classList.add('ativo')
        lista[13].classList.add('ativo')
        lista[14].classList.add('ativo')
    }

    if(buttom == 'all') {
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
        lista[2].classList.add('ativo')
        lista[3].classList.add('ativo')
        lista[4].classList.add('ativo')
        lista[5].classList.add('ativo')
        lista[6].classList.add('ativo')
        lista[7].classList.add('ativo')
        lista[8].classList.add('ativo')
        lista[9].classList.add('ativo')
        lista[10].classList.add('ativo')
        lista[11].classList.add('ativo')
        lista[12].classList.add('ativo')
        lista[13].classList.add('ativo')
        lista[14].classList.add('ativo')
    }
}


buttonGeral.forEach((item) => {
    item.addEventListener('click', (e) => {
        let currentButton = e.target;
        if(currentButton.classList.contains('all')) {
            showLista(listaAll);
        }

        if(currentButton.classList.contains('robot')) {
            showLista(listaAll, "robot");
        }

        if(currentButton.classList.contains('frontend')) {
            showLista(listaAll, "frontend");
        }

        if(currentButton.classList.contains('backend')) {
            showLista(listaAll, "backend");
        }

        if(currentButton.classList.contains('fullstack')) {
            showLista(listaAll, "fullstack");
        }

        if(currentButton.classList.contains('all')) {
            showLista(listaAll, "all");
        }
    })
})