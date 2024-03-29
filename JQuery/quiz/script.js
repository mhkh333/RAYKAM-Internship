const questions = [
    {
        id: 1,
        title:
            'برای اینکه لینک در صفحه یا تب جدید باز شود، از کدام صفت استفاده میشود؟',
        options: [
            {
                key: 1,
                title: '_blank'
            },
            {
                key: 2,
                title: '_self'
            },
            {
                key: 3,
                title: '_new'
            },
            {
                key: 4,
                title: '_parent'
            }
        ],
        answerKey: 1
    },
    {
        id: 2,
        title:
            'کدام عملگر true برمیگرداند اگر دو مقداری که با هم مقایسه میشوند، برابر نباشند؟',
        options: [
            {
                key: 1,
                title: '<>'
            },
            {
                key: 2,
                title: '~'
            },
            {
                key: 3,
                title: '==!'
            },
            {
                key: 4,
                title: '!=='
            }
        ],
        answerKey: 4
    },
    {
        id: 3,
        title: 'کدام یک کلمه کلیدی در جاوااسکریپت نیست؟',
        options: [
            {
                key: 1,
                title: 'this'
            },
            {
                key: 2,
                title: 'catch'
            },
            {
                key: 3,
                title: 'function'
            },
            {
                key: 4,
                title: 'array'
            }
        ],
        answerKey: 4
    },
    {
        id: 4,
        title:
            'کدام یک راه درست برای اینکه تعداد پاراگراف‌های موجود در صفحه را بدست بیاوریم با استفاده از jquery است؟',
        options: [
            {
                key: 1,
                title: '$("p").count()'
            },
            {
                key: 2,
                title: '$("p").length'
            },
            {
                key: 3,
                title: '$("*").find("p")'
            },
            {
                key: 4,
                title: '$("p").length()'
            }
        ],
        answerKey: 2
    }
];

const quizForm = $('#quizForm');

const questionsHtml = questions.map(q => {
    return `<div class="question">
    <h3>${q.title}</h3>
    <div class="choices">
    ${q.options.map(
        option => `<div class="choice">
        <label for="choice${q.id}${option.key}">${option.title}</label>
        <input type="radio" name="question${q.id}" id="choice${q.id}${option.key}" value="${option.key}" />
    </div>
    `
    ).join('')}
</div>
</div>`;
});

quizForm.html(questionsHtml.join('') + `<button type="submit"></button>`);

quizForm.submit(event => {
    event.preventDefault();

    var right = 0;
    var wrong = 0;
    var empty = 0;

    questions.forEach(question => {
        const radioVal = $(`input[name='question${question.id}']:checked`).val();
        console.log(radioVal)
        if(radioVal){
            if(radioVal == question.answerKey){
                right += 1;
            }else{

                wrong += 1;
            }
        }
        else{
            empty += 1;
        }
    });

    $('#rightAnswers').html(right);
    $('#wrongAnswers').html(wrong);
    $('#emptyAnswers').html(empty);
});