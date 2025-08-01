document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Smooth scrolling para links do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            nav.classList.remove('active');
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Gerar aula
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const materiaButtons = document.querySelectorAll('[data-materia]');
    const resultadoSection = document.getElementById('resultado');
    const aulaContent = document.getElementById('aula-content');
    const printBtn = document.getElementById('print-btn');
    
    function gerarAula(topic, subject = 'geral') {
        // Simulação de IA gerando conteúdo
        // Em uma aplicação real, aqui seria uma chamada API para um backend com IA
        
        // Mostrar loading
        aulaContent.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Gerando aula...</div>';
        resultadoSection.classList.remove('hidden');
        
        // Scroll para a seção de resultado
        window.scrollTo({
            top: resultadoSection.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Simular delay de processamento
        setTimeout(() => {
            // Conteúdo gerado (simulado)
            const conteudoAula = `
                <h3>Aula sobre: ${topic}</h3>
                <p><strong>Matéria:</strong> ${capitalizeFirstLetter(subject)}</p>
                <div class="aula-secao">
                    <h4>Introdução</h4>
                    <p>Este conteúdo aborda os principais conceitos sobre ${topic.toLowerCase()}, essencial para o seu aprendizado. ${topic} é um tema fundamental em ${subject === 'geral' ? 'diversas áreas do conhecimento' : subject}.</p>
                </div>
                
                <div class="aula-secao">
                    <h4>Conceitos Básicos</h4>
                    <ul>
                        <li>Definição de ${topic.toLowerCase()}</li>
                        <li>Histórico e contexto</li>
                        <li>Aplicações práticas</li>
                        <li>Exemplos cotidianos</li>
                    </ul>
                </div>
                
                <div class="aula-secao">
                    <h4>Desenvolvimento</h4>
                    <p>${gerarParagrafoAleatorio(subject)}</p>
                    <p>${gerarParagrafoAleatorio(subject)}</p>
                </div>
                
                <div class="aula-secao">
                    <h4>Exercícios</h4>
                    <ol>
                        <li>Explique com suas palavras o que é ${topic.toLowerCase()}.</li>
                        <li>${gerarPerguntaAleatoria(subject)}</li>
                        <li>${gerarPerguntaAleatoria(subject)}</li>
                        <li>Pesquise um exemplo real de aplicação de ${topic.toLowerCase()}.</li>
                    </ol>
                </div>
                
                <div class="aula-secao">
                    <h4>Referências</h4>
                    <ul>
                        <li>Livro: "${gerarTituloLivroAleatorio(subject)}"</li>
                        <li>Site: www.${subject.toLowerCase()}educacional.com.br</li>
                        <li>Artigo científico sobre ${topic.toLowerCase()}</li>
                    </ul>
                </div>
                
                <div class="aula-rodape">
                    <p><strong>Dica do dia:</strong> ${gerarDicaAleatoria(subject)}</p>
                </div>
            `;
            
            aulaContent.innerHTML = conteudoAula;
        }, 1500);
    }
    
    // Funções auxiliares para gerar conteúdo simulado
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    function gerarParagrafoAleatorio(materia) {
        const paragrafos = {
            matematica: [
                "Na matemática, este conceito é fundamental para resolver problemas complexos que envolvem relações quantitativas e formas geométricas. A compreensão profunda desse tópico permite a aplicação em diversas áreas como engenharia, física e ciência de dados.",
                "O estudo deste tema matemático remonta às civilizações antigas, que já utilizavam esses princípios para construção, astronomia e comércio. Hoje, continua sendo essencial para o desenvolvimento tecnológico e científico."
            ],
            ciencias: [
                "Na ciência, este fenômeno pode ser observado em diversos contextos naturais e experimentais. Sua compreensão é crucial para avanços em medicina, tecnologia e preservação ambiental.",
                "Os princ científicos envolvidos aqui explicam muitos dos fenômenos que vivenciamos no dia a dia. Desde o funcionamento do corpo humano até os grandes eventos cósmicos, esse conhecimento é fundamental."
            ],
            portugues: [
                "Na língua portuguesa, esse aspecto da linguagem é essencial para uma comunicação clara e eficaz. Dominar esse conceito melhora a escrita, a interpretação de textos e a expressão oral.",
                "Este elemento da nossa língua tem raízes históricas profundas, evoluindo ao longo dos séculos. Seu estudo nos ajuda a entender não apenas as regras gramaticais, mas também a riqueza cultural do português."
            ],
            historia: [
                "No contexto histórico, esse evento ou período foi crucial para moldar a sociedade como a conhecemos hoje. Seu estudo nos permite entender as causas e consequências de mudanças sociais, políticas e econômicas.",
                "Analisar esse aspecto histórico nos dá perspectiva sobre como as civilizações se desenvolveram e como os eventos do passado continuam a influenciar o presente. A história é um ciclo de aprendizados e repetições."
            ],
            geral: [
                "Este tópico é interdisciplinar e pode ser aplicado em diversas áreas do conhecimento. Sua compreensão amplia nossa visão de mundo e capacidade de resolver problemas complexos.",
                "O estudo aprofundado desse assunto desenvolve habilidades cognitivas importantes como análise crítica, resolução de problemas e pensamento sistêmico. Essas habilidades são valiosas em qualquer área de atuação."
            ]
        };
        
        const lista = paragrafos[materia] || paragrafos.geral;
        return lista[Math.floor(Math.random() * lista.length)];
    }
    
    function gerarPerguntaAleatoria(materia) {
        const perguntas = {
            matematica: [
                "Resolva a equação relacionada a este conceito para x = 3.",
                "Aplique este teorema para calcular a área da figura dada.",
                "Demonstre como este princípio pode ser usado para resolver o problema apresentado."
            ],
            ciencias: [
                "Descreva um experimento que comprove este fenômeno científico.",
                "Qual a relação entre este conceito e o meio ambiente?",
                "Explique como este princípio se manifesta no corpo humano."
            ],
            portugues: [
                "Analise o uso deste recurso linguístico no texto fornecido.",
                "Reescreva a frase corrigindo o erro relacionado a este tópico.",
                "Identifique nos textos de apoio exemplos dessa estrutura gramatical."
            ],
            historia: [
                "Compare como esse evento ocorreu em duas regiões diferentes.",
                "Quais foram as consequências econômicas desse período histórico?",
                "Relacione este fato histórico com eventos contemporâneos."
            ],
            geral: [
                "Pesquise e apresente um caso real que ilustre este conceito.",
                "Debata com seus colegas as diferentes perspectivas sobre este tema.",
                "Crie uma analogia que explique este conceito para alguém mais novo."
            ]
        };
        
        const lista = perguntas[materia] || perguntas.geral;
        return lista[Math.floor(Math.random() * lista.length)];
    }
    
    function gerarTituloLivroAleatorio(materia) {
        const livros = {
            matematica: [
                "Cálculo Avançado e Aplicações",
                "Álgebra Linear Moderna",
                "Geometria Euclidiana e Além"
            ],
            ciencias: [
                "Princípios da Física Quântica",
                "Biologia Celular e Molecular",
                "Química dos Materiais"
            ],
            portugues: [
                "Gramática Normativa da Língua Portuguesa",
                "Literatura Brasileira Contemporânea",
                "Redação Científica e Acadêmica"
            ],
            historia: [
                "Brasil: Uma Biografia",
                "Guerras Mundiais e Seus Impactos",
                "Geopolítica no Século XXI"
            ],
            geral: [
                "Fundamentos do Conhecimento Científico",
                "Métodos de Estudo Eficazes",
                "Pensamento Crítico e Resolução de Problemas"
            ]
        };
        
        const lista = livros[materia] || livros.geral;
        return lista[Math.floor(Math.random() * lista.length)];
    }
    
    function gerarDicaAleatoria(materia) {
        const dicas = {
            matematica: "Pratique resolvendo problemas variados para solidificar seu entendimento dos conceitos matemáticos.",
            ciencias: "Experimente relacionar os conceitos científicos com fenômenos do cotidiano para melhor compreensão.",
            portugues: "Leia diversos gêneros textuais para expandir seu vocabulário e compreensão da língua.",
            historia: "Crie linhas do tempo visuais para ajudar a contextualizar os eventos históricos.",
            geral: "Faça resumos com suas próprias palavras para testar seu entendimento do conteúdo."
        };
        
        return dicas[materia] || dicas.geral;
    }
    
    // Event listeners
    searchBtn.addEventListener('click', function() {
        const topic = searchInput.value.trim();
        if (topic) {
            gerarAula(topic);
        } else {
            alert('Por favor, digite um tópico para pesquisar.');
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const topic = searchInput.value.trim();
            if (topic) {
                gerarAula(topic);
            }
        }
    });
    
    materiaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const materia = this.getAttribute('data-materia');
            const topic = prompt(`Digite o tópico de ${materia} que deseja estudar:`);
            if (topic) {
                gerarAula(topic, materia);
            }
        });
    });
    
    printBtn.addEventListener('click', function() {
        window.print();
    });
    
    // Formulário de contato
    const contatoForm = document.getElementById('contato-form');
    
    contatoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        // Simular envio
        alert(`Obrigado, ${nome}! Sua mensagem foi recebida. Entraremos em contato pelo e-mail ${email} em breve.`);
        contatoForm.reset();
    });
    
    // Efeito de digitação no hero (opcional)
    const heroTitle = document.querySelector('.hero-content h1');
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 100);
});
