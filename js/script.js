let food = document.querySelector('.tabheader__items'),
    food_items = document.querySelectorAll('.tabheader__item'),
    tabcontent = document.querySelector('.tabcontent'),
    osp = document.querySelector('.offer__slider-prev'),
    osn = document.querySelector('.offer__slider-next'),
    osd = document.querySelector('.offer__slider-wrapper'),
    current_check,
    current = document.getElementById('current'),
    gender = document.getElementById('gender'),
    gender_item = document.querySelectorAll('.calculating__choose-item'),
    ccb = document.querySelector('.calculating__choose_big');




food.addEventListener('click',(e) => {
    if (e.target && e.target.classList.contains('tabheader__item_active')){
    } else {
        food_items.forEach( (i,index) => {
            food_items[index].classList.remove('tabheader__item_active')
        });
        e.target.classList.add('tabheader__item_active');
        switch(e.target.innerText){
            case 'Фитнес': tabcontent.innerHTML = `
                    <img src="img/tabs/vegy.jpg" alt="vegy">
                    <div class="tabcontent__descr">
                        Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!
                    </div>`;
                break;
            case 'Премиум': tabcontent.innerHTML = `
                    <img src="img/tabs/elite.jpg" alt="elite">
                    <div class="tabcontent__descr">
                        Меню “Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!                                     
                    </div>`;
                break;
            case 'Постное': tabcontent.innerHTML = `
                    <img src="img/tabs/post.jpg" alt="post">
                    <div class="tabcontent__descr">
                        Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!                                     
                    </div>`;
                break;
            case 'Сбалансированное': tabcontent.innerHTML = `
                    <img src="img/tabs/hamburger.jpg" alt="vegy">
                    <div class="tabcontent__descr">
                        Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.
                    </div> `;
                break;
        }
    }
});

current_check = current.innerText;

osp.addEventListener('click', () =>{
    if (current_check === 01){
    } else {
        current_check -= 1;
        switch(current_check){
            case 1: current.innerText = '01';
                    osd.innerHTML = `<div class="offer__slide">
                        <img src="img/slider/food-12.jpg" alt="food">
                        </div>`;
                break;
            case 2: current.innerText = '02';
                    osd.innerHTML = `<div class="offer__slide">
                        <img src="img/slider/olive-oil.jpg" alt="oil">
                        </div>`;
                break;
            case 3: current.innerText = '03';
                    osd.innerHTML = `<div class="offer__slide">
                        <img src="img/slider/pepper.jpg" alt="pepper">
                        </div>`;
                break;
            case 4: current.innerText = '04';
                    osd.innerHTML = `<div class="offer__slide">
                        <img src="img/slider/paprika.jpg" alt="paprika">
                        </div>`;
                break;
        }
    }
});

osn.addEventListener('click', () =>{
    if (current_check === 04){
    } else {
        current_check += 1;
        switch(current_check){
            case 1: current.innerText = '01';
                    osd.innerHTML = `<div class="offer__slide">
                        <img src="img/slider/food-12.jpg" alt="food">
                        </div>`;
                break;
            case 2: current.innerText = '02';
                    osd.innerHTML = `<div class="offer__slide">
                        <img src="img/slider/olive-oil.jpg" alt="oil">
                        </div>`;
                break;
            case 3: current.innerText = '03';
                    osd.innerHTML = `<div class="offer__slide">
                        <img src="img/slider/pepper.jpg" alt="pepper">
                        </div>`;
                break;
            case 4: current.innerText = '04';
                    osd.innerHTML = `<div class="offer__slide">
                        <img src="img/slider/paprika.jpg" alt="paprika">
                        </div>`;
                break;
        }
    }
});

gender.addEventListener('click', (e) =>{
    if (e.target && e.target.classList.contains('calculating__choose-item')){
        gender_item.forEach( (i,index) => { 
            if (index > 2){

            } else { gender_item[index].classList.remove('calculating__choose-item_active')}
        });
        e.target.classList.add('calculating__choose-item_active');
    } else {
    }
});

ccb.addEventListener('click',(e) =>{
    if(e.target && e.target.classList.contains('calculating__choose-item')){
        gender_item.forEach( (i,index) => { 
            if (index < 2){

            } else { gender_item[index].classList.remove('calculating__choose-item_active')}
        });
        e.target.classList.add('calculating__choose-item_active');
    } else {
    }  
});


//Timer 

const deadline = '2021-09-20';

function TimeBack(timeend){
    const total = Date.parse(timeend) - new Date,
        days = Math.floor(total / (1000 * 60 * 60 * 24)),
        hours = Math.floor(total / (1000 * 60 * 60) % 24),
        min = Math.floor(total / (1000 * 60) % 60),
        sec = Math.floor((total / 1000) % 60);

        return{
            'total': total,
            'days': days,
            'hours': hours,
            'min': min,
            'sec': sec
        }
}

function SetTime(time){
    const days = document.getElementById('days'),
        hours = document.getElementById('hours'),
        min = document.getElementById('minutes'),
        sec = document.getElementById('seconds'),
        timeInterval = setInterval(changeTime, 1000);
        
        function changeTime(){
            t = TimeBack(time),
            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            min.innerHTML = t.min;
            sec.innerHTML = t.sec;
            
            if (t === 0){
                clearInterval(timeInterval);
            }
        }
        
}

SetTime(deadline);


// Modal

const modalAddBtn = document.querySelectorAll('[data-modal]'),
    modalCloseBtn = document.querySelector('[data-close]'),
    modal = document.querySelector('.modal');

function modalAdd(){
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
};

function modalClose(){
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}


modalAddBtn.forEach(e => {
    e.addEventListener('click', () =>{
        modalAdd();
    });
});


modalCloseBtn.addEventListener('click', () =>{
    modalClose()
});

modal.addEventListener('click', (e) =>{
    if (e.target.classList.contains('modal')){
        modalClose()
    } 
});

document.addEventListener('keydown',(e) => {
    if (e.code === "Escape" && modal.classList.contains('show')){
        modalClose()
    } 
});

const modalTimerId = setTimeout(modalAdd, 3000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalAdd();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
