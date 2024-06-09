document.addEventListener('DOMContentLoaded', function() {
    const questionInput = document.getElementById('question');
    const videoIndexInput = document.getElementById('video-index');
    const sendButton = document.querySelector('.bt-enviar');
    const questionsList = document.querySelector('.questions-list');
    const videoPlayer = document.getElementById('video-player');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    const videos = [
        {
            title: 'Aula 01',
            src: 'https://www.youtube.com/embed/Ejkb_YpuHWs?si=LiWn-uuV8uZ-h8H0',
            description: 'Começa aqui.'
        },
        {
            title: 'Aula 02',
            src: 'https://www.youtube.com/embed/jgQjeqGRdgA?si=lkHapgDbu7R84hRo',
            description: 'O que vamos aprender no módulo 01?'
        },
        {
            title: 'Aula 03',
            src: 'https://www.youtube.com/embed/VfIXgGJWLvA?si=gSgHoQoab_wwg1tf',
            description: 'Precisamos fazer um acordo.'
        },
        {
            title: 'Aula 04',
            src: 'https://www.youtube.com/embed/57wyfS560Uk?si=A8OXAibivWThcShf',
            description: 'Será que este curso é para mim?'
        },
        {
            title: 'Aula 05',
            src: 'https://www.youtube.com/embed/0zLjVhHdOm8?si=XPEdtjsxfUx17zEn',
            description: 'Melhores livros para aprender HTML5 e CSS3.'
        },
        {
            title: 'Aula 06',
            src: 'https://www.youtube.com/embed/F74GKCLXUWM?si=JCCjmuPBflXLkO6-',
            description: 'Como a Internet chega na minha casa?'
        },
        {
            title: 'Aula 07',
            src: 'https://www.youtube.com/embed/nlO5hySqJFA?si=3Bdw75gQ-PWy-x0D',
            description: 'Como a Internet funciona?'
        },
        {
            title: 'Aula 08',
            src: 'https://www.youtube.com/embed/RFHSt1PCy0k?si=E7sEK7OFz_IDKYNv',
            description: 'O que é domínio e hospedagem?'
        },
        {
            title: 'Aula 09',
            src: 'https://www.youtube.com/embed/B4FU3NFRTDw?si=xE56btT4vwx_JpDW',
            description: 'A diferença entre HTML, CSS e JavaScript.'
        },
        {
            title: 'Aula 10',
            src: 'https://www.youtube.com/embed/iSqf2iPqJNM?si=DKTDz2gvAq9aGkYg',
            description: 'Front-end, Back-end e Full stack.'
        },
        {
            title: 'Aula 11',
            src: 'https://www.youtube.com/embed/UForX7ehChM?si=wkgm5sP5x6IU86t8',
            description: 'Instalando todas as ferramentas.'
        },
        {
            title: 'Aula 12',
            src: 'https://www.youtube.com/embed/E6CdIawPTh0?si=fAZZ8IcNDUbsEpUG',
            description: 'Seu primeiro código HTML.'
        },
        {
            title: 'Aula 13',
            src: 'https://www.youtube.com/embed/f6NTJdtEFOc?si=9aCR-w5BJWQ5ypPg',
            description: 'Parágrafos e Quebras.'
        },
        {
            title: 'Aula 14',
            src: 'https://www.youtube.com/embed/nhMdFe3WwYc?si=4owOUZ_EHbjtU6hd',
            description: 'Símbolos e Emoji no seu site.'
        },
        {
            title: 'Aula 15',
            src: 'https://www.youtube.com/embed/bDULqeGEvAw?si=NHm267EGCtYgvpga',
            description: 'Você tem o direito de usar qualquer imagem no seu site?'
        }
    ];

    let currentVideoIndex = 0;
    const questions = {};

    function loadVideo(index) {
        const video = videos[index];
        videoPlayer.src = video.src;
        document.querySelector('.section-01-01 h3').textContent = video.title;
        document.querySelector('.info-description').textContent = video.description;
        videoIndexInput.value = index;
        displayQuestions(index);
    }

    function displayQuestions(index) {
        questionsList.innerHTML = '';
        if (questions[index]) {
            questions[index].forEach((question, questionIndex) => {
                const questionItem = document.createElement('div');
                questionItem.classList.add('question-item');
                questionItem.innerHTML = `
                    <div class="question-text">${question.text}</div>
                    <button class="answer-button">Responder</button>
                    <div class="answer-form">
                        <textarea placeholder="Digite sua resposta"></textarea>
                        <button class="submit-answer">Enviar Resposta</button>
                    </div>
                    <div class="answers-list"></div>
                `;
                questionsList.appendChild(questionItem);

                const answerButton = questionItem.querySelector('.answer-button');
                const answerForm = questionItem.querySelector('.answer-form');
                const submitAnswerButton = questionItem.querySelector('.submit-answer');
                const answersList = questionItem.querySelector('.answers-list');

                answerButton.addEventListener('click', function() {
                    answerForm.style.display = answerForm.style.display === 'none' || !answerForm.style.display ? 'block' : 'none';
                });

                submitAnswerButton.addEventListener('click', function() {
                    const answerText = answerForm.querySelector('textarea').value.trim();
                    if (answerText !== '') {
                        if (!question.answers) {
                            question.answers = [];
                        }
                        question.answers.push(answerText);
                        displayAnswers(answersList, question.answers);
                        answerForm.querySelector('textarea').value = '';
                        answerForm.style.display = 'none';
                    }
                });

                if (question.answers) {
                    displayAnswers(answersList, question.answers);
                }
            });
        }
    }

    function displayAnswers(answersList, answers) {
        answersList.innerHTML = '';
        answers.forEach(answer => {
            const answerDiv = document.createElement('div');
            answerDiv.classList.add('answer');
            answerDiv.textContent = answer;
            answersList.appendChild(answerDiv);
        });
    }

    prevButton.addEventListener('click', function() {
        if (currentVideoIndex > 0) {
            currentVideoIndex--;
            loadVideo(currentVideoIndex);
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentVideoIndex < videos.length - 1) {
            currentVideoIndex++;
            loadVideo(currentVideoIndex);
        }
    });

    
    loadVideo(currentVideoIndex);

    sendButton.addEventListener('click', function() {
        const questionText = questionInput.value.trim();
        const videoIndex = videoIndexInput.value;
        if (questionText !== '') {
            if (!questions[videoIndex]) {
                questions[videoIndex] = [];
            }
            questions[videoIndex].push({ text: questionText, answers: [] });
            displayQuestions(videoIndex);
            questionInput.value = '';
        }
    });
});
