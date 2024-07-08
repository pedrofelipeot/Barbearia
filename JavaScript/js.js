window.revelar = ScrollReveal({reset:true})
//Topo do site


revelar.reveal('.logo-efeito-home', 
{
    duration:1000,
    distance:'90px',
    reset: false,
    viewFactor: 0.7,
    delay:500
})

revelar.reveal('h1.h1-efeito-home', 
{
    duration:1500,
    distance:'90px',
    reset: false,
    viewFactor: 0.7,
    delay:1000
})

revelar.reveal('p.p-efeito-home', 
{
    duration:1500,
    distance:'90px',
    reset: false,
    viewFactor: 0.7,
    delay: 1500
})

//Serviços

revelar.reveal('.h1-efeito',
{
    duration:1000,
    distance:'90px',
    viewFactor: 0.7,
    reset: false
})

//Cortes

revelar.reveal('section.efeitoEsquerda',
{
    duration:1000,
    distance:'100px',
    origin:'left',
    delay:500,
    viewFactor: 0.3,
    reset: false
})
revelar.reveal('section.efeitoDireita',
{
    duration:1000,
    distance:'100px',
    origin:'right',
    delay:500,
    viewFactor: 0.3,
    reset: false
})

//rodape
revelar.reveal('footer.footer-efeito',
{
    duration:1500,
    opacity:0,
    delay:1000,
    reset: false
})
