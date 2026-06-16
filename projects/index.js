// ─── DATA ───────────────────────────────────────────────
const CORRECT_PASSWORD = "python2024"; // Altere conforme necessário

const PROJECTS = {
    arena: {
        name: "Arena de Monstros",
        diff: "Beginner",
        time: "1h30",
        overview: `
      <p>Um jovem aventureiro entrou em uma arena mágica cheia de criaturas perigosas. Seu objetivo é criar um sistema de batalha onde o jogador enfrente monstros e tente sobreviver até derrotar todos os inimigos.</p>
      <p>O projeto deve utilizar apenas Python e os conceitos aprendidos durante o curso. A criatividade é incentivada, então você pode criar seus próprios monstros, habilidades e itens.</p>
    `,
        requirements: [
            { title: "Escolha de personagem", desc: "Permita que o jogador informe seu nome e inicie a aventura." },
            { title: "Sistema de vida", desc: "Jogador e monstros devem possuir pontos de vida." },
            { title: "Ataque", desc: "O jogador deve poder atacar o inimigo." },
            { title: "Turnos", desc: "Após cada ação do jogador, o inimigo também deve agir." },
            { title: "Vitória e derrota", desc: "O jogo deve terminar quando alguém ficar sem vida." }
        ],
        rules: [
            { label: "Tema livre", text: "Você pode criar qualquer tipo de personagem ou monstro." },
            { label: "Terminal", text: "Todo o projeto deve funcionar pelo terminal." }
        ],
        criteria: [
            { icon: "✅", color: "green", text: "Sistema de batalha funcionando corretamente." },
            { icon: "✅", color: "green", text: "Uso adequado de funções." },
            { icon: "🌟", color: "yellow", text: "Bônus por habilidades especiais, poções ou múltiplos monstros." }
        ],
        assets: [
            {
                icon: "📄",
                name: "Funções em Python",
                type: "Documentação Oficial",
                url: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions"
            },
            {
                icon: "📄",
                name: "Dicionários em Python",
                type: "Documentação Oficial",
                url: "https://docs.python.org/3/tutorial/datastructures.html#dictionaries"
            },
            {
                icon: "📄",
                name: "Estrutura while em Python",
                type: "Documentação Oficial",
                url: "https://docs.python.org/3/reference/compound_stmts.html#the-while-statement"
            },
            {
                icon: "📚",
                name: "Dicionários em Python",
                type: "Tutorial",
                url: "https://realpython.com/python-dicts/"
            }
        ],
        hints: [
            { title: "⚔️ Organize em funções", text: "Considere criar funções separadas para atacar, mostrar status e verificar vitória." }
        ],
        faq: [
            { q: "Posso criar mais de um monstro?", a: "Sim, isso contará como um diferencial." },
            { q: "Posso adicionar itens?", a: "Sim, itens e habilidades extras podem render pontos bônus." }
        ]
    },

    quiz: {
        name: "Quiz Personalizado",
        diff: "Beginner",
        time: "1h30",
        overview: `
      <p>Você foi contratado para desenvolver um sistema de quiz interativo. O objetivo é criar um jogo de perguntas e respostas sobre um tema de sua escolha.</p>
      <p>O jogador deverá responder às perguntas, acumular pontos e receber um resultado ao final da partida.</p>
    `,
        requirements: [
            { title: "Tema definido", desc: "O quiz deve possuir um tema escolhido pelo aluno." },
            { title: "Perguntas armazenadas", desc: "As perguntas devem ser armazenadas em listas ou dicionários." },
            { title: "Sistema de respostas", desc: "O jogador deve poder responder às perguntas." },
            { title: "Pontuação", desc: "O sistema deve contabilizar acertos." },
            { title: "Resultado final", desc: "Ao final da partida, o jogador deve visualizar sua pontuação." }
        ],
        rules: [
            { label: "Mínimo de perguntas", text: "O quiz deve possuir pelo menos 5 perguntas." },
            { label: "Tema livre", text: "O tema pode ser qualquer assunto apropriado." }
        ],
        criteria: [
            { icon: "✅", color: "green", text: "Perguntas funcionando corretamente." },
            { icon: "✅", color: "green", text: "Pontuação calculada corretamente." },
            { icon: "✅", color: "green", text: "Uso adequado de listas ou dicionários." },
            { icon: "🌟", color: "yellow", text: "Bônus por ranking, categorias ou sorteio de perguntas." }
        ],
        assets: [
            {
                icon: "📄",
                name: "Listas em Python",
                type: "Documentação Oficial",
                url: "https://docs.python.org/3/tutorial/datastructures.html"
            },
            {
                icon: "📄",
                name: "Dicionários em Python",
                type: "Documentação Oficial",
                url: "https://docs.python.org/3/tutorial/datastructures.html#dictionaries"
            },
            {
                icon: "📄",
                name: "Inputs e Output em Python",
                type: "Documentação Oficial",
                url: "https://docs.python.org/3/tutorial/inputoutput.html"
            },
            {
                icon: "📚",
                name: "W3Schools — Python Lists",
                type: "Tutorial",
                url: "https://www.w3schools.com/python/python_lists.asp"
            }
        ],
        hints: [
            { title: "📝 Organize seus dados", text: "Utilize listas ou dicionários para armazenar perguntas e respostas." }
        ],
        faq: [
            { q: "Posso criar mais de um tema?", a: "Sim, mas não é obrigatório." },
            { q: "Posso adicionar níveis de dificuldade?", a: "Sim, isso pode contar como funcionalidade extra." }
        ]
    },

    sorte: {
        name: "Mestre da Sorte",
        diff: "Beginner",
        time: "1h30",
        overview: `
      <p>Crie um jogo onde o computador escolhe secretamente um número e o jogador deve descobrir qual é esse número.</p>
      <p>Durante a partida, o sistema deve fornecer dicas para ajudar o jogador a encontrar a resposta correta.</p>
    `,
        requirements: [
            { title: "Número secreto", desc: "O sistema deve gerar um número aleatório." },
            { title: "Tentativas", desc: "O jogador deve poder realizar tentativas." },
            { title: "Dicas", desc: "O sistema deve informar se o número correto é maior ou menor." },
            { title: "Contador", desc: "As tentativas devem ser contabilizadas." },
            { title: "Vitória", desc: "O jogo deve informar quando o jogador acertar." }
        ],
        rules: [
            { label: "Faixa numérica", text: "Utilize números entre 1 e 100." },
            { label: "Dicas obrigatórias", text: "O sistema deve informar se o chute foi maior ou menor." }
        ],
        criteria: [
            { icon: "✅", color: "green", text: "Número aleatório funcionando corretamente." },
            { icon: "✅", color: "green", text: "Sistema de dicas funcionando." },
            { icon: "✅", color: "green", text: "Contagem de tentativas correta." },
            { icon: "🌟", color: "yellow", text: "Bônus por dificuldade ou pontuação." }
        ],
        assets: [
            {
                icon: "🎲",
                name: "Python docs — random module",
                type: "Official Documentation",
                url: "https://docs.python.org/3/library/random.html"
            },
            {
                icon: "📄",
                name: "Python docs — while statements",
                type: "Official Documentation",
                url: "https://docs.python.org/3/reference/compound_stmts.html#the-while-statement"
            },
            {
                icon: "📄",
                name: "Python docs — if statement",
                type: "Official Documentation",
                url: "https://docs.python.org/3/tutorial/controlflow.html#if-statements"
            },
            {
                icon: "📚",
                name: "W3Schools — Python Random",
                type: "Tutorial",
                url: "https://www.w3schools.com/python/module_random.asp"
            }
        ],
        hints: [
            { title: "🎲 Pesquise sobre números aleatórios", text: "Você precisará que o computador escolha um valor sem que o jogador saiba. O módulo `random` do Python vai ajudar." }
        ],
        faq: [
            { q: "Posso criar vários níveis?", a: "Sim, isso pode render pontos extras." }
        ]
    },

    corrida: {
        name: "Corrida Maluca",
        diff: "Beginner",
        time: "1h30",
        overview: `
      <p>Crie uma corrida simulada onde vários competidores disputam quem chega primeiro à linha de chegada.</p>
      <p>O tema é livre: carros, animais, personagens, foguetes ou qualquer ideia criativa.</p>
    `,
        requirements: [
            { title: "Competidores", desc: "O sistema deve possuir pelo menos 3 competidores." },
            { title: "Movimentação", desc: "Os competidores devem avançar durante a corrida." },
            { title: "Visualização", desc: "O progresso da corrida deve ser exibido no terminal." },
            { title: "Vencedor", desc: "O sistema deve declarar quem venceu." },
            { title: "Execução automática", desc: "A corrida deve acontecer sem intervenção constante do usuário." }
        ],
        rules: [
            { label: "Mínimo de competidores", text: "A corrida deve ter pelo menos três participantes." },
            { label: "Tema livre", text: "Escolha qualquer tema para representar os corredores." }
        ],
        criteria: [
            { icon: "✅", color: "green", text: "Movimentação dos competidores funcionando." },
            { icon: "✅", color: "green", text: "Exibição visual da corrida." },
            { icon: "✅", color: "green", text: "Identificação correta do vencedor." },
            { icon: "🌟", color: "yellow", text: "Bônus por ranking completo ou múltiplas pistas." }
        ],
        assets: [
            {
                icon: "🎲",
                name: "Módulo 'random' no Python",
                type: "Documentação Oficial",
                url: "https://docs.python.org/3/library/random.html"
            },
            {
                icon: "📄",
                name: "Listas em Python",
                type: "Documentação Oficial",
                url: "https://docs.python.org/3/tutorial/datastructures.html"
            },
            {
                icon: "📄",
                name: "Laços 'for' em Python",
                type: "Documentação Oficial",
                url: "https://docs.python.org/3/tutorial/controlflow.html#for-statements"
            },
            {
                icon: "📚",
                name: "Laços 'for' em Python",
                type: "Tutorial",
                url: "https://realpython.com/python-for-loop/"
            }
        ],
        hints: [
            { title: "🏁 Pense em posições", text: "Cada competidor pode possuir uma posição que aumenta aleatoriamente durante a corrida (ex: em um dicionário)." }
        ],
        faq: [
            { q: "Posso usar personagens famosos?", a: "Sim, desde que mantenha um ambiente apropriado." }
        ]
    },

    aventura: {
        name: "Aventura Interativa",
        diff: "Beginner",
        time: "1h30",
        overview: `
      <p>Crie uma história interativa onde o jogador toma decisões que alteram os acontecimentos da aventura.</p>
      <p>Cada escolha deve levar a consequências diferentes e resultar em finais distintos.</p>
    `,
        requirements: [
            { title: "História principal", desc: "A aventura deve possuir um contexto inicial." },
            { title: "Escolhas", desc: "O jogador deve tomar decisões durante a jornada." },
            { title: "Múltiplos caminhos", desc: "As escolhas devem gerar resultados diferentes." },
            { title: "Múltiplos finais", desc: "A aventura deve possuir pelo menos 3 finais possíveis." },
            { title: "Interação", desc: "O jogador deve participar ativamente da narrativa." }
        ],
        rules: [
            { label: "Mínimo de finais", text: "O projeto deve possuir pelo menos três finais diferentes." },
            { label: "Tema livre", text: "Fantasia, ficção científica, mistério ou qualquer outro tema." }
        ],
        criteria: [
            { icon: "✅", color: "green", text: "Escolhas funcionando corretamente." },
            { icon: "✅", color: "green", text: "Múltiplos finais implementados." },
            { icon: "✅", color: "green", text: "Boa organização da lógica." },
            { icon: "🌟", color: "yellow", text: "Bônus por inventário, pontuação ou mais caminhos." }
        ],
        assets: [
            {
                icon: "📄",
                name: "Ifs e Elses",
                type: "Documentação Oficial",
                url: "https://docs.python.org/3/tutorial/controlflow.html#if-statements"
            },
            {
                icon: "📄",
                name: "Funções em Python",
                type: "Documentação Oficial",
                url: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions"
            },
            {
                icon: "📄",
                name: "Dicionários em Python",
                type: "Documentação Oficial",
                url: "https://docs.python.org/3/tutorial/datastructures.html#dictionaries"
            },
            {
                icon: "📚",
                name: "Ifs e Elses em Python",
                type: "Tutorial",
                url: "https://realpython.com/python-conditional-statements/"
            }
        ],
        hints: [
            { title: "📖 Planeje antes", text: "Faça um pequeno diagrama ou rascunho das possíveis escolhas antes de programar." }
        ],
        faq: [
            { q: "Posso criar mais de três finais?", a: "Sim, isso será considerado um diferencial." }
        ]
    },

    calculadora: {
        name: "Calculadora Turbo",
        diff: "Beginner",
        time: "1h30",
        overview: `
      <p>Desenvolva uma calculadora interativa capaz de realizar operações matemáticas básicas através de um menu.</p>
      <p>O usuário deve conseguir escolher operações e realizar cálculos até decidir encerrar o programa.</p>
    `,
        requirements: [
            { title: "Menu principal", desc: "O usuário deve escolher qual operação deseja realizar." },
            { title: "Soma", desc: "Implementar operação de adição." },
            { title: "Subtração", desc: "Implementar operação de subtração." },
            { title: "Multiplicação", desc: "Implementar operação de multiplicação." },
            { title: "Divisão", desc: "Implementar operação de divisão." }
        ],
        rules: [
            { label: "Divisão por zero", text: "O programa deve evitar erros ao dividir por zero." },
            { label: "Menu contínuo", text: "O usuário deve poder realizar vários cálculos sem reiniciar o programa." }
        ],
        criteria: [
            { icon: "✅", color: "green", text: "Operações funcionando corretamente." },
            { icon: "✅", color: "green", text: "Uso adequado de funções." },
            { icon: "✅", color: "green", text: "Menu interativo funcional." },
            { icon: "🌟", color: "yellow", text: "Bônus por histórico ou operações extras." }
        ],
        assets: [
            {
                icon: "📄",
                name: "Tipos numéricos",
                type: "Documentação Oficial",
                url: "https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex"
            },
            {
                icon: "📄",
                name: "Funções",
                type: "Documentação Oficial",
                url: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions"
            },
            {
                icon: "📄",
                name: "Tratamento de exceções",
                type: "Documentação Oficial",
                url: "https://docs.python.org/3/tutorial/errors.html"
            },
            {
                icon: "📚",
                name: "Funções em Python",
                type: "Tutoriais",
                url: "https://www.w3schools.com/python/python_functions.asp"
            }
        ],
        hints: [
            { title: "➗ Uma função para cada operação", text: "Considere criar funções separadas para cada cálculo para manter o código limpo." }
        ],
        faq: [
            { q: "Posso adicionar novas operações?", a: "Sim, operações extras (como exponenciação) podem render pontos adicionais." },
            { q: "Preciso armazenar histórico?", a: "Não é obrigatório, mas conta como diferencial." }
        ]
    }
};

// ─── STATE ───────────────────────────────────────────────
let pendingProject = null;
let activeProject = null;

// ─── SCREEN SWITCH ───────────────────────────────────────
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// ─── LOGIN ───────────────────────────────────────────────
document.getElementById('login-btn').addEventListener('click', attemptLogin);
document.getElementById('pwd-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') attemptLogin();
});

function attemptLogin() {
    const val = document.getElementById('pwd-input').value.trim();
    const errMsg = document.getElementById('login-error');
    const inp = document.getElementById('pwd-input');

    if (val === CORRECT_PASSWORD) {
        errMsg.classList.remove('visible');
        inp.classList.remove('error');
        showScreen('screen-projects');
    } else {
        errMsg.classList.remove('visible');
        void errMsg.offsetHeight;
        errMsg.classList.add('visible');
        inp.classList.add('error');
        inp.value = '';
        inp.focus();
    }
}

// ─── PROJECT SELECTION ────────────────────────────────────
function selectProject(key) {
    pendingProject = key;
    const proj = PROJECTS[key];
    document.getElementById('modal-proj-name').textContent = proj.name;
    document.getElementById('modal-overlay').classList.add('open');
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
    pendingProject = null;
}

function confirmProject() {
    activeProject = pendingProject;
    closeModal();
    loadDocs(activeProject);
    showScreen('screen-docs');
    window.scrollTo(0, 0);
}

document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
});

// ─── DOCS ────────────────────────────────────────────────
function loadDocs(key) {
    const proj = PROJECTS[key];

    document.getElementById('breadcrumb-title').textContent = proj.name;
    document.getElementById('sidebar-title').textContent = proj.name;
    document.getElementById('sidebar-diff').textContent = proj.diff;
    document.getElementById('sidebar-time').textContent = proj.time;

    document.getElementById('proj-overview').innerHTML = proj.overview;

    const reqEl = document.getElementById('proj-requirements');
    reqEl.innerHTML = proj.requirements.map((r, i) => `
    <div class="req-item">
      <div class="req-num">${i + 1}</div>
      <div class="docs-prose">
        <p><strong>${r.title}.</strong> ${r.desc}</p>
      </div>
    </div>
  `).join('');

    const rulesEl = document.getElementById('proj-rules');
    rulesEl.innerHTML = proj.rules.map(r => `
    <div class="rule-card">
      <div class="rule-label">${r.label}</div>
      <p>${r.text}</p>
    </div>
  `).join('');

    const critEl = document.getElementById('proj-criteria');
    critEl.innerHTML = proj.criteria.map(c => `
    <div class="crit-card">
      <div class="crit-check ${c.color}">${c.icon}</div>
      <p>${c.text}</p>
    </div>
  `).join('');

    const assetsEl = document.getElementById('proj-assets');
    if (proj.assets && proj.assets.length > 0) {
        assetsEl.innerHTML = proj.assets.map(a => `
        <a class="asset-card" href="${a.url}" target="_blank" rel="noopener">
          <div class="asset-icon">${a.icon}</div>
          <div class="asset-info">
            <div class="name">${a.name}</div>
            <div class="type">${a.type}</div>
          </div>
        </a>
      `).join('');
    } else {
        assetsEl.innerHTML = "<p style='color: var(--text-muted); font-size: 0.88rem;'>Nenhum link ou asset adicional necessário para este projeto.</p>";
    }

    const hintsEl = document.getElementById('proj-hints');
    hintsEl.innerHTML = proj.hints.map(h => `
    <div class="hint-card">
      <div class="hint-hd">${h.title}</div>
      <p>${h.text}</p>
    </div>
  `).join('');

    const faqEl = document.getElementById('proj-faq');
    faqEl.innerHTML = proj.faq.map(f => `
    <details class="faq-item">
      <summary>${f.q}</summary>
      <div class="faq-body">${f.a}</div>
    </details>
  `).join('');

    document.getElementById('submit-success').classList.remove('visible');
    document.getElementById('sub-github').value = '';
    document.getElementById('sub-notes').value = '';
}

function backToProjects() {
    showScreen('screen-projects');
    window.scrollTo(0, 0);
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 64 + 52 + 16;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });

    document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
    event.target.classList.add('active');
}

// Active sidebar nav on scroll
const sectionIds = ['s-overview', 's-requirements', 's-rules', 's-criteria', 's-assets', 's-hints', 's-faq', 's-submit'];
const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

window.addEventListener('scroll', () => {
    const offset = 64 + 52 + 24;
    let current = sectionIds[0];
    sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < offset + 60) current = id;
    });
    sidebarLinks.forEach((a, i) => {
        a.classList.toggle('active', sectionIds[i] === current);
    });
}, { passive: true });

// ─── SUBMISSION ──────────────────────────────────────────
function submitProject() {
    const github = document.getElementById('sub-github').value.trim();
    if (!github) {
        document.getElementById('sub-github').focus();
        document.getElementById('sub-github').style.borderColor = '#e05252';
        setTimeout(() => document.getElementById('sub-github').style.borderColor = '', 2000);
        return;
    }
    document.getElementById('submit-success').classList.add('visible');
    document.getElementById('submit-success').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}