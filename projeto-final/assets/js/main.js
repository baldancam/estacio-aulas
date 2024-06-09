document.addEventListener('DOMContentLoaded', function() {
    const courseCards = document.querySelectorAll('.course-card');
    const courseDetailsSection = document.querySelector('.course-details');
    const courseSummary = document.querySelector('.course-summary');
    const backButton = document.querySelector('.back-button');
    const enterButton = document.querySelector('.enter-button');
    const courseSelectionSection = document.querySelector('.course-selection');
    let currentCourse = '';
    const courseDescriptions = {
        javascript: `Este curso de JavaScript cobre os fundamentos da linguagem, incluindo variáveis, funções, objetos e muito mais. Ideal para iniciantes e para aqueles que desejam reforçar seus conhecimentos.`,
        
        'html-css': `Este curso de HTML e CSS ensina como criar páginas web modernas e responsivas. Aprenda sobre estruturação de conteúdo com HTML e estilização com CSS.`,
        
        python: `Aprenda Python, uma das linguagens de programação mais populares e versáteis. Este curso cobre desde os conceitos básicos até tópicos mais avançados.`,
        
        'where-start': `
        <strong>Por Onde Começar na Programação?</strong><br><br>Se você está iniciando sua jornada no mundo da programação, parabéns! A programação é uma habilidade valiosa e poderosa que pode abrir muitas portas no seu futuro. Aqui estão alguns passos para ajudar você a começar:
        <br><br>
        <strong>1. Escolha uma Linguagem de Programação:</strong><br>
        Existem muitas linguagens de programação disponíveis, mas começar com uma linguagem amigável para iniciantes pode fazer toda a diferença. JavaScript, Python e HTML & CSS são ótimas escolhas para iniciantes.
        <br><br>
        <strong>2. Aprenda os Fundamentos:</strong><br>
        Independentemente da linguagem escolhida, é essencial aprender os fundamentos. Compreender conceitos básicos como variáveis, loops, condicionais e funções é crucial. Você pode encontrar tutoriais online, cursos gratuitos e livros que ensinam esses conceitos de maneira prática.
        <br><br>
        <strong>3. Pratique Regularmente:</strong><br>
        A prática é fundamental na programação. Comece com pequenos projetos e vá aumentando a complexidade à medida que se sentir mais confortável. Sites como Codecademy, freeCodeCamp e Khan Academy oferecem exercícios práticos para ajudar no seu aprendizado.
        <br><br>
        <strong>4. Participe de Comunidades:</strong><br>
        Junte-se a comunidades de programadores online, como fóruns, grupos no Facebook ou Discord. Participar dessas comunidades permite que você tire dúvidas, compartilhe seu progresso e aprenda com outros programadores.
        <br><br>
        <strong>5. Construa Projetos:</strong><br>
        Uma das melhores maneiras de aprender a programar é construindo seus próprios projetos. Comece com projetos simples, como uma página web pessoal ou uma calculadora, e depois vá avançando para projetos mais complexos.
        <br><br>
        <strong>6. Seja Persistente:</strong><br>
        Aprender a programar pode ser desafiador, mas não desista. A prática constante e a paciência são fundamentais para superar os obstáculos. Com o tempo, você verá progresso e começará a se sentir mais confiante em suas habilidades.
      `,
        
        algoritmo: 'Algoritmos é essencial para qualquer pessoa que deseje compreender os aspectos fundamentais por trás da resolução eficiente de problemas computacionais, o que é crucial tanto para estudantes de ciência da computação quanto para profissionais da área de tecnologia.',
        
        java:'<strong>Java</strong> proporciona uma base sólida para o desenvolvimento de software, preparando os alunos para criar aplicativos desktop, web e móveis, e também para participar de projetos corporativos e de grande escala.',
        
        poo: `Programação Orientada a Objetos (POO) é uma oportunidade de mergulhar em um paradigma de programação que se concentra em objetos e classes. Durante o curso, os alunos aprendem a pensar em termos de objetos, que são instâncias de classes, e a utilizar os conceitos fundamentais da POO, como encapsulamento, herança, polimorfismo e abstração.<br><br>Os alunos começam entendendo os princípios básicos da POO, como a definição de classes, métodos e atributos, além de aprender sobre visibilidade de membros (public, private, protected), construtores e métodos de acesso (getters e setters). Em seguida, eles exploram a importância do encapsulamento para garantir a integridade dos dados e a modularidade do código.<br><br>Ao longo do curso, os alunos também estudam a herança, que permite criar hierarquias de classes e reutilizar código através da especialização e generalização de comportamentos. Eles aprendem a criar subclasses, sobrescrever métodos e usar interfaces para alcançar a flexibilidade e extensibilidade do código.<br><br>O polimorfismo é outro aspecto essencial abordado no curso, permitindo que objetos de diferentes classes sejam tratados de forma uniforme por meio de métodos polimórficos. Isso promove a flexibilidade e o desenvolvimento de sistemas mais dinâmicos e adaptáveis.`,
        
        'csharp': `<strong>C#</strong> é uma linguagem de programação moderna, de alto nível e orientada a objetos desenvolvida pela Microsoft. Ela é amplamente utilizada para o desenvolvimento de aplicativos desktop, web e mobile dentro do ecossistema .NET. Com uma sintaxe simples e fácil de aprender, C# oferece recursos avançados de programação, como gerenciamento automático de memória, suporte a programação assíncrona, tratamento de exceções robusto e uma vasta biblioteca de classes e frameworks para facilitar o desenvolvimento de software.`,      
    };
      

    courseCards.forEach(card => {
      card.addEventListener('click', () => {
        const courseKey = card.getAttribute('data-course');
        courseSummary.innerHTML = courseDescriptions[courseKey];
        courseDetailsSection.classList.add('visible');
        courseDetailsSection.classList.remove('hidden');
        courseSelectionSection.classList.add('hidden');
        currentCourse = courseKey;
      });
    });

    backButton.addEventListener('click', () => {
      courseDetailsSection.classList.remove('visible');
      courseDetailsSection.classList.add('hidden');
      courseSelectionSection.classList.remove('hidden');
    });

    enterButton.addEventListener('click', () => {
      if (currentCourse !== 'where-start') {
        window.location.href = `courses/${currentCourse}.html`;
      } else {
        window.location.href = `courses/algoritmo.html`;
      }
    });
});
