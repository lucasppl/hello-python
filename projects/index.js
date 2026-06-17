// ─── DATA ───────────────────────────────────────────────
const CORRECT_PASSWORD = "python2024"; // Altere conforme necessário

const PROJECTS = {
    arena: {
        name: "Arena de Monstros",
        diff: "Básico",
        time: "1h30",
        overview: `
      <p>Imagine que você é um jovem guerreiro que entrou em uma arena cheia de monstros. A plateia está na expectativa. O primeiro monstro aparece. E agora? <strong>É hora de lutar.</strong></p>
      <p>Neste projeto, você vai criar um <strong>jogo de batalha no terminal</strong>. O jogador vai enfrentar monstros um a um, atacando e recebendo danos até que alguém seja derrotado. É um jogo de turno — primeiro o jogador age, depois o monstro age.</p>
      <p>A criatividade é totalmente sua: escolha os nomes dos monstros, os ataques, o personagem. O importante é que a mecânica funcione.</p>
    `,
        expected: `
      <p>Quando o programa iniciar, o jogador será recebido com uma mensagem de boas-vindas e poderá informar o nome do seu personagem. Em seguida, um monstro aparece na arena e o combate começa.</p>
      <p>A cada turno, o jogador vê o status atual (sua vida e a do monstro) e escolhe uma ação — por exemplo, atacar. O sistema calcula o dano, aplica ao monstro, e então é a vez do monstro atacar de volta.</p>
      <p>Isso se repete até que alguém fique sem vida. Se o jogador vencer, o programa comemora a vitória. Se perder, encerra com uma mensagem de derrota.</p>
      <p><strong>Ao final da execução, o jogador deve saber claramente se ganhou ou perdeu.</strong></p>
    `,
        flow: [
            "O jogador informa o nome do seu personagem.",
            "O sistema cria o personagem com pontos de vida.",
            "Um monstro aparece com seu próprio nome e vida.",
            "O sistema exibe o status atual (vida do jogador e do monstro).",
            "O jogador escolhe uma ação (ex: atacar).",
            "O dano é calculado e aplicado ao monstro.",
            "O monstro contra-ataca — o dano é calculado e aplicado ao jogador.",
            "O sistema verifica se alguém ficou sem vida.",
            "Se alguém morreu: exibe vitória ou derrota e encerra.",
            "Se ninguém morreu: volta ao passo 4 e o turno recomeça."
        ],
        concepts: [
            { name: "Variáveis", why: "Para guardar a vida do jogador, do monstro, o nome do personagem, etc." },
            { name: "input()", why: "Para receber o nome do jogador e as escolhas de ação durante o jogo." },
            { name: "print()", why: "Para mostrar o status do combate, mensagens de ataque e resultado final." },
            { name: "if / else", why: "Para verificar se alguém morreu, se o ataque acertou, qual ação foi escolhida." },
            { name: "while", why: "Para manter o loop de combate ativo enquanto os dois personagens ainda tiverem vida." },
            { name: "Funções", why: "Para organizar o código em partes menores: uma função para atacar, outra para mostrar status, etc." },
            { name: "Dicionários", why: "Para representar o jogador e o monstro com seus atributos (nome, vida, ataque)." },
            { name: "random", why: "Para gerar danos variáveis a cada ataque, tornando o jogo mais imprevisível." }
        ],
        tools: [
            {
                label: "random.randint(a, b)",
                example: "import random\ndano = random.randint(5, 15)\nprint(f\"Você causou {dano} de dano!\")",
                desc: "Gera um número inteiro aleatório entre <code>a</code> e <code>b</code>. Ideal para simular danos variáveis nos ataques — em vez de sempre causar 10 de dano, você pode causar entre 5 e 15."
            },
            {
                label: "input() e int()",
                example: "opcao = input(\"Escolha: (1) Atacar  (2) Fugir\\n> \")",
                desc: "Recebe a escolha do jogador durante o jogo. Lembre-se: tudo que vem do <code>input()</code> é texto. Se precisar comparar com número, converta com <code>int()</code>."
            },
            {
                label: "f-strings",
                example: "vida = 80\nprint(f\"Sua vida: {vida} HP\")",
                desc: "Permitem montar mensagens com variáveis de forma simples. Muito útil para exibir o status de combate a cada turno."
            }
        ],
        modules: [
            {
                name: "random",
                importLine: "import random",
                functions: [
                    { sig: "random.randint(1, 20)", desc: "Retorna um número inteiro aleatório entre 1 e 20. Use para simular danos de ataque." },
                    { sig: "random.choice(lista)", desc: "Escolhe um elemento aleatório de uma lista. Útil para sortear qual monstro aparece." }
                ]
            }
        ],
        mandatory: [
            "O jogador deve conseguir informar o nome do seu personagem antes de começar.",
            "O jogador e o monstro devem ter pontos de vida visíveis a cada turno.",
            "O jogador deve conseguir atacar o monstro como ação durante o combate.",
            "Após cada ação do jogador, o monstro deve atacar de volta automaticamente.",
            "O jogo deve encerrar e informar vitória ou derrota quando alguém ficar sem vida."
        ],
        optional: [
            "Adicionar mais de um monstro para o jogador enfrentar em sequência.",
            "Criar uma opção de fugir do combate.",
            "Adicionar poções de vida que o jogador pode usar no lugar de atacar.",
            "Exibir uma barra visual de vida (ex: ████░░░░) em vez de só números."
        ],
        bonus: [
            "Sistema de inventário com itens que o jogador pode comprar ou encontrar.",
            "Habilidades especiais com custo de mana ou cooldown de turnos.",
            "Múltiplos tipos de ataque com efeitos diferentes (normal, crítico, veneno).",
            "Placar de vitórias ao final de múltiplas batalhas.",
            "Arte ASCII para os monstros ou para a arena."
        ],
        evaluation: [
            { label: "Funcionalidades obrigatórias", pts: 4, desc: "Todos os 5 requisitos obrigatórios implementados e funcionando." },
            { label: "Lógica do programa", pts: 2, desc: "O fluxo faz sentido: turnos, verificação de vida, condições de vitória." },
            { label: "Organização do código", pts: 2, desc: "Código limpo, com funções separadas e sem repetição excessiva." },
            { label: "Uso de funções", pts: 1, desc: "Pelo menos 2 funções criadas para organizar o projeto." },
            { label: "Criatividade e extras", pts: 1, desc: "Bônus, personalização ou melhorias que enriquecem a experiência." }
        ],
        structure: {
            variables: ["vida_jogador", "vida_monstro", "nome_jogador", "nome_monstro", "turno"],
            dicts: ["jogador = { 'nome': ..., 'vida': ..., 'ataque': ... }", "monstro = { 'nome': ..., 'vida': ..., 'ataque': ... }"],
            functions: ["criar_personagem()", "criar_monstro()", "atacar(atacante, defensor)", "mostrar_status(jogador, monstro)", "verificar_fim_de_jogo(jogador, monstro)", "iniciar_jogo()"]
        },
        mistakes: [
            "Esquecer de diminuir a vida depois de calcular o dano — o valor é calculado mas nunca atualizado.",
            "Criar um loop infinito porque a condição de parada nunca se torna verdadeira.",
            "Não validar a entrada do usuário — o que acontece se ele digitar uma letra em vez de um número?",
            "Deixar todo o código no escopo principal sem usar funções — fica difícil de entender e corrigir.",
            "Esquecer de retornar o valor dentro de uma função (usar print sem return quando deveria usar return)."
        ],
        faq: [
            { q: "Posso criar mais de um monstro?", a: "Sim! Isso conta como melhoria opcional e pode te dar pontos a mais. Você pode criar uma lista de monstros e enfrentá-los em sequência." },
            { q: "Preciso usar dicionários obrigatoriamente?", a: "Não é obrigatório, mas é altamente recomendado. Dicionários deixam o código muito mais organizado para representar personagens com vários atributos." },
            { q: "Posso criar um tema diferente (ex: espaço, fantasia medieval, super-heróis)?", a: "Totalmente! O tema é livre. O que importa é que a mecânica de batalha funcione corretamente." },
            { q: "E se meu personagem puder ter atributos como força, defesa, etc.?", a: "Ótima ideia! Isso é uma funcionalidade bônus e pode enriquecer bastante o seu projeto." }
        ],
        assets: [
            { icon: "📗", name: "W3Schools — Python While Loops", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_while_loops.asp" },
            { icon: "📗", name: "W3Schools — Python Dictionaries", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_dictionaries.asp" },
            { icon: "📗", name: "W3Schools — Python Functions", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_functions.asp" },
            { icon: "📗", name: "W3Schools — Python Random Module", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/module_random.asp" }
        ]
    },

    quiz: {
        name: "Quiz Personalizado",
        diff: "Básico",
        time: "1h30",
        overview: `
      <p>Você já participou de um quiz de perguntas e respostas? Aqui você vai <strong>construir o seu próprio</strong>.</p>
      <p>O projeto é um jogo interativo no terminal: o programa faz perguntas sobre um tema escolhido por você, o jogador responde, e no final recebe sua pontuação. O tema é completamente livre — pode ser futebol, séries, música, ciências, história, o que você quiser.</p>
      <p>O desafio é organizar as perguntas de forma inteligente e criar uma experiência agradável para quem jogar.</p>
    `,
        expected: `
      <p>Ao iniciar o programa, o jogador vê o nome do quiz e o tema. Em seguida, as perguntas aparecem uma por uma com as opções de resposta numeradas. O jogador digita o número da sua escolha.</p>
      <p>Para cada resposta, o programa informa se estava certa ou errada. Ao final, o jogador vê a pontuação total (ex: "Você acertou 4 de 5 perguntas!") e uma mensagem baseada no desempenho.</p>
      <p><strong>O jogador deve saber claramente quantas perguntas acertou e errou.</strong></p>
    `,
        flow: [
            "O programa exibe o título e o tema do quiz.",
            "O jogador pressiona Enter para começar.",
            "A primeira pergunta é exibida com as opções de resposta.",
            "O jogador digita o número da sua resposta.",
            "O sistema verifica se a resposta está correta e informa o jogador.",
            "A próxima pergunta é exibida.",
            "Os passos 4 a 6 se repetem até que todas as perguntas sejam respondidas.",
            "O programa exibe a pontuação final (acertos e total).",
            "Uma mensagem personalizada baseada no desempenho é exibida."
        ],
        concepts: [
            { name: "Variáveis", why: "Para armazenar a pontuação atual, o número da pergunta, a resposta do usuário." },
            { name: "input()", why: "Para receber a resposta do jogador em cada pergunta." },
            { name: "print()", why: "Para exibir perguntas, opções, feedback de certo/errado e a pontuação final." },
            { name: "if / else", why: "Para verificar se a resposta do usuário é igual à resposta correta." },
            { name: "for", why: "Para percorrer a lista de perguntas automaticamente, uma por uma." },
            { name: "Listas", why: "Para guardar as perguntas e as opções de resposta." },
            { name: "Dicionários", why: "Para representar cada pergunta com seu texto, opções e resposta correta." },
            { name: "Funções", why: "Para organizar o código: uma função para fazer a pergunta, outra para calcular o resultado." }
        ],
        tools: [
            {
                label: "Dicionário para representar uma pergunta",
                example: "pergunta = {\n    'texto': 'Qual é a capital do Brasil?',\n    'opcoes': ['São Paulo', 'Brasília', 'Rio de Janeiro'],\n    'correta': 'Brasília'\n}",
                desc: "Cada pergunta pode ser representada como um dicionário com três chaves: o enunciado, as opções de resposta e a resposta correta. Isso facilita muito o acesso às informações."
            },
            {
                label: "Lista de dicionários",
                example: "perguntas = [\n    { 'texto': '...', 'opcoes': [...], 'correta': '...' },\n    { 'texto': '...', 'opcoes': [...], 'correta': '...' }\n]",
                desc: "Você pode criar uma lista onde cada item é um dicionário representando uma pergunta. Depois, basta percorrer essa lista com um <code>for</code>."
            },
            {
                label: "enumerate(lista)",
                example: "for i, opcao in enumerate(pergunta['opcoes'], 1):\n    print(f\"{i}. {opcao}\")",
                desc: "Permite percorrer uma lista e ter acesso ao índice ao mesmo tempo. Ótimo para numerar as opções de resposta automaticamente."
            }
        ],
        modules: [],
        mandatory: [
            "O quiz deve ter um tema definido e apresentado ao jogador no início.",
            "As perguntas devem ser armazenadas em listas ou dicionários (não apenas digitadas manualmente um por um).",
            "O jogador deve conseguir responder a cada pergunta digitando sua escolha.",
            "O sistema deve contabilizar e guardar a quantidade de acertos.",
            "Ao final de todas as perguntas, o jogador deve ver sua pontuação total."
        ],
        optional: [
            "Exibir ao final quantas perguntas o jogador errou e quais eram as respostas certas.",
            "Mostrar uma mensagem diferente dependendo do desempenho (ex: 'Excelente!', 'Pode melhorar!').",
            "Embaralhar a ordem das perguntas a cada partida usando <code>random.shuffle()</code>.",
            "Perguntar se o jogador quer jogar novamente ao final."
        ],
        bonus: [
            "Sistema de ranking que guarda as pontuações de várias partidas.",
            "Categorias de perguntas com temas diferentes.",
            "Cronômetro: o jogador tem um tempo limite para responder cada pergunta.",
            "Multiplicador de pontos: acertos consecutivos valem mais.",
            "Modo difícil com perguntas mais elaboradas."
        ],
        evaluation: [
            { label: "Funcionalidades obrigatórias", pts: 4, desc: "Todos os 5 requisitos obrigatórios implementados e funcionando." },
            { label: "Lógica do programa", pts: 2, desc: "A contagem de acertos funciona corretamente e o fluxo do quiz faz sentido." },
            { label: "Organização do código", pts: 2, desc: "Perguntas organizadas em estrutura de dados adequada, código limpo." },
            { label: "Uso de funções", pts: 1, desc: "Pelo menos 2 funções criadas para organizar o projeto." },
            { label: "Criatividade e extras", pts: 1, desc: "Tema interessante, melhorias opcionais ou bônus implementados." }
        ],
        structure: {
            variables: ["pontuacao", "total_perguntas", "resposta_usuario", "numero_pergunta"],
            dicts: ["pergunta = { 'texto': ..., 'opcoes': [...], 'correta': ... }"],
            functions: ["exibir_pergunta(pergunta, numero)", "verificar_resposta(resposta, correta)", "calcular_resultado(acertos, total)", "iniciar_quiz()"]
        },
        mistakes: [
            "Comparar a resposta do usuário com a resposta correta sem converter para o mesmo tipo (ex: comparar '1' com 1).",
            "Esquecer de incrementar o contador de acertos quando a resposta está certa.",
            "Colocar todas as perguntas no código com if/elif em vez de usar uma lista ou dicionário — funciona, mas fica difícil de organizar e de avaliar.",
            "Não validar se o usuário digitou uma opção válida (ex: digitar '5' quando só existem 3 opções).",
            "Esquecer de mostrar o resultado ao final — o quiz termina sem dar feedback."
        ],
        faq: [
            { q: "Quantas perguntas preciso ter?", a: "O mínimo é 5 perguntas. Mas quanto mais, mais rico fica o quiz! Recomendamos entre 5 e 10." },
            { q: "Posso criar mais de um tema?", a: "Sim! Ter categorias de perguntas diferentes é uma melhoria opcional interessante." },
            { q: "As respostas precisam ser de múltipla escolha?", a: "Não necessariamente. Você pode ter perguntas onde o jogador digita a resposta diretamente, mas múltipla escolha costuma ser mais fácil de implementar e validar." },
            { q: "Posso adicionar um timer?", a: "Sim! Isso conta como funcionalidade bônus e é um excelente desafio adicional." }
        ],
        assets: [
            { icon: "📗", name: "W3Schools — Python Lists", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_lists.asp" },
            { icon: "📗", name: "W3Schools — Python Dictionaries", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_dictionaries.asp" },
            { icon: "📗", name: "W3Schools — Python For Loops", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_for_loops.asp" },
            { icon: "📗", name: "W3Schools — Python Functions", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_functions.asp" }
        ]
    },

    sorte: {
        name: "Mestre da Sorte",
        diff: "Básico",
        time: "1h30",
        overview: `
      <p>O computador pensa em um número. Você tenta adivinhar qual é. A cada tentativa errada, ele te dá uma dica: o número secreto é maior ou menor do que o seu chute?</p>
      <p>Esse é o <strong>Mestre da Sorte</strong> — um jogo clássico de adivinhação que parece simples, mas exige que você organize bem a lógica do programa.</p>
      <p>Você vai aprender como fazer o computador "pensar" em um número aleatório, como receber e validar as tentativas do jogador, e como encerrar o jogo no momento certo.</p>
    `,
        expected: `
      <p>Quando o programa inicia, ele escolhe um número secreto entre 1 e 100 (o jogador não vê esse número). O jogador então começa a tentar adivinhar digitando um número.</p>
      <p>Para cada tentativa, o programa responde com uma das três possibilidades: "O número secreto é MAIOR", "O número secreto é MENOR", ou "Parabéns, você acertou!".</p>
      <p>O programa também conta quantas tentativas o jogador precisou. Ao acertar, exibe uma mensagem de vitória com o número de tentativas. <strong>Quanto menos tentativas, melhor!</strong></p>
    `,
        flow: [
            "O programa gera um número secreto aleatório entre 1 e 100.",
            "O jogador não vê esse número — o desafio começa!",
            "O programa pede que o jogador faça sua primeira tentativa.",
            "O jogador digita um número.",
            "O programa compara o chute com o número secreto.",
            "Se o chute for menor: exibe 'O número é MAIOR. Tente novamente.'",
            "Se o chute for maior: exibe 'O número é MENOR. Tente novamente.'",
            "Os passos 4 a 7 se repetem até o jogador acertar.",
            "Quando o jogador acerta: exibe parabéns e o número de tentativas usadas."
        ],
        concepts: [
            { name: "Variáveis", why: "Para guardar o número secreto, o chute do jogador e o contador de tentativas." },
            { name: "input()", why: "Para receber cada chute do jogador durante o jogo." },
            { name: "int()", why: "Para converter o texto digitado pelo jogador em número para poder comparar." },
            { name: "if / elif / else", why: "Para verificar se o chute é menor, maior ou igual ao número secreto." },
            { name: "while", why: "Para manter o jogo em execução até o jogador acertar o número." },
            { name: "Funções", why: "Para organizar o código: uma função para gerar o número, outra para o loop do jogo." },
            { name: "random", why: "Para que o computador escolha um número diferente a cada partida." }
        ],
        tools: [
            {
                label: "random.randint(1, 100)",
                example: "import random\nnumero_secreto = random.randint(1, 100)\n# O jogador não deve ver esse valor!",
                desc: "Gera um número inteiro aleatório entre 1 e 100. Use logo no início para o computador 'pensar' no número. Nunca mostre esse valor para o jogador."
            },
            {
                label: "int(input())",
                example: "chute = int(input(\"Digite seu número: \"))\nprint(f\"Você chutou: {chute}\")",
                desc: "Recebe um número do jogador. O <code>input()</code> sempre retorna texto, então use <code>int()</code> para converter em número antes de comparar."
            },
            {
                label: "Contador de tentativas",
                example: "tentativas = 0\n# Dentro do loop:\ntentativas += 1  # Incrementa a cada chute",
                desc: "Crie uma variável inicializada com 0 e incremente ela a cada tentativa. Ao final, mostre o valor para o jogador saber quantas tentativas precisou."
            }
        ],
        modules: [
            {
                name: "random",
                importLine: "import random",
                functions: [
                    { sig: "random.randint(1, 100)", desc: "Retorna um número inteiro aleatório entre 1 e 100. É a função principal que você vai usar neste projeto." }
                ]
            }
        ],
        mandatory: [
            "O programa deve gerar um número secreto aleatório entre 1 e 100 ao iniciar.",
            "O jogador deve poder fazer tentativas digitando um número a cada rodada.",
            "O programa deve informar se o número secreto é maior ou menor do que o chute.",
            "O programa deve contar e exibir quantas tentativas o jogador utilizou.",
            "O jogo deve encerrar e comemorar quando o jogador acertar o número."
        ],
        optional: [
            "Limitar o número máximo de tentativas (ex: 10 chances) e encerrar o jogo se esgotar.",
            "Mostrar o número secreto ao final em caso de derrota.",
            "Perguntar se o jogador quer jogar novamente com um novo número.",
            "Validar se o jogador digitou um número válido (e não uma letra)."
        ],
        bonus: [
            "Sistema de dificuldade: Fácil (1 a 50), Médio (1 a 100), Difícil (1 a 200).",
            "Placar de recordes: salvar o menor número de tentativas já registrado.",
            "Dica de temperatura: 'Quente' quando o chute está próximo, 'Frio' quando está longe.",
            "Modo multiplayer: dois jogadores se revezam tentando adivinhar.",
            "Arte ASCII animada para vitória e derrota."
        ],
        evaluation: [
            { label: "Funcionalidades obrigatórias", pts: 4, desc: "Todos os 5 requisitos obrigatórios implementados e funcionando." },
            { label: "Lógica do programa", pts: 2, desc: "O número é gerado corretamente, as dicas são precisas, o jogo encerra no momento certo." },
            { label: "Organização do código", pts: 2, desc: "Código legível, com funções e sem repetição desnecessária." },
            { label: "Uso de funções", pts: 1, desc: "Pelo menos 2 funções criadas para organizar o projeto." },
            { label: "Criatividade e extras", pts: 1, desc: "Melhorias opcionais ou bônus que enriquecem a experiência." }
        ],
        structure: {
            variables: ["numero_secreto", "chute", "tentativas", "jogando"],
            dicts: [],
            functions: ["gerar_numero()", "verificar_chute(chute, secreto)", "jogar()", "mostrar_resultado(tentativas)"]
        },
        mistakes: [
            "Usar = em vez de == na comparação — o = atribui um valor, o == verifica se são iguais.",
            "Esquecer de converter o input para inteiro com int() — isso causa erro ao comparar texto com número.",
            "Criar um loop infinito porque o jogo não termina quando o jogador acerta.",
            "Não incrementar o contador de tentativas dentro do loop.",
            "Gerar um novo número a cada tentativa em vez de uma única vez no início — o número secreto precisa ser sempre o mesmo durante a partida."
        ],
        faq: [
            { q: "Posso usar um intervalo diferente de 1 a 100?", a: "Sim! Você pode usar qualquer intervalo. Intervalos maiores tornam o jogo mais difícil, menores tornam mais fácil." },
            { q: "O que acontece se o usuário digitar uma letra em vez de um número?", a: "O programa vai dar erro. Tratar essa situação (verificar se o input é um número válido) é uma melhoria opcional muito bem-vinda." },
            { q: "Posso criar níveis de dificuldade?", a: "Sim! Isso é uma funcionalidade bônus excelente. Basta usar intervalos diferentes dependendo do nível escolhido." },
            { q: "Preciso usar funções?", a: "Não é obrigatório para aprovação, mas é altamente recomendado. Código com funções é mais organizado e recebe pontuação extra." }
        ],
        assets: [
            { icon: "📗", name: "W3Schools — Python Random Module", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/module_random.asp" },
            { icon: "📗", name: "W3Schools — Python While Loops", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_while_loops.asp" },
            { icon: "📗", name: "W3Schools — Python Conditions", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_conditions.asp" },
            { icon: "📗", name: "W3Schools — Python Variables", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_variables.asp" }
        ]
    },

    corrida: {
        name: "Corrida Maluca",
        diff: "Básico",
        time: "1h30",
        overview: `
      <p>Três competidores entram na pista. A largada é dada. A cada rodada, cada um avança um número aleatório de posições. Quem cruzar a linha de chegada primeiro vence!</p>
      <p>No <strong>Corrida Maluca</strong>, você vai criar uma simulação de corrida completamente automática no terminal. O usuário acompanha a corrida se desenrolando a cada rodada, vê o progresso de cada competidor e descobre quem venceu ao final.</p>
      <p>O tema é livre: pode ser carros, cavalos, animais, foguetes, ou qualquer criatura que você inventar.</p>
    `,
        expected: `
      <p>Ao iniciar o programa, os competidores são apresentados. A corrida começa automaticamente — sem precisar que o usuário pressione algo a cada rodada.</p>
      <p>A cada rodada, o programa exibe a posição atual de cada competidor na pista (pode ser uma barra de progresso com símbolos, ou simplesmente os números de posição). O progresso é exibido repetidamente até que alguém chegue à linha de chegada.</p>
      <p><strong>No final, o programa declara o vencedor com nome e posição.</strong> Se quiser, pode mostrar o ranking completo.</p>
    `,
        flow: [
            "O programa define os competidores com seus nomes e posição inicial (0).",
            "A distância da linha de chegada é definida (ex: 100 posições).",
            "A corrida começa — sem input do usuário.",
            "Em cada rodada, cada competidor avança um número aleatório de posições.",
            "O programa exibe a posição atual de cada competidor.",
            "O sistema verifica se algum competidor chegou ou ultrapassou a linha de chegada.",
            "Se alguém chegou: a corrida termina e o vencedor é declarado.",
            "Se ninguém chegou: nova rodada começa (volta ao passo 4)."
        ],
        concepts: [
            { name: "Variáveis", why: "Para guardar a posição de cada competidor, a linha de chegada e o número da rodada." },
            { name: "Listas", why: "Para armazenar os competidores e suas posições de forma organizada." },
            { name: "Dicionários", why: "Para representar cada competidor com nome e posição em um único objeto." },
            { name: "for", why: "Para percorrer todos os competidores a cada rodada e atualizar suas posições." },
            { name: "while", why: "Para manter a corrida em execução até que alguém chegue à linha de chegada." },
            { name: "if / else", why: "Para verificar se alguém cruzou a linha de chegada." },
            { name: "Funções", why: "Para organizar o código: uma função para avançar, outra para exibir o progresso." },
            { name: "random", why: "Para gerar o avanço aleatório de cada competidor a cada rodada." }
        ],
        tools: [
            {
                label: "random.randint(a, b)",
                example: "import random\navanco = random.randint(1, 10)\nposicao += avanco",
                desc: "Gera um número aleatório para o avanço de cada competidor. Use em cada rodada, para cada participante."
            },
            {
                label: "Barra de progresso com strings",
                example: "pos = 35\nfinish = 100\nbarra = '█' * pos + '░' * (finish - pos)\nprint(f\"Corredor: [{barra}] {pos}/{finish}\")",
                desc: "Uma forma visual de mostrar o progresso. Multiplique um caractere pelo valor da posição para criar uma barra que cresce à medida que o competidor avança."
            },
            {
                label: "Lista de dicionários para competidores",
                example: "competidores = [\n    {'nome': 'Relâmpago', 'posicao': 0},\n    {'nome': 'Trovão', 'posicao': 0},\n    {'nome': 'Vento', 'posicao': 0}\n]",
                desc: "Uma lista onde cada item é um dicionário representando um competidor. Você pode percorrer essa lista com <code>for</code> e atualizar as posições facilmente."
            }
        ],
        modules: [
            {
                name: "random",
                importLine: "import random",
                functions: [
                    { sig: "random.randint(1, 10)", desc: "Retorna um número aleatório entre 1 e 10. Use para determinar o avanço de cada competidor a cada rodada." }
                ]
            },
            {
                name: "time (opcional)",
                importLine: "import time",
                functions: [
                    { sig: "time.sleep(0.5)", desc: "Pausa o programa por 0.5 segundos. Use entre as rodadas para criar uma sensação de corrida em tempo real." }
                ]
            }
        ],
        mandatory: [
            "A corrida deve ter pelo menos 3 competidores com nomes definidos.",
            "Cada competidor deve avançar aleatoriamente a cada rodada.",
            "O progresso da corrida deve ser exibido no terminal a cada rodada.",
            "A corrida deve continuar automaticamente até que alguém chegue à linha de chegada.",
            "O programa deve declarar claramente quem venceu a corrida."
        ],
        optional: [
            "Adicionar uma pausa entre as rodadas usando <code>time.sleep()</code> para criar suspense.",
            "Exibir o ranking completo ao final (1º, 2º, 3º lugar).",
            "Permitir que o usuário escolha os nomes dos competidores antes de começar.",
            "Criar uma barra visual de progresso com caracteres (ex: ████░░░░)."
        ],
        bonus: [
            "Eventos aleatórios: um competidor pode derrapar, ganhar turbo, ou ser multado.",
            "Pista com obstáculos: posições onde o competidor perde turnos.",
            "Modo apostas: o usuário escolhe em quem apostar antes da corrida.",
            "Múltiplas corridas com placar de campeonato.",
            "Arte ASCII para representar os competidores na pista."
        ],
        evaluation: [
            { label: "Funcionalidades obrigatórias", pts: 4, desc: "Todos os 5 requisitos obrigatórios implementados e funcionando." },
            { label: "Lógica do programa", pts: 2, desc: "O avanço funciona corretamente, o loop faz sentido, o vencedor é detectado certo." },
            { label: "Organização do código", pts: 2, desc: "Uso de listas ou dicionários, funções separadas, código legível." },
            { label: "Uso de funções", pts: 1, desc: "Pelo menos 2 funções criadas para organizar o projeto." },
            { label: "Criatividade e extras", pts: 1, desc: "Tema criativo, melhorias opcionais ou bônus implementados." }
        ],
        structure: {
            variables: ["linha_de_chegada", "rodada", "corrida_ativa"],
            dicts: ["{ 'nome': 'Corredor', 'posicao': 0 }"],
            functions: ["criar_competidores()", "avancar(competidor)", "exibir_pista(competidores)", "verificar_vencedor(competidores, meta)", "iniciar_corrida()"]
        },
        mistakes: [
            "Criar variáveis separadas para cada competidor em vez de usar uma lista — funciona para 3, mas seria impraticável para mais.",
            "Verificar o vencedor fora do loop de rodadas, fazendo o programa nunca terminar.",
            "Não exibir o progresso a cada rodada — a corrida acontece mas o usuário não consegue acompanhar.",
            "Esquecer de atualizar a posição do competidor no dicionário/lista antes de verificar o vencedor.",
            "Usar um loop infinito sem condição de saída adequada."
        ],
        faq: [
            { q: "Posso ter mais de 3 competidores?", a: "Sim! Quanto mais, mais divertida a corrida. Mas lembre-se: organize os competidores em uma lista para não precisar de variáveis separadas para cada um." },
            { q: "A corrida precisa ser automática ou o usuário pode pressionar Enter para cada rodada?", a: "O requisito é que seja automática. Mas deixar o usuário pressionar Enter a cada rodada pode ser uma melhoria interessante para criar suspense." },
            { q: "Posso usar personagens famosos como competidores?", a: "Sim, desde que o ambiente seja apropriado. Use com criatividade!" },
            { q: "Preciso mostrar uma barra visual?", a: "Não é obrigatório, mas é uma das melhorias opcionais mais bem recebidas. Dá uma aparência muito mais profissional ao projeto." }
        ],
        assets: [
            { icon: "📗", name: "W3Schools — Python For Loops", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_for_loops.asp" },
            { icon: "📗", name: "W3Schools — Python Lists", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_lists.asp" },
            { icon: "📗", name: "W3Schools — Python Random Module", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/module_random.asp" },
            { icon: "📗", name: "W3Schools — Python While Loops", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_while_loops.asp" }
        ]
    },

    aventura: {
        name: "Aventura Interativa",
        diff: "Básico",
        time: "1h30",
        overview: `
      <p>Você já leu um livro onde as suas escolhas mudam a história? Aquele estilo "Se você entrar pela porta da esquerda, vá para a página 42. Se escolher a direita, vá para a página 78."</p>
      <p>No projeto <strong>Aventura Interativa</strong>, você vai criar exatamente isso — mas em Python. Uma história no terminal onde o jogador toma decisões a cada cena, e cada escolha leva a um caminho diferente com finais distintos.</p>
      <p>O tema é completamente seu: fantasia medieval, ficção científica, terror, mistério, comédia. A narrativa é sua criação. O Python é só a ferramenta.</p>
    `,
        expected: `
      <p>Ao iniciar, o programa apresenta o cenário inicial da história com uma narrativa envolvente. O jogador lê a situação e vê duas ou mais opções de escolha numeradas.</p>
      <p>O jogador digita o número da sua escolha. Dependendo da escolha, uma nova cena é exibida com nova narração e novas opções. Isso se repete até que o jogador chegue a um final.</p>
      <p>A aventura deve ter <strong>pelo menos 3 finais possíveis</strong> — podendo ser bons, ruins ou neutros. Ao atingir um final, o programa encerra com uma mensagem conclusiva e pergunta se o jogador quer recomeçar.</p>
    `,
        flow: [
            "O programa exibe o título da aventura e uma breve introdução.",
            "A cena inicial é narrada com texto descritivo.",
            "O jogador vê as opções disponíveis (ex: 1. Entrar na caverna / 2. Seguir pelo caminho).",
            "O jogador digita o número da sua escolha.",
            "O programa exibe a próxima cena baseada na escolha.",
            "Novas opções são apresentadas ao jogador.",
            "O ciclo se repete até o jogador chegar a um final.",
            "Um dos finais é atingido e a mensagem conclusiva é exibida.",
            "O programa pergunta se o jogador quer jogar novamente."
        ],
        concepts: [
            { name: "Variáveis", why: "Para guardar a cena atual, a escolha do jogador e possíveis atributos do personagem." },
            { name: "input()", why: "Para receber as escolhas do jogador a cada decisão." },
            { name: "print()", why: "Para narrar as cenas, exibir as opções e apresentar os finais." },
            { name: "if / elif / else", why: "Para direcionar o jogador para a próxima cena com base na escolha feita." },
            { name: "Funções", why: "Para representar cada cena como uma função separada — facilita organizar a história." },
            { name: "while", why: "Para perguntar se o jogador quer jogar novamente e reiniciar a aventura." }
        ],
        tools: [
            {
                label: "Funções para representar cenas",
                example: "def cena_floresta():\n    print(\"Você está em uma floresta escura...\")\n    print(\"1. Seguir em frente\")\n    print(\"2. Voltar\")\n    escolha = input(\"> \")\n    if escolha == '1':\n        cena_caverna()\n    elif escolha == '2':\n        cena_aldeia()",
                desc: "Cada cena da sua aventura pode ser uma função. Quando o jogador faz uma escolha, a função correspondente à próxima cena é chamada. Isso torna a estrutura da história bem clara."
            },
            {
                label: "Validação de escolha",
                example: "escolha = input(\"> \")\nwhile escolha not in ['1', '2']:\n    print(\"Opção inválida. Tente novamente.\")\n    escolha = input(\"> \")",
                desc: "Garante que o jogador só consiga escolher opções válidas. Sem isso, digitar '3' quando só há '1' e '2' pode quebrar o programa."
            }
        ],
        modules: [],
        mandatory: [
            "A aventura deve ter uma história com contexto inicial apresentado ao jogador.",
            "O jogador deve tomar pelo menos 2 decisões ao longo da aventura.",
            "Cada decisão deve levar a caminhos diferentes na história.",
            "A aventura deve ter pelo menos 3 finais possíveis distintos.",
            "O jogador deve participar ativamente da narrativa através das escolhas."
        ],
        optional: [
            "Perguntar ao jogador se quer recomeçar após atingir um final.",
            "Adicionar um inventário simples onde o jogador coleta itens ao longo da história.",
            "Criar mais cenas e mais finais para uma aventura mais rica.",
            "Validar as entradas do jogador para evitar erros com opções inválidas."
        ],
        bonus: [
            "Sistema de pontos ou karma que muda dependendo das escolhas feitas.",
            "Itens especiais que desbloqueiam cenas secretas.",
            "Mais de 5 finais diferentes, incluindo um final secreto.",
            "Arte ASCII para ilustrar as cenas.",
            "Sistema de save: guardar em qual ponto da história o jogador parou."
        ],
        evaluation: [
            { label: "Funcionalidades obrigatórias", pts: 4, desc: "Todos os 5 requisitos obrigatórios implementados e funcionando." },
            { label: "Lógica do programa", pts: 2, desc: "As escolhas direcionam corretamente para as cenas correspondentes." },
            { label: "Organização do código", pts: 2, desc: "Cenas bem separadas, uso de funções, narrativa clara e coerente." },
            { label: "Uso de funções", pts: 1, desc: "Pelo menos 3 funções (ex: uma por cena) criadas para organizar o projeto." },
            { label: "Criatividade e extras", pts: 1, desc: "História envolvente, tema criativo, melhorias opcionais ou bônus." }
        ],
        structure: {
            variables: ["escolha", "jogando"],
            dicts: [],
            functions: ["introducao()", "cena_inicial()", "cena_a()", "cena_b()", "final_vitoria()", "final_derrota()", "final_neutro()", "jogar_novamente()"]
        },
        mistakes: [
            "Colocar toda a história em um único bloco de if/elif gigante em vez de usar funções — funciona, mas fica impossível de ler e organizar.",
            "Esquecer de criar pelo menos 3 finais distintos — uma história com um único final não atende ao requisito.",
            "Não validar a entrada do jogador — digitar uma opção inválida pode travar ou quebrar o programa.",
            "Escrever textos muito curtos para as cenas — a narrativa é parte essencial do projeto.",
            "Criar uma estrutura onde nem todas as escolhas levam a algum lugar (cenas sem continuação)."
        ],
        faq: [
            { q: "O tema precisa ser fantasia ou aventura?", a: "Não! O tema é totalmente livre. Pode ser terror, comédia, ficção científica, drama, qualquer coisa. O importante é que tenha escolhas e finais diferentes." },
            { q: "Posso criar mais de 3 finais?", a: "Sim! Mais finais tornam a aventura mais rica e isso é considerado um diferencial positivo." },
            { q: "As cenas precisam ter exatamente 2 opções?", a: "Não. Você pode ter cenas com 2, 3 ou mais opções. Mais opções criam mais caminhos e mais finais possíveis." },
            { q: "Posso usar personagens reais?", a: "Evite usar pessoas reais em situações que possam ser inadequadas. Prefira criar personagens fictícios." }
        ],
        assets: [
            { icon: "📗", name: "W3Schools — Python Conditions (If/Else)", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_conditions.asp" },
            { icon: "📗", name: "W3Schools — Python Functions", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_functions.asp" },
            { icon: "📗", name: "W3Schools — Python User Input", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_user_input.asp" },
            { icon: "📗", name: "W3Schools — Python While Loops", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_while_loops.asp" }
        ]
    },

    calculadora: {
        name: "Calculadora Turbo",
        diff: "Básico",
        time: "1h30",
        overview: `
      <p>Toda linguagem de programação consegue fazer cálculos. Mas criar uma calculadora <strong>interativa</strong> que funciona em loop, com menu e várias operações, já é outro nível.</p>
      <p>No projeto <strong>Calculadora Turbo</strong>, você vai construir uma calculadora baseada em menu no terminal. O usuário escolhe a operação, digita os números, recebe o resultado — e pode continuar calculando quantas vezes quiser sem precisar reiniciar o programa.</p>
      <p>Parece simples, mas organizar bem o código com funções e tratar casos especiais como divisão por zero é o verdadeiro desafio.</p>
    `,
        expected: `
      <p>Ao iniciar, o programa exibe um menu com as operações disponíveis, numeradas. O usuário escolhe uma operação digitando o número correspondente.</p>
      <p>Em seguida, o programa pede os dois números para realizar o cálculo. O resultado é exibido de forma clara. Depois, o menu aparece novamente e o usuário pode fazer outro cálculo.</p>
      <p>O programa só encerra quando o usuário escolher explicitamente a opção de sair (ex: opção 0 ou 5). <strong>Se o usuário tentar dividir por zero, o programa deve avisar o erro sem travar.</strong></p>
    `,
        flow: [
            "O programa exibe o menu com as operações: soma, subtração, multiplicação, divisão e sair.",
            "O usuário escolhe uma opção digitando o número.",
            "Se a opção for 'Sair': o programa encerra com uma mensagem de despedida.",
            "Se for uma operação: o programa pede o primeiro número.",
            "O programa pede o segundo número.",
            "O cálculo é realizado e o resultado é exibido.",
            "O programa volta ao menu (passo 1) automaticamente.",
            "O ciclo continua até o usuário escolher sair."
        ],
        concepts: [
            { name: "Variáveis", why: "Para guardar os números digitados pelo usuário e o resultado do cálculo." },
            { name: "input()", why: "Para receber a escolha do menu e os dois números a cada operação." },
            { name: "float()", why: "Para converter o texto digitado em número decimal, permitindo cálculos com casas decimais." },
            { name: "if / elif / else", why: "Para verificar qual operação o usuário escolheu no menu." },
            { name: "while", why: "Para manter a calculadora ativa em loop até o usuário escolher sair." },
            { name: "Funções", why: "Para criar uma função por operação: somar(), subtrair(), multiplicar(), dividir()." }
        ],
        tools: [
            {
                label: "float(input())",
                example: "num1 = float(input(\"Digite o primeiro número: \"))\nnum2 = float(input(\"Digite o segundo número: \"))",
                desc: "Converte o texto digitado pelo usuário em número com casas decimais. Use <code>float()</code> em vez de <code>int()</code> para aceitar números como 3.5, 10.2, etc."
            },
            {
                label: "Verificação de divisão por zero",
                example: "def dividir(a, b):\n    if b == 0:\n        print(\"Erro: não é possível dividir por zero!\")\n        return None\n    return a / b",
                desc: "Antes de dividir, verifique se o segundo número é zero. Se for, exiba uma mensagem de erro amigável e não realize a divisão. Isso evita que o programa trave."
            },
            {
                label: "Menu em loop",
                example: "while True:\n    print(\"1. Somar\")\n    print(\"2. Subtrair\")\n    print(\"0. Sair\")\n    opcao = input(\"> \")\n    if opcao == '0':\n        break",
                desc: "Use <code>while True</code> para manter o menu sempre ativo. Quando o usuário escolher sair, use <code>break</code> para encerrar o loop."
            }
        ],
        modules: [],
        mandatory: [
            "O programa deve exibir um menu com as opções de operação disponíveis.",
            "O usuário deve conseguir realizar somas de dois números.",
            "O usuário deve conseguir realizar subtrações de dois números.",
            "O usuário deve conseguir realizar multiplicações de dois números.",
            "O usuário deve conseguir realizar divisões de dois números, com proteção contra divisão por zero."
        ],
        optional: [
            "Adicionar uma opção no menu para o usuário sair do programa.",
            "Usar funções separadas para cada operação matemática.",
            "Exibir o histórico de cálculos realizados na sessão.",
            "Validar se o usuário digitou um número válido e não uma letra."
        ],
        bonus: [
            "Operações avançadas: potenciação, raiz quadrada, módulo (resto da divisão).",
            "Histórico de cálculos que o usuário pode consultar a qualquer momento.",
            "Modo científico com operações trigonométricas usando o módulo <code>math</code>.",
            "Calculadora de IMC, juros simples ou porcentagem como opções extras.",
            "Memória: guardar o último resultado e usá-lo na próxima operação."
        ],
        evaluation: [
            { label: "Funcionalidades obrigatórias", pts: 4, desc: "Todas as 5 operações implementadas, incluindo proteção para divisão por zero." },
            { label: "Lógica do programa", pts: 2, desc: "Menu funcional, loop correto, resultados precisos, tratamento de erro." },
            { label: "Organização do código", pts: 2, desc: "Uma função por operação, código limpo e legível." },
            { label: "Uso de funções", pts: 1, desc: "Pelo menos 4 funções criadas (uma para cada operação)." },
            { label: "Criatividade e extras", pts: 1, desc: "Melhorias opcionais ou bônus implementados." }
        ],
        structure: {
            variables: ["opcao", "num1", "num2", "resultado", "calculando"],
            dicts: [],
            functions: ["somar(a, b)", "subtrair(a, b)", "multiplicar(a, b)", "dividir(a, b)", "exibir_menu()", "obter_numeros()", "iniciar_calculadora()"]
        },
        mistakes: [
            "Não tratar a divisão por zero — o Python lança um erro e o programa encerra abruptamente.",
            "Usar int() em vez de float() — isso impede cálculos com números decimais como 3.5.",
            "Não criar um loop para o menu — o programa faz um cálculo e encerra.",
            "Colocar toda a lógica dentro de um único bloco de if/elif sem funções separadas.",
            "Não validar se o usuário digitou uma opção de menu válida — o programa pode travar com entradas inesperadas."
        ],
        faq: [
            { q: "Posso adicionar mais operações além das quatro básicas?", a: "Sim! Potenciação, raiz quadrada e outras operações são excelentes funcionalidades bônus." },
            { q: "Preciso usar float() ou int() é suficiente?", a: "Prefira float() para aceitar números decimais. Com int(), o usuário não consegue calcular com valores como 3.5." },
            { q: "Preciso guardar um histórico de cálculos?", a: "Não é obrigatório, mas é uma melhoria opcional muito apreciada. Você pode usar uma lista para guardar os cálculos anteriores." },
            { q: "Como faço para o programa não encerrar após um cálculo?", a: "Use um loop while que só termina quando o usuário escolher a opção 'Sair'. Dentro do loop, você coloca o menu e a lógica de cálculo." }
        ],
        assets: [
            { icon: "📗", name: "W3Schools — Python Functions", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_functions.asp" },
            { icon: "📗", name: "W3Schools — Python Operators", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_operators.asp" },
            { icon: "📗", name: "W3Schools — Python User Input", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_user_input.asp" },
            { icon: "📗", name: "W3Schools — Python While Loops", type: "Tutorial W3Schools", url: "https://www.w3schools.com/python/python_while_loops.asp" }
        ]
    }
};

// ─── AI POLICY (shared across all projects) ──────────────
const AI_POLICY_HTML = `
<div class="hint-card">
  <div class="hint-hd">🤖 A IA pode ser sua aliada — mas não sua substituta</div>
  <p>Você pode e deve usar ferramentas de Inteligência Artificial como assistentes de aprendizado durante o desenvolvimento do seu projeto. Mas com responsabilidade.</p>
</div>
<div class="docs-prose">
  <p><strong>✅ O que você pode fazer com IA:</strong></p>
  <ul>
    <li>Perguntar o que é uma variável, uma função, ou um loop</li>
    <li>Pedir explicação sobre um erro que apareceu no terminal</li>
    <li>Entender a diferença entre <code>int()</code> e <code>float()</code></li>
    <li>Pedir exemplos de como usar <code>random.randint()</code></li>
    <li>Pedir para a IA <em>explicar</em> um trecho de código que você escreveu</li>
  </ul>
  <p><strong>❌ O que você NÃO deve fazer com IA:</strong></p>
  <ul>
    <li>Pedir para a IA escrever o projeto completo por você</li>
    <li>Copiar e colar código sem entender o que ele faz</li>
    <li>Usar a IA para resolver cada parte do projeto sem pensar primeiro</li>
  </ul>
  <p>Lembre-se: <strong>o objetivo do projeto é que você aprenda</strong>. Um código que você entendeu e escreveu — mesmo que imperfeito — vale muito mais do que um código perfeito que você não compreende.</p>
  <p>Se você usar IA para aprender um conceito e depois aplicar por conta própria, isso é exatamente o que esperamos de você! 💪</p>
</div>
`;

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

    // 1. Visão Geral
    document.getElementById('proj-overview').innerHTML = proj.overview;

    // 2. Resultado Final Esperado
    document.getElementById('proj-expected').innerHTML = proj.expected;

    // 3. Vídeo Demonstrativo
    document.getElementById('proj-video').innerHTML = `
    <div class="video-placeholder">
      <div class="video-ph-icon">🎬</div>
      <div class="video-ph-title">Vídeo em breve</div>
      <div class="video-ph-desc">Em breve, um vídeo mostrando o programa em execução estará disponível aqui. O vídeo vai mostrar o programa sendo executado do início ao fim — com input do usuário, as respostas do programa e o resultado final.</div>
    </div>
    <p class="video-caption">📌 Assista ao vídeo com atenção antes de começar. Observe como o programa se comporta, o que ele exibe na tela e como interage com o usuário. O vídeo elimina qualquer dúvida sobre o resultado esperado.</p>
  `;

    // 4. Fluxo do Programa
    document.getElementById('proj-flow').innerHTML = `
    <ol class="flow-list">
      ${proj.flow.map(step => `<li class="flow-item"><span class="flow-text">${step}</span></li>`).join('')}
    </ol>
  `;

    // 5. Conceitos
    document.getElementById('proj-concepts').innerHTML = `
    <div class="concepts-grid">
      ${proj.concepts.map(c => `
        <div class="concept-card">
          <div class="concept-check">✓</div>
          <div class="concept-body">
            <div class="concept-name"><code>${c.name}</code></div>
            <div class="concept-why">${c.why}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

    // 6. Ferramentas Úteis
    if (proj.tools && proj.tools.length > 0) {
        document.getElementById('proj-tools').innerHTML = proj.tools.map(t => `
      <div class="tool-card">
        <div class="tool-header">
          <code class="tool-label">${t.label}</code>
        </div>
        <pre class="tool-example">${t.example}</pre>
        <p class="tool-desc">${t.desc}</p>
      </div>
    `).join('');
    } else {
        document.getElementById('proj-tools').innerHTML = `<p class="muted-note">Este projeto não requer ferramentas específicas além das que você já conhece.</p>`;
    }

    // 7. Módulos
    if (proj.modules && proj.modules.length > 0) {
        document.getElementById('proj-modules').innerHTML = proj.modules.map(m => `
      <div class="module-card">
        <div class="module-name">Módulo <code>${m.name}</code></div>
        <div class="module-import">
          <span class="module-import-label">Importação:</span>
          <code>${m.importLine}</code>
        </div>
        <div class="module-fns">
          ${m.functions.map(f => `
            <div class="module-fn-row">
              <code class="module-fn-sig">${f.sig}</code>
              <span class="module-fn-desc">${f.desc}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
    } else {
        document.getElementById('proj-modules').innerHTML = `<p class="muted-note">Este projeto não precisa importar nenhum módulo externo — tudo que você precisa já vem com o Python.</p>`;
    }

    // 8. Requisitos Obrigatórios
    document.getElementById('proj-mandatory').innerHTML = `
    <div class="req-tier-label mandatory-label">🟢 Obrigatório — todos estes itens precisam estar no seu projeto</div>
    <div class="req-list">
      ${proj.mandatory.map((r, i) => `
        <div class="req-item">
          <div class="req-num">${i + 1}</div>
          <div class="docs-prose"><p>${r}</p></div>
        </div>
      `).join('')}
    </div>
  `;

    // 9. Melhorias Opcionais
    document.getElementById('proj-optional').innerHTML = `
    <div class="req-tier-label optional-label">🟡 Opcional — não são obrigatórios, mas enriquecem o projeto</div>
    <div class="req-list">
      ${proj.optional.map(r => `
        <div class="req-item optional-item">
          <div class="req-num opt-num">+</div>
          <div class="docs-prose"><p>${r}</p></div>
        </div>
      `).join('')}
    </div>
  `;

    // 10. Bônus
    document.getElementById('proj-bonus').innerHTML = `
    <div class="req-tier-label bonus-label">⭐ Bônus — funcionalidades criativas que podem te dar pontos extras</div>
    <div class="req-list">
      ${proj.bonus.map(r => `
        <div class="req-item bonus-item">
          <div class="req-num bonus-num">★</div>
          <div class="docs-prose"><p>${r}</p></div>
        </div>
      `).join('')}
    </div>
  `;

    // 11. Critérios de Avaliação
    const total = proj.evaluation.reduce((sum, c) => sum + c.pts, 0);
    document.getElementById('proj-evaluation').innerHTML = `
    <div class="eval-table">
      ${proj.evaluation.map(c => `
        <div class="eval-row">
          <div class="eval-label">${c.label}</div>
          <div class="eval-dots"></div>
          <div class="eval-pts">${c.pts} pts</div>
        </div>
        <div class="eval-desc">${c.desc}</div>
      `).join('')}
      <div class="eval-total-row">
        <div class="eval-total-label">Total</div>
        <div class="eval-dots"></div>
        <div class="eval-total-pts">${total} pts</div>
      </div>
    </div>
  `;

    // 12. Estrutura Sugerida
    const s = proj.structure;
    let structureHtml = `<div class="docs-prose"><p>Esta seção é apenas uma sugestão para te ajudar a começar. Você não precisa seguir exatamente — é um ponto de partida, não uma solução.</p></div>`;

    if (s.variables && s.variables.length > 0) {
        structureHtml += `
      <div class="struct-block">
        <div class="struct-title">📦 Variáveis que podem ser úteis</div>
        <ul class="struct-list">
          ${s.variables.map(v => `<li><code>${v}</code></li>`).join('')}
        </ul>
      </div>`;
    }
    if (s.dicts && s.dicts.length > 0) {
        structureHtml += `
      <div class="struct-block">
        <div class="struct-title">📚 Dicionários ou listas sugeridos</div>
        <ul class="struct-list">
          ${s.dicts.map(d => `<li><code>${d}</code></li>`).join('')}
        </ul>
      </div>`;
    }
    if (s.functions && s.functions.length > 0) {
        structureHtml += `
      <div class="struct-block">
        <div class="struct-title">🔧 Funções que podem ser úteis</div>
        <ul class="struct-list">
          ${s.functions.map(f => `<li><code>${f}</code></li>`).join('')}
        </ul>
      </div>`;
    }
    document.getElementById('proj-structure').innerHTML = structureHtml;

    // 13. Erros Comuns
    document.getElementById('proj-mistakes').innerHTML = `
    <div class="mistakes-list">
      ${proj.mistakes.map(m => `
        <div class="mistake-item">
          <div class="mistake-icon">⚠️</div>
          <div class="mistake-text">${m}</div>
        </div>
      `).join('')}
    </div>
  `;

    // 14. FAQ
    document.getElementById('proj-faq').innerHTML = proj.faq.map(f => `
    <details class="faq-item">
      <summary>${f.q}</summary>
      <div class="faq-body">${f.a}</div>
    </details>
  `).join('');

    // 15. Uso de IA
    document.getElementById('proj-ai').innerHTML = AI_POLICY_HTML;

    // Assets (used as reference links in sidebar-crit area replacement)
    // We'll update the sidebar crit section dynamically
    const critEl = document.querySelector('.sidebar-crit');
    if (critEl) {
        critEl.innerHTML = `
      <h4>Links de Apoio</h4>
      ${proj.assets.map(a => `
        <div class="crit-item">
          <div class="crit-dot"></div>
          <a href="${a.url}" target="_blank" rel="noopener" style="color: var(--mint-dkr); font-size: .8rem;">${a.name}</a>
        </div>
      `).join('')}
    `;
    }

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
const sectionIds = ['s-overview', 's-expected', 's-video', 's-flow', 's-concepts', 's-tools', 's-modules', 's-mandatory', 's-optional', 's-bonus', 's-evaluation', 's-structure', 's-mistakes', 's-faq', 's-ai', 's-submit'];
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