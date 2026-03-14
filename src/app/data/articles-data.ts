export interface Article {
  id: number;
  ano: number;
  titulo: string;
  resumo: string;
  palavrasChave: string[];
  categoria: string;
  linkPdf: string;
}

export const articles: Article[] = [
  {
    id: 1,
    ano: 2021,
    titulo: "Uma análise exploratória de práticas associadas à Ética Computacional através do ciberespaço brasileiro",
    resumo: "A Tomada de Decisão Ética (Ethical Decision-Making - EDM) é um fenômeno multifacetado. No entanto, os estudiosos frequentemente negligenciam sua natureza heterogênea. Apesar da diversidade de abordagens (por exemplo, fatores de influência, modelos de EDM, escalas de medição adotadas), a pesquisa empírica também falhou em gerar resultados cumulativos. Neste artigo, analisamos duzentas e trinta e uma respostas a um questionário veiculado majoritariamente entre especialistas em Computação, associadas a \"práticas imorais ou antiéticas\" que eles tenham se envolvido, direta ou indiretamente. Nossa intenção é investigar estes fenômenos por uma ótica disruptiva e inovadora, a Ética da Resistência; por abordagem mista; sem juízo criminal, legal ou penal; considerando o máximo de elementos e fatores possíveis extraídos.",
    palavrasChave: ["Ética Computacional", "Sistema De Informação", "Tomada De Decisão Ética"],
    categoria: "Ética Computacional",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/15959/15800"
  },
  {
    id: 2,
    ano: 2021,
    titulo: "Uma proposta para representar graficamente tomadas de decisão éticas",
    resumo: "O processo pelo qual os agentes chegam aos seus processos de tomada de decisão, éticos ou antiéticos, pode ser formalizado por meio de Modelos de Tomada de Decisão Ética (EDMMs). O interesse pela tomada de decisão ética, tanto da academia quanto dos profissionais de Informática Organizacional, aumentou recentemente devido aos avanços no campo da Inteligência Artificial. A pesquisa está focada em modelos teóricos para explicar a tomada de decisão ética, fatores que a influenciam e ferramentas de medição para avaliá-la. Até onde sabemos, não há recurso gráfico para representar os elementos de um EDMM que extrapole o âmbito textual. Este trabalho é o primeiro passo para se pensar em uma representação gráfica que inclua elementos de EDMM, possibilite um panorama de informações mais completo possível, documente a tomada de decisão ética e facilite a visualização desses ativos de conhecimento.",
    palavrasChave: ["Ética Computacional", "Representações Gráficas", "Sistemas De Informação"],
    categoria: "Ética Computacional",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/15960/15801"
  },
  {
    id: 3,
    ano: 2021,
    titulo: "Plataforma Di@: Direito à Alimentação - Conhecendo a Dinâmica Familiar na Perspectiva da Segurança Alimentar",
    resumo: "O artigo descreve os pressupostos de criação e utilização da plataforma Di@, cujo objetivo é conhecer a dinâmica das famílias com foco na percepção e na vivência de insegurança alimentar e fome no nível domiciliar. A plataforma Di@ surgiu de uma demanda real do município de Lavras/MG, no contexto da COVID-19, e se caracteriza como um recurso mobile, inovador e inédito. Os resultados indicam facilidade na manutenção, autenticação e envio das entrevistas pelos usuários e, ainda, convergência com os objetivos propostos. Espera-se que o projeto sirva de referência teórico-metodológica para outras estratégias.",
    palavrasChave: ["Insegurança Alimentar", "Sistema De Informação", "Aplicativo Móvel"],
    categoria: "Saúde e Computação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/15961/15802"
  },
  {
    id: 4,
    ano: 2021,
    titulo: "Uma Análise Comparativa dos Perfis Feminino e Masculino nos Cursos de Computação do Brasil",
    resumo: "Nos últimos anos, o percentual de matrículas de estudantes do sexo feminino no ensino superior se manteve levemente superior ao do sexo masculino. Porém, o cenário é diferente quando se analisa somente as matrículas em cursos de computação: as matrículas de estudantes do sexo feminino são bem inferiores às do masculino. Buscando evidenciar nuances da questão abordada, este trabalho realiza uma análise do conjunto de ingressantes em cursos de computação no Brasil no período de 2010 a 2017. O propósito é comparar, sob vários aspectos, o perfil feminino e masculino, como o ingresso por ano, situação de matrícula, etnia e distribuição regional. As disparidades de gênero apontadas reforçam a necessidade de mais ações e discussões na temática.",
    palavrasChave: ["Perfil", "Análise", "Ciência Da Computação"],
    categoria: "Acessibilidade e Inclusão",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/15962/15803"
  },
  {
    id: 5,
    ano: 2021,
    titulo: "Uma Análise Inicial sobre a Aplicação de Blockchain na Sociedade",
    resumo: "Ao agregar valor a outras tecnologias emergentes, a blockchain pode impactar muitos setores de negócios e a sociedade. Diversas áreas estão experimentando melhorias em seus processos e maior segurança dos dados, como saúde, educação e finanças. O objetivo deste trabalho é estudar as relações e impactos da blockchain sobre a sociedade, principalmente devido às aplicações nas mais diversas áreas. Para isso, uma pesquisa na literatura foi realizada, seguida da aplicação de um questionário online sobre aspectos da blockchain na sociedade, e uma análise qualitativa. Como resultados preliminares, saúde e finanças foram as áreas que mais utilizam blockchain, e o questionário revelou que é importante estudar os impactos da blockchain na sociedade.",
    palavrasChave: ["Blockchain", "Sociedade", "Relações", "Aplicações", "Impactos"],
    categoria: "Impacto Social e Computação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/15963/15804"
  },
  {
    id: 6,
    ano: 2021,
    titulo: "Uma Análise Experimental Usando Mineração de Dados Educacionais sobre os Dados do ENEM para Identificação de Causas do Desempenho dos Estudantes",
    resumo: "O Exame Nacional do Ensino Médio (ENEM) é uma das maneiras utilizadas para mensurar o nível de conhecimento dos estudantes no fim da educação básica. Este artigo apresenta uma análise experimental baseada em Mineração de Dados Educacionais, incluindo o uso de técnicas de visualização de dados e construção de modelos preditivos para identificar os atributos mais relacionados ao desempenho dos estudantes. Foram usados dados do ENEM de 2018 de todo o Brasil, com um total de mais de 5 milhões de registros. Nossos resultados mostraram que os atributos sócio-econômicos de fato apresentam uma relação significativa com o resultado dos estudantes no ENEM.",
    palavrasChave: ["Mineração De Dados Educacionais", "Visualização De Dados", "ENEM"],
    categoria: "Computação Aplicada à Educação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/15964/15805"
  },
  {
    id: 7,
    ano: 2021,
    titulo: "Hackathon das Vertentes: competição de inovação em educação com desenvolvimento de artefatos computacionais",
    resumo: "Em resposta a emergência instaurada pela pandemia de COVID-19, foi proposto um evento do tipo hackathon buscando promover inovações na área de educação. Este artigo apresenta a proposta do evento, organizado por uma aliança estratégica formada pelo ecossistema de inovação da região, bem como os resultados obtidos. Destaca-se a inscrição de 68 estudantes de diversas cidades do Brasil, sendo 36 participantes selecionados para a jornada de imersão de 5 dias. No último dia houve a apresentação de 7 projetos, sendo premiados os 3 mais bem avaliados. O evento foi avaliado pelos participantes com questionários, obtendo um NPS® Score de 76.",
    palavrasChave: ["Hackathon", "COVID-19", "Educação", "Inovação"],
    categoria: "Computação Aplicada à Educação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/15965/15806"
  },
  {
    id: 8,
    ano: 2021,
    titulo: "Identificação de 'Fake News' no contexto político brasileiro: uma abordagem computacional",
    resumo: "Este artigo apresenta os principais resultados de uma solução computacional para analisar as notícias falsas brasileiras em um contexto político, e investigar qual algoritmo de aprendizado de máquina, entre Support Vector Machine e Naive Bayes, atinge o melhor resultado para classificar, em um contexto de linguagem natural, se uma notícia política é falsa ou não. O melhor desempenho foi alcançado pela combinação de SVM (RBF) + BOW com 80,4% de precisão, 82% de precisão, 76% de recuperação, 78% de F1-Score e 88% de AUC. Os algoritmos não probabilísticos se mostraram melhores na classificação de notícias falsas, sugerindo um caminho para trabalhos futuros nesta área de pesquisa.",
    palavrasChave: ["Fake News", "Aprendizado De Máquina", "Processamento De Linguagem Natural"],
    categoria: "Desinformação e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/15966/15807"
  },
  {
    id: 9,
    ano: 2021,
    titulo: "Vieses no Aprendizado de Máquina e suas Implicações Sociais: Um Estudo de Caso no Reconhecimento Facial",
    resumo: "Este artigo apresenta um estudo sobre vieses gerados no aprendizado de máquina e as suas implicações na sociedade — morais, éticas e sociais. Fazemos uma releitura de um framework que posiciona os diferentes tipos de vieses nas etapas do processo de aprendizado de máquina, desde o pré-processamento, passando pela coleta dos dados, até o pós-processamento. Apresentamos um estudo de caso sobre reconhecimento facial para ilustrar os vieses que podem ser potencialmente incluídos durante estas etapas do aprendizado de máquina e as suas implicações sociais.",
    palavrasChave: ["Aprendizado De Máquina", "Viés", "Reconhecimento Facial"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/15967/15808"
  },
  {
    id: 10,
    ano: 2021,
    titulo: "A Realidade Aumentada em Situações de Aprendizagem na Educação Básica: Uma Revisão de Literatura",
    resumo: "Os avanços tecnológicos estão cada vez mais presentes em diversos espaços sociais, entre eles o escolar. Neste trabalho, discutimos as potencialidades de recursos tecnológicos nos processos de ensino e aprendizagem e, mais especificamente, realizamos uma revisão de literatura com o objetivo de identificar como situações de aprendizagem envolvendo realidade aumentada na Educação Básica vêm sendo abordadas em produções científicas nos últimos dez anos. Os resultados apontam uma série de possibilidades envolvendo uso de tecnologias como smartphones, tablets e aplicativos específicos, especialmente no desenvolvimento de jogos baseados em localização e aprendizagem baseada em investigação.",
    palavrasChave: ["Realidade Aumentada", "Situações De Aprendizagem", "Educação Básica"],
    categoria: "Computação Aplicada à Educação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/15968/15809"
  },
  {
    id: 11,
    ano: 2021,
    titulo: "Uma Análise Exploratória de Funcionalidades de Sistemas Dedicados de Gerenciamento de Legado Digital",
    resumo: "No decorrer de suas vidas, usuários geram grandes quantidades de dados que podem ser deixados como herança para terceiros, se assim for desejado. Sistemas Dedicados de Gerenciamento de Legado Digitais (SDGLD) são aqueles desenvolvidos com o objetivo primário de permitir a gestão de bens digitais de seus usuários, permitindo a destinação desejada quando da morte desses. Assim, essa pesquisa visa analisar as funcionalidades de alguns SDGLD, a fim de verificar se atendem aos requisitos já identificados por autores da área. Os sistemas escolhidos para esta pesquisa exploratória foram Miigen, Afternote e Meu Último Desejo. Esses sistemas foram analisados considerando as diferenças quanto ao registro de legados e o repasse de bens digitais, e os resultados observados foram avaliados de forma qualitativa. Os achados servem de base para construção de outros sistemas.",
    palavrasChave: ["Legado Digital", "Vida E Morte Digital", "Memoriais Digitais"],
    categoria: "Herança Digital",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/15969/15810"
  },
  {
    id: 12,
    ano: 2021,
    titulo: "Reconhecimento facial e viés algorítmico em grandes municípios brasileiros",
    resumo: "Ao utilizar tecnologias de reconhecimento facial, o setor público brasileiro mostra-se atento aos riscos sociais dessa tecnologia? A fim de reunir elementos que nos permitam responder a essa pergunta, investigamos os diários oficiais digitais de 13 dos 17 municípios brasileiros com mais de um milhão de habitantes. Analisamos preliminarmente o uso do reconhecimento facial no transporte público. Constatamos que alguns municípios parecem mais bem preparados do que outros para lidar com os ricos em questão: diante de supostos casos de fraude, eles permitem ao usuário(a) seguir viagem e, em seus textos legais, apresentam orientações mínimas sobre o papel do trabalho humano no processo de revisão das fraudes.",
    palavrasChave: ["Inteligência Artificial", "Reconhecimento Facial", "Viés", "Setor Público"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/15970/15811"
  },
  {
    id: 13,
    ano: 2022,
    titulo: "Privacidade na Educação on-line em Tempos de Pandemia: Um levantamento de práticas adotadas e possibilidades futuras",
    resumo: "A adaptação do ensino presencial para o ensino remoto, devido à pandemia da COVID-19, gerou desafios de privacidade para professores e alunos. Entretanto, não encontramos muitas informações sobre como as instituições de ensino orientaram os envolvidos no processo na proteção e usos dos dados pessoais dos docentes e discentes. Por isso, através de um estudo qualitativo com professores e alunos (n = 91), identificamos como foi dada orientação aos envolvidos em atividades online sobre algumas questões de privacidade. Nós verificamos que 40% dos docentes nunca receberam orientações sobre privacidade. Nós também identificamos algumas boas práticas que podem ser seguidas por instituições, professores e alunos.",
    palavrasChave: ["Privacidade", "Proteção De Dados", "Educação A Distância", "Boas Práticas"],
    categoria: "Segurança de dados",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/20727/20554"
  },
  {
    id: 14,
    ano: 2022,
    titulo: "Uma Caracterização das Políticas de Privacidade Utilizadas em Aplicativos no Brasil",
    resumo: "Políticas de privacidade são documentos nos quais empresas de tecnologia especificam como os dados de seus usuários são tratados. No Brasil, a concordância entre essas duas partes está prevista em lei. Assim, é fundamental para os usuários que os documentos disponibilizados sejam facilmente acessados e compreendidos. Dessa maneira, o objetivo deste trabalho foi caracterizar o acesso à informação em documentos de privacidade de mais de 1.000 aplicativos da Google Play Store. Os resultados mostraram que muitos aplicativos apresentavam documentos inválidos e somente 10% disponibilizavam políticas de privacidade escritas em português. Ademais, nenhum desses documentos dispunha de um grau de inteligibilidade adequado a boa parte da população brasileira.",
    palavrasChave: ["Privacidade", "Proteção De Dados", "Educação Digital", "Inteligibilidade", "Corpus"],
    categoria: "Segurança de dados",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/20728/20555"
  },
  {
    id: 15,
    ano: 2022,
    titulo: "A Socially-Aware Perspective to Understand and Fight Violence against Children and Adolescents",
    resumo: "In challenging design contexts, such as the violence against children and adolescents, considering human values is critical as they influence people's social and cultural lives. Considering values when understanding a social problem is not a trivial activity due to the difficulty of working with abstract concepts, the complexity of people's lives, and the lack of artifacts and recommendations to support designers in this task. Drawing on the Socially Aware Design, this paper describes the use of value-oriented artifacts to understand the problem and to identify requirements for systems design against child violence. As a result, the problem of child violence is characterized in a socially-aware manner, and propositions of value-oriented requirements for a solution are raised.",
    palavrasChave: ["Violência", "Valores", "Crianças E Adolescentes", "Design Socialmente Consciente"],
    categoria: "Saúde e Computação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/20729/20556"
  },
  {
    id: 16,
    ano: 2022,
    titulo: "Estratégias de comunicação do Consentimento Informado e rastros de Padrões Obscuros no Instagram",
    resumo: "Pesquisas têm alertado sobre riscos de novas tecnologias com enorme poder computacional e de processamento se aliadas ao grande volume de dados advindos da crescente utilização de redes sociais. Um dos riscos está relacionado a privacidade e a propriedade dos dados pessoais. Este trabalho investigou a comunicabilidade do Instagram com o objetivo de identificar as estratégias de comunicação desta rede social sobre o consentimento informado. Para isso, aplicamos o Método de Inspeção Semiótica, um método com foco na avaliação da comunicabilidade de sistemas interativos. Os resultados indicam violações do princípio ético de privacidade relacionado ao consentimento e a presença de Padrões Obscuros nas estratégias de comunicação do Instagram.",
    palavrasChave: ["Engenharia Semiótica", "Privacidade", "Ética", "Redes Sociais", "Interação Humano-Computador", "Padrões Obscuros"],
    categoria: "Segurança de dados",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/20730/20557"
  },
  {
    id: 17,
    ano: 2022,
    titulo: "Lootboxes em jogos eletrônicos estão viciando nossos jovens em jogos de azar? O que a comunidade de computação pode fazer a respeito?",
    resumo: "Há várias formas de monetizar jogos eletrônicos, desde a compra única ao sistema games as a service. No entanto, existem formas de monetização que possuem fortes indícios de serem danosas aos consumidores, como as microtransações (lootbox). Embora nenhuma pesquisa provou isso, existem indícios razoáveis, e uma lacuna em pesquisas em computação que não visem apenas a maximizar o lucro ou a atratividade de lootboxes, mas que se preocupem com os aspectos éticos e o bem-estar dos consumidores. Este estudo procurou mostrar isso analisando o uso de lootboxes em jogos eletrônicos para enfatizar a necessidade de se realizar estudos sociotécnicos para minimizar o dano potencial destes produtos e serviços.",
    palavrasChave: ["Lootbox", "Vício Em Jogos Eletrônicos"],
    categoria: "Impacto Social e Computação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/20731/20558"
  },
  {
    id: 18,
    ano: 2022,
    titulo: "An exploratory research about ethical issues on a smart toy: The Hello Barbie case study",
    resumo: "Smart toys are becoming increasingly present in children's lives, reinforcing the relevance of this market niche. Advances in user interfaces and artificial intelligence have been incorporated into smart toys to provide greater autonomy and inductive reasoning skills through machine learning. However, machine learning embedded in smart toys not only brings benefits but also potential problems of bias, possibly related to prejudice and discrimination. This work aims to explore Mattel's Hello Barbie smart toy in a case study, seeking to analyze its knowledge base and conversational functionality to identify possible ethical issues that could cause harm to children. The intention is to show unknown risks that can occur in the evolution's process of smart toys.",
    palavrasChave: ["Brinquedos Inteligentes", "Inteligência Artificial", "Aprendizado De Máquina"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/20732/20559"
  },
  {
    id: 19,
    ano: 2022,
    titulo: "O futuro do digital está na conexão com o real: Metaverso e suas implicações sociais e tecnológicas",
    resumo: "O assunto metaverso tem se tornado onipresente e o principal impulso para que o tema ganhe representatividade e interesse das pessoas é sua capacidade de trazer para o dia a dia das pessoas a vivência de uma realidade que até então só tínhamos contato em obras de ficção científica. Por tratar-se de algo novo, surgem novas perguntas em relação a como será o uso e aplicação da tecnologia, quais são as mudanças que essa nova tecnologia promoverá em nossas vidas e como nossa percepção do mundo pode mudar com a intensificação de seu uso constante. Com um potencial de impactar diversos aspectos de nossas vidas, o estudo tem o objetivo de avaliar impactos em relação a questões psicológicos, econômicas e tecnológicas, avaliando como esse novo ambiente onde podemos viver e fazer negócios pode influenciar nossa vida real.",
    palavrasChave: ["Metaverso", "Implicações Sociais De Tecnologia", "Tecnologia Social"],
    categoria: "Impacto Social e Computação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/20733/20560"
  },
  {
    id: 20,
    ano: 2022,
    titulo: "Analyzing a Blockchain Application for the Educational Domain from the Perspective of a Software Ecosystem",
    resumo: "Many educational institutions have the challenge of dealing with different data types. Some of this data is related to the issuance of student certificates. Software Ecosystem (SECO) refers to a collection of software products with some degree of symbiotic relationship.Blockchain can be used in different domains and its features of transparency and immutability are key concerns that make it an attractive technology. This article presents a discussion on an educational domain application from a SECO viewpoint that uses blockchain resources to treat the students' certificates from higher education institutions. Our findings were: a model of an educational application that uses blockchain and research opportunities related to SECO and blockchain for educational domain.",
    palavrasChave: ["Ecossistema De Software", "Domínio Educacional", "Aplicativo", "Blockchain"],
    categoria: "Computação Aplicada à Educação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/20734/20561"
  },
  {
    id: 21,
    ano: 2022,
    titulo: "Artificial intelligence discrimination: how to deal with it?",
    resumo: "The emergence of artificial intelligence has brought many benefits to society through the automation of activities such as driving cars, product delivery, item classification, and predicting trends with a greater degree of accuracy. However, depending on how it is used, it may reflect persistent problems in society, such as discrimination. In this paper, we discuss discrimination by artificial intelligence. We begin by describing this problem and showing that it is a recurring and current problem. Then, we show the origin of this problem and propose a strategy to deal with it in order to prevent it from happening again. Lastly, we discuss future works and how the proposed strategy can be put into practice.",
    palavrasChave: ["Computação", "Estado De Bem-Estar Social", "Diversidade", "Implicações Culturais", "Políticas E Sociais Da IA"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/20735/20562"
  },
  {
    id: 22,
    ano: 2022,
    titulo: "Interação Humano-Computador, Usabilidade, Internet Banking, Idoso, Transformação Digital",
    resumo: "Considerando o crescimento do número de idosos e a fim de promover possibilidades para que eles possam participar de forma ativa no uso de soluções digitais financeiras, é fundamental que a maneira com que se desenvolve software seja também pensada para essa população, levando em conta suas limitações. Para a construção de soluções digitais em geral é de suma importância conhecer as necessidades dos usuários e estabelecer quais critérios de usabilidade devem ser priorizados na interação humano-computador. Pensando em tais aspectos, a presente pesquisa, busca avaliar a usabilidade e satisfação do usuário em aplicativos Internet Banking no contexto do público idoso, investigar suas dificuldades de uso e por fim propor melhorias de usabilidade para esses aplicativos.",
    palavrasChave: ["Interação Humano-Computador", "Usabilidade", "Internet Banking", "Idoso", "Transformação Digital"],
    categoria: "Acessibilidade e Inclusão",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/20736/20563"
  },
  {
    id: 23,
    ano: 2022,
    titulo: "Respire bem: uma ferramenta de caráter social e tecnológico para o tratamento da asma a partir da respiração diafragmática",
    resumo: "A asma é uma doença respiratória crônica caracterizada pela inflamação das vias aéreas. Os tratamentos mais comuns para a asma são feitos por meio de corticoides inalatórios. Abordagens não farmacológicas podem contribuir para a melhora da qualidade de vida dos pacientes, entre elas está a prática de exercícios respiratórios, na qual destaca-se a técnica de respiração diafragmática. O objetivo deste trabalho é apresentar o desenvolvimento de uma aplicação web e mobile que oriente os pacientes (crianças) com asma a realizarem as técnicas de respiração diafragmática, bem como a apresentação de testes e resultados obtidos no ambulatório do Hospital Universitário da Universidade Federal do Rio Grande (Brasil).",
    palavrasChave: ["Asma", "Respire Bem", "Respiração Diafragmática", "Sistema Web", "Sistema Mobile"],
    categoria: "Saúde e Computação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/20737/20564"
  },
  {
    id: 24,
    ano: 2023,
    titulo: "The Impact of Virtual Assistant Advice on Human Trust: An Investigation in a game scenario",
    resumo: "Este estudo investigou o impacto de conselhos incorretos dados por assistentes virtuais na confiança das pessoas. Foi desenvolvido um jogo de memória interativo utilizando um agente robótico virtual e realizado um estudo com 25 participantes. O estudo foi dividido em condições; em algumas o agente deu pistas erradas sobre as cartas; em outras, forneceu pistas certas. Os resultados sugerem que as percepções dos jogadores sobre o agente foram afetadas por seu comportamento. Além disso, a confiança da pessoa no agente foi afetada primeiro pela tarefa em si e, em segundo lugar, pelo fato de o comportamento do agente ser ou não obstrutivo. O estudo contribui para uma melhor compreensão de como os assistentes virtuais afetam a tomada de decisão e a confiança humanas e para o desenvolvimento de assistentes virtuais mais envolventes e interativos. Pesquisas futuras podem usar essas descobertas para desenvolver assistentes virtuais mais eficazes que promovam maior confiança e engajamento do usuário.",
    palavrasChave: ["Assistentes Virtuais", "Confiança", "Interação Humano-Computador", "Tomada De Decisão"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24824/24645"
  },
  {
    id: 25,
    ano: 2023,
    titulo: "Discriminação Algorítmica de Gênero: Estudo de Caso e Análise no Contexto Brasileiro",
    resumo: "Este trabalho visa identificar tendências discriminatórias em modelos de Processamento de Linguagem Natural que representam palavras por meio de vetores chamados Word Embeddings (WE), buscando vieses de gênero no domínio de profissões encontradas em WE em português. Para isso, métricas pré-definidas para identificação de viés foram adaptadas e revelaram a existência de estereótipos de gênero em ocupações tradicionais e sua correlação com a proporção de mulheres no mercado de trabalho nacional. Também verificaram-se analogias preconceituosas entre pronomes femininos e masculinos. Os resultados evidenciam sexismos semelhantes aos de outros estudos e permitem discutir sobre o impacto do uso de modelos de linguagem em nossa sociedade. Por fim, o trabalho abre caminho para o uso das métricas para identificação de outros tipos de discriminação no contexto brasileiro.",
    palavrasChave: ["Discriminação Algorítmica", "Viés De Gênero", "Processamento De Linguagem Natural", "Word Embeddings"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24825/24646"
  },
  {
    id: 26,
    ano: 2023,
    titulo: "Equipamentos para Smart Home: O que eles querem saber sobre nós?",
    resumo: "Este artigo apresenta uma pesquisa exploratória que analisou as Políticas de Privacidade e Segurança e os Manuais de Instruções de 59 equipamentos de automação residencial para Smart Home a fim de verificar quais dados pessoais eram manipulados. A análise foi conduzida com uma abordagem quantitativa seguida de análise qualitativa. Os levantamentos identificaram os seguintes tipos de dados pessoais: Identificação, Financeiro, Dispositivos e Localização. Os resultados apontaram maior interesse por dados de identificação e financeiro, embora a localização também é utilizada em alguns casos. Isso pode ajudar os titulares de dados a analisar e decidir sobre como sua privacidade está sendo afetada.",
    palavrasChave: ["Privacidade", "Proteção De Dados", "Políticas De Privacidade", "Internet Das Coisas"],
    categoria: "Segurança de dados",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24826/24647"
  },
  {
    id: 27,
    ano: 2023,
    titulo: "Arte, Morte e Interatividade: Obras de Arte Digital que Transportam a Temática da Morte para o Campo das Tecnologias da Informação",
    resumo: "Na contemporaneidade, todos os setores da sociedade misturam-se ao espaço virtual e às tecnologias. Do mesmo modo, a arte sempre incorporou em suas propostas as tecnologias de seu tempo, em especial, hoje, os meios digitais. Nesse processo, a morte, seus ritos, o luto, a dor e outros aspectos culturais relacionados também ganham uma nova face nas culturas digitais. Considerando isso, esta pesquisa exploratória ambiciona mapear e entender obras de arte digital que tratam a morte, identificando-as e descrevendo-as. Desse modo, foi possível perceber as principais abordagens e tecnologias utilizadas em obras de arte digital que pautam a morte, bem como os modos de representação desse tema na arte digital.",
    palavrasChave: ["Arte Digital", "Morte", "Luto", "Cultura Digital", "Interatividade"],
    categoria: "Herança Digital",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24827/24648"
  },
  {
    id: 28,
    ano: 2023,
    titulo: "Sistema Educacional de Orientação Sobre Fake News",
    resumo: "Neste trabalho, será apresentada a construção de um sistema educacional, cujo objetivo é capacitar os usuários para o reconhecimento de informações inverídicas. O produto desenvolvido conta com um módulo que destaca informações que podem auxiliar o usuário a entender a veracidade de uma notícia por meio do seu link. Além disso, conta também com um módulo de treinamento que possibilita exercitar a habilidade de identificar notícias falsas. A concepção desses módulos está teoricamente ancorada na leitura lateral e na teoria da inoculação, respectivamente. Os resultados alcançados por meio da avaliação com 26 usuários apontam aceitação positiva do software, principalmente nos aspectos de eficiência e atratividade.",
    palavrasChave: ["Fake News", "Aprendizado De Máquina", "Processamento De Linguagem Natural", "Leitura Lateral", "Teoria Da Inoculação"],
    categoria: "Desinformação e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24828/24649"
  },
  {
    id: 29,
    ano: 2023,
    titulo: "Modelo de Decisão Multicritério para classificar municípios quanto ao risco de violência doméstica contra a mulher: um estudo a partir da Amazônia Paraense",
    resumo: "A violência doméstica contra a mulher (VDCM) se constitui em uma das mais sérias questões de saúde pública local e global, exigindo o enfrentamento por meio de políticas públicas efetivas. Assim, o objetivo deste projeto é apresentar um modelo de análise de decisão multicritério (MCDA) baseado no ELECTRE Tri-B para classificar os municípios do estado do Pará de acordo com o risco à violência doméstica contra as mulheres em seus territórios de modo a mapeá-los em ordem decrescente quanto a esse risco. Propõe-se um modelo que considera entre os critérios de análise e classificação a existência de equipamentos de apoio e proteção à mulher nesses municípios, bem como seus indicadores socioeconômicos. Os resultados mostraram que, em municípios com menor risco de VDCM, há equipamentos de proteção, bons indicadores socioeconômicos, mas alta taxa de denúncias, corroborando a máxima de que ambientes com mais mecanismos de proteção à mulher propiciam maior número de denúncias. Assim, a metodologia empregada permitiu a identificação dos municípios em que há maior risco de VDCM, o mapeamento desses municípios e regiões possibilitando ações focadas e com mais possibilidade de serem eficazes no combate e prevenção à VDCM.",
    palavrasChave: ["Violência", "Análise", "Mulheres", "Sociedade"],
    categoria: "Saúde e Computação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24829/24650"
  },
  {
    id: 30,
    ano: 2023,
    titulo: "Análise dos Dados de Inclusão Sociodigital das Pessoas com Deficiência Intelectual e Múltipla e seus familiares: um Estudo com Assistidos da APAE de Serra Talhada",
    resumo: "A inclusão sociodigital é um fenômeno muito pertinente que busca, dentre outras coisas, garantir acesso e apropriação tecnológica a indivíduos que se encontram em situação de exclusão. As Pessoas com deficiência intelectual e múltipla são um grupo social que possui muitos indivíduos infoexcluídos, sendo que a grande dificuldade para estudo é a carência de dados específicos em relação à infoexclusão desse público, já que os dados disponíveis tratam da situação geral. Nesse sentido, este trabalho desenvolveu um instrumento de pesquisa e através deste, coletou dados dos assistidos da Associação de Pais e Amigos dos Excepcionais do município de Serra Talhada-PE, com o intuito de analisar como se encontra a situação de inclusão sociodigital dos mesmos.",
    palavrasChave: ["Inclusão Sociodigital", "Deficiência Intelectual", "Acessibilidade"],
    categoria: "Acessibilidade e Inclusão",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24830/24651"
  },
  {
    id: 31,
    ano: 2023,
    titulo: "Democracia, Devido Processo Legal e Inteligência Artificial: Dilemas no Processo Administrativo",
    resumo: "O Estado Democrático de Direito é uma forma de limitar poderes absolutistas, tornando a relação entre Estado e Individuo mais justa. Este trabalho visa pontuar questões que digam respeito ao uso de Inteligências Artificiais quando situadas dentro da lógica de Estado, especificamente pensando em processos administrativos que usam do princípio do devido processo legal. Este trabalho usa-se de revisão bibliográfica, em diversos campos, como direito, computação e sociologia do direito, para melhor entender e explicar conceitos e ideias. Conclui que as inferências produzidas por IAs não podem embasar exclusivamente as decisões dos servidores públicos.",
    palavrasChave: ["Inteligência Artificial", "Política", "Democracia", "Direito", "Sociologia"],
    categoria: "Computação e Política",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24831/24652"
  },
  {
    id: 32,
    ano: 2023,
    titulo: "Jornalismo de Dados: transformação digital na produção de notícias",
    resumo: "Este artigo tem como objetivo explorar o uso do jornalismo de dados como uma técnica emergente no campo do jornalismo moderno. Para isso, apresentamos exemplos concretos de matérias e jornais que utilizam essa técnica para coletar, analisar e visualizar grandes conjuntos de dados. Destacamos como o jornalismo de dados permite produzir reportagens mais precisas e factuais, ao mesmo tempo em que identifica padrões e tendências em grandes quantidades de informações. Enfatizamos, também, os desafios que a transformação digital apresenta para o jornalismo, como o combate às fake news, bem como as oportunidades para a produção de conteúdo mais diverso e seguro. Por fim, concluímos que trata-se de uma área promissora e essencial para o jornalismo moderno, contribuindo para uma maior precisão e transparência nas informações divulgadas para a sociedade.",
    palavrasChave: ["Jornalismo", "Coleta E Análise De Dados", "Fake News"],
    categoria: "Computação e Comunicação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24832/24653"
  },
  {
    id: 33,
    ano: 2023,
    titulo: "Viés Racial em Modelos de Inteligência Artificial para Classificação de Melanomas",
    resumo: "O uso de inteligência artificial (IA) para a detecção de câncer de pele tem sido objeto de muita pesquisa e desenvolvimento nos últimos anos. No entanto, estudos recentes sugerem que alguns algoritmos de classificação de câncer de pele podem ter viés racial, com desempenho pior em pacientes com pele mais escura. Nesse artigo, avaliamos o desempenho de um modelo de IA ao classificar melanomas em 10 diferentes tons de pele, de acordo com a Escala Monk. Como resultado, foi observado que os modelos têm pior desempenho para classificar melanomas em peles mais escuras.",
    palavrasChave: ["Inteligência Artificial", "Saúde Pública", "Câncer", "Viés Racial"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24833/24654"
  },
  {
    id: 34,
    ano: 2023,
    titulo: "Utilização do termo saúde digital em comunidades online: análise do debate associado no Reddit",
    resumo: "A ampla utilização de tecnologias computacionais na área de saúde tem proporcionado inovações disruptivas, estabelecendo assim uma nova era chamada de saúde digital. Com o objetivo de buscar uma melhor compreensão acerca de como o termo saúde digital vem sendo discutido em comunidades virtuais na internet, o presente trabalho propõe analisar como o termo saúde digital vem sendo utilizado em comunidades da plataforma Reddit. Os resultados ilustram quais são os assuntos relacionados que mais promovem debate nas publicações, bem como aprofunda-se com uma reflexão sobre a percepção do impacto de saúde digital na comunidade online.",
    palavrasChave: ["Saúde Digital", "Redes Sociais", "Comunidades Virtuais"],
    categoria: "Saúde e Computação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24834/24655"
  },
  {
    id: 35,
    ano: 2023,
    titulo: "Diretrizes Ético-Jurídicas para o Design e Uso de Inteligência Artificial na Administração Pública",
    resumo: "Diretrizes Ético-Jurídicas para o Design e Uso de Inteligência Artificial na Administração Pública",
    palavrasChave: ["Inteligência Artificial", "Ética", "Administração Pública", "Política"],
    categoria: "Computação e Política",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24835/24656"
  },
  {
    id: 36,
    ano: 2023,
    titulo: "O Crunch e seus Impactos na Saúde dos Desenvolvedores da Indústria de Jogos",
    resumo: "Este artigo tem o objetivo de conceituar o crunch, uma prática comum na indústria de jogos que se resume a horas extras não remuneradas e como esta prática tem o potencial de afetar a saúde física e mental dos trabalhadores que sofrem com isso constantemente. A pesquisa estuda a relação entre a perpetuação dessa prática e os mecanismos organizacionais e socioculturais que permeiam a indústria de jogos por meio de revisão de literatura, relatos retirados de sites especializados em jogos e reflexões com um profissional da saúde mental. Por fim, esperamos trazer uma reflexão sobre o assunto e sobre a normalização do excesso de trabalho.",
    palavrasChave: ["Crunch", "Indústria De Jogos", "Saúde", "Ética"],
    categoria: "Saúde e Computação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24836/24657"
  },
  {
    id: 37,
    ano: 2023,
    titulo: "The Impact of Misinformation Promoted by the Brazilian Government on Social Mobility during the COVID-19 Pandemic",
    resumo: "A circulação de desinformação durante a pandemia da COVID19 foi extramente prejudicial ao controle da propagação da doença na sociedade,sendo ainda mais grave quando o discurso desinformativo é propagado por líderes estatais. Nesse sentido, este trabalho visa avaliar como, no caso do Governo Brasileiro, determinado pronunciamento do Presidente da República impactou na mobilidade social do país. A análise foi feita a partir da comparação dos dados proveniente do Google Mobility Trends antes e depois do evento selecionado, tendo como resultado a constatação de uma diminuição no índice de isolamento social após o período em questão.",
    palavrasChave: ["Fake News", "COVID-19", "Comparação De Dados", "Políticas Públicas"],
    categoria: "Desinformação e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24837/24658"
  },
  {
    id: 38,
    ano: 2023,
    titulo: "Análise de Vieses Ideológicos em Produções Textuais do Assistente de Bate-papo ChatGPT",
    resumo: "Este artigo considera a repercussão do ChatGPT na sociedade informatizada, especificamente no aspecto político-ideológico. Partimos da seguinte problematização: como o chatbot da OpenAI se comporta quando o mérito da interpelação é de ordem político-ideológica? Entendemos que as respostas podem contribuir para entender os direcionamentos e perspectivas do banco de dados que o retroalimenta. Metodologicamente, o percurso foi trilhado a partir de interações com o robô conversacional sobre temáticas ideológicas diversas, cujas respostas foram tratadas através da categoria gramatical do adjetivo. A expectativa é que os resultados pautem discussões sobre níveis de interferência sócio-política da inteligência artificial.",
    palavrasChave: ["Inteligência Artificial", "Aprendizado De Máquina", "Política", "Ideologia"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24838/24659"
  },
  {
    id: 39,
    ano: 2023,
    titulo: "Inclusão Digital para Idosos: evolução e percepções",
    resumo: "O Projeto de Extensão de Inclusão Digital para Idosos (ProEIDI) foi concebido em 2016, com o objetivo de incluir o público idoso no mundo tecnológico. Desde a sua criação, já foram atendidos quase 500 alunos, que puderam, de forma didática e objetiva, alcançar recursos que antes tinham dificuldade. Assim, a necessidade de perceber a evolução da tecnologia e atualizar o curso é um papel essencial para os responsáveis do projeto. Esse artigo tem o propósito de exibir a evolução do projeto, apresentar seus resultados e analisar os dados históricos de pesquisa coletados ao longo de sua existência.",
    palavrasChave: ["Inclusão Sociodigital", "Acessibilidade", "Idosos", "Coleta E Análise De Dados"],
    categoria: "Acessibilidade e Inclusão",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24839/24660"
  },
  {
    id: 40,
    ano: 2023,
    titulo: "Avaliação de Funcionalidades e Desenvolvimento de Protótipo de Aplicativo para Tratamento de Depressão",
    resumo: "A depressão é um tópico de relevância na psicologia e com a evolução tecnológica é possível adotar novos métodos de tratamento, como o uso de aplicativos, que abrem oportunidades de melhoria na qualidade de vida e de saúde das pessoas. Então, os desenvolvedores devem prezar pelo auxílio de profissionais da área da saúde, para que as métricas adotadas sejam realmente eficazes e consistentes. Este trabalho apresenta uma pesquisa de funcionalidades a partir de seis aplicativos: Cíngulo, MoodTools, Como Vencer a Depressão, Flow Depression, Minha Cura e Conversa Comigo. Após a avaliação das funcionalidades por 14 psicólogos foi possível avaliar as funcionalidades e desenvolver uma proposta inicial de construção de aplicativo.",
    palavrasChave: ["Saúde Pública", "Depressão", "Aplicativo Móvel"],
    categoria: "Saúde e Computação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24840/24661"
  },
  {
    id: 41,
    ano: 2023,
    titulo: "O potencial da robótica no tratamento terapêutico de crianças com Transtorno do Espectro Autista",
    resumo: "A utilização de robôs personalizados pode ser eficaz para estimular as habilidades de comunicação e interação social das crianças com Transtorno do Espectro Autista (TEA). Porém, para que sejam eficientes e possibilitem que as terapeutas possam implementar diferentes atividades em suas sessões é imprescindível reunir diferentes requisitos. Em vista disso, neste artigo, será apresentada uma pesquisa bibliográfica, a fim de identificar lacunas em literaturas e orientar na criação do robô terapêutico Otto, objetivando solucionar problemas pontuais e apresentando benefícios sociais apresentados pelas crianças com TEA no processo terapêutico, por meio de avaliação multidisciplinar no CRIDAC, instituição parceira do projeto.",
    palavrasChave: ["Saúde Pública", "Autismo", "Robótica", "Crianças"],
    categoria: "Saúde e Computação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24841/24662"
  },
  {
    id: 42,
    ano: 2023,
    titulo: "iGo: Um Protótipo de Software Gamificado para Auxiliar Crianças com Transtorno do Espectro Autista na realização de Atividades de Vida Diária",
    resumo: "As atividades de vida diária referem-se às tarefas rotineiras de autocuidado, como alimentação, higiene pessoal, vestir-se, locomoção e outras atividades básicas. Para indivíduos com Transtorno do Espectro Autista, essas atividades podem representar desafios para a autonomia e independência. Este artigo apresenta como o design centrado no usuário foi utilizado no processo de prototipagem de um aplicativo móvel que auxilia crianças com Transtorno do Espectro Autista na realização de atividades da vida diária. Além disso, são discutidas as versões de usuário do aplicativo iGo, incluindo aquelas para crianças com autismo, bem como para pais e terapeutas e como a Análise do Comportamento Aplicada e da gamificação foram usadas no design da aplicação.",
    palavrasChave: ["Gamificação", "Aplicativo Móvel", "Autismo", "Saúde Pública"],
    categoria: "Saúde e Computação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24842/24663"
  },
  {
    id: 43,
    ano: 2023,
    titulo: "App O.Way: plataforma de monitoramento para analisar fragmentação espacial urbana no Brasil",
    resumo: "A fragmentação espacial é um agravamento e aprofundamento da segregação social urbana. Projetos de pesquisa nesta área consistem em rastrear e seguir determinados sujeitos em seus trajetos cotidianos pelas cidades. Para efetivar este procedimento metodológico foi necessário a elaboração de tecnologias de captação de dados, com o objetivo de desenvolver uma interface denominada Plataforma O.Way, que conta com duas plataformas: mobile e web, bem como a apresentação de testes na cidade de SP, mapeamentos, e análise dos resultados obtidos por pesquisadores envolvidos neste estudo que envolveu 10 cidades brasileiras.",
    palavrasChave: ["Fragmentação Espacial", "Aplicativo Móvel", "Mapeamento"],
    categoria: "Impacto Social e Computação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/24843/24664"
  },
  {
    id: 44,
    ano: 2024,
    titulo: "AllyWatch: Vítimas Colaborando para Combater o Assédio Moral e a Violência Sexual no Ambiente Escolar",
    resumo: "O presente trabalho tem como objetivo auxiliar as vítimas de assédio moral e violência sexual no ambiente escolar. Para tanto, foi desenvolvida uma pesquisa para compreender melhor a extensão do problema. Com base nos dados obtidos, foi desenvolvida uma plataforma que dá apoio às vítimas desses tipos de violência, permitindo que estas possam colaborar para detectar quando há um agressor em comum. As vítimas também têm como compartilhar relatos de abusos, ganhando, assim, um canal de escuta. Por fim, foi feita uma validação do sistema por meio de um Estudo de Grupo Focal, e a plataforma proposta foi considerada bem sucedida em seu objetivo. Espera-se que o software sirva como uma rede de apoio entre vítimas, diminuindo a disparidade entre o número de casos ocorridos e denunciados.",
    palavrasChave: ["Violência", "Assédio", "Sistema De Informação", "Software"],
    categoria: "Impacto Social e Computação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/29504/29307"
  },
  {
    id: 45,
    ano: 2024,
    titulo: "Um Estudo Sobre a Percepção e Atitude dos Usuários de Sistemas Computacionais em Relação à Inteligência Artificial",
    resumo: "Esta pesquisa investiga a percepção dos usuários de sistemas computacionais em relação à Inteligência Artificial (IA), utilizando a escala ATAI – Attitude Towards Artificial Intelligence. Os resultados obtidos a partir de entrevistas com 76 participantes, estratificados em quatro grupos, destacam uma intensa relevância e dependência de sistemas computacionais, bem como a necessidade de abordagens éticas e inclusivas no uso de IA. Por fim, discute-se sobre possíveis caminhos e medidas que se convém tomar no Brasil para a adoção da IA de forma efetiva, ética e responsável e que possa servir como forma de inclusão, equidade e não para ampliar desigualdade.",
    palavrasChave: ["Inteligência Artificial", "ATAI", "Análise", "Ética", "Inclusão"],
    categoria: "Ética Computacional",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/29505/29308"
  },
  {
    id: 46,
    ano: 2024,
    titulo: "Development of an Equity Strategy for Recommendation Systems",
    resumo: "As a highly data-driven application, recommender systems can be affected by data distortions, culminating in unfair results for different groups of data, which can be a reason to affect system performance. Therefore, it is important to identify and resolve issues of unfairness in referral scenarios. We therefore developed an equity algorithm aimed at reducing group injustice in recommender systems. The algorithm was tested on two existing datasets (MovieLens and Songs) with two user clustering strategies. We were able to reduce group unfairness in both data sets by considering the two clustering strategies.",
    palavrasChave: ["Sistema De Informação", "Algoritmo", "Viés De Dados", "Aprendizado De Máquina"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/29506/29309"
  },
  {
    id: 47,
    ano: 2024,
    titulo: "Design Centrado no Usuário para proposta de uma Tecnologia Assistiva para Coordenação Motora Fina",
    resumo: "A Coordenação Motora Fina refere-se ao uso dos músculos das mãos e punhos e está relacionada às atividades functionalis e da vida diária, como alimentação ou estudos. Crianças com Síndrome de Down apresentam deficiência de motricidade fina, que pode ocasionar prejuízos na hipermobilidade articular e no tônus muscular. Considerando essas características e o papel desta habilidade na promoção da independência, este projeto teve como objetivo propor um protótipo de uma Tecnologia Assistiva para auxiliar no desenvolvimento da coordenação motora fina de crianças com Síndrome de Down. Entrevistas, prototipagem e avaliação foram conduzidas com o objetivo de criar e avaliar os protótipos, que foram considerados satisfatórios.",
    palavrasChave: ["Tecnologia Assistiva", "Síndrome De Down", "Acessibilidade", "Inclusão"],
    categoria: "Acessibilidade e Inclusão",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/29507/29310"
  },
  {
    id: 48,
    ano: 2024,
    titulo: "Avaliação da Acessibilidade Digital nos Websites dos Institutos Federais Brasileiros",
    resumo: "Este estudo investiga a acessibilidade dos websites de 27 Institutos Federais, confrontando a questão da aderência insuficiente às diretrizes de acessibilidade WCAG e E-Mag. O propósito deste estudo foi detectar as barreiras que restringem o acesso universal a esses recursos educativos. Empregando uma abordagem que integrou avaliações automatizadas por meio das ferramentas AChecker, ASES e WAVE, mensurou-se o nível de conformidade com os padrões de acessibilidade estabelecidos. Os resultados apontaram deficiências em marcação semântica, navegação e alternativas textuais para conteúdo multimídia, com a necessidade de melhorias substanciais para atingir a conformidade plena. Conclui-se que, apesar dos esforços para melhorar a acessibilidade, ainda há um caminho a ser percorrido para garantir que os websites dos Institutos Federais sejam plenamente acessíveis, enfatizando-se a importância de estratégias direcionadas para o aprimoramento da acessibilidade.",
    palavrasChave: ["Acessibilidade", "Análise", "Institutos Federais", "Inclusão"],
    categoria: "Acessibilidade e Inclusão",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/29508/29311"
  },
  {
    id: 49,
    ano: 2024,
    titulo: "Identificando Padrões de Sexismo na Música Brasileira através do Processamento de Linguagem Natural",
    resumo: "Este trabalho apresenta uma análise de um corpus composto por 138.368 músicas brasileiras a fim de identificar vieses de gênero. Para isso, foram utilizados métodos de Processamento de Linguagem Natural para definir o conjunto de adjetivos mais utilizados para caracterizar homens e mulheres nas canções. Os resultados mostram que o gênero feminino é frequentemente descrito utilizando predicativos que remetem à aparência física, enquanto o gênero oposto é constantemente descrito a partir de sua boa personalidade. Nossos resultados corroboram outros estudos da literatura e jogam luz na discussão sobre a perpetuação do sexismo em nossa sociedade e na necessidade de intervenção para proporcionar equidade de oportunidade para as mulheres.",
    palavrasChave: ["Inteligência Artificial", "Aprendizado De Máquina", "Viés De Gênero", "Processamento De Linguagem Natural", "Análise"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/29509/29312"
  },
  {
    id: 50,
    ano: 2024,
    titulo: "A Lei Geral de Proteção de Dados do Brasil à Luz do Regimento Europeu: Um Exame Comparativo e Prospectivo através de uma Revisão Sistemática",
    resumo: "Com o intuito de exaltar a importância da proteção de dados pessoais, novas legislações foram criadas para promover novos princípios inspirados na cultura de privacidade e proteção de dados. Este trabalho executa uma revisão sistemática considerando o processo histórico, desenvolvimento e adequação da nova Lei Geral de Proteção de Dados do Brasil (LGPD), tendo como base o seu regimento de origem, o Regulamento Europeu de Proteção de Dados (RGPD). O trabalho buscou identificar as aptidões e desafios encontrados na conformidade do RGPD com o objetivo de correlacioná-los à adequação da LGPD, assim como, avaliar as particularidades e as implementações pioneiras da LGPD apresentando exemplos nacionais e internacionais. Como resultado da revisão foi possível prospectar um conjunto de desafios, de benefícios e de recomendações para a observância a LGPD tendo como base o já enfrentado na implementação da RGPD.",
    palavrasChave: ["LGPD", "Proteção De Dados", "Privacidade", "Análise"],
    categoria: "Segurança de dados",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/29510/29313"
  },
  {
    id: 51,
    ano: 2024,
    titulo: "Os Potenciais Impactos Ético Legais da Aplicação de Modelos Generativos de Áudio na Música",
    resumo: "Com os recentes avanços em algoritmos generativos, o uso de modelos para geração de áudio se torna cada vez mais comum trazendo consigo diversas implicações, em particular, no campo da música. No entanto, poucas pesquisas discutem tais impactos, de forma que a literatura carece de estudos que discorram sobre essa questão. Este artigo discute as principais consequências éticas do crescente uso de modelos generativos de áudio na indústria musical. O foco está nos possíveis impactos negativos, como o perigo de apagamento de gêneros musicais marginais, o esgotamento de criatividade, e os impactos de modelos generativos no meio ambiente, além de potenciais implicações ético-legais. Recomendações são feitas para evitar, ou ao menos mitigar, os potenciais riscos e danos discutidos.",
    palavrasChave: ["Inteligência Artificial", "Música", "Algoritmos Generativos", "Ética"],
    categoria: "Ética Computacional",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/29511/29314"
  },
  {
    id: 52,
    ano: 2024,
    titulo: "Responsabilidade Moral Distribuída: Contribuições para o Debate sobre Inteligência Artificial Ética e Responsável",
    resumo: "A construção de sistemas de IA se dá em ambientes distribuídos e heterogêneos, envolvendo uma extensa rede de agentes humanos, artificiais e híbridos, interações e ações. O objetivo deste trabalho é contribuir no debate sobre IA ética e responsável, recorrendo ao quadro analítico e conceitual de Luciano Floridi enfatizando a sua abordagem de responsabilidade moral distribuída como uma via possível e plausível para lidar com a dificuldade de localização da agência e atribuição de reponsabilidade moral considerando a vasta, diversa e distribuída rede de agentes envolvidos na construção de sistemas inteligentes.",
    palavrasChave: ["Inteligência Artificial", "Ética", "Moral", "Sistemas Inteligentes"],
    categoria: "Ética Computacional",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/29512/29315"
  },
  {
    id: 53,
    ano: 2024,
    titulo: "Transformando TVs BOX em Minicomputadores para Educação Digital: uma abordagem sustentável e acessível",
    resumo: "Esta pesquisa propõe descaracterizar TVs BOX apreendidas e cedidas pela Receita Federal e transformá-las em minicomputadores, com intuito de implementar um laboratório de informática em uma escola pública da zona rural da cidade de Arinos-MG. A metodologia envolve uma abordagem de pesquisa-ação, compreendendo a análise das características técnicas das TVs BOX, seleção do sistema operacional adequado e resolução de desafios técnicos encontrados. Os resultados esperados incluem o sucesso na preparação das TVs BOX e montagem do laboratório para doação à escola da zona rural selecionada, com impactos positivos na educação digital. Essa iniciativa oferece uma solução sustentável e acessível para enfrentar os desafios educacionais, contribuindo para um futuro mais igualitário e tecnologicamente capacitado.",
    palavrasChave: ["Educação", "Microcomputadores", "Zona Rural", "Inclusão"],
    categoria: "Computação Aplicada à Educação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/29513/29316"
  },
  {
    id: 54,
    ano: 2024,
    titulo: "O Paradoxo da IA para Sustentabilidade e a Sustentabilidade da IA",
    resumo: "A popularização da inteligência artificial (IA) nos últimos anos tem gerado um impacto cada vez maior em diversos setores, fazendo com que seja necessária a análise das consequências de sua utilização frente a questões éticas e ambientais. Na área ambiental, pesquisas estão sendo realizadas no sentido de mensurar o impacto da utilização de algoritmos de IA em termos de consumo de energia e consequente emissão de dióxido de carbono equivalente (CO2e). Neste artigo, será abordado sobre o paradoxo envolvendo IA e sustentabilidade, com ênfase na importância de relatar o consumo de energia nas pesquisas envolvendo aprendizado de máquina(AM) e a viabilidade do uso de ferramentas online para realizar a medição da quantidade de CO2e emitida.",
    palavrasChave: ["Inteligência Artificial", "Ética", "Impacto Ambiental", "Paradoxo", "Sustentabilidade", "Aprendizado De Máquina", "Ferramentas Online"],
    categoria: "Computação Verde",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/29514/29317"
  },
  {
    id: 55,
    ano: 2024,
    titulo: "Algoritmo de aprendizagem de máquina para geração de regras associando perfis de comportamento adaptativo com transtornos do neurodesenvolvimento",
    resumo: "Transtornos do neurodesenvolvimento são condições clínicas de início na infância que acarretam prejuízos no comportamento adaptativo em diferentes áreas ao longo da vida do indivíduo. A identificação precoce desses prejuízos é essencial para uma melhor integração social, familiar e educacional das crianças. Nesse cenário, esta pesquisa apresenta o uso de um algoritmo de aprendizagem de máquina para descoberta de regras, Apriori, a partir de dados da avaliação do comportamento adaptativo de crianças e adolescentes usando o instrumento Adaptive Behavior Assessment System (ABAS-3). Os resultados apontaram regras que associam transtornos do neurodesenvolvimento a menores escores nos itens do instrumento, indicando aqueles com maiores correlações com os sintomas dos transtornos.",
    palavrasChave: ["Aprendizado De Máquina", "Inclusão", "ABAS", "Comportamento Adaptativo"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/29515/29318"
  },
  {
    id: 56,
    ano: 2024,
    titulo: "Contrainteligência em Engenharia Social: Aprimorando a Defesa Cibernética da Sociedade",
    resumo: "A engenharia social representa um desafio significativo para o avanço da segurança da informação, especialmente quando se considera o fator humano nos sistemas de informação. A literatura descreve um framework de funcionamento da engenharia social que aborda mecanismos de ação e emoções humanas. Por outro lado, este trabalho propõe um framework de contrainteligência com o objetivo de neutralizar ataques ou mitigar danos causados pela engenharia social. A pesquisa em questão está em andamento e necessita de validações mais robustas para fornecer de maneira abrangente o framework validado e devidamente testado, seguindo os parâmetros éticos e legais estabelecidos.",
    palavrasChave: ["Engenharia Social", "Segurança Da Informação", "Framework"],
    categoria: "Segurança de dados",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/29516/29319"
  },
  {
    id: 57,
    ano: 2024,
    titulo: "IA burlada: elaboração de prompts maliciosos no ChatGPT e seus impactos para a sociedade",
    resumo: "A crescente ubiquidade da inteligência artificial na sociedade moderna traz consigo uma série de desafios éticos e sociais. Este artigo aborda especificamente a questão dos prompts maliciosos em chatbots, focando no ChatGPT como estudo de caso. Ao explorar a elaboracão e o uso desses prompts, revelamos pontos críticos que podem resultar em impactos adversos significativos para a sociedade. Analisamos como entradas maliciosas podem induzir comportamentos prejudiciais, disseminar desinformação, promover discriminação e até mesmo facilitar atividades ile gais. Ao destacar esses problemas, destacamos a urgência de implementar me didas para mitigar esses riscos e promover o uso ético e responsável da IA em chats e outras aplicações.",
    palavrasChave: ["Inteligência Artificial", "Ética", "Desinformação", "ChatGPT", "Impactos Sociais"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/29517/29320"
  },
  {
    id: 58,
    ano: 2024,
    titulo: "Análise de ferramentas para detecção de textos científicos gerados por Inteligência Artificial (ChatGPT)",
    resumo: "Este artigo analisa o desempenho de quatro ferramentas para detecção de artigos gerados por inteligência artificial (IA), Writer AI Content Detector, GPT Zero, Zero GPT e Quillbot AI Content Detector. Os detectores são avaliados em um conjunto de dados de 30 artigos gerados em português no ChatGPT 3.5 e 10 artigos escritos por pessoas reais. Os resultados obtidos do experimento mostram a eficácia do Zero GPT em categorizar conteúdo produzido por máquinas, alcançando a acurácia de 97,50%, desempenho equiparável ao estado da arte. No entanto, foram encontrados desafios em identificar textos gerados artificialmente, a investigação sugere a necessidade de melhorias e explorações contínuas para aperfeiçoar o processo de identificação de conteúdo gerados artificialmente.",
    palavrasChave: ["Inteligência Artificial", "Textos Científicos", "ChatGPT"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/29518/29321"
  },
  {
    id: 59,
    ano: 2024,
    titulo: "Ethical reflections on the use of Generative Artificial Intelligence in the academic sphere: writing and authorship",
    resumo: "Generative Artificial Intelligence (GenAI) is emerging as a promising tool in academic production, offering the potential to help with literature reviews, content creation and idea generation. However, the use of AI raises ethical debates related to authorship, plagiarism and intellectual property. Therefore, regulating the use of AI in the academic sphere is necessary, through a dialog between the academic community, companies and governments that defines guidelines that consider principles such as transparency, justice, equity, responsibility and beneficence. The future of academic production will depend on the integration of AI with human expertise and judgment. Thus, this article is a comprehensive review of the existing literature on Generative Artificial Intelligence, ethics and intellectual property, synthesizing a solid knowledge base for discussing the use of these intelligent mechanisms within academic production.",
    palavrasChave: ["Inteligência Artificial", "Ética", "Plágio"],
    categoria: "Ética Computacional",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/29519/29322"
  },
  {
    id: 60,
    ano: 2024,
    titulo: "A Democracia na Era Digital: O 'Plenário Virtual' como Ferramenta Web para o Engajamento Político",
    resumo: "Este artigo apresenta o sistema Plenário Virtual como uma ferramenta inovadora voltada para promover a conscientização política e o empoderamento do cidadão por meio de uma experiência interativa e educativa. Ao simular a atuação de um vereador, os usuários recebem projetos de lei nos quais devem votar por sua aprovação. Ao final, o sistema fornece uma avaliação comparativa da ideologia política do usuário com os dados reais dos vereadores da CMBH. Nosso sistema inclui mecanismos de coleta e processamento de dados e uma arquitetura Web robusta. Nossa avaliação de usabilidade demonstrou que ele possui uma interface amigável e intuitiva, servindo como uma ferramenta valiosa para fortalecer a consciência e engajamento político.",
    palavrasChave: ["Política", "Ferramenta Web", "Conscientização", "Usabilidade", "Democracia"],
    categoria: "Computação e Política",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/29520/29323"
  },
  {
    id: 61,
    ano: 2025,
    titulo: "Mapping LGPD Principles to Ethical Principles in the Context of Artificial Intelligence",
    resumo: "The intersection between the ethical principles of the Brazilian General Data Protection Law (LGPD) and Artificial Intelligence (AI) presents a significant challenge in regulating data usage and addressing ethical risks. This study investigates the compatibility between these principles by identifying their points of convergence and divergence, as well as the practical challenges involved in their application. The research draws on a combination of literature review, document analysis, and a survey exploring participants' perceptions of key issues such as transparency, security, accountability, and privacy. Findings reveal a strong alignment between the LGPD's principles and the ethical values underlying AI. However, important challenges remain, including the absence of specific AI regulation, difficulties related to algorithmic explainability, and uncertainty regarding accountability. The study underscores the urgent need for more robust technical and regulatory frameworks to ensure the responsible development and deployment of AI systems that uphold individuals' fundamental rights.",
    palavrasChave: ["LGPD", "Inteligência Artificial", "Ética", "Proteção De Dados"],
    categoria: "Ética Computacional",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35931/35718"
  },
  {
    id: 62,
    ano: 2025,
    titulo: "Ferramenta Educacional para Avaliação e Melhoria do Nível de Conscientização em Segurança da Informação",
    resumo: "Através do avanço da tecnologia na comunicação, também foram aprimoradas as maneiras para roubar dados sensíveis por meio de golpes cibernéticos. Neste contexto, este artigo descreve o De Olho na Isca, um website desenvolvido para conscientizar e avaliar o nível de conhecimento da população brasileira em relação a ataques envolvendo Engenharia Social nos mais diversos cenários digitais. Os resultados obtidos a partir das respostas de 70 participantes destacam positivamente um bom conhecimento dos usuários acerca do tema. Porém, o estudo também demonstra pontos que devem ser melhor esclarecidos para a população, como o cenário de golpes via contas falsas em redes sociais.",
    palavrasChave: ["Engenharia Social", "Segurança Da Informação", "Conscientização", "Ferramenta Educacional", "Golpes Digitais"],
    categoria: "Segurança de dados",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35932/35719"
  },
  {
    id: 63,
    ano: 2025,
    titulo: "Privacidade na era do 5G: problemas, princípios da LGPD e impactos sociais",
    resumo: "Com a chegada do 5G, além da ampliação e melhoria da conectividade, surgem novos desafios relacionados à segurança das informações dos usuários. Diante disso, este artigo investiga as implicações da tecnologia 5G para a privacidade, examinando sua conformidade com os princípios estabelecidos pela Lei Geral de Proteção de Dados (LGPD). Para tanto, foi realizada uma revisão ad hoc que mapeou e classificou os principais problemas em três categorias distintas. Em seguida, essas categorias foram analisadas para identificar possíveis infrações aos princípios da LGPD e suas implicações para diferentes segmentos da sociedade, especialmente aqueles mais vulneráveis à exposição de dados.",
    palavrasChave: ["LGPD", "Segurança Da Informação", "Privacidade", "5G"],
    categoria: "Segurança de dados",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35933/35720"
  },
  {
    id: 64,
    ano: 2025,
    titulo: "Um estudo sobre vieses de gênero em modelos de PLN aplicado em histórias geradas pelo GPT-3.5 e Gemini",
    resumo: "Este trabalho tem como foco a análise crítica dos vieses de gênero presentes em modelos de Processamento de Linguagem Natural (PLN), dado seu impacto nas aplicações sociais da inteligência artificial, especialmente em relação às inteligências artificiais generativas. A pesquisa buscou entender como esses vieses são reproduzidos em textos gerados por modelos como GPT e Gemini. Para isso, o modelo de PLN BERT foi treinado para inferir o gênero a qual se refere o texto. O estudo utilizou a base de dados md_gender_bias para investigar esses vieses, destacando a relevância de analisar o impacto social das IAs, especialmente quando usadas sem considerar esses vieses. A partir da análise dos resultados obtidos, foi possível confirmar a presença de viés histórico, confirmação e seleção nesses modelos.",
    palavrasChave: ["Análise", "Viés De Gênero", "Processamento De Linguagem Natural", "Inteligência Artificial", "ChatGPT", "Gemini", "PLN BERT"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35934/35721"
  },
  {
    id: 65,
    ano: 2025,
    titulo: "Impacto dos Grandes Modelos de Linguagem no Ensino de Computação: Percepção dos Estudantes sobre Aprendizado e Dependência",
    resumo: "Os Grandes Modelos de Linguagem (GML) estão cada vez mais presentes no ambiente educacional, sendo utilizados por alunos como ferramentas de apoio ao aprendizado. Este estudo investiga a percepção dos estudantes sobre o impacto dessas tecnologias no ensino de computação, analisando benefícios, desafios e possíveis implicações no desenvolvimento acadêmico. Para isso, foi conduzida uma pesquisa quantitativa e qualitativa com 69 participantes, por meio de um questionário estruturado. Os resultados indicam que a maioria dos alunos percebe os GML como facilitadores do aprendizado, destacando a agilidade na busca por informações e a personalização do ensino como vantagens. No entanto, preocupações foram levantadas sobre a confiabilidade das respostas, a dependência excessiva e o impacto na autonomia dos estudantes. Diante desses achados, este estudo reforça a necessidade de diretrizes que incentivem o uso equilibrado dos GML, garantindo que sua aplicação otimize o aprendizado sem comprometer o desenvolvimento do pensamento crítico e da resolução de problemas.",
    palavrasChave: ["GML", "Educação", "Ferramentas Educacionais", "Inteligência Artificial"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35935/35722"
  },
  {
    id: 66,
    ano: 2025,
    titulo: "Bridging the Digital Divide: Understanding Technological Anxiety Toward AI in the Next Generation of IT Professionals",
    resumo: "This study investigates the perception of AI-driven job displacement among computing students. Using a machine learning approach with psychometric data, the analysis identified key factors influencing students' fear of replacement, including academic program, semester, learning strategies, and proficiency in using LLMs. Results show that students with less exposure to AI and those relying on memorization report higher anxiety, while those trained to develop and critically engage with GenAI tools exhibit more confidence. This work highlights the importance of curriculum design, AI literacy, and ethical reflection to prepare students for an AI-driven future.",
    palavrasChave: ["Inteligência Artificial", "Aprendizado De Máquina", "Análise", "LLMs", "Desemprego"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35936/35723"
  },
  {
    id: 67,
    ano: 2025,
    titulo: "Análise de Ferramentas de Detecção de IA para Textos Científicos em Português Gerados por ChatGPT, Gemini e DeepSeek",
    resumo: "Este estudo investigou a eficácia de cinco ferramentas de detecção de IA (ZeroGPT, JustDone AI Detector, Writer AI Detector, Seo AI Detector e Summarizer AI Detector) na identificação de textos científicos em português gerados por diferentes modelos de linguagem (ChatGPT, Gemini e DeepSeek), comparando-as com amostras de controle escritas por humanos. A pesquisa utilizou 50 manuscritos e métricas de erro (MAE e RMSE) para avaliar o desempenho dos detectores. Os resultados revelaram que o ZeroGPT apresentou a maior precisão na detecção de conteúdo gerado por IA, com os menores erros médios para textos sintéticos. No entanto, mesmo o ZeroGPT demonstrou uma taxa de falsos positivos ao classificar textos humanos. As outras ferramentas exibiram limitações como altas taxas de falsos positivos, baixa sensibilidade na detecção de IA em português ou inconsistência nos resultados. A análise conclui que, embora o ZeroGPT seja a ferramenta mais eficaz entre as avaliadas, a ausência de uma solução perfeita sublinha a necessidade de avanços contínuos na tecnologia de detecção de IA para garantir a integridade da produção científica.",
    palavrasChave: ["Inteligência Artificial", "Textos Científicos", "ChatGPT", "Gemini", "DeepSeek", "MAE", "RMSE", "ZeroGPT", "Detecção De IA"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35937/35724"
  },
  {
    id: 68,
    ano: 2025,
    titulo: "How Metacognition Shapes Higher Education Adoption of LLMs: A Structural Equation Modeling Approach",
    resumo: "Large Language Models (LLMs) are transforming education by facilitating adaptive learning experiences, yet their societal acceptance remains vital for successful integration. This study investigates the relationship between metacognition and LLM acceptance, with academic burnout as a mediating factor. Using Structural Equation Modeling (SEM), we analyzed validated psychometric data from 178 computer science students, drawn from a published dataset. Results show that metacognition significantly enhances LLM acceptance (β² = 0.220) and reduces academic burnout (β² = 0.038). While burnout positively predicts LLM acceptance (β² = 0.067), its indirect effect was negative, revealing a suppressor effect: students using LLMs metacognitively tend to experience less burnout, yet the beneficial impact on acceptance stems from proactive, strategic engagement—not from stress relief.",
    palavrasChave: ["Inteligência Artificial", "LLMs", "Educação", "Aprendizado De Máquina", "MEE", "Análise", "Ciência Da Computação"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35937/35725"
  },
  {
    id: 69,
    ano: 2025,
    titulo: "Me deixe pensar sobre isso! uma análise do uso de CoT para identificar vieses nas respostas de LLM para o Português Brasileiro",
    resumo: "Este trabalho investiga a eficácia da técnica Chain-of-Thought Prompting (CoT) na identificação e mitigação de vieses em respostas provenientes de modelos de linguagem em larga escala (LLM) para o português brasileiro. Utilizando os modelos GPT-4o mini e Sabiá-3, foram testadas diferentes técnicas de prompting: Zero-Shot, Zero-Shot-CoT e CoT. Os resultados indicam que a técnica CoT se mostrou mais eficiente na detecção de viés étnico-racial, enquanto a técnica Zero-Shot se destacou na identificação de vieses de gênero, etário e de religião. O Sabiá-3 demonstrou menor tendência à perpetuação de estereótipos em comparação ao GPT-4o mini, o que sugere que a especificidade do modelo quanto ao contexto brasileiro permite que o mesmo identifique de forma mais criteriosa estereótipos nocivos e aplique mecanismos de filtragem mais eficazes.",
    palavrasChave: ["COT", "Inteligência Artificial", "LLMs", "Viés Racial", "Viés De Gênero", "Estereótipos", "Ética"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35939/35726"
  },
  {
    id: 70,
    ano: 2025,
    titulo: "Marketing Jurídico Digital na Amazônia: Estratégias e Desafios na Região de Integração de Carajás",
    resumo: "Este trabalho analisa o marketing jurídico digital na Região de Integração (RI) de Carajás, no Pará, evidenciando a necessidade de aprimoramento nas práticas de divulgação de serviços jurídicos dentro dos limites éticos estabelecidos pela Ordem dos Advogados do Brasil (OAB). A pesquisa, de natureza quantitativa, associada um estudo de caso real, revela que muitos advogados na região ainda utilizam práticas limitadas, apresentando desafios como a resistência à tecnologia e a falta de planejamento estratégico. Como resultados, são apresentados indicadores de que postagens com pouco texto e formatos interativos, como carrosséis, geram maior engajamento, além de um conjunto de diretrizes para postagens em redes sociais.",
    palavrasChave: ["Marketing Digital", "Divulgação", "Serviços Jurídicos", "OAB", "Resistência A Tecnologia", "Planejamento Estratégico"],
    categoria: "Computação e Comunicação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35940/35727"
  },
  {
    id: 71,
    ano: 2025,
    titulo: "Incorporando Gamificação ao Método ABACADA: Propostas para jogos digitais",
    resumo: "Este artigo apresenta um projeto conduzido para propor e definir estratégias de gamificação para jogos digitais do método ABACADA. O ABACADA é um método de alfabetização utilizado para alfabetizar pessoas que não se adaptam ao método tradicional. O ABACADA inclui atividades lúdicas, mas não incorpora abordagens baseadas em jogos, as quais podem contribuir para o engajamento e interesse dos alunos. Neste projeto, foram analisadas e propostas mecânicas de gamificação e perfis de usuários que poderiam apoiar o ABACADA. Protótipos da proposta foram elaborados e avaliados por docentes que utilizam o método, que a consideraram promissora e sugeriram melhorias para ampliação da gamificação no ABACADA.",
    palavrasChave: ["Gamificação", "Educação", "Abacada", "Atividades Lúdicas"],
    categoria: "Computação Aplicada à Educação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35941/35728"
  },
  {
    id: 72,
    ano: 2025,
    titulo: "Uma Proposta de Requisitos Não Funcionais para Aderência de Sistemas Computacionais ao Projeto de Lei de Regulamentação da Inteligência Artificial",
    resumo: "Este trabalho propõe requisitos não funcionais (RNFs) para promover a aderência de sistemas de inteligência artificial (IA) ao PL 2338/2023, que visa regular o desenvolvimento e a utilização ética da IA no país, dada a crescente necessidade de regulamentação da IA, que apresenta desafios éticos e técnicos, especialmente em sistemas complexos e de alto risco. A metodologia adotada incluiu uma análise exploratória do PL e da literatura para a identificação dos requisitos, com a aplicação de uma taxonomia unificada de RNFs. A partir desta análise foram identificados 32 requisitos não funcionais, categorizados em sete grupos de requisitos legais de produto. Os principais resultados incluem a organização dos requisitos, sua conformidade com a literatura especializada e a análise das vantagens de seu uso no desenvolvimento de sistemas de IA. O trabalho contribui para a conformidade legal e para a implementação de práticas de governança que garantam a segurança, transparência e ética nos sistemas de IA, estabelecendo uma base para futuras pesquisas que validem e ampliem o conjunto de requisitos propostos.",
    palavrasChave: ["Regulamentação De IA", "Requisitos Não Funcionais", "PL 2338/2023", "Engenharia De Software", "Ética Em IA"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35942/35729"
  },
  {
    id: 73,
    ano: 2025,
    titulo: "Uma Análise Abrangente do Workshop sobre as Implicações da Computação na Sociedade de 2020 a 2024",
    resumo: "Este artigo apresenta uma análise abrangente das pesquisas apresentadas nas primeiras cinco edições do Workshop sobre as Implicações da Computação na Sociedade, de 2020 a 2024. Utilizando uma abordagem que combina análise de conteúdo e métodos bibliométricos, investigamos os temas predominantes, as tendências de pesquisa, a rede de autoria e a produtividade científica do evento. Os resultados revelam as principais áreas de interesse da comunidade acadêmica em relação às implicações sociais e éticas da Computação, apontando possíveis direções para futuras pesquisas nessa área.",
    palavrasChave: ["Análise", "Computação Em Sociedade", "Workshop", "Método Bibliométrico", "Implicações Sociais"],
    categoria: "Computação e Comunicação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35943/35730"
  },
  {
    id: 74,
    ano: 2025,
    titulo: "Levantamento e Análise Qualitativa de Bases de Dados de Fake News em Português",
    resumo: "A disseminação de fake news nas redes sociais é um problema cada vez maior, influenciando diretamente a opinião pública. Para combatê-las, algoritmos de inteligência artificial são usados, mas a eficácia deles depende da qualidade das bases de dados. Nesse sentido, há ainda um número baixo de bases em língua portuguesa. Assim, este trabalho realizou um levantamento das bases de notícias falsas em português, com enfoque no contexto brasileiro. Dentre os achados, destaca-se a quantidade reduzida de instâncias nas bases encontradas quando comparadas às de língua inglesa.",
    palavrasChave: ["Fake News", "Redes Sociais", "Inteligência Artificial", "Análise Qualitativa"],
    categoria: "Desinformação e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35944/35731"
  },
  {
    id: 75,
    ano: 2025,
    titulo: "Capitalismo de Vigilância e a Coleta de Dados Online",
    resumo: "Este artigo investiga o fenômeno do capitalismo de vigilância e suas implicações para a coleta e uso de dados pessoais na web. Através da análise empírica do tráfego de rede, demonstramos como as técnicas de rastreamento e direcionamento de dados, inicialmente desenvolvidas para fins comerciais, permeiam a experiência online dos usuários, revelando um ecossistema complexo onde informações pessoais são continuamente extraídas, compartilhadas e utilizadas para influenciar o comportamento dos usuários. Além disso, discutimos a preocupante possibilidade da aplicação dessas técnicas para a disseminação de notícias falsas e desinformação, representando uma ameaça direta à integridade democrática. Ao fornecer evidências empíricas, podemos contribuir para o desenvolvimento de políticas e ferramentas eficazes para proteger a integridade da informação e fortalecer a democracia na era digital.",
    palavrasChave: ["Capitalismo De Vigilância", "Dados Pessoais", "Privacidade", "Segurança Da Informação", "Fake News", "Democracia"],
    categoria: "Segurança de dados",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35944/35732"
  },
  {
    id: 76,
    ano: 2025,
    titulo: "A Machine Learning Framework for Ranking Cities Considering Crimes Against Women: A Case Study in Northeast Brazil",
    resumo: "Violence against women is a profound infringement of human rights and stands as one of the most severe public health issues globally. It is comprehensively defined as any act of physical, sexual, psychological, or property-based violence perpetrated against a woman, constituting behaviour that transgresses women's dignity, rights, and freedom. In this context, this study introduces a machine learning model aimed at classifying cities based on the potential prevalence of violence against women. The model is trained utilizing a comprehensive city database, generating classifications of cities into three levels: low, medium, and high violence. The chosen algorithm, ExtraTrees, demonstrated a noteworthy accuracy rate of 90%.",
    palavrasChave: ["Aprendizado De Máquina", "Violência Contra A Mulher", "Classificação De Cidades", "Nordeste Do Brasil", "Segurança Pública"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35944/35733"
  },
  {
    id: 77,
    ano: 2025,
    titulo: "Desenvolvimento de um Protótipo de Aplicativo para Preservação Linguística da Comunidade Indígena Krikati: uma abordagem design science research",
    resumo: "Este artigo apresenta o desenvolvimento de um protótipo de aplicativo para a preservação linguística da comunidade indígena Krikati, utilizando a abordagem Design Science Research (DSR). O projeto visa facilitar a comunicação entre os Krikati e a sociedade não indígena, promovendo a aprendizagem do português e a preservação da língua Krikati. A pesquisa envolveu uma revisão das necessidades linguísticas da comunidade e o desenvolvimento de uma ferramenta que respeita suas particularidades culturais. Os resultados preliminares indicam que o protótipo é um passo importante para a valorização da língua e cultura Krikati, alinhado com os direitos previstos no artigo 231 da Constituição Federal.",
    palavrasChave: ["Aplicativo Móvel", "Comunidades Indígenas", "DSR", "Ferramenta Cultural"],
    categoria: "Acessibilidade e Inclusão",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35944/35734"
  },
  {
    id: 78,
    ano: 2025,
    titulo: "Planejamento Estratégico do Posicionamento Policial em Estádios de Futebol com Análise Multicritério e Clustering Não Supervisionado",
    resumo: "Este estudo propõe uma metodologia que combina auxílio à decisão multicritério (MCDA) e análise de cluster para otimizar a localização de unidades policiais e estacionamentos em Recife, Brasil, durante eventos esportivos de risco. O algoritmo K-means agrupa ocorrências criminais em clusters homogêneos, e o método PROMETHEE hierarquiza as melhores localizações com base em três critérios: número de instalações (N), distância média das ocorrências (D) e nível de cobertura (C). A análise de dados criminais identifica áreas de alto risco, auxiliando na alocação estratégica de recursos e no aprimoramento da segurança pública que impacta diretamente a sociedade.",
    palavrasChave: ["Segurança Pública", "Clustering", "K-Means", "Análise"],
    categoria: "Impacto Social e Computação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35944/35735"
  },
  {
    id: 79,
    ano: 2025,
    titulo: "Assistente Virtual Inteligente para Instituições Educacionais: Aplicação da Técnica RAG no IFBot",
    resumo: "Este trabalho apresenta o IFBot, um chatbot de inteligência artificial desenvolvido para otimizar o acesso a informações institucionais em uma instituição de ensino. A solução utiliza a abordagem RAG (Retrieval-Augmented Generation), combinando web scraping e análise de documentos públicos para fornecer respostas automatizadas e confiáveis. Como resultado preliminar, espera-se que a ferramenta reduza demandas presenciais, com testes previstos para avaliar a taxa de resposta correta e o grau de satisfação dos usuários. Além disso, são discutidos impactos sociais e culturais, como inclusão digital e tratamento ético de dados sensíveis.",
    palavrasChave: ["Inteligência Artificial", "Educação", "Instituições De Ensino", "IFBot", "RAG", "Web Scraping", "Automatização"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35944/35736"
  },
  {
    id: 80,
    ano: 2025,
    titulo: "Justiça Algorítmica: Instrumentalização, Limites Conceituais e Desafios na Engenharia de Software",
    resumo: "Este artigo descreve uma pesquisa em andamento com o objetivo de compreender o conceito de justiça no campo da engenharia de software, os fatores que fundamentam a criação e instrumentalização desses conceitos e as limitações enfrentadas pela engenharia de software ao aplicá-los. A expansão do campo de estudo denominado de 'justiça algorítmica' consiste fundamentalmente na criação de mecanismos e procedimentos matemáticos e formais para conceituar, avaliar e reduzir vieses e discriminações causadas por algoritmos. Realizamos um mapeamento sistemático no contexto de justiça na engenharia de software, compreendendo as métricas e definições de justiça algorítmica, assim como os procedimentos e técnicas para sistemas de tomada de decisão mais justos. Propomos, então, uma discussão acerca das limitações que surgem devido à compreensão de justiça como um atributo de software e resultado de tomadas de decisões, assim como a influência que o campo sofre decorrente da construção do pensamento computacional, que constantemente é desenvolvido em torno de abstrações. Por fim, refletimos sobre possíveis caminhos que podem nos ajudar a superar os limites da justiça algorítmica.",
    palavrasChave: ["Justiça Algorítmica", "Engenharia De Software", "Vieses Algorítmicos", "Pensamento Computacional"],
    categoria: "Ética Computacional",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35944/35737"
  },
  {
    id: 81,
    ano: 2025,
    titulo: "Sistemas de Recomendação e Etnoeducação no Brasil: Desafios e Potencial Inclusivo",
    resumo: "Ao personalizar conteúdos, os sistemas de recomendação podem transformar a experiência educacional, mas vieses culturais podem comprometer a inclusão e a interculturalidade. Este artigo discute o impacto desses sistemas na etnoeducação no Brasil, destacando tanto seu potencial para valorizar a diversidade cultural quanto os desafios éticos e técnicos envolvidos. Argumenta-se que sua adoção requer estratégias que assegurem a representatividade étnica e linguística. Para isso, sugerem-se propostas para o desenvolvimento de sistemas de recomendação culturalmente responsivos, contribuindo para o debate sobre inteligência artificial educacional alinhada à pluralidade cultural e à equidade.",
    palavrasChave: ["Inclusão", "Vieses Culturais", "Etnoeducação", "Ética", "Inteligência Artificial"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35944/35738"
  },
  {
    id: 82,
    ano: 2025,
    titulo: "Uma Abordagem Integrada para Detecção de Discurso de Ódio em Mídias Sociais Utilizando Vetorização de Textos e Emojis",
    resumo: "Este artigo propõe uma abordagem integrada para detecção de discurso de ódio em mídias sociais, combinando três dimensões principais: (1) fusão de datasets em português brasileiro (HateBR e TuPy-E), (2) processamento conjunto de textos e emojis, e (3) arquitetura classificatória em duas etapas (binária e multiclasse). Utilizando o modelo BERTimbau adaptado para capturar relações semânticas e representações de emojis, o sistema realiza primeiro uma classificação binária (ódio vs não-ódio) seguida de categorização específica (Xenofobia, gênero/sexualidade, etc). Os resultados alcançaram 85% de acurácia na etapa binária e até 86% em categorias específicas. Discute-se a relação entre volume de dados e desempenho, bem como estratégias futuras para aprimoramento do modelo, incluindo o uso de LLMs (Large Language Models) e integração de metadados.",
    palavrasChave: ["Aprendizado De Máquina", "Processamento De Linguagem Natural", "BERTimbau", "Redes Sociais", "Classificação De Texto"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35944/35739"
  },
  {
    id: 83,
    ano: 2025,
    titulo: "Bridging AI and Psychology: A RAG-Driven Approach to Inhibitory Control and ADHD Interventions",
    resumo: "This study explores the integration of Retrieval-Augmented Generation (RAG) into Artificial Intelligence (AI) systems to enhance psychological support, particularly in ADHD interventions and Inhibitory Control assessment. To achieve this, the GPT-4o model was used in conjunction with structured databases of therapeutic dialogues to improve mental health intervention, cognitive evaluation, and professional training. In addition, prompt engineering was used as an inference technique through text-based instructions, and an experimental evaluation was conducted using a predefined set of prompts designed to measure contextual consistency, ethical compliance, and technical accuracy. The results indicate that integrating retrieval mechanisms improves AI-generated responses by providing more contextually relevant and accurate information, demonstrating the model's enhanced capability to process complex contextual queries.",
    palavrasChave: ["Inteligência Artificial", "RAG", "GPT-4o", "Saúde Mental", "TDAH", "Psicologia"],
    categoria: "Saúde e Computação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35944/35740"
  },
  {
    id: 84,
    ano: 2025,
    titulo: "Extração de Notícias sobre Segurança Pública para Desenvolvimento de Corpora em português: uma análise preliminar em cidades do nordeste brasileiro",
    resumo: "Esta pesquisa concentra-se na coleta de artigos de notícias relacionados à segurança pública para a construção de um corpus abrangente em português. Atualmente, o estudo está na fase de aquisição e processamento de textos noticiosos por meio de web scraping em sites e blogs, trazendo uma análise preliminar sobre os dados levando em consideração algumas cidades Brasileiras, adotando como metodologia a compreensão e estrutura dos sites, definição dos termos e buscas, armazenamento, processamento e análise dos dados. O principal objetivo é criar um recurso linguístico que possa ser utilizado em diversas aplicações de processamento de linguagem natural (PLN) no futuro. O corpus resultante servirá de base para o desenvolvimento de ferramentas e tecnologias capazes de analisar e compreender temas relacionados à segurança pública na língua portuguesa, contribuindo para avanços na área e para uma melhor compreensão desse cenário.",
    palavrasChave: ["Web Scraping", "Processamento De Linguagem Natural", "Segurança Pública", "Extração De Dados"],
    categoria: "IA, Aprendizado de Máquina e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35944/35741"
  },
  {
    id: 85,
    ano: 2025,
    titulo: "Inclusão Digital e Desenvolvimento Sustentável: Relato de Empreendedorismo em Cooperativa de Reciclagem e Microempreendedores Artesãos",
    resumo: "A falta de domínio em informática básica e o limitado conhecimento sobre redes sociais são problemas significativos enfrentados por pequenos empreendedores e colaboradores de cooperativas de reciclagem, especialmente em regiões periféricas. Este artigo apresenta um projeto em andamento por estudantes de uma universidade pública localizada em Marabá-PA, que tem como objetivo combater essas lacunas digitais por meio de aulas de informática básica e marketing digital. O foco é capacitar esses microempreendedores e funcionários da cooperativa, permitindo-lhes utilizar essas ferramentas para divulgar seus trabalhos, aumentar sua visibilidade e fortalecer suas atividades econômicas. Além disso, o projeto procurou integrar o empreendedorismo local à questão ambiental, promovendo um desenvolvimento sustentável que beneficiasse tanto os negócios quanto a comunidade em geral.",
    palavrasChave: ["Inclusão Digital", "Desenvolvimento Sustentável", "Marketing Digital", "Empreendedorismo"],
    categoria: "Impacto Social e Computação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35944/35742"
  },
  {
    id: 86,
    ano: 2025,
    titulo: "Inclusão, Diversidade e Aprendizagem em Computação: Empresa Júnior como Espaço de Desenvolvimento Social - Documentos Google",
    resumo: "Nas últimas décadas, a área da tecnologia da informação tem sido marcada pela presença majoritária de homens e pessoas de alta renda, cenário que se reflete no ensino superior, onde a inclusão de grupos sub-representados é um desafio persistente. Este artigo tem como objetivo analisar a atuação da primeira Empresa Júnior de Ciência da Computação do estado do Rio Grande do Norte (RN), investigando seu impacto na formação acadêmica, diversidade e inclusão de seus membros. Com abordagem quantiqualitativa, foram aplicados questionários e entrevistas a estudantes, membros e ex-membros da EJ, com foco em grupos minorizados. Os dados revelam um ambiente acolhedor e colaborativo, com benefícios técnicos, comportamentais e sociais, além de reconhecer barreiras de entrada enfrentadas por estudantes externos. Os resultados reforçam o potencial das EJs como espaços de equidade e inclusão, destacando seu valor como modelo replicável para fortalecer a diversidade na área de computação.",
    palavrasChave: ["Diversidade Na Computação", "Inclusão Social", "Ensino Superior", "Formação Acadêmica"],
    categoria: "Acessibilidade e Inclusão",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35944/35743"
  },
  {
    id: 87,
    ano: 2025,
    titulo: "A Transformação Digital do PNLD e os potenciais impactos na educação pública brasileira",
    resumo: "Este estudo aborda a transformação digital do Programa Nacional do Livro e do Material Didático (PNLD) e seus impactos na educação pública brasileira. A pesquisa explora como a digitalização tem aprimorado as etapas do programa, desde a avaliação pedagógica das obras até sua distribuição e uso nas escolas. A implementação de plataformas digitais tem promovido maior eficiência, transparência e autonomia para gestores e educadores, otimizando a escolha dos materiais didáticos. No entanto, ainda existem desafios, como a infraestrutura tecnológica nas escolas e a necessidade de capacitação contínua dos professores. Conclui-se que a modernização do PNLD é fundamental para garantir um ensino de qualidade, inclusivo e alinhado às necessidades educacionais contemporâneas.",
    palavrasChave: ["Transformação Digital", "PNLD", "Impactos Na Educação", "Plataforma Digital", "Infraestrutura Tecnológica"],
    categoria: "Computação Aplicada à Educação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35944/35744"
  },
  {
    id: 88,
    ano: 2025,
    titulo: "Espelho quebrado: professores algoritmizados por deepfakes",
    resumo: "Este artigo explora a tecnologia de deepfake que permite a criação de vídeos e áudios falsos que imitam pessoas reais. O objetivo da pesquisa é problematizar o uso de deepfakes na educação, utilizando como metáfora central o conceito de 'espelho quebrado'. Assim como um espelho quebrado reflete uma imagem distorcida e fragmentada da realidade, essas tecnologias podem distorcer a percepção da autenticidade, da humanidade e da própria essência do processo educativo. Os resultados destacam tanto os potenciais usos positivos da tecnologia em ambientes educacionais quanto os desafios éticos e sociais que ela impõe. Conclui-se que, a falta de regulamentação e o risco de desinformação representam obstáculos para sua adoção segura.",
    palavrasChave: ["Deepfake", "Desinformação", "Educação", "Ética", "Inteligência Artificial"],
    categoria: "Desinformação e Sociedade",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35944/35745"
  },
  {
    id: 89,
    ano: 2025,
    titulo: "Semioticamente Afrô: Conexões Multimodais para Cuidados com Cabelos Afros",
    resumo: "Este trabalho apresenta o Semioticamente Afrô, uma plataforma web voltada ao cuidado com cabelos afros, reconhecendo-os como expressões de identidade e culturais. A proposta promove uma experiência digital inclusiva, com recursos multimodais e interface responsiva. A plataforma oferece cronogramas capilares personalizados, dicas de penteados e recomendações de produtos, respeitando a diversidade estética e a realidade socioeconômica dos usuários. No desenvolvimento da aplicação, foram utilizados HTML, CSS, JavaScript e Node.js. Testes iniciais indicam boa funcionalidade, compatibilidade com dispositivos e recepção positiva entre usuários.",
    palavrasChave: ["Cabelos Afros", "Identidade Cultural", "Plataforma Web", "Design Inclusivo"],
    categoria: "Acessibilidade e Inclusão",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35944/35746"
  },
  {
    id: 90,
    ano: 2025,
    titulo: "iPeriodicTable: Uma Tabela Periódica Interativa como Tecnologia Assistiva para o Ensino de Química",
    resumo: "Este artigo apresenta a iPeriodicTable, uma Tabela Periódica Interativa desenvolvida como Tecnologia Assistiva para o ensino de química. A ferramenta web integra recursos como tradução para LIBRAS, audiodescrição e personalização da interface, visando a inclusão de estudantes com necessidades educacionais especiais. A metodologia de desenvolvimento envolveu pesquisa bibliográfica, design iterativo e uso de HTML, CSS, JavaScript e PHP. Discute-se o potencial da iPeriodicTable para promover um aprendizado mais acessível, equitativo e engajador.",
    palavrasChave: ["Tecnologia Assistiva", "Ensino De Química", "LIBRAS", "Audiodescrição", "Inclusão"],
    categoria: "Acessibilidade e Inclusão",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35944/35747"
  },
  {
    id: 91,
    ano: 2025,
    titulo: "Sistema Automatizado de Provas de Múltipla Escolha com Embaralhamento Inteligente de Gabaritos",
    resumo: "Este trabalho propõe uma solução inovadora para reduzir o tempo dedicado por educadores e funcionários na criação e correção de avaliações. Além de proporcionar maior acessibilidade para alunos com deficiência visual, o sistema dificulta o compartilhamento de respostas. O software desenvolvido elabora provas objetivas personalizadas, variando os gabaritos a partir de um modelo em Word, e realiza a correção automaticamente por meio de processamento de imagem e leitura de QR Code. Testes realizados no Colégio Técnico Antônio Teixeira Fernandes comprovaram sua eficiência superior em relação a métodos tradicionais.",
    palavrasChave: ["Automação", "Educação", "Processamento De Imagens", "Acessibilidade"],
    categoria: "Computação Aplicada à Educação",
    linkPdf: "https://sol.sbc.org.br/index.php/wics/article/view/35944/35748"
  }
];

// Função para obter todas as categorias únicas
export function getCategories(): string[] {
  const categories = articles.map(
    (article) => article.categoria,
  );
  return Array.from(new Set(categories)).sort();
}

// Função para obter contagem de artigos por categoria
export function getCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  articles.forEach((article) => {
    counts[article.categoria] = (counts[article.categoria] || 0) + 1;
  });
  return counts;
}

// Função para obter todos os anos únicos
export function getYears(): number[] {
  const years = articles.map((article) => article.ano);
  return Array.from(new Set(years)).sort();
}