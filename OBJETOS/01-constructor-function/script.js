function initTabNav() { //função para isolar os codigos e evitar possiveis conflitos no Js
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    const activeClass = 'ativo';

    if(tabMenu.length && tabContent.length) { //verifica se existe itens nessa nas constantes selecionadas para depois passar os codigo dentro da verificação.

        tabContent[0].classList.add(activeClass) //adiciona a classe ativo sempre no primeiro item da lista.

        // função que adiciona a classe ativo no elemento selecionado e remove dos demais usando o loop.
        function activeTab(index) { 
            tabContent.forEach((content) => { 
                content.classList.remove(activeClass); //loop que remove a classe das os outros elementos.
            });
            tabContent[index].classList.add(activeClass); //adiciona a classe.
        };

        //loop que adiciona um evento de 'click' em todos os itens que quando ocorrer  retornara a função anterior usando o index do item clicado. 
        tabMenu.forEach((itemMenu, index) => { 
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            } )
        });
    };
}
initTabNav();


function initAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion(event) {
        this.classList.toggle(activeClass);
        this.nextElementSibling.classList.toggle(activeClass);
    };


    accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
    });
}
initAccordion();


function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
    event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior:'smooth',
            block: 'start',
  }); 

    //forma alternativa
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top: topo,
        //     behavior:'smooth',
        // });
    }

    linksInternos.forEach((link) =>{
        link.addEventListener('click', scrollToSection);
    });
};
initScrollSuave();

function initAnimaScroll(){ 
    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll(){
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade) < 0;
            if(isSectionVisible) {
              section.classList.add('ativo');
            };
        })    
    };
    animaScroll();
    window.addEventListener('scroll', animaScroll);
};
};
initAnimaScroll();