(function(){

    const sliders = [...document.querySelectorAll('.hacemos_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add) =>{
        const currentHacemos = document.querySelector('.hacemos_body--show').dataset.id;

        value = Number(currentHacemos);
        value+= add;

        sliders[Number(currentHacemos)-1].classList.remove('hacemos_body--show');
        if(value === sliders.length+1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }
        

        sliders[value-1].classList.add('hacemos_body--show');
    }
    
})();