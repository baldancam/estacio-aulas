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
            src: 'https://www.youtube.com/embed/8mei6uVttho?si=IhlckL_9OzknUU3f',
            description: 'Introdução aos algoritmos.'
        },
        {
            title: 'Aula 02',
            src: 'https://www.youtube.com/embed/M2Af7gkbbro?si=TvTgKVynS6lr6DH6',
            description: 'Primeiro Algoritmo.'
        },
        {
            title: 'Aula 03',
            src: 'https://www.youtube.com/embed/RDrfZ-7WE8c?si=E6R_R-QFokPqc2KC',
            description: 'Comando de Entrada e Operadores.'
        },
        {
            title: 'Aula 04',
            src: 'https://www.youtube.com/embed/Ig4QZNpVZYs?si=CnuhZNgZXWMwW6A-',
            description: 'Operadores Lógicos e Relacionais.'
        },
        {
            title: 'Aula 05',
            src: 'https://www.youtube.com/embed/GrPkuk1ezyo?si=5vTVK_1PnfW4JeGH',
            description: 'Introdução ao Scratch.'
        },
        {
            title: 'Aula 06',
            src: 'https://www.youtube.com/embed/v2nCgGSVCeE?si=OP4wDeksbnNULtRi',
            description: 'Exercícios de Algoritmo Resolvidos.'
        },
        {
            title: 'Aula 07',
            src: 'https://www.youtube.com/embed/_g05aHdBAEY?si=2QSXpPZlJUNfjzfz',
            description: 'Estruturas Condicionais 1.'
        },
        {
            title: 'Aula 08',
            src: 'https://www.youtube.com/embed/7gGFHzqh4d8?si=HbG7ECzaSxBbW37N',
            description: 'Estruturas Condicionais 2.'
        },
        {
            title: 'Aula 09',
            src: 'https://www.youtube.com/embed/U5PnCt58Q68?si=BERtY8Bb_RUM1XMm',
            description: 'Estruturas de Repetição 1 .'
        },
        {
            title: 'Aula 10',
            src: 'https://www.youtube.com/embed/fP49L1i_-HU?si=QYbZukzkEiLJ5gxk',
            description: 'Estruturas de Repetição 2.'
        },
        {
            title: 'Aula 11',
            src: 'https://www.youtube.com/embed/WJQz20i7CyI?si=qvsHXtgB2zstEItT',
            description: 'Estruturas de Repetição 3.'
        },
        {
            title: 'Aula 12',
            src: 'https://www.youtube.com/embed/KoNehy7rn8U?si=-3lHQbJciltTA-iJ',
            description: 'Procedimentos.'
        },
        {
            title: 'Aula 13',
            src: 'https://www.youtube.com/embed/-nNx7e8GzHQ?si=9u_SUTq7hVEFvOiO',
            description: 'Funções.'
        },
        {
            title: 'Aula 14',
            src: 'https://www.youtube.com/embed/j9473xQ39vY?si=hYvWGXa_j2xYxPqX',
            description: 'Vetores.'
        },
        {
            title: 'Aula 15',
            src: 'https://www.youtube.com/embed/hkE9WrjpAAk?si=uvFQ0-ZY1gY5V_To',
            description: 'Matrizes.'
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
