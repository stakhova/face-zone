//quize
const quize = () => {

    $(".quiz__form").append($("<div id = \"quiz__block\"></div>"));
    let queue = new Array();
    let currentQuestion = 0;
    let widthProgress = 0;
    let questionsList = [{
        id: 1,
        question: "На дотик Ваша шкіра:",
        answer: ["Шорсткувата", "Гладка прохолодна", "Більш гладка у Т-зоні", "Відчувається сальність"],
        type: 'B',
        img: 'img/quize/1.png',
        value: [0, 1, 2, 3]
    }, {
        id: 2,
        question: "Який у Вас колір очей, волосся, шкіри?",
        answer: ["Очі - світлі, шкіра світла, волосся світло-або темно-русяве, іноді засмагаю", "Блакитні очі, світла шкіра, руде волосся, завжди згоряю на сонці", "Очі світлі або карі, шкіра світла без веснянок, темно-русяве або каштанове волосся, добре засмагаю, рідко обгораю", "Очі і волосся - темні, добре засмагаю, ніколи не обгораю"],
        type: 'D ',
        value: [0, 1, 2, 3]
    }, {
        id: 3,
        question: "Ваші відчуття після умивання:",
        answer: ["Щоразу шкіру стягує, відчувається сухість, навіть якщо я протру її тоніком, і я наношу зволожуючий крем", "Шкірі комфортно, може відчуватися незначна сухість, доки я не нанесу тонік", "Сухості немає або буває по периферії, а в Т-зоні шкіра навіть блищить", "Шкіра часто блистить, а через 30 хвилин після умивання, якщо прикласти серветку, буде жирний відбиток"],
        type: 'B',
        img: 'img/quize/3.png',
        value: [0, 1, 2, 3]
    }, {
        id: 4,
        question: "Скільки вам років?",
        answer: ["До 30 років", "30-38", "39-45", "Старше 45 років"],
        type: 'A',
        value: [0, 1, 2, 3]
    }, {
        id: 5,
        question: "Ваша шкіра часто червоніє?",
        answer: ["Практично ніколи", "Іноді", "На зміну температури повітря, гостру їжу, хвилювання, алкоголь", "Часто, особливо після очищення, механічного впливу"],
        type: 'C',
        img: 'img/quize/5.png',
        value: [0, 1, 2, 3]
    }, {
        id: 6,
        question: "Зморшки у Вас на обличчі:",
        answer: ["Відсутні навіть при посмішці, насупленні та підйомі брів", "З'являються тільки при посмішці, нахмуруванні та підйомі брів", "Дещо видно і в спокої", "Багато зморшок навіть при спокійному виразі обличчя"],
        type: 'A',
        value: [0, 1, 2, 3]
    }, {
        id: 7,
        question: "На Вашому обличчі є пігментні плями?",
        answer: ["Ні", "Одне", "Декілька", "Багато"],
        type: 'D',
        img: 'img/quize/7.png',
        value: [0, 1, 2, 3]
    }, {
        id: 8,
        question: "Ваша шкіра часто лущиться?",
        answer: ["Практично ніколи", "В холодну пору року", "Після басейну, очищення", "Часто, практично завжди шорстка на дотик"],
        type: 'C',
        value: [0, 1, 2, 3]
    }, {
        id: 9,
        question: "Ви використовуєте сонцезахисний крем для обличчя?",
        answer: ["Регулярно, вже понад 10 років", "Лише у весняно-літній період", "Перед виходом на пляж, активним сонцем", "Ніколи"],
        type: 'A',
        img: 'img/quize/9.png',
        value: [0, 1, 2, 3]
    }, {
        id: 10,
        question: "У Вас на шкірі є чи були в минулому темні плями над верхньою губою чи щоками?\n",
        answer: ["Ні і не було", "Були в минулому", "Є, але не виражені", "Так, є, виражені"],
        type: 'D',
        value: [0, 1, 2, 3]
    }, {
        id: 11,
        question: "Пори на обличчі:",
        answer: ["Відсутні", "Практично непомітні, є дещо в Т-зоні (чоло, ніс, підборіддя)", "Помітні у Т-зоні", "Дуже багато, чітко видно в Т-зоні, на щоках, лобі, у вушних раковинах"],
        type: 'B',
        img: 'img/quize/11.png',
        value: [0, 1, 2, 3]
    }, {
        id: 12,
        question: "Як Ваша шкіра реагує на очищувальні, сонцезахисні, доглядові засоби?\n",
        answer: ["Не виникає дискомфорту", "Іноді може виникнути", "Часто виникає реакція", "Завжди помітна реакція, дискомфорт"],
        type: 'C',
        value: [0, 1, 2, 3]
    }, {
        id: 13,
        question: "Ваш колір шкіри:",
        answer: ["Однорідний, \"сяючий\"", "Однорідний, але тьмяний", "Є кілька вогнищ потемніння або веснянки", "Є великі ділянки темного кольору"],
        type: 'D',
        value: [0, 1, 2, 3]

    }, {
        id: 14,
        question: "На дотик Ваша шкіра:",
        answer: ["Прохолодна і гладка завжди", "Більш прохолодна, гладка, дуже рідко буває теплою", "Часто більш тепла, місцями шорстка", "Тепла, шорстка та волога"],
        type: 'C',
        img: 'img/quize/14.png',
        value: [0, 1, 2, 3]
    }, {
        id: 15,
        question: "Як, на Вашу думку, Ви виглядаєте?",
        answer: ["Молодше за паспортний вік", "На паспортний вік", "Старше за паспортний, але немає відчуття, що обличчя стрімко старіє", "Набагато старше паспортного, є відчуття, що обличчя стрімко старіє"],
        type: 'A',
        value: [0, 1, 2, 3]
    }, {
        id: 16,
        question: "Після перебування на сонці з'являється темна пляма, яка з часом світлішає або з'являється більше веснянок?\n",
        answer: ["Ні", "Іноді", " Часто"],
        type: 'D',
        value: [0, 2, 3]
    }, {
        id: 17,
        question: "Через кілька годин після нанесення макіяжу (база під макіяж, тональний крем, пудра) ваша шкіра:\n",
        answer: ["Шорстка, з лущенням, тональний крем підкреслює зморшки", "Гладка", "Блищить", "Блищить, негладка, скочується тональний крем, базу намагаюся не наносити"],
        type: 'B',
        img: 'img/quize/17.png',
        value: [0, 1, 2, 3]
    }, {
        id: 18,
        question: "Вам чи батькам колись ставили діагноз «атопічний дерматит», «екзема», «астма»?",
        answer: ["Ні", "Можливо, але я не зверталася(вся) до лікаря", "Так", "Так, важка форма"],
        type: 'C',
        value: [0, 1, 2, 3]
    }, {
        id: 19,
        question: "Пігментні плями (веснянки) на Вашому тілі, обличчі, грудях, спині, плечах:",
        answer: ["Відсутні", "Є кілька (до 5-ти)", "Багато (5-15)", "Дуже багато (понад 15-ть)"],
        type: 'D',
        img: 'img/quize/19.png',
        value: [0, 1, 2, 3]
    }, {
        id: 20,
        question: "Перед дзеркалом/камерою акуратно ущипніть собі шкіру в області скули, потримайте протягом 5 сек, відпустіть та оцініть складку. Складка:",
        answer: ["Миттєво розгладилася", "Розгладилася через 1-2 сек", "Розгладилася через 2-3 сек", "Розгладилася за більше ніж 3 сек"],
        type: 'A',
        value: [0, 1, 2, 3]
    }, {
        id: 21,
        question: "Ви приймаєте контрацептиви, гормони, ретиноїди?",
        answer: ["Ні", "Приймала більше 6 місяців тому", "Закінчила прийом нещодавно", "Так"],
        type: 'D',
        value: [0, 1, 2, 3]
    }, {
        id: 22,
        question: "На фото Ваша шкіра виглядає блискучою:",
        answer: ["Ніколи", "Рідко", "Часто", "Завжди"],
        type: 'B',
        img: 'img/quize/22.png',
        value: [0, 1, 2, 3]
    }, {
        id: 23,
        question: "Чи часто косметика викликає у Вас почервоніння, свербіж, лущення?",
        answer: ["Ніколи", "Іноді", "Часто буває", "Завжди - дуже складно підібрати косметику"],
        type: 'C',
        value: [0, 1, 2, 3]
    }, {
        id: 24,
        question: "Як Ви доглядаєте за шкірою вдома?",
        answer: ["У мене є підібраний професійний догляд, який мені підходитьи", "Регулярно наношу денний або нічний крем (не впевнена, що вони підходять)", "Періодично користуюся кремами, але часто забуваю", "Засобами для догляду не користуюся"],
        type: 'A',
        img: 'img/quize/24.png',
        value: [0, 1, 2, 3]
    }, {
        id: 25,
        question: "\"Забиті\" пори (чорні або білі точки) на Вашому обличчі:",
        answer: ["Не бувають", "Рідко", "Часто з'являються", "Завжди є"],
        type: 'B',
        value: [0, 1, 2, 3]
    }, {
        id: 26,
        question: "Чи відчуваєте Ви \"почервоніння\", \"свербіж\", \"печіння\" від вітру, сонця, кондиціонера?",
        answer: ["Ні", "Рідко", "Іноді", "Часто"],
        type: 'C',
        value: [0, 1, 2, 3]
    }, {
        id: 27,
        question: "Як шкіра реагує, якщо ви не наносите зволожучий крем?",
        answer: ["Шкіру дуже стягує, завжди намагаюся наносити", "Комфортніше, коли нанесу крем", "Рідко може відчуватися сухість, але тільки по периферії обличчя, а в центрі – ніколи не відчувається, шкіра навіть може блищати", "Ніколи не відчуваю стягнутості, важко підібрати крем, він робить шкіру ще жирнішою і забиває пори"],
        type: 'B',
        img: 'img/quize/27.png',
        value: [0, 1, 2, 3]
    }, {
        id: 28,
        question: "Вам колись встановлювали діагноз \"мелазма\"?",
        answer: ["Ні", "В минулому", "Да, є зараз"],
        value: [0, 2, 3],
        type: 'D'
    }, {
        id: 29,
        question: "Після вмивання Ваша обличчя виглядає:",
        answer: ["Гладким та однотонним", "Рідко більш рожевим", "Часто з легким почервонінням", "Завжди почервоніле"],
        type: 'C',
        img: 'img/quize/29.png',
        value: [0, 1, 2, 3]
    }];

    let A = 0;
    let B = 0;
    let C = 0;
    let D = 0;

    function showAnimate(text) {
        $(".loader__wrap").show();
        $(".loader__text").html(text);
        setTimeout(function () {
            $(".loader__wrap").hide();
        }, 3000);
    }

    function begin() {
        currentQuestion = 0;
        queue = new Array();
        let tmp = new Array();
        for (let i = 0; i < questionsList.length; i++) {
            tmp.push(i);
        }
        while (tmp.length > 0) {
            let i = 0;
            queue.push(tmp[i]);
            tmp.splice(i, 1);
            i++;
        }
        showQuestion();
    }

    begin();

    function showQuestion() {
        let str = `<div class = "answer__wrap" >`;
        questionsList[queue[currentQuestion]].img ? str += `<div class="answer__flex"><div class="answer__img img"><img src=${questionsList[queue[currentQuestion]].img}></div><h2> ${questionsList[queue[currentQuestion]].question} </h2><div class="answer__block" >` : str += `<div class="answer__flex"> <h2> ${questionsList[queue[currentQuestion]].question} </h2><div  class="answer__block" >`;

        $(questionsList[queue[currentQuestion]].answer).each(function (i, e) {
            str += `<input class="answer" id=${i}  name = "ans" data-question-type=${questionsList[queue[currentQuestion]].type} value =${questionsList[queue[currentQuestion]].value[i]} type="radio" ></input><label for=${i} >${e}</label>`;

            // show animations
            const questionNumber = questionsList[queue[currentQuestion]].id - 1;
            let text = '';
            switch (questionNumber) {
                case 8:
                    text = "<h2>Перший етап до розуміння вашої шкіри пройдено! <br>  Переходимо до наступної групи запитань.</h2>";
                    showAnimate(text);
                    break;
                case 15:
                    text = "<h2>Вже виявили 50% потреб вашої шкіри.<br> Продовжуйте тест.</h2>";
                    showAnimate(text);
                    break;
                case 22:
                    text = "<h2> Майже все! Нам потрібно ще трішки деталей про стан вашої шкіри.</h2>";
                    showAnimate(text);
                    break;
                default:
                    break;
            }
        });

        $(questionsList[queue[currentQuestion]]).each(function () {
            widthProgress += 100 / questionsList.length;
            $(".quiz__progress-line").css('width', `${widthProgress}%`);
        });

        str += `</div></div></div><input type="submit" name="submit" class="submit quiz__next section__button" disabled="" value="Далі" />`;
        $("#quiz__block").html("");
        $("#quiz__block").append($(str));
        currentQuestion++;

        // check to fill
        $('.answer').on('change', function () {
            if ($('.answer').is(':checked')) {
                $('.quiz__next').attr('disabled', false);
            } else $('.quiz__next').attr('disabled', true);
        });

        $(".quiz__next").bind("click", function () {
            // console.log($(".answer:checked").val());
            // console.log($('.answer:checked').attr('data-question-type'));

            let checkType = $('.answer:checked').attr('data-question-type');
            let answerResult = $(".answer:checked").val();
            switch (checkType) {
                case 'A':
                    A += +answerResult;
                    break;
                case 'B':
                    B += +answerResult;
                    break;
                case 'C':
                    C += +answerResult;
                    break;
                case 'D':
                    D += +answerResult;
                    break;
                default:
                    break;
            }
            // console.log('A', A);
            // console.log('B', B);
            // console.log('C', C);
            // console.log('D', D);

            let result = 'A' + A + 'B' + B + 'C' + C + 'D' + D;
            // console.log(result);
            let finalA = 0,
                finalB = 0,
                finalC = 0,
                finalD = 0;

            switch (true) {
                case A >= 0 && A <= 2:
                    finalA = '0';
                    break;
                case A >= 3 && A <= 8:
                    finalA = '1';
                    break;
                case A >= 9 && A <= 18:
                    finalA = '2';
                    break;
                default:
                    break;
            }
            switch (true) {
                case B >= 0 && B <= 3:
                    finalB = '0';
                    break;
                case B >= 4 && B <= 9:
                    finalB = '1';
                    break;
                case B >= 10 && B <= 21:
                    finalB = '2';
                    break;
                default:
                    break;
            }
            switch (true) {
                case C >= 0 && C <= 2:
                    finalC = '0';
                    break;
                case C >= 3 && C <= 9:
                    finalC = '1';
                    break;
                case C >= 10 && C <= 24:
                    finalC = '2';
                    break;
                default:
                    break;
            }
            switch (true) {
                case D >= 0 && D <= 2:
                    finalD = '0';
                    break;
                case D >= 3 && D <= 9:
                    finalD = '1';
                    break;
                case D >= 10 && D <= 24:
                    finalD = '2';
                    break;
                default:
                    break;
            }
            result = finalA + finalB + finalC + finalD;
            // console.log('final result', result);

            //get code from 1 to 81
            let decoding = {
                1: '0000',
                2: '0001',
                3: '0002',
                4: '0010',
                5: '0011',
                6: '0012',
                7: '0020',
                8: '0021',
                9: '0022',
                10: '0100',
                11: '0101',
                12: '0102',
                13: '0110',
                14: '0111',
                15: '0112',
                16: '0120',
                17: '0121',
                18: '0122',
                19: '0200',
                20: '0201',
                21: '0202',
                22: '0210',
                23: '0211',
                24: '0212',
                25: '0220',
                26: '0221',
                27: '0222',
                28: '1000',
                29: '1001',
                30: '1002',
                31: '1010',
                32: '1011',
                33: '1012',
                34: '1020',
                35: '1021',
                36: '1022',
                37: '1100',
                38: '1101',
                39: '1102',
                40: '1110',
                41: '1111',
                42: '1112',
                43: '1120',
                44: '1121',
                45: '1122',
                46: '1200',
                47: '1201',
                48: '1202',
                49: '1210',
                50: '1211',
                51: '1212',
                52: '1220',
                53: '1221',
                54: '1222',
                55: '2000',
                56: '2001',
                57: '2002',
                58: '2010',
                59: '2011',
                60: '2012',
                61: '2020',
                62: '2021',
                63: '2022',
                64: '2100',
                65: '2101',
                66: '2102',
                67: '2110',
                68: '2111',
                69: '2112',
                70: '2120',
                71: '2121',
                72: '2122',
                73: '2200',
                74: '2201',
                75: '2202',
                76: '2210',
                77: '2211',
                78: '2212',
                79: '2220',
                80: '2221',
                81: '2222'

            };
            let code = Object.keys(decoding).find(key => decoding[key] === result);
            // console.log('code', code);

            let text = "<h2>  Вітаємо - Ви пройшли тест! <br> Аналізуємо ваші результати</h2>";
            if (currentQuestion >= questionsList.length) {
                showAnimate(text);
                setTimeout(function () {
                    // toogleModalWithoutClick($('.modal__auth'));

                    $(".quiz__result").show();
                }, 3000);

                $(".quiz__result-test input").val(code);

                $("#quiz__block").html("").append($(".quiz__result"));
            } else {
                showQuestion();
            }
        });
    }
};

// swipers
const compareLips = new Swiper('.compare__lips', {
    spaceBetween: 30,
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
        nextEl: ".swiper-button-next ",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        '0': {
            slidesPerView: 1,
            spaceBetween: 50
        },

        '666': {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});
const compare = new Swiper('.compare__slider', {
    slidesPerView: 1,
    spaceBetween: 1,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }

});
const shop = new Swiper('.shop__slider', {
    slidesPerView: 1,
    spaceBetween: 1,
    centeredSlides: true,
    loop: true,
    speed: 600,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }

});
const post = new Swiper('.post__slider', {
    slidesPerView: 3,
    spaceBetween: 24,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        '320': {
            slidesPerView: 1,
            spaceBetween: 10
        },

        '666': {
            slidesPerView: 3,
            spaceBetween: 24
        }
    }
});
const popular = new Swiper('.popular', {
    slidesPerView: 3.6,
    spaceBetween: 3.2,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        '320': {
            slidesPerView: 1,
            spaceBetween: 10
        },
        '480': {
            slidesPerView: 1.6,
            spaceBetween: 20
        },
        '666': {
            slidesPerView: 3.6,
            spaceBetween: 40
        },
        '1910': {
            slidesPerView: 4.6,
            spaceBetween: 40
        },
        '2200': {
            slidesPerView: 6.6,
            spaceBetween: 40
        },
        '2500': {
            slidesPerView: 7.6,
            spaceBetween: 40
        },
        '2900': {
            slidesPerView: 8.6,
            spaceBetween: 40
        }
    }
});
const swiper = new Swiper('.certificate__swiper', {
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 60,
    speed: 600,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    navigation: {
        nextEl: '.swiper-button-next_cert',
        prevEl: '.swiper-button-prev_cert'
    },
    breakpoints: {
        '320': {
            slidesPerView: 3,
            spaceBetween: 20
        },

        '667': {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
});
const review = new Swiper(".review", {
    // modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next_review",
        prevEl: ".swiper-button-prev_review"
    },
    breakpoints: {
        '0': {
            slidesPerView: 1,
            spaceBetween: 20
        },
        '480': {
            slidesPerView: 2,
            spaceBetween: 20
        },
        '666': {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});
const program = new Swiper('.program__swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    breakpoints: {
        '320': {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                }
            }
        },
        '666': {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                }
            }

        }
    }
});

const productVideo = new Swiper('.product__video-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }

});

// mobile nenu
const openMenu = () => {
    $('.header__burger').toggleClass("header__burger-open");
    $('.header__menu-mob').toggleClass('header__menu-show');
    $('.header__container').toggleClass('header__open');
    $('.header__drop').removeClass('header__drop-open');
    $('.header__submenu').removeClass('header__submenu-open');
    $('body').toggleClass('hidden');
};

//recommend text
const dublicateText = () => {
    let block = $('.recommend__block').clone();
    $('.modal__content ').append(block);
    $('.recommend__full ').insertAfter($('.modal__content .recommend__block-mob'));
};

// stop autoplay Slider(){
const autoplay = () => {
    $('.swiper-wrapper').on('mouseenter', function () {
        popular.autoplay.stop();
        swiper.autoplay.stop();
        program.autoplay.stop();
        shop.autoplay.stop();
    });

    $('.swiper-wrapper').on('mouseleave', function () {
        popular.autoplay.start();
        swiper.autoplay.start();
        program.autoplay.start();
        shop.autoplay.start();
    });
};

// change style for mobile
const changeToMobile = () => {

    if (window.innerWidth <= 666) {

        $('.detail__img img').each(function () {
            $(this).closest('.detail__item').find('.detail__content').prepend($(this));
        });
        $('.program__text h2').each(function () {
            $(this).removeClass('section__gradient-text');
        });

        // $('.program__swiper .swiper-pagination').insertBefore($('.program__swiper .swiper-wrapper '));
        // $('.program__swiper .swiper-wrapper').each(function () {
        //     $(this).insertBefore($(this).prev());
        // });
        // $('.program__swiper .swiper-pagination').insertBefore($('.program__swiper .swiper-wrapper'))


        $('.getmail__block p').insertAfter('.getmail__form h4');
        $('.post__aside').insertAfter('.post__list');
        $('.post__list').before('<h3 class="post__list-title">Читайте також</h3>');
        $('.footer__item:nth-child(2)').append($('.footer__button'));

        $('.header__drop').click(function () {
            $(this).toggleClass('header__drop-open');
            $('.header__submenu').toggleClass("header__submenu-open");
        });
        $('.detail__img').addClass('detail__img-click ');

        $('.recommend__button').click(function () {
            // $(this).toggleClass('recommend__button-hide')
            // $(this).toggleClass('recommend__button-show')
            $('.recommend__button-hide').toggle();
            $('.recommend__button-show').toggle();
            $('.recommend__container').toggleClass("recommend__container-hide");
        });

        $('.recommend__desc').insertAfter('.recommend__block-mob');

        //change button text
        $('.shop__hide .section__button ').text('У кошик');

        const relatedSlider = new Swiper('.product__related-slider', {
            slidesPerView: 2.1,
            spaceBetween: 9,
            centeredSlides: false,
            loop: true,
            allowTouchMove: false,
            navigation: {
                nextEl: ".related__next",
                prevEl: ".related__prev"
            }
        });
    }
};

//tabs product
function tabsProduct() {
    if (window.innerWidth > 666) {
        $(".product__tab .tab").click(function () {
            $(".product__tab .tab").removeClass("active").eq($(this).index()).addClass("active");
            $(".product__tab-item").hide().eq($(this).index()).fadeIn();
        }).eq(0).addClass("active");
    }
}

// tabs profile care

function tabsShop() {
    $(".shop__tab .tab").click(function () {
        $(".shop__tab .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".shop__tab-item").hide().eq($(this).index()).fadeIn().css('display', 'flex');
    }).eq(1).addClass("active");
}

//accordions main page
function accordionMain() {
    $(".detail__img-click").click(function () {
        $(this).parent(".detail__item").find(".detail__content").toggle();
        $(this).toggleClass('show');
        $(this).parent(".detail__item").nextAll(".detail__item").find(".detail__img-click").removeClass('show');
        $(this).parent(".detail__item").prevAll(".detail__item").find(".detail__img-click").removeClass('show');
        $(this).parent(".detail__item").prevAll(".detail__item").find(".detail__content").hide();
        $(this).parent(".detail__item").nextAll(".detail__item").find(".detail__content").hide();
    });
}

// accordion for lips page
const accordionLips = () => {
    $(".question__header").click(function () {
        $(this).parent(".question__item").find(".question__content").slideToggle();
        $(this).toggleClass('show');
        $(this).parent(".question__item").nextAll(".question__item").find(".question__header").removeClass('show');
        $(this).parent(".question__item").prevAll(".question__item").find(".question__header").removeClass('show');
        $(this).parent(".question__item").prevAll(".question__item").find(".question__content").slideUp(200);
        $(this).parent(".question__item").nextAll(".question__item").find(".question__content").slideUp(200).removeClass('show');
    });
};

const accordionFilter = () => {
    $(".shop__filter-item h3").click(function () {
        $(this).parent(".shop__filter-item").find(".shop__filter-inner").slideToggle();
        $(this).toggleClass('show');
    });
};

// accordion for filter
const accordionArchive = () => {
    $(".archive__header").click(function () {
        $(this).parent(".archive__block").find(".archive__inner").slideToggle();
        $(this).toggleClass('hide');
    });
    $('.archive__block:first-child .archive__header').addClass('hide');
    $('.archive__block:first-child .archive__inner').show();
};

// accordion for filter
const accordionFilterWrap = () => {
    if (window.innerWidth <= 666) {
        $(".shop__filter-header").click(function () {
            $(".shop__filter").slideToggle(0);
            $(this).toggleClass('hide');
            $('body').addClass('hidden');
        });
    }
};

//close filter
const closeFilter = () => {
    if (window.innerWidth <= 666) {
        $(".shop__filter-close").click(function () {
            $(this).closest('.shop__filter').hide();
            $('body').removeClass('hidden');
        });
    }
};

// one filter for blog
const filterActive = () => {
    $('.blog__filter-category a').click(function () {
        $(this).addClass('active');
        $(this).prevAll('.blog__filter-category a').removeClass('active');
        $(this).nextAll('.blog__filter-category a').removeClass('active');
    });
};

// one filter active for profile care
const filterActiveOne = () => {
    $('.shop__care-filter .shop__care-btn').click(function () {
        $(this).addClass('active');
        $(this).prevAll('.shop__care-btn').removeClass('active');
        $(this).nextAll('.shop__care-btn').removeClass('active');
    });
};

// show review in modal window
const showReview = () => {
    $('.review__text span').click(function () {
        let reviewText = $(this).closest('p').text();
        let currentReview = $(this).closest('p').text().substr(0, reviewText.length - 16);
        // let currentReview =  $(this).closest('p').text().substr(0, reviewText.length-13)///якщо без крапок

        $('.review__modal-swiper .review__text p').each(function (index) {
            if ($(this).text().includes(currentReview)) {
                const reviewModal = new Swiper(".review__modal-swiper", {
                    initialSlide: index,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    navigation: {
                        nextEl: ".swiper-button-next_reviewModal",
                        prevEl: ".swiper-button-prev_reviewModal"
                    }
                });
            }
        });
    });
    toogleModal($('.review__text span'), $('.modal__review'));
};

// create ajax
function ajaxSend(date, url, func) {
    $.ajax({
        url: url,
        dataType: "json",
        data: date,
        method: 'POST',
        success: function (data) {
            func();
        },
        error: function (error) {},
        complete: function () {}
    });
}

// send form
function sendForm(form, url, func) {
    form = form.serialize();
    ajaxSend(form, url, func);
}

// enter only number
function isNumberKey(evt) {
    let charCode = evt.which ? evt.which : event.keyCode;
    if (charCode != 43 && charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    return true;
}

// play video
const playVideo = () => {
    $('.video__poster').click(function () {
        let video = '<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" src="' + $(this).attr('data-video') + '" title="' + $(this).attr('data-title') + '"></iframe>';
        $(this).next(".video__play").hide();
        $(this).closest('.video').addClass("hide-after");
        $(this).replaceWith(video);
    });
};

// open modal with click
function toogleModal(btn, modal) {
    btn.click(function () {
        modal.show();
        $('body').css('overflow', 'hidden');
        return false;
    });
    $('.modal__close').click(function () {
        $(this).closest(modal).hide();
        resetForm();
        $('body').css('overflow', 'visible');
        return false;
    });
    $('.modal__quiz-return').click(function () {
        $(this).closest(modal).hide();
        $('body').css('overflow', 'visible');
        return false;
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            modal.hide();
            resetForm();
            $('body').css('overflow', 'visible');
        }
    });
    modal.click(function (e) {
        if ($(e.target).closest('.modal__content').length == 0) {
            $(this).hide();
            resetForm();
            $('body').css('overflow', 'visible');
        }
    });
}

// open modal without click
function toogleModalWithoutClick(modal) {
    modal.show();
    $('body').css('overflow', 'hidden');
    $('.modal__close').click(function () {
        $(this).closest(modal).hide();
        $('body').css('overflow', 'visible');
        return false;
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            modal.hide();
            $('body').css('overflow', 'visible');
        }
    });
    modal.click(function (e) {
        if ($(e.target).closest('.modal__content').length == 0) {
            $(this).hide();
            $('body').css('overflow', 'visible');
        }
    });
}

// to default after close modal
function resetForm() {
    $('.modal__reg').hide();
    $('.modal__forget').hide();
    $('.modal__enter').show();
    $('.modal__newpassword-create').show();
    $('.modal__newpassword-success').hide();
    $('.modal__forget-wrap').show();
    $('.modal__forget-mail').hide();
    $('.modal__reg-success').hide();
    $('.modal__reg').hide();
}

// change content in modal window
function changeContent(btn, content) {
    btn.click(function () {
        $(this).closest('.modal__content').hide();
        content.show();
    });
}

// show&hide password
function showPassword() {
    $('.modal__form-eye').click(function (e) {
        $(this).toggleClass('active');
        $(this).hasClass('active') ? $(this).closest('.modal__form-password').find('input').attr('type', 'text') : $(this).closest('.modal__form-password').find('input').attr('type', 'password');
    });
}

// change profile info
function profileInfo() {
    let arrProfile = [];
    $('.info__edit').click(function () {
        $(this).hide();
        $('.info__form input').each(function () {
            arrProfile.push($(this).val());
            $(this).prop('disabled', false);
        });
        $('.info__form input[type^="password"]').prop('disabled', true);

        $('.info__form-button').css('display', 'flex');
    });
    $('.info__cancel').click(function () {
        $(this).closest('.info__form-button').hide();
        $(this).closest('.info__form').find('.info__edit').show();

        $('.info__form input').each(function (i) {
            $(this).prop('disabled', true);
            $(this).val(arrProfile[i]);
        });
    });
}

//validate all form
const validateForm = (form, func) => {
    form.on("submit", function (e) {
        e.preventDefault();
    });

    $.validator.addMethod("goodName", function (value, element) {
        return this.optional(element) || /^[аА-яЯіІєЄїЇґҐa-zA-Z0-9._-]{2,30}$/i.test(value);
    }, "Введіть правильно ім'я");

    $.validator.addMethod("goodEmail", function (value, element) {
        return this.optional(element) || /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,62}$/i.test(value);
    }, "Введіть коректний email");

    $.validator.addMethod("goodPhone", function (value, element) {
        // return this.optional(element) || /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/i.test(value);
        return this.optional(element) || /^[+]*[0-9]{10,14}$/g.test(value);
    }, "Введіть номер у форматі +380 xxx xx xx");

    form.validate({
        rules: {
            name: {
                required: true,
                goodName: true
                // minlength:2,
                // maxLength: 25
            },
            lastname: {
                required: true,
                goodName: true
            },
            phone: {
                required: true,
                goodPhone: true

            },
            email: {
                required: true,
                goodEmail: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            },
            password_confirm: {
                required: true,
                minlength: 8,
                equalTo: "#password"
            },
            passwordNew: {
                required: true,
                minlength: 8
            },
            passwordNew_confirm: {
                required: true,
                minlength: 8,
                equalTo: "#passwordNew"
            }
        },
        messages: {
            name: {
                required: "Це поле є обов’язкове",
                minlength: "Ім'я не може бути коротше за 2 букви",
                maxLength: "Ім'я не може бути довше за 25 букви"
            },
            lastname: {
                required: "Це поле є обов’язкове",
                minlength: "Прізвище не може бути коротше за 2 букви",
                maxLength: "Прізвище не може бути довше за 25 букви"
            },
            phone: {
                required: "Це поле є обов’язкове",
                phone: "Введіть номер у форматі +380 xxx xx xx"
            },
            email: {
                required: "Це поле є обов’язкове",
                email: "Введіть коректний email"
            },
            password: {
                required: "Це поле є обов’язкове",
                minlength: "Пароль не може бути коротше за 8 символів"
            },
            password_confirm: {
                required: "Це поле є обов’язкове",
                equalTo: "Паролі не співпадають"
            },
            passwordNew: {
                required: "Це поле є обов’язкове",
                minlength: "Пароль не може бути коротше за 8 символів"
            },
            passwordNew_confirm: {
                required: "Це поле є обов’язкове",
                equalTo: "Паролі не співпадають"
            }

        },
        submitHandler: function () {
            func();
            form[0].reset();
        }
    });
};

// validate profile info
const validateProfile = (form, func) => {
    form.on("submit", function (e) {
        e.preventDefault();
    });

    $.validator.addMethod("goodName", function (value, element) {
        return this.optional(element) || /^[аА-яЯіІєЄїЇґҐa-zA-Z0-9._-]{2,25}$/i.test(value);
    }, "Введіть правильно ім'я");

    $.validator.addMethod("goodEmail", function (value, element) {
        return this.optional(element) || /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,62}$/i.test(value);
    }, "Введіть коректний email");

    $.validator.addMethod("goodPhone", function (value, element) {
        // return this.optional(element) || /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/i.test(value);
        return this.optional(element) || /^[+]*[0-9]{10,14}$/g.test(value);
    }, "Введіть номер у форматі +380 xxx xx xx");

    form.validate({
        rules: {
            name: {
                required: true,
                goodName: true
                // minlength:2,
                // maxLength: 25,
            },
            lastname: {
                required: true,
                goodName: true
                // minlength:2,
                // maxLength: 25,
            },
            phone: {
                required: true,
                goodPhone: true

            },
            email: {
                required: true,
                goodEmail: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Це поле є обов’язкове",
                minlength: "Ім'я не може бути коротше за 2 букви",
                maxLength: "Ім'я не може бути довше за 25 букви"
            },
            lastname: {
                required: "Це поле є обов’язкове",
                minlength: "Прізвище не може бути коротше за 2 букви",
                maxLength: "Прізвище не може бути довше за 25 букви"
            },
            phone: {
                required: "Це поле є обов’язкове",
                phone: "Введіть номер у форматі +380 xxx xx xx"
            },
            email: {
                required: "Це поле є обов’язкове",
                email: "Введіть коректний email"
            }
        },
        submitHandler: function () {
            func();
            form[0].reset();
        }
    });
};

// reset all filter
const resetFilter = () => {
    $('.shop__filter-reset').click(function () {
        $('.shop__form input').each(function () {
            $(this).prop("checked", false);
            $(this).val('');
        });
    });
};

// accordion for product info
const accordionProduct = () => {
    $(".product__tab-drop").click(function () {
        $(this).parent(".product__tab-item").find(".product__tab-inner").slideToggle();
        $(this).toggleClass('show');
        $(this).parent(".product__tab-item").nextAll(".product__tab-item").find(".product__tab-drop").removeClass('show');
        $(this).parent(".product__tab-item").prevAll(".product__tab-item").find(".product__tab-drop").removeClass('show');
        $(this).parent(".product__tab-item").prevAll(".product__tab-item").find(".product__tab-inner").slideUp(200);
        $(this).parent(".product__tab-item").nextAll(".product__tab-item").find(".product__tab-inner").slideUp(200).removeClass('show');
    });
};

// show filter
const filterData = () => {
    $(".shop__filter input").change(function () {
        $('.shop__filter-btn').css('display', 'flex');
        $(this).closest('.shop__filter').css('padding-bottom', '13.8rem');
        $('body').removeClass('hidden');
    });
};

// star review
const starReview = () => {
    $('.archive__rating-star').click(function () {
        $(this).addClass('active-star');
        $(this).prevAll('.archive__rating-star').addClass('active-star');
        $(this).nextAll('.archive__rating-star').removeClass('active-star');
        let rating = $('.active-star').length;
        $('.archive__rating-val').val(rating);
    });
};

// drop menu for footer
const dropFooter = () => {
    $('.footer__drop').click(function () {
        $(this).toggleClass('footer__drop-open');
        $(this).closest('body').find('.action__container').toggleClass('action__container-big');
        $('.footer__inner').toggleClass("footer__inner-open");
    });
};

// product cart show detail
const hoverSelect = () => {
    $('.shop__item').each(function () {

        let ths = $(this);
        if (window.innerWidth <= 666) {
            let count = 0;
            let linkTitle = $(this).find('.shop__text a');
            let linkImg = $(this).find('.shop__img');

            ths.mouseleave(function (event) {
                count = 0;
            });

            linkTitle.click(clickCount);
            linkImg.click(clickCount);

            function clickCount(event) {
                count++;
                if (count === 1) {
                    event.preventDefault();
                } else {
                    count = 0;
                }
            }
            $(this).click(function () {
                $(this).addClass('shop__item-click');
                $(this).prevAll('.shop__item').removeClass('shop__item-click');
                $(this).nextAll('.shop__item').removeClass('shop__item-click');
            });
        }
        if (window.innerWidth > 666) {
            $(this).hover(function () {
                let select2Container = ths.find('.select2');

                $(this).closest('.shop__item').addClass('item-hover');

                select2Container.on('click', function () {
                    $(this).closest('.shop__item').addClass('item-hover');
                });
                ths.on('mouseleave', function (e) {
                    let itemDrop = e.target.closest('.select2-container');

                    if (itemDrop === null) {
                        $('.shop__item').removeClass('item-hover');
                        $('.shop__select').select2('close');
                    }
                });
            });
        }
    });
};

// check select in product card
const hasSelect = () => {
    $('.shop__item').each(function () {
        if ($(this).find('.shop__select ').length > 0) {
            $(this).find('.shop__hide').css('bottom', '-16.6rem');
        }
        if (window.innerWidth <= 666) {
            $(this).find('.shop__hide').css('bottom', '-5.8rem');
            if ($(this).find('.shop__select ').length > 0) {
                $(this).find('.shop__hide').css('bottom', '-15.8rem');
            }
        }
    });
};

const auth = () => {
    $('.header__user').attr('href', 'http://localhost:8080/shop/');
    $('.header__user').removeClass('header__auth').unbind();
    $('.modal__enter').hide();
    $('.modal__enter-wrap').hide();
    $('.modal__reg-success').show();
};

$(document).ready(function () {
    changeToMobile();
    accordionMain();
    accordionLips();
    playVideo();
    filterActive();
    filterActiveOne();
    showReview();
    quize();
    showPassword();
    dublicateText();
    profileInfo();
    tabsProduct();
    accordionProduct();
    accordionFilter();
    accordionFilterWrap();
    filterData();
    resetFilter();
    accordionArchive();
    starReview();
    hasSelect();
    hoverSelect();
    autoplay();
    dropFooter();
    closeFilter();
    tabsShop();
});

$(window).load(function () {

    $('.shop__select').select2({});

    //blog form
    let formBlog = $('.getmail__form');
    validateForm(formBlog, function () {
        sendForm(formBlog, 'google.com');
        $(".getmail__change").replaceWith("<h4 style='max-width: 100%'>Дякуємо за підписку! <br>Відтепер надсилатимемо вам корисні поради та рекомендації.</h4> <p>Не бачите наших листів? Обов'язково перевіряйте папки \"Промоакції\" та \"Спам\" </p>");
    });

    // school form
    let formSchool = $('.statement__form'),
        modalSchool = $(".modal__school");
    validateForm(formSchool, function () {
        sendForm(formSchool, 'google.com');
        toogleModalWithoutClick(modalSchool);
    });

    // enter form
    let formEnter = $('.modal__form-enter');
    validateForm(formEnter, function () {
        sendForm(formEnter, '/wp-admin/admin-ajax.php');
    });

    // forgot password form
    let formForgot = $('.modal__form-forget');
    validateForm(formForgot, function () {
        sendForm(formForgot, 'google.com');
        $('.modal__forget-wrap').hide();
        $('.modal__forget-mail').show();
    });

    // register form
    let formRegister = $('.modal__form-reg');
    validateForm(formRegister, function () {
        sendForm(formRegister, '/wp-admin/admin-ajax.php', auth());
    });

    //test result form
    let formResult = $('.quiz__result-form');
    validateForm(formResult, function () {
        sendForm(formResult, 'google.com');
        window.location.href = "https://front-facezone.sheep.fish/profile-care.html";
    });

    // filter form
    let formFilter = $('.shop__form');
    validateForm(formFilter, function () {
        sendForm(formFilter, 'google.com');
        $('.shop__filter').hide();
        $('body').removeClass('hidden');
    });

    // modal__newpassword-create
    let formNewPassword = $('.modal__form-newpassword');
    validateForm(formNewPassword, function () {
        sendForm(formNewPassword, 'google.com');
        $('.modal__newpassword-create').hide();
        $('.modal__newpassword-success').show();
    });

    //modal__newpassword-success
    let formNewPasswordSucc = $('.modal__form-newpassword-success');
    validateForm(formNewPasswordSucc, function () {
        sendForm(formNewPasswordSucc, 'google.com');
        $('.modal').hide();
    });

    //test result form
    let formInfoProfile = $('.info__form');
    validateProfile(formInfoProfile, function () {
        sendForm(formInfoProfile, 'google.com');
        $('.info__form-button').hide();
        $('.info__edit').show();
        $('.info__form input').each(function (i) {
            $(this).prop('disabled', true);
        });
    });

    // send review
    let formReview = $('.archive__review-form'),
        modalReview = $(".modal__star");
    validateForm(formReview, function () {
        sendForm(formReview, 'google.com');
        toogleModalWithoutClick(modalReview);
    });

    $('.header__burger').on('click', openMenu);
    quize();
    changeContent($('.modal__enter-reg'), $('.modal__reg'));
    changeContent($('.modal__reg-enter'), $('.modal__enter'));
    changeContent($('.modal__enter-forget'), $('.modal__forget'));
    toogleModal($('.header__auth'), $('.modal__auth'));
    toogleModal($('.info__change-password'), $('.modal__newpassword'));
    toogleModal($('.recommend__desc span'), $('.modal__recommend'));
    toogleModal($('.quiz__close'), $('.modal__quiz'));
    changeContent($('.modal__present-want'), $('.modal__present-success'));
});

$(window).resize(function () {});
//# sourceMappingURL=index.js.map
