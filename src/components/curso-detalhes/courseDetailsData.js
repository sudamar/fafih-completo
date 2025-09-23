
import heroVideoCursoPosJung from '../../assets/videos/video-curso-1.mp4';
import heroVideoCursoPsicosomatica from '../../assets/videos/video-curso-2.mp4';
import heroVideoCursoArteterapia from '../../assets/videos/video-curso-3.mp4';
import heroVideoCursoLivrosNegros from '../../assets/videos/video-curso-4.mp4';
import heroVideoCursoSonhando from '../../assets/videos/video-curso-5.mp4';
import heroVideoCursoDeAion from '../../assets/videos/video-curso-6.mp4';
import heroVideoCursoFormacao from '../../assets/videos/video-curso-7.mp4';

export const courseDetailsMap = {
  1: {
    id: 1,
    title: 'Pós-Graduação em Psicologia Junguiana',
    subtitle: 'Formação especializada em Psicologia Analítica de Carl Gustav Jung',
    description: 'Uma jornada de autoconhecimento e capacitação profissional baseada na obra de C.G. Jung.',
    fullDescription: [
      'A Pós-Graduação em Psicologia Junguiana oferece uma formação aprofundada na teoria e prática da Psicologia Analítica desenvolvida por Carl Gustav Jung. Este programa é destinado a profissionais da área da saúde mental que desejam se especializar nesta abordagem terapêutica única e transformadora.',
      'O curso aborda conceitos fundamentais como inconsciente coletivo, arquétipos, individuação, tipos psicológicos e análise de sonhos, proporcionando uma compreensão integral da psique humana segundo a perspectiva junguiana.'
    ],
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/e30c4d6bd3-d8d26c9e64de72469123.png',
    hero: {
      type: 'video',
      source: heroVideoCursoPosJung,
      alt: 'Apresentação do curso Pós-Graduação em Psicologia Junguiana',
      fallbackImage: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/e30c4d6bd3-d8d26c9e64de72469123.png',
    },
    category: 'especializacao',
    categoryLabel: 'Pós-Graduação',
    price: 3890.00,
    precoMatricula: 300.00,
    originalPrice: 6000.00,
    modalidade: 'Presencial',
    duration: '18 meses',
    workload: '360h',
    startDate: 'Março 2024',
    maxStudents: 'Máx. 25 alunos',
    certificate: 'Reconhecida MEC',
    monthlyPrice: 'R$ 160,56/mês',
    justificativa: [
      'Esse curso que titula e forma especialistas em Psicologia Junguiana visa difundir as teorias, práticas e pesquisas da Psicoterapia Analítica de Carl Gustav Jung e de seus sucessores, cujas obras estão sendo alvo de grande interesse na atualidade.',
      'Objetivamos oferecer este conhecimento através de aulas expositivas e presenciais, com apostilas ou referências bibliográficas, seguidas de debates e atividades práticas supervisionadas. Atualmente, apesar da crescente demanda para o conhecimento do homem integral em todas as áreas de saúde, constatamos que os cursos do Magistério Superior não estão conseguindo incluir este conteúdo em seus programas oficiais, por outro lado, as sociedades de formação praticam uma seleção econômica desleal devido aos altos custos por elas cobrados.',
      'Desta forma, este curso vem suprir tanto a demanda de um conhecimento mais profundo sobre a Psicologia Junguiana, também chamada de Psicologia Analítica ou Análise Junguiana, na formação profissional, preferencialmente das áreas da saúde, humanas e biológicas, como possibilitar que este conhecimento seja acessível e socializado a um maior número de profissionais e, conseqüentemente, a população que irá se beneficiar deste cuidado.'
    ],
    objetivos: [
      'Aprofundar a compreensão dos fundamentos da teoria analítica de C. G. Jung.',
      'Aplicar métodos e técnicas da Psicologia Analítica na prática profissional.',
      'Desenvolver competências para análise de sonhos, supervisão clínica e intervenção simbólica.'
    ],
    publico: [
      'O curso PSICOLOGIA JUNGUIANA destina-se aos portadores de diploma do ensino superior, provenientes de instituições públicas ou privadas, preferencialmente atuantes nas áreas de humanas e da saúde, como psicologia, medicina, fisioterapia, filosofia, pedagogia, terapia ocupacional, fonoaudiologia, serviço social, artes, educação, administração, arquitetura, jornalismo, sociologia, teologia, arte-educação, entre outras.',
      'Este curso oferece conhecimentos suplementares e titulação àqueles que já têm experiência prática na psicoterapia clínica. Sua articulação com outras funções, independente da área, ultrapassa a visão tecnicista do tempo, proporcionando formação geral e complexa aos profissionais.'
    ],
    highlights: [
      {
        icon: 'fas fa-brain',
        title: 'Abordagem Profunda',
        description: 'Estudo aprofundado da teoria junguiana e suas aplicações práticas',
        bgColor: 'bg-blue-50',
        iconColor: 'bg-blue-500'
      },
      {
        icon: 'fas fa-users',
        title: 'Corpo Docente',
        description: 'Professores especialistas e analistas junguianos certificados',
        bgColor: 'bg-green-50',
        iconColor: 'bg-green-500'
      },
      {
        icon: 'fas fa-certificate',
        title: 'Certificação',
        description: 'Certificado reconhecido pelo MEC e entidades especializadas',
        bgColor: 'bg-purple-50',
        iconColor: 'bg-purple-500'
      }
    ],
    curriculum: [
      {
        number: 1,
        title: 'O Modelo Junguiano da Psique',
        hours: 45,
        ementa: 'Aspectos fundamentais e biográficos da vida e obra de Jung, incluindo a visão de homem, mundo e Deus que permeia a sua obra, o conceito de símbolo, angústia vital, consciente e inconsciente e a primeira parte dos fundamentos de Psicologia Analítica, incluindo conceitos de arquétipos, persona, sombra, anima e animus.',
        objetivos: 'Fundamentar os alunos para que os conceitos básicos da Psicologia Analítica, também chamada de Psicologia Profunda de C. G. Jung, sejam bem consolidados.',
        bibliography: [
          'EDINGER, Edward F. Ego e Arquétipo, SP, Cultrix, 1989',
          'HILLMAN, James. Estudos de Psicologia arquetípica, RJ, Achiamé, 1981',
          'JAFFÉ, Aniela. O Mito do Significado na Obra de C. G. Jung, SP, Cultrix, 1989',
          'JUNG, Carl Gustav. Obras Completas, Petrópolis, Vozes',
          'JUNG, Carl Gustav. O Homem e Seus Símbolos, RJ, Nova Fronteira, 1964',
          'JUNG, Carl Gustav. Memórias Sonhos e Reflexões, RJ, Nova Fronteira, 1961',
          'NEUMANN, Erich. História da Origem da Consciência, SP, Cultrix, 1990',
          'SILVEIRA, Nise. Imagens do Inconsciente, RJ, Alambra, 1981',
          'VON FRANZ, Marie-Louise, C.G.Jung, Seu Mito em Nossa Época, SP, Cultrix, 1992',
          'WHITMONT, Edward C. A Busca do Símbolo, SP, Cultrix, 1994',
          'ZWEIG, Connie, e ABRAMS, Jeremiah.(organizadores). Ao Encontro da Sombra, SP, Cultrix, 1994'
        ]
      },
      {
        number: 2,
        title: 'Fundamentos de Psicologia Analítica',
        hours: 45,
        ementa: 'Aprofundamento de todos os conceitos fundamentais da Psicologia Analítica, incluindo os tipos e as funções psicológicas, a função transcendente, a energia psíquica, o trabalho com sonhos, o processo de individuação abrangendo as relações do ego com o inconsciente, o Self e o aspecto psicóide dos arquétipos.',
        objetivos: 'Dar bases teóricas para que os alunos possam transitar confiantes pelo universo da obra junguiana, bem como começar a fazer uso dos principais conceitos desta obra.',
        bibliography: [
          'HILLMAN, James. O Código do Ser, RJ, Objetiva, 1997',
          'MINDELL, Arnold, O Corpo Onírico, SP, Summus, 1989',
          'NEUMANN, Erich. A Criança, SP, Cultrix, 1991',
          'SAMUELS, Andrew e Colaboradores. Dicionário Crítico de Análise Junguiana, R J, Imago, 1988',
          'SHARP, D. Tipos de personalidade, SP, Cultrix, 1990',
          'VON FRANZ, M. L. & HILLMAN, J. A tipologia de Jung, SP, Cultrix, 1990'
        ]
      },
      {
        number: 3,
        title: 'Raízes filosóficas, epistemológicas, científicas e religiosas na obra junguiana',
        hours: 30,
        ementa: 'Análise textual e interpretativa da obra junguiana frente às principais correntes filosóficas, científicas e epistemológicas que influenciaram C. G. Jung, abordando a linguagem simbólica e arquetípica das principais tradições religiosas que formam o universo psíquico do homem moderno.',
        objetivos: 'Fazer com que o aluno compreenda a obra junguiana frente às várias correntes filosóficas, religiões, teorias do conhecimento e a origem da Ciência. Contribuindo para que o senso crítico e ético seja melhor consolidado, além de solidificar os conceitos de arquétipo, inconsciente coletivo e sincronicidade.',
        bibliography: [
          'BOLEN, Jean Shinoda. A Sincronicidade e o Tao, SP, Cultrix, 1991',
          'CLARKE, J. J. Em Busca de Jung, RJ, Ediouro, 1993',
          'FRANZ, Marie-Louise von. Adivinhação e sincronicidade, SP, Cultrix, 1985',
          'HILLMAN, James. Suicídio e alma, Petrópolis, Vozes, 1993',
          'HILLMAN, James. Uma busca interior em psicologia e religião, SP, Paulinas, 1985',
          'PROGROFF, Ira. Jung, Sincronicidade e destino humano, SP, Cultrix, 1989',
          'Tuiavii. O Papalagui, SP, Marco Zero. 1987'
        ]
      },
      {
        number: 4,
        title: 'Aspectos clínicos da análise junguiana',
        hours: 30,
        ementa: 'Reflexões sobre a prática junguiana e as questões transferenciais, os mecanismos de defesa do ego, o setting e o holding terapêutico, a construção do vínculo, o abuso de poder, além de possibilitar ponderações sobre o sucesso e o fracasso na clínica junguiana.',
        objetivos: 'Permitir que o aluno reflita e se posicione frente às questões transferências, encontrando, de acordo com o seu tipo e sua função psicológica, para encontrar o modus operandi mais harmonioso para sua atuação profissional e existencial.',
        bibliography: [
          'GUGGENBÜHL-CRAIG, Adolf. O abuso do poder na psicoterapia e na medicina, serviço social, sacerdócio e magistério. RJ, Achiamé, 1978',
          'SANFORD, J. Os Parceiros Invisíveis, SP, Paulus, 1986',
          'STEIN, Robert. Incesto e amor humano, SP, Símbolo, 1978',
          'STEINBVERG, Warren. Aspectos Clínicos da Terapia Junguiana, SP, Cultrix, 1992'
        ]
      },
      {
        number: 5,
        title: 'Psicopatologia e a mitologia como ferramenta simbólica',
        hours: 30,
        ementa: 'Aspectos psicopatológicos e a mitologia como ferramenta de ampliação e de entendimento das dinâmicas psíquicas em busca da cura da alma.',
        objetivos: 'Proporcionar aos alunos uma formação teórica e capacitação frente aos diagnósticos psicopatológicos, bem como capacitá-los na utilização de mitos e de contos de fadas como ferramenta de trabalho nas mais diferentes demandas psíquicas.',
        bibliography: [
          'BRANDÃO, Junito de Souza. Mitologia Grega, Petrópolis, Vozes, 1989',
          'CAMPBELL, Joseph. O poder do mito, SP, Palas Athena, 1990',
          'FIERZ, Heinrich Karl. Psiquiatria junguiana, SP, Paulus, 1997',
          'HILLMAN, J. O mito da análise, RJ, Paz e Terra, 1984',
          'KERÉNYI, Karl. Os Deuses Gregos/Os Heróis Gregos, SP, Cultrix, 1994',
          'SALAND, N. S. A Personalidade limítrofe, SP, Cultrix, 1989',
          'VON FRANZ, Marie-Louise. Reflexos da alma, SP, Cultrix, 1992'
        ]
      },
      {
        number: 6,
        title: 'Procedimentos e práxis da Psicologia Analítica',
        hours: 30,
        ementa: 'Aprofundar quanto ao uso de sonhos, contos de fadas, mitos, amplificação simbólica nas práticas dos profissionais de ajuda, além de priorizar as questões das práticas transdisciplinares e da utilização de técnicas e instrumentos projetivos utilizados pela abordagem junguiana.',
        objetivos: 'Subsidiar a práxis do referencial junguiano, nas diversas áreas de atuação profissional.',
        bibliography: [
          'SAMUELS, Andrew. Jung e os Pós-Junguianos, RJ, Imago, 1989',
          'SANFORD, John. Os sonhos e a cura da alma. SP, Paulinas, 1991',
          'WHITMONT, Edward e S. Pereira. Sonhos um portal para a fonte,SP, Summus, 1995'
        ]
      },
      {
        number: 7,
        title: 'Metodologia do trabalho científico',
        hours: 30,
        ementa: 'Conceitos básicos de metodologia científica. Ciências e conhecimento. Diretrizes para a leitura, análise e interpretação de textos. A análise textual, temática e interpretativa. Pesquisa e projeto de pesquisa. Subsídios para a elaboração de uma monografia.',
        objetivos: 'Fornecer os elementos básicos necessários para capacitar o aluno para o trabalho monográfico, desde o desenvolvimento da pesquisa, análise de textos, elaboração de projeto, até os subsídios para a elaboração de uma monografia científica. Compreensão dos métodos correntes mais utilizados.',
        bibliography: [
          'Manual de Elaboracao do Projeto e da Monografia do IJEP',
          'Assista o vídeo tutorial do PROJETO E MONOGRAFIA DO IJEP neste link: https://youtu.be/UrVA6szS84M'
        ]
      },
      {
        number: 8,
        title: 'Atividades Programadas',
        hours: 160,
        ementa: 'São atividades que subsidiam a formação acadêmica e o desenvolvimento do conhecimento e da pesquisa dos alunos, atribuindo créditos obrigatórios. Todos os alunos farão, no décimo oitavo mês do curso, a exposição do projeto de conclusão de curso, que será apresentado aos demais colegas, para um professor, numa data previamente acordada, expondo o embrião da pesquisa e as resenhas dos livros (mínimo de quatro) que subsidiarão o referencial teórico do trabalho (o aluno que não cumprir essa atividade deverá apresentar um trabalho complementar para compensar as horas e obter esse crédito). Essas horas complementam as horas aula, que são de 45min, onde em um sábado de aula são computadas 10 horas/aula.',
        objetivos: 'Resenha de livro, para o trabalho monográfico, equivale a fazer uma breve explanação do seu conteúdo, analisando, descrevendo e enumerando os teores considerados relevantes, em relação ao objeto do trabalho monográfico, apresentando ao leitor as contribuições da sua leitura para sustentação da hipótese e conclusão do TCC. Resenha não é resumo de livro. Geralmente, em dois parágrafos, é possível fazer uma excelente resenha, com identificação e apresentação do autor e da obra, no primeiro, e qual é sua importância e contribuições dela, apoiando a elaboração do seu trabalho monográfico, no segundo parágrafo.',
        bibliography: []
      },
      {
        number: 9,
        title: 'Atividades Complementares',
        hours: '220 ou mais',
        ementa: 'Previsão de integralização de mais 220 horas, que podem ser acrescidas, facultativamente, com 120 horas de atendimentos clínicos e 100 horas de supervisão de casos clínicos, extramuros acadêmicos. Além disso, serão computadas a participação, como congressistas, do Congresso Junguiano do IJEP, que acontece anualmente no mês de junho, onde os conteúdos dos anos anteriores podem ser adquiridos, com a emissão de seus respectivos certificados, para que suas horas sejam computadas no certificado de conclusão do curso.',
        objetivos: '',
        bibliography: []
      },
      {
        number: 10,
        title: 'Trabalho de Conclusão',
        hours: 'não disponível',
        ementa: 'Produção de trabalho monográfico, em concordância com as normas do IJEP.',
        objetivos: '',
        bibliography: [
          'Assista o vídeo tutorial do PROJETO E MONOGRAFIA DO IJEP neste link: https://youtu.be/UrVA6szS84M'
        ]
      },
      {
        number: 11,
        title: 'Controle de Frequência',
        hours: '',
        ementa: 'Por tratar-se de um curso de especialização do conhecimento científico e prático na área da saúde, a avaliação ocorrerá como ato contínuo no decorrer das aulas, somados a uma prova escrita e individual, que acontecerá no final do curso, e frequência mínima de 80% das aulas, com controle presencial.',
        objetivos: '',
        bibliography: []
      }
    ],
    avaliacao: [
      'Frequência mínima de 75% e aproveitamento mínimo de 70% (nota 7,0) nas disciplinas',
      'Serão concedidos certificados aos discentes que cursarem todas as disciplinas e apresentarem o trabalho de conclusão de curso.'
    ],
    cargahoraria: {
      texto: [
        'A carga horária do Curso de Especialização em Psicologia Junguiana é de 400 horas, distribuídas em 2 disciplinas de 45 horas/aula, 5 disciplinas de 30 horas/aula e 160 horas de atividades programadas com previsão de integralização de mais 220 horas (que podem ser acrescidas, facultativamente, com 120 horas de atendimentos clínicos e 100 horas de supervisão de casos), podendo totalizar 620 horas.',
        'Sua duração é de 25 meses, oferecido em aulas presenciais, que acontecem num único sábado de cada mês, das 9hs às 17h45m, contabilizando 10 horas/aula (45min cada), divididas em quatro aulas de 2,5 horas/aula.'
      ],
      atividades: [
        { descricao: 'Horas aulas', carga: 240 },
        { descricao: 'Atividades programadas', carga: 160 },
        { descricao: 'Atendimentos/Ateliê*', carga: 120 },
        { descricao: 'Supervisão*', carga: 100 },
        { descricao: 'Total Geral', carga: 620 }
      ],
      observacao: '* Atividades facultativas que complementam a formação básica.'
    },
    coordenacao: {
      professor: 'Prof. Dr. Waldemar Magaldi Filho',
      descricao: 'Psicólogo, educador, especialista em psicologia analítica junguiana, psicossomática, arteterapia, EMDR e homeopatia. Mestre e doutor em ciências da religião e autor do livro: "Dinheiro, saúde e sagrado - interfaces culturais, econômicas e religiosas à luz da psicologia analítica".'
    },
    testimonials: [
      {
        text: 'Curso excepcional! Transformou minha prática clínica completamente.',
        author: 'Dra. Fernanda Oliveira',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg',
        borderColor: 'border-secondary'
      },
      {
        text: 'Professores excepcionais e conteúdo muito bem estruturado.',
        author: 'Dr. Roberto Silva',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg',
        borderColor: 'border-primary'
      }
    ],
    contact: {
      phone: '(11) 3333-4444',
      whatsapp: '(11) 99999-8888',
      email: 'contato@fafih.edu.br'
    },
    breadcrumb: ['Início', 'Pós-Graduação', 'Psicologia Junguiana']
  },
  2: {
    id: 2,
    title: 'Psicossomática',
    subtitle: 'Integração entre corpo, alma e espírito',
    description: 'Explore a integração entre corpo, alma e espírito com uma abordagem holística e humanista.',
    fullDescription: [
      'O curso de Psicossomática oferece uma abordagem integrada para compreender as relações entre os aspectos psicológicos e físicos da saúde. Baseado em uma visão holística e humanista, o programa prepara profissionais para atuar na interface entre mente e corpo.',
      'Com metodologia prático-teórica, o curso aborda desde os fundamentos da medicina psicossomática até técnicas avançadas de intervenção, proporcionando uma formação completa e diferenciada.'
    ],
    image: 'https://i.imgur.com/cTs1Zdf.png',
    hero: {
      type: 'video',
      source: heroVideoCursoPsicosomatica,
      alt: 'Ambiente representativo do curso Psicossomática',
      fallbackImage: 'https://i.imgur.com/cTs1Zdf.png',
    },
    category: 'especializacao',
    categoryLabel: 'Pós-Graduação',
    price: 6200.00,
    precoMatricula: 300.00,
    originalPrice: 10000.00,
    modalidade: 'Presencial',
    duration: '18 meses',
    workload: '360h',
    startDate: 'Março 2024',
    maxStudents: 'Máx. 25 alunos',
    certificate: 'Reconhecida MEC',
    monthlyPrice: 'R$ 122,22/mês',
    justificativa: [
      'Responde à necessidade de profissionais capazes de integrar dimensões psíquicas e corporais no cuidado em saúde.',
      'Articula conhecimentos de medicina psicossomática, neuropsicoimunologia e práticas clínicas supervisionadas.',
      'Oferece abordagens atualizadas para tratamentos holísticos e humanizados.'
    ],
    objetivos: [
      'Compreender os fundamentos teóricos e históricos da medicina psicossomática.',
      'Relacionar sistemas psíquicos, neuroendócrinos e imunológicos em situações clínicas.',
      'Aplicar técnicas de intervenção psicossomática em contextos clínicos supervisionados.'
    ],
    publico: [
      'Profissionais da saúde, psicoterapeutas e educadores interessados em abordagens mente-corpo.',
      'Graduados das áreas de humanas e biológicas que buscam formação complementar em psicossomática.'
    ],
    highlights: [
      {
        icon: 'fas fa-heart',
        title: 'Abordagem Holística',
        description: 'Visão integrada entre mente, corpo e espírito',
        bgColor: 'bg-red-50',
        iconColor: 'bg-red-500'
      },
      {
        icon: 'fas fa-users',
        title: 'Prática Clínica',
        description: 'Experiência prática com supervisão especializada',
        bgColor: 'bg-green-50',
        iconColor: 'bg-green-500'
      },
      {
        icon: 'fas fa-certificate',
        title: 'Certificação',
        description: 'Certificado reconhecido pelo MEC',
        bgColor: 'bg-purple-50',
        iconColor: 'bg-purple-500'
      }
    ],
    curriculum: [
      {
        number: 1,
        title: 'Fundamentos da Psicossomática',
        hours: 60,
        ementa: 'Base teórica e histórica da medicina psicossomática; integração mente-corpo; paradigmas holísticos.',
        objetivos: 'Compreender os fundamentos teóricos e históricos da medicina psicossomática.',
        bibliography: [
          'Alexander, F. Medicina Psicossomática. Artes Médicas, 1989',
          'Dethlefsen, T. A Doença como Caminho. Cultrix, 1983',
          'Reich, W. A Função do Orgasmo. Brasiliense, 1975'
        ]
      },
      {
        number: 2,
        title: 'Neuropsicoimunologia',
        hours: 45,
        ementa: 'Interações entre sistema nervoso e imunológico; stress e doença; psiconeuroimunologia.',
        objetivos: 'Relacionar sistemas psíquicos, neuroendócrinos e imunológicos em situações clínicas.',
        bibliography: [
          'Ader, R. Psychoneuroimmunology. Academic Press, 1991',
          'Selye, H. Stress: A Tensão da Vida. Ibrasa, 1965',
          'Solomon, G. The Emerging Field of Psychoneuroimmunology. Adler, 1987'
        ]
      },
      {
        number: 3,
        title: 'Técnicas de Intervenção',
        hours: 60,
        ementa: 'Métodos terapêuticos integrativos; técnicas corporais; abordagens holísticas.',
        objetivos: 'Aplicar técnicas de intervenção psicossomática em contextos clínicos supervisionados.',
        bibliography: [
          'Lowen, A. Bioenergética. Summus, 1982',
          'Capra, F. O Ponto de Mutação. Cultrix, 1982',
          'Wilber, K. Uma Teoria de Tudo. Gaia, 2003'
        ]
      },
      {
        number: 4,
        title: 'Estudos de Caso',
        hours: 45,
        ementa: 'Análise prática de casos clínicos; elaboração de relatórios; supervisão clínica.',
        objetivos: 'Desenvolver habilidades práticas na análise e condução de casos psicossomáticos.',
        bibliography: [
          'McDougall, J. Teatros do Corpo. Martins Fontes, 1996',
          'Marty, P. Psicossomática do Adulto. Artes Médicas, 1993',
          'Chiozza, L. Psicanálise dos Distúrbios Psicossomáticos. Casa do Psicólogo, 1998'
        ]
      }
    ],
    avaliacao: [
      'Frequência mínima de 75% e aproveitamento mínimo de 70% (nota 7,0) nas disciplinas',
      'Serão concedidos certificados aos discentes que cursarem todas as disciplinas e apresentarem o trabalho de conclusão de curso.'
    ],
    cargahoraria: {
      texto: [
        'A carga horária do Curso de Pós-Graduação em Psicossomática é de 360 horas, distribuídas em disciplinas teóricas e práticas, com previsão de integralização completa.',
        'Sua duração é de 18 meses, oferecido em aulas presenciais.'
      ],
      atividades: [
        { descricao: 'Fundamentos da Psicossomática', carga: 60 },
        { descricao: 'Neuropsicoimunologia', carga: 45 },
        { descricao: 'Técnicas de Intervenção', carga: 60 },
        { descricao: 'Estudos de Caso', carga: 45 },
        { descricao: 'Atividades Complementares', carga: 150 },
        { descricao: 'Total Geral', carga: 360 }
      ],
      observacao: 'Carga horária total conforme regulamentação do MEC para pós-graduação lato sensu.'
    },
    coordenacao: {
      professor: 'Prof. Dr. Carlos Mendes',
      descricao: 'Especialista em Psicossomática com 20 anos de experiência clínica, focado na integração entre mente, corpo e espírito.'
    },
    testimonials: [
      {
        text: 'Curso transformador! Mudou completamente minha visão sobre saúde.',
        author: 'Dr. Paulo Santos',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg',
        borderColor: 'border-primary'
      }
    ],
    contact: {
      phone: '(11) 3333-4444',
      whatsapp: '(11) 99999-8888',
      email: 'contato@fafih.edu.br'
    },
    breadcrumb: ['Início', 'Pós-Graduação', 'Psicossomática']
  },
  3: {
    id: 3,
    title: 'Arteterapia e Expressões Criativas',
    subtitle: 'Curso presencial com turmas no RJ, Brasília e São Paulo',
    description: 'Formação filiada à SOBRARTE que usa as expressões criativas como recurso terapêutico e clínico.',
    fullDescription: [
      'O curso de Arteterapia e Expressões Criativas capacita profissionais a despertar a potência inventiva de indivíduos e grupos, transformando-a em intervenções terapêuticas efetivas em contextos clínicos, educacionais, organizacionais e comunitários.',
      'Com abordagem transdisciplinar, integra fundamentos da psicologia analítica, das terapias expressivas e das artes para promover processos de cura biopsicossocial e desenvolvimento simbólico.',
      'As vivências percorrem distintas formas de expressão – desenho, colagem, pintura, modelagem, música e corpo – além de práticas iniciáticas que favorecem estados ampliados de consciência e experiências numinosas.'
    ],
    image: 'https://i.imgur.com/iVpnrwc.png',
    hero: {
      type: 'video',
      source: heroVideoCursoArteterapia,
      alt: 'Ambiente criativo do curso Arteterapia e Expressões Criativas',
      fallbackImage: 'https://i.imgur.com/iVpnrwc.png',
    },
    category: 'especializacao',
    categoryLabel: 'Pós-Graduação',
    price: 6360.00,
    precoMatricula: 300.00,
    originalPrice: 12000.00,
    modalidade: 'Presencial',
    duration: '24 meses',
    workload: '360h',
    startDate: 'RJ: 11/04/2026 · Brasília: 14/03/2026 · São Paulo: 30/08/2025',
    maxStudents: 'Turmas presenciais reduzidas',
    certificate: 'Filiado à SOBRARTE',
    monthlyPrice: 'Matrícula R$ 360 + 24x de R$ 663,57',
    justificativa: [
      'O curso forma especialistas em Psicologia Analítica ao difundir teorias, práticas e pesquisas de C. G. Jung e sucessores, em aulas presenciais com debates e supervisão.',
      'Supre a demanda por conhecimento profundo da Psicologia Junguiana ao oferecer formação acessível a profissionais das áreas de saúde, humanas e biológicas.',
      'Promove integração entre arte, psicologia, educação e espiritualidade como caminhos terapêuticos para acolher sintomas psicoafetivos e psicossomáticos.'
    ],
    objetivos: [
      'Ampliar conhecimentos teóricos e práticos da Psicologia Analítica.',
      'Aplicar procedimentos e fundamentos junguianos com ética e responsabilidade.',
      'Estimular a pesquisa teórico-prática em Psicologia Analítica e arteterapia.',
      'Situar-se criticamente frente aos paradigmas pessoais e profissionais.'
    ],
    publico: [
      'Profissionais graduados nas áreas de saúde, humanas e biológicas interessados em Psicologia Analítica.',
      'Terapeutas, educadores e artistas que desejam integrar expressões criativas a processos de cuidado.'
    ],
    highlights: [
      {
        icon: 'fas fa-map-marker-alt',
        title: 'Turmas 2025/2026',
        description: 'Encontros presenciais no Rio de Janeiro, Brasília e São Paulo',
        bgColor: 'bg-blue-50',
        iconColor: 'bg-blue-500'
      },
      {
        icon: 'fas fa-palette',
        title: 'Percurso Criativo',
        description: 'Vivências expressivas, oficinas e supervisão clínica em arteterapia',
        bgColor: 'bg-yellow-50',
        iconColor: 'bg-yellow-500'
      },
      {
        icon: 'fas fa-award',
        title: 'Filiado à SOBRARTE',
        description: 'Curso reconhecido pela Sociedade Brasileira de Arteterapia',
        bgColor: 'bg-green-50',
        iconColor: 'bg-green-500'
      }
    ],
    curriculum: [
      {
        number: 1,
        title: 'Fundamentos das Terapias Artísticas',
        hours: 45,
        ementa: 'Histórico da arteterapia e diferenciações conceituais; criatividade, processo criador e materiais simbólicos; transferência, contratransferência e ética em arteterapia; o pensamento de Nise da Silveira e referências junguianas.',
        objetivos: 'Compreender os fundamentos históricos e teóricos da Arteterapia; relacionar a Psicologia Analítica de C. G. Jung às práticas expressivas; reconhecer critérios éticos e clínicos para atuação arteterapêutica.',
        bibliography: [
          'Silveira, N. Imagens do Inconsciente. Imago, 1978',
          'Jung, C.G. O Homem e seus Símbolos. Nova Fronteira, 1964',
          'Kramer, E. Arteterapia: Teoria e Prática. Artes Médicas, 2001'
        ]
      },
      {
        number: 2,
        title: 'Teorias e Técnicas Expressivas',
        hours: 45,
        ementa: 'Técnicas de desenho e percepção visual; colagem, narrativa imagética e simbolismo; pintura como expressão emocional e processo catártico; modelagem e construção de objetos simbólicos.',
        objetivos: 'Vivenciar recursos expressivos variados e suas leituras simbólicas; planejar atividades arteterapêuticas alinhadas à teoria analítica; desenvolver sensibilidade para conteúdos afetivos nas produções plásticas.',
        bibliography: [
          'Ostrower, F. Criatividade e Processos de Criação. Vozes, 2007',
          'Nachmanovitch, S. Ser Criativo. Summus, 1993',
          'Whitmont, E. A Busca do Símbolo. Cultrix, 1995'
        ]
      },
      {
        number: 3,
        title: 'Metodologias de Oficinas',
        hours: 60,
        ementa: 'Estruturação de oficinas e roteiros terapêuticos; seleção de materiais e ambientação simbólica; gestão de grupos, escuta ativa e manejo de emergências; documentação de processos e avaliação qualitativa.',
        objetivos: 'Elaborar oficinas arteterapêuticas coerentes com objetivos terapêuticos; ampliar repertório de materiais expressivos e seus usos clínicos; desenvolver critérios de avaliação e registro de processos.',
        bibliography: [
          'Urrutigaray, M.C. Arteterapia: A transformação pessoal pelas imagens. WAK, 2003',
          'Teixeira, L. (org.). Oficinas Terapêuticas: Criatividade e Saúde. Summus, 2010',
          'Ciornai, S. Percursos em Arteterapia. Summus, 2004'
        ]
      },
      {
        number: 4,
        title: 'Ateliê Terapêutico Supervisionado',
        hours: 120,
        ementa: 'Atendimentos clínicos supervisionados; estudos de caso e apresentação em seminários; supervisão em grupo e devolutiva individual; ética, contrato terapêutico e autocuidado do terapeuta.',
        objetivos: 'Consolidar habilidades clínicas por meio de prática supervisionada; refletir sobre postura ética e manejo simbólico em atendimentos; produzir relatórios e sínteses dos processos acompanhados.',
        bibliography: [
          'Edinger, E.F. Ego e Arquétipo. Cultrix, 1989',
          'Hillman, J. Estudos de Psicologia Arquetípica. Achiamé, 1981',
          'Stevens, A. Arquétipos. Siciliano, 1993'
        ]
      },
      {
        number: 5,
        title: 'Atividades Complementares',
        hours: 220,
        ementa: 'Atendimentos clínicos extramuros e supervisões adicionais; participação no Congresso Junguiano do IJEP; registro e validação de horas complementares.',
        objetivos: 'Incentivar aprofundamento prático e integração com a comunidade científica; computar as horas clínicas e acadêmicas exigidas para certificação.',
        bibliography: [
          'Anais dos Congressos Junguianos do IJEP',
          'Revista Junguiana da SBPA',
          'Boletim de Atividades Complementares do IJEP'
        ]
      }
    ],
    avaliacao: [
      'Frequência mínima de 75% e aproveitamento mínimo de 70% (nota 7,0) nas disciplinas',
      'Serão concedidos certificados aos discentes que cursarem todas as disciplinas e apresentarem o trabalho de conclusão de curso.'
    ],
    cargahoraria: {
      texto: [
        'A carga horária do Curso de Especialização em Arteterapia e Expressões Criativas é de 490 horas, distribuídas em disciplinas teóricas e práticas, com previsão de integralização completa.',
        'Sua duração é de 24 meses, oferecido em aulas presenciais com turmas no RJ, Brasília e São Paulo.'
      ],
      atividades: [
        { descricao: 'Fundamentos das Terapias Artísticas', carga: 45 },
        { descricao: 'Teorias e Técnicas Expressivas', carga: 45 },
        { descricao: 'Metodologias de Oficinas', carga: 60 },
        { descricao: 'Ateliê Terapêutico Supervisionado', carga: 120 },
        { descricao: 'Atividades Complementares', carga: 220 },
        { descricao: 'Total Geral', carga: 490 }
      ],
      observacao: 'Carga horária total conforme regulamentação do MEC para pós-graduação lato sensu.'
    },
    coordenacao: {
      professor: 'Prof. Dr. Waldemar Magaldi Filho',
      descricao: 'Psicólogo, Doutor em Ciências da Religião, Especialista em Psicologia Analítica, Psicossomática e Arteterapia; fundador do IJEP.'
    },
    testimonials: [
      {
        text: 'Descobri uma nova forma de trabalhar com meus pacientes.',
        author: 'Dra. Luciana Ferreira',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg',
        borderColor: 'border-secondary'
      }
    ],
    contact: {
      phone: '(11) 5535-4695',
      whatsapp: '(11) 99999-8888',
      email: 'wmagaldi@ijep.com.br'
    },
    breadcrumb: ['Início', 'Pós-Graduação', 'Arteterapia e Expressões Criativas']
  },
  4: {
    id: 4,
    title: 'Livros Negros e Livro Vermelho',
    subtitle: 'Estudo aprofundado das obras de C.G. Jung',
    description: 'De volta com mais uma edição do Curso sobre Os Livros Negros e Liber Novus, com a professora Lilian Wurzba.',
    fullDescription: [
      'Este curso oferece um estudo aprofundado dos Livros Negros e do Livro Vermelho (Liber Novus) de Carl Gustav Jung, obras fundamentais para a compreensão do desenvolvimento da psicologia analítica.',
      'Com a orientação da renomada professora Lilian Wurzba, os participantes explorarão os textos originais, analisando seu contexto histórico, significado psicológico e relevância para a prática clínica contemporânea.'
    ],
    image: 'https://i.imgur.com/qwiCmA6.jpeg',
    hero: {
      type: 'video',
      source: heroVideoCursoLivrosNegros,
      alt: 'Representação visual do curso Livros Negros e Livro Vermelho',
      fallbackImage: 'https://i.imgur.com/qwiCmA6.jpeg',
    },
    category: 'extensao',
    categoryLabel: 'Curta Duração',
    price: 5850.00,
    precoMatricula: 600.00,
    originalPrice: 7000.00,
    modalidade: 'Online',
    duration: '3 meses',
    workload: '60h',
    startDate: 'Abril 2024',
    maxStudents: 'Máx. 40 alunos',
    certificate: 'Certificado de Participação',
    monthlyPrice: 'R$ 283,33/mês',
    justificativa: [
      'Estudo aprofundado dos Livros Negros e do Livro Vermelho de C. G. Jung, contextualizando sua importância para a psicologia analítica.',
      'Oferece leitura comentada, debates e reflexão simbólica sobre os textos fundamentais do processo criativo jungiano.',
      'Favorece a ampliação do repertório clínico e cultural de profissionais e estudiosos da psicologia analítica.'
    ],
    objetivos: [
      'Analisar os temas centrais presentes nos manuscritos de Jung.',
      'Relacionar passagens dos textos com a prática clínica e estudos simbólicos.',
      'Estimular leituras críticas e pesquisa acadêmica sobre as obras junguianas.'
    ],
    publico: [
      'Analistas, psicólogos e alunos de cursos junguianos que buscam aprofundar o estudo das obras de Jung.',
      'Pesquisadores e interessados em história da psicologia, simbolismo e espiritualidade.'
    ],
    highlights: [
      {
        icon: 'fas fa-book',
        title: 'Textos Originais',
        description: 'Estudo direto dos manuscritos de Jung',
        bgColor: 'bg-indigo-50',
        iconColor: 'bg-indigo-500'
      },
      {
        icon: 'fas fa-user-graduate',
        title: 'Professora Especialista',
        description: 'Orientação da Prof. Lilian Wurzba',
        bgColor: 'bg-green-50',
        iconColor: 'bg-green-500'
      },
      {
        icon: 'fas fa-globe',
        title: 'Modalidade Online',
        description: 'Acesso de qualquer lugar do mundo',
        bgColor: 'bg-blue-50',
        iconColor: 'bg-blue-500'
      }
    ],
    curriculum: [
      {
        number: 1,
        title: 'Contexto Histórico',
        hours: 15,
        ementa: 'Período de criação dos Livros Negros; contexto biográfico de Jung; influências históricas.',
        objetivos: 'Compreender o contexto histórico e biográfico da criação dos manuscritos junguianos.',
        bibliography: [
          'Jung, C.G. Livro Vermelho - Liber Novus. Vozes, 2010',
          'Shamdasani, S. Jung e a Construção da Psicologia Moderna. Ideias & Letras, 2006',
          'Hoeller, S. O Gnosticismo de Jung. Cultrix, 1989'
        ]
      },
      {
        number: 2,
        title: 'Análise dos Textos',
        hours: 30,
        ementa: 'Estudo detalhado do conteúdo; análise simbólica; metodologia de interpretação.',
        objetivos: 'Analisar os temas centrais presentes nos manuscritos de Jung.',
        bibliography: [
          'Jung, C.G. Os Livros Negros 1913-1932. Vozes, 2020',
          'Kyburz, R. The Black Books: Manuscripts of C.G. Jung. Norton, 2020',
          'Von Franz, M.L. C.G. Jung: Seu Mito em Nossa Época. Cultrix, 1992'
        ]
      },
      {
        number: 3,
        title: 'Relevância Contemporânea',
        hours: 15,
        ementa: 'Aplicações na prática atual; influência na psicologia analítica; legado contemporâneo.',
        objetivos: 'Relacionar passagens dos textos com a prática clínica e estudos simbólicos.',
        bibliography: [
          'Hillman, J. Revisão da Psicologia. Vozes, 2010',
          'Samuels, A. Jung e os Pós-Junguianos. Imago, 1989',
          'Stevens, A. Jung: A Biographical Study. Oxford, 1994'
        ]
      }
    ],
    avaliacao: [
      'Frequência mínima de 75% e aproveitamento mínimo de 70% (nota 7,0) nas disciplinas',
      'Serão concedidos certificados aos discentes que cursarem todas as disciplinas e apresentarem o trabalho de conclusão de curso.'
    ],
    cargahoraria: {
      texto: [
        'A carga horária do Curso Livros Negros e Livro Vermelho é de 60 horas, distribuídas em disciplinas teóricas, com previsão de integralização completa.',
        'Sua duração é de 3 meses, oferecido em modalidade online.'
      ],
      atividades: [
        { descricao: 'Contexto Histórico', carga: 15 },
        { descricao: 'Análise dos Textos', carga: 30 },
        { descricao: 'Relevância Contemporânea', carga: 15 },
        { descricao: 'Total Geral', carga: 60 }
      ],
      observacao: 'Carga horária para curso de extensão de curta duração.'
    },
    coordenacao: {
      professor: 'Prof. Lilian Wurzba',
      descricao: 'Especialista em Jung, reconhecida autoridade mundial em Livros Negros e obras junguianas.'
    },
    testimonials: [
      {
        text: 'Experiência única de contato com o pensamento original de Jung.',
        author: 'Dr. Marcos Oliveira',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg',
        borderColor: 'border-primary'
      }
    ],
    contact: {
      phone: '(11) 3333-4444',
      whatsapp: '(11) 99999-8888',
      email: 'contato@fafih.edu.br'
    },
    breadcrumb: ['Início', 'Curta Duração', 'Livros Negros e Livro Vermelho']
  },
  5: {
    id: 5,
    title: 'Sonhando Através da Arteterapia',
    subtitle: 'Jornada na Arteterapia a partir de Imagens Oníricas',
    description: 'Oficina Imersiva Arteterapia e Sonhos com as professoras Ana Paula Maluf e Bárbara Pessanha.',
    fullDescription: [
      'Uma oficina imersiva que combina arteterapia e análise de sonhos, oferecendo uma experiência única de autoconhecimento e desenvolvimento pessoal através da expressão artística de conteúdos oníricos.',
      'Com a orientação das renomadas professoras Ana Paula Maluf e Bárbara Pessanha, os participantes explorarão técnicas inovadoras para trabalhar com sonhos através da arte.'
    ],
    image: 'https://i.imgur.com/AnnChjx.png',
    hero: {
      type: 'video',
      source: heroVideoCursoSonhando,
      alt: 'Representação do curso Sonhando Através da Arteterapia',
      fallbackImage: 'https://i.imgur.com/AnnChjx.png',
    },
    category: 'extensao',
    categoryLabel: 'Curta Duração',
    price: 4950.00,
    precoMatricula: 300.00,
    originalPrice: 7000.00,
    modalidade: 'Presencial',
    duration: '2 meses',
    workload: '40h',
    startDate: 'Maio 2024',
    maxStudents: 'Máx. 15 alunos',
    certificate: 'Certificado de Participação',
    monthlyPrice: "R$ 475,00/mês",
    justificativa: {
      texto: [
        "O curso de ARTETERAPIA E EXPRESSÕES CRIATIVAS tem como objetivo capacitar nossos alunos a criarem e despertar a capacidade criativa de seus clientes, dos âmbitos organizacionais, empresariais, industriais, comerciais, educacionais ou clínicos. Para depois, poderem utilizar essas expressões criativas de forma terapêutica, no sentido de buscarem possibilidades de superação das crises, possibilidades transformadoras e a cura biopsicossocial.<br/>",
        "Com característica transdisciplinar, o curso de ARTETERAPIA E EXPRESSÕES CRIATIVAS, permeia os campos da ciência psicológica, psiquiátrica, fonoaudiologia, comportamental, corporal, psicológica, sociológica, ocupacional e educacional. O curso irá capacitar os alunos, por meio de intervenções não racionais e das técnicas expressivas, a estabelecerem relações de ajuda no sentido de contribuir para os caminhos de cura dos transtornos psicoafetivos e ou psicossomáticos, numa visão integral de Ser.<br/>",
        "Sabemos que a capacidade criativa é um objetivo amplamente desejado e estimulado em todos os âmbitos de expressão humana. Por isso constatamos tantas citações onde o ato criativo acaba sendo o maior responsável das transformações evolutivas e lucrativas nos âmbitos corporativos, acadêmicos, sociais, comerciais, políticos, familiares e espirituais. Então, em função dessa demanda, idealizamos e criamos este curso, pois toda produção criativa advém, primeiramente, de situações de conflito onde a necessidade e a dificuldade estejam presentes. Ou seja, dessa tensão, alquimicamente, surge o tertium non datur (o terceiro elemento não dado) que transcendente a tensão da polaridade, integrando simbolicamente as polaridades antagônicas ou conflitavas. Porque todas as expressões criativas da psique ou alma humana, são reconhecidamente excelentes instrumentos para diagnóstico e tratamento de diversos tipos de sintomas, além de retratarem o estado emocional e contribuírem para desenvolvimento analítico, crítico, simbólico e abstrato do ser humano.<br/>",
        "Com isso, podemos compreender que o ato criativo, que na realidade deveria se chamar de momento inspirador, insight, lampejo, capacidade inventiva ou, simplesmente, ideia genial, para tornar-se realização deve passar pelo verdadeiro processo criador, que exige transpiração, dedicação, determinação e contínua elaboração e cuidado para a concretização e o aprimoramento do que surgiu de forma inovadora e espontânea. Então, neste curso, antes de tudo iremos dar condições para nossos alunos entrarem em contado com suas capacidades ideativas e, consequentemente, planejarem conscientemente e realisticamente, o caminho para criá-las. Ou seja, concretizarem suas inspirações, para depois ajudarem as demais pessoas. Desta forma, esse curso também será um meio para que a natureza interior de cada aluno possa se expressar de forma harmoniosa na atual sociedade normótica, que é extremamente especialista, burocrática, rotineira, cumulativa e competitiva.<br/>",
        "Para isso, percorreremos as várias formas de expressões criativas utilizadas pelos seres humanos. Das manifestações bidimensionais às penta-dimensionais. Ou seja, das produções expressas no plano, como o desenho e a pintura, passando pelas esculturas ou modelagem, que são tridimensionais, e pelas expressões literárias, musicais, sonoras, corporais e ou das artes cênicas, que são tetradimensionais, por incluírem os quatro elementos da física: energia, movimento, tempo e espaço - ou, junguianamente falando: sentimento, intuição, pensamento e sensação, respectivamente. Até chegarmos ao que estamos denominando de expressão penta-dimensional (ou quinta essencial), que são as expressões de caráter iniciático, dos estados alterados de consciência, que levam o indivíduo às experiências místicas, com numinosidade, êxtase ou sacralidade, por serem simultaneamente tremendas e fascinantes, semelhantes as experiências relativas ao sagrado, que equivalem ao si mesmo, ou Self.<br/>",
        "Depois disso, capacitaremos nossos alunos a aprenderem a fazer o uso terapêutico das expressões criativas, deles mesmos e das demais pessoas. Porque, para Jung, o si mesmo, ou o Self, para fazer com que o ego, que é o representante da consciência, passe a servir a alma, equivalente a psique, utiliza-se dos sonhos, dos eventos de sincronicidade, dos sintomas e das expressões criativas (artísticas ou científicas). Por isso, a proposta deste curso é fornecer recursos, teóricos e práticos, para que nossos alunos, após aprenderem a estimular o surgimento das expressões criativas, saibam trabalhar terapeuticamente com elas. Ressaltando que essas produções, por surgirem a partir do Self, são legítimas e dotadas de ética. Portanto, são experiências estéticas que podem curar as feridas físicas ou psíquicas de seu executor e até de todos os indivíduos que interajam com esses materiais. Por isso, ainda hoje, ao entrarmos em contato com a opus alquímica, com os ícones sagrados, como a tragédia grega, os contos de fadas, entre outros registros artísticos produzidos pela humanidade, despertamos potenciais curativos em nós.<br/>",
        "Neste sentido, este curso está totalmente alinhado com as premissas educacionais propostas pela UNESCO, vislumbrando uma educação voltada para os critérios de autos sustentabilidade, inclusão e responsabilidade social, onde os aspectos do bom, do belo e do verdadeiro (espiritualidade, arte e ciência) estejam presentes, por meio dos quatro pilares da pedagogia ideológica: primeiro aprender a ser; depois aprender a aprender; para poder aprender a conviver e então, aprender a realizar, que equivale ao servir para ser.<br/>",
        "A partir dessas premissas, trabalharemos a ampliação simbólica e a análise dos desenhos, pinturas, esculturas, expressões literárias, musicais ou cênicas (cinema e teatro), até chegarmos às técnicas expressivas do inconsciente, como o jogo da caixa de areia (sand-play), a imaginação ativa, a produção espontânea de mandalas, a dramatização dos personagens do Self (imagens arquetípicas da persona, sombra e anima/us e do si mesmo), a caixa de autorretrato, além das produções naturais como os sonhos (lúcidos ou oníricos) e uma enorme gama de possibilidades que podem facilitar para que o ego se renda ao Self e passe a servir a alma (que é o processo de individuação proposto por C. G. Jung).<br/>",
        "Nosso modelo educativo compreende aulas expositivas, práticas, debates, participação em eventos científicos, atividades programadas (seminários) e estágio-pesquisa (atelier expressivo-terapêutico-educacional) que possibilitará ao profissional de ajuda o exercício constante da transição entre os vários campos do saber e atender melhor sua clientela perante os problemas contemporâneos, integrando o estético com o ético e o científico - o belo, o bom e o verdadeiro. Com isso, ficamos alinhados com o novo paradigma que está surgindo, que integra a dimensão ética - que é espiritual, com a estética - que é anímica e emocional, e a científica- que é racional (inteligências: racional, emocional e espiritual), para serem expressas livremente e criativamente pelas capacidades e habilidades motoras (inteligência sensório-motora e sinestésica).<br/>",
        "Na sociedade contemporânea é imprescindível, diante do processo de globalização das relações econômicas e culturais, a participação de cidadãos não somente qualificados para o trabalho, mas, principalmente, aptos a refletir e produzir novos conhecimentos acerca de sua prática profissional. Essa sociedade, também faz exigências que abrangem questões educacionais, científicas e tecnológicas, o que imprime a determinados conhecimentos um caráter provisório, especialmente saberes que se constituem como instrumentos de não alienação. Tal provisoriedade implica em que os profissionais, de maneira geral, superem seus limites e desafios dando ênfase à formação básica e abrangente tendo como consequência à apropriação de conhecimentos clássicos relativos à especificidade de cada área de atuação, bem como, à capacidade de transitar por diferentes saberes, que se configuram como fundamento ao conhecimento científico e cultural. Também é fundamental que este profissional se mantenha como aprendiz, buscando constante capacitação para fazer frente às aceleradas mudanças no âmbito da produção científica e tecnológica.<br/>",
        "No Brasil, até o momento, não existe nenhum órgão regulamentador da Arteterapia. Todas as associações ou uniões de associações são meros agrupamentos de pessoas físicas, sem qualquer amparo legal para arbitrar, regulamentar ou reconhecer a função do arteterapeuta. Por isso, o IJEP -- Instituto Junguiano de Ensino e Pesquisa, criou a SOBRARTE -- Sociedade Brasileira de Arteterapia, para dar guarida e referência a nossos alunos espalhados pelo Brasil afora. Mesmo assim, não temos nada a nos opor à tentativa de integrar as várias associações, mas não aceitamos ingerência e interferência na grade curricular e no corpo docente do nosso curso de especialização em Arteterapia e Expressões Criativas, que titula e forma especialistas em Arteterapia, conferindo amparo legal e tranquilidade de atuação profissional. Por isso, cremos ser um desserviço para o futuro da Arteterapia brasileira qualquer movimento sectário e protecionista que age mais a serviço da reserva do mercado do que do conhecimento, prática e ensino da Arteterapia, atuando de forma segregacionista, ao invés de integrar os profissionais atuantes.<br/>",
        "Após a emissão do certificado de especialização, o aluno imediatamente passa a ser membro filiado à SOBRARTE, sem nenhum custo, recebendo seu número de registro funcional, divulgação do seu nome e possibilidade de publicar seus artigos no site. O curso de Arteterapia e Expressões Criativas do IJEP existe desde 2008, e nestes anos formamos centenas de arteterapeutas, que estão atuantes pelo Brasil afora. A carga horária total do curso é de 636 horas com atividades programadas, vivências práticas, atendimentos e supervisões. Nossos professores são especialistas em Psicologia Junguiana, a maioria deles com titulação de doutorado, muito experientes na docência e atuação clínica, tanto na Psicologia Analítica quanto na Arteterapia e Expressões Criativas.<br/>",
        "A Classificação Brasileira de Ocupação (CBO) passou a reconhecer a Arteterapia como profissão*. Desta forma, todos os especialistas em Arteterapia, a partir de agora, podem ser contratados tanto nos serviços públicos como nos privados, legalmente de acordo com a CLT (Consolidação das Leis do Trabalho), atuando nas áreas da saúde, educação, entre outras, além de poder emitir recibos* para abatimento no imposto de renda como gastos na área de saúde ou solicitação de reembolso nos planos de sáude que contemplam a arteterapia como tratamento da saúde. Lembrando que nossos alunos formados podem se filiar à SOBRARTE -- Sociedade Brasileira de Arteterapia, para obter seu número de registro, assim como divulgar seu espaço profissional e publicar artigos no site, gratuitamente.<br/>"
      ],
      notaFiscalCNAE: "*Para poder emitir nota fiscal de serviços da pessoa jurídica, que possui um CNPJ, é necessário incluir o CNAE: 8690-9/01 - Atividades de práticas integrativas e complementares em saúde humana, no cadastro da empresa."
    },
    objetivos: [
      'Capacitar o profissional de nível superior no conhecimento de teorias e técnicas terapêuticas, psicológicas e artísticas visando sua aplicação nas áreas de saúde, educação, recursos-humanos, treinamento e arte-educação, identificando alternativas para solução de problemas de saúde biopsicossocial e espiritual, bem como discutir aspectos genéricos da arte nas relações de ajuda. O curso terá uma estrutura básica teórico-vivencial permitindo que o aluno expresse seu universo interno e externo de forma criativa e construtiva, possibilitando viver com mais espontaneidade e harmonia consigo mesmo e com o outro, capacitando-o para a sua atuação profissional e postura como arteterapeuta ou terapeuta artístico.',
    ],
    publico: [
      'O curso ARTETERAPIA E EXPRESSÕES CRIATIVAS destina-se aos portadores de diploma do ensino superior, provenientes de instituições públicas ou privadas, preferencialmente atuantes nas áreas de humanas e da saúde, como psicologia, medicina, fisioterapia, filosofia, terapia ocupacional, fonoaudiologia, assistência social, artes, educação, administração, arquitetura, jornalismo, sociologia, teologia, arte-educação, entre outras. <br/>',
      'Este curso oferece conhecimentos suplementares e titulação àqueles que já têm experiência prática na psicoterapia clínica. Sua articulação com outras funções, independente da área, ultrapassa a visão tecnicista do tempo, proporcionando formação geral e complexa aos profissionais..'
    ],
    highlights: [
      {
        icon: 'fas fa-moon',
        title: 'Trabalho com Sonhos',
        description: 'Exploração de conteúdos oníricos através da arte',
        bgColor: 'bg-purple-50',
        iconColor: 'bg-purple-500'
      },
      {
        icon: 'fas fa-paint-brush',
        title: 'Oficina Imersiva',
        description: 'Experiência prática intensiva',
        bgColor: 'bg-yellow-50',
        iconColor: 'bg-yellow-500'
      },
      {
        icon: 'fas fa-users',
        title: 'Grupo Pequeno',
        description: 'Máximo 15 participantes para atenção personalizada',
        bgColor: 'bg-green-50',
        iconColor: 'bg-green-500'
      }
    ],
    curriculum: [
      {
        number: 1,
        title: "Fundamentos das Terapias Artísticas",
        hours: 45,
        ementa: "Fundamentos da arte; pressupostos e histórico da Arteterapia; transferência e contratransferência; criatividade e processo de criação; material simbólico; técnicas expressivas; arte e Psicologia Junguiana; pensamento de Nise da Silveira. Conteúdo programático: o que é Arteterapia; histórico; potencial terapêutico do ato criativo; tipos de oficinas e recursos; produção artística como material simbólico; ética profissional e relação terapeuta/cliente; esquizofrenia e Imagens do Inconsciente; A Emoção de Lidar (Nise da Silveira).",
        objetivos: "Introduzir o aluno ao referencial teórico-prático da Arteterapia; reconhecer a dinâmica transferencial; incentivar pesquisa e discussão de recursos da Arteterapia; analisar criatividade e processo de criação; reconhecer a importância da arte na saúde mental.",
        bibliography: [
          "BROWN, Daniel. Fundamentos em Arteterapia. Vitória Régia.",
          "CARVALHO, Maria Margarida (org.). A Arte Cura?. Editorial Psy II, 1995.",
          "CIORNAI, Selma (org.). Percursos em Arteterapia (3 Volumes). São Paulo: Summus, 2004.",
          "JUNG, C.G. Memórias, Sonhos, Reflexões. Rio de Janeiro: Nova Fronteira, 1993.",
          "_________. A prática da psicoterapia. Rio de Janeiro: Vozes, 1985.",
          "KAST, Verena. A dinâmica dos símbolos. São Paulo: Loyola, 1997.",
          "MELO, Walter. Nise da Silveira. Coleção Pioneiros da Psicologia Brasileira, v.4. Brasília: Imago, 2001.",
          "NACHMANOVITCH, Stephen. Ser Criativo. São Paulo: Summus, 1993 (3ª ed.).",
          "OSTROWER, Fayga. Criatividade e processos de criação. Petrópolis: Vozes, 2007.",
          "PAÏN, Sara; JARREAU, Gladys. Teoria e técnica da arte-terapia — a compreensão do sujeito. Porto Alegre: Artes Médicas, 1996.",
          "QUINTO DE ANDRADE, Liomar. Terapias Expressivas: uma pesquisa de referenciais teórico-práticos. Tese (Doutorado em Psicologia Clínica). USP, 1993.",
          "SILVEIRA, Nise da. Jung, vida e obra. São Paulo: Paz e Terra, 1994.",
          "SILVEIRA, Nise da. Imagens do Inconsciente. Brasília: Alhambra, 1981.",
          "TOMMASI, Sônia Maria Bufarah. Arte Terapia e Loucura: uma viagem simbólica com pacientes psiquiátricos. Vetor.",
          "URRUTIGARAY, Maria Cristina. Arteterapia — A transformação pessoal pelas imagens. Rio de Janeiro: Wak, 2003.",
          "WINNICOTT, D.W. O Brincar e a Realidade (O Espaço Potencial).",
          "WITHMONT, Edward C. A Busca do Símbolo: conceitos básicos de Psicologia Analítica. São Paulo: Cultrix, 1995."
        ]
      },
      {
        number: 2,
        title: "Teorias e técnicas expressivas",
        hours: 45,
        ementa: "Artes plásticas como recurso expressivo e criativo; relação entre material expressivo e teoria analítica. Conteúdo programático — Desenho: percepção visual, observação, elementos plásticos, relações psique-expressão; Colagem: sensibilização afetiva, criação de narrativas, exploração sensorial de materiais; Pintura: autoexpressão, técnicas variadas, simbolismo das cores; Modelagem: criatividade, leitura do imaginário, reconstrução de símbolos.",
        objetivos: "Promover a expressão plástica com técnicas artísticas; abrir espaço para discutir material expressivo e teoria analítica; desenvolver a percepção de conteúdos simbólicos nos trabalhos artísticos.",
        bibliography: [
          "CHEVALIER, Jean; GHEERBRANT, Allan. Dicionário de Símbolos. José Olympio.",
          "GRINBERG, Luiz Paulo. Jung, O Homem Criativo. FTD.",
          "OSTROWER, Fayga. Universos da Arte. Campus.",
          "PHILIPPINI, Ângela. Para entender Arteterapia — Cartografias da Coragem. WAK.",
          "EDWARDS, Betty. Desenhando com o Lado Direito do Cérebro. Ediouro.",
          "RONECKER, Jean-Paul. O Simbolismo Animal. Paulus.",
          "STRICKLAND, Carol. Arte Comentada da Pré-História ao Pós-Moderno. Ediouro."
        ]
      },
      {
        number: 3,
        title: "Práxis da Arteterapia e das Terapias Artísticas",
        hours: 45,
        ementa: "Campos de atuação da Arteterapia; manifestações artísticas e potencial terapêutico; trabalho com grupos e com crianças; imagens simbólicas; relações Arteterapia-Psicologia Junguiana; arquétipos em Arteterapia; vivências artísticas terapêuticas; organização de atividades e projetos.",
        objetivos: "Aprofundar, por vivências, a integração entre Arteterapia e Psicologia Junguiana; orientar a prática (modelos de ateliês, áreas de atuação); reconhecer especificidades por público; ler imagens simbólicas; trabalhar arquétipos em oficinas; planejar projetos de ateliês expressivos; criar atividades arteterapêuticas.",
        bibliography: [
          "ALT, Cleide Becarini. Contos de Fadas e Mitos: um trabalho com grupos, numa abordagem junguiana. São Paulo: Vetor, 2000.",
          "ANGEL, Adamo. Meditando com as Fadas. São Paulo: Gaia, 1997.",
          "BONAVENTURE, Jette. O Que Conta o Conto?. São Paulo: Paulus, 1992.",
          "CHAGAS, Edna Christo; SILVA, Graça Maria Dias da. Criatividade em Arteterapia. Rio de Janeiro: WAK, 2006.",
          "CIORNAI, Selma (org.). Percursos em Arteterapia (3 Vols.). São Paulo: Summus, 2004.",
          "CORUMBA, Rosa; RAMALHO, Cybele. Descobrindo Enigmas de Heróis e Contos de Fadas. Aracajú: Profint, 2008.",
          "COUTINHO, Vanessa. Arteterapia com Crianças. Rio de Janeiro: WAK, 2007.",
          "FORDHAM, Michael. A Criança como Indivíduo. São Paulo: Cultrix, 1994.",
          "FURTH, Gregg M. O Mundo Secreto dos Desenhos. São Paulo: Paulus, 2004.",
          "GOUVÊA, Álvaro de Pinheiro. Sol da Terra. São Paulo: Summus, 1989.",
          "GREIG, Philippe. A criança e seu desenho. Porto Alegre: Artmed, 2004.",
          "JOHNSON, Robert A. A Chave do Reino Interior. São Paulo: Mercúrio, 1989.",
          "KAST, Verena. A dinâmica dos símbolos. São Paulo: Loyola, 1997.",
          "KAST, Verena. A Ansiedade e formas de lidar com ela nos contos de fadas. São Paulo: Paulus, 2006.",
          "KAST, Verena. A Imaginação como espaço de liberdade. São Paulo: Loyola, 1997.",
          "LIEBMANN, Marian. Exercícios de Arte para grupos. São Paulo: Summus, 2000.",
          "MORENO, Maria Teresa Nappi. A Bela Adormecida e a Adolescência. São Paulo: Vetor, 2002.",
          "OAKLANDER, Violet. Descobrindo crianças. São Paulo: Summus, 1980.",
          "OSTROWER, Fayga. Criatividade e processos de criação. Petrópolis: Vozes, 2007.",
          "PAÏN, Sara; JARREAU, Gladys. Teoria e técnica da arteterapia. Porto Alegre: Artes Médicas, 1996.",
          "PHILIPPINI, Ângela. Para entender Arte Terapia — Cartografias da Coragem. Rio de Janeiro: WAK, 2004.",
          "PHILIPPINI, Ângela (org.). Arte Terapia — Métodos, Projetos e Processos. Rio de Janeiro: WAK, 2007.",
          "PHILIPPINI, Ângela. Imagens da Transformação. Rio de Janeiro: Pomar, 1998.",
          "SILVA, Luciana P. B. (org.). Bruxas e Fadas, Sapos e Príncipes. Rio de Janeiro: WAK, 2006.",
          "SILVEIRA, Nise da. Imagens do Inconsciente. Brasília: Alhambra, 1981.",
          "URRUTIGARAY, Maria Cristina. Arteterapia — A transformação pessoal pelas imagens. Rio de Janeiro: WAK, 2003.",
          "VALADARES, Ana Cláudia A. (org.). Arteterapia: um novo paradigma de atenção em saúde mental. Vetor.",
          "VON FRANZ, Marie-Louise. A Interpretação dos Contos de Fada. São Paulo: Paulus, 1990."
        ]
      },
      {
        number: 4,
        title: "Psicologia, tipos humanos e as expressões criativas e artísticas",
        hours: 35,
        ementa: "Teatro Terapêutico com abordagem junguiana: formação vivencial (produção, apreciação e reflexão); preparação do arteterapeuta para uso de técnica teatral em atendimentos individuais e grupais; linguagem teatral aplicada à terapia; condução e facilitação de jogos, personagens e cenas; leitura terapêutica.",
        objetivos: "Capacitar para criar, organizar, aplicar e avaliar técnicas de teatro terapêutico na abordagem junguiana; promover desenvolvimento biopsicossocioespiritual via processo teatral; correlacionar técnicas com estudos junguianos; realizar práticas teatrais para atendimentos; focar jogos cênicos, personagens e cenas; construir resultados cênicos para leitura terapêutica.",
        bibliography: [
          "BARBOSA, Ana Mae (org.). Arte-Educação: Leitura no Subsolo. São Paulo: Cortez, 1997.",
          "BOAL, Augusto. O Arco-íris do Desejo. Rio de Janeiro: Civilização Brasileira, 1996.",
          "BOAL, Augusto. Jogos para Atores e Não-Atores. Rio de Janeiro: Civilização Brasileira, 2001.",
          "BOAL, Augusto. O teatro como arte marcial. Rio de Janeiro: Garamond, 2003.",
          "BOAL, Augusto. Teatro do Oprimido e outras poéticas políticas. Rio de Janeiro: Civilização Brasileira, 2005.",
          "COURTNEY, Richard. Jogos, Teatro e Pensamento. São Paulo: Perspectiva, 2003.",
          "MONTEIRO, R.F. Jogos Dramáticos. São Paulo: McGraw-Hill, 1979.",
          "ERIKSON, Erik H. O Ciclo da Vida Completo. Porto Alegre: Artmed, 1997.",
          "FERRAZ, M.H.C.T.; FUSSARI, M.F.R. Metodologia do Ensino da Arte. São Paulo: Cortez, 1995.",
          "GARDNER, Howard. Inteligências Múltiplas. Porto Alegre: Artmed, 1995.",
          "JAPIASSU, Ricardo. Metodologia do Ensino do Teatro. São Paulo: Papirus, 2001.",
          "JARES, Xésus R. Educação para a Paz: sua teoria e prática. Porto Alegre: Artmed, 2002.",
          "JUNG, C.G. O Espírito na Arte e na Ciência. Petrópolis: Vozes, 1991.",
          "KANDINSKY, Wassily. Do Espiritual na Arte. São Paulo: Martins Fontes, 1996.",
          "LOWEN, Alexander. A espiritualidade do corpo. São Paulo: Summus, 1995.",
          "LOWENFELD, Viktor. Desenvolvimento da Capacidade Criadora. São Paulo: Mestre Jou, 1970.",
          "MASLOW, Abraham. Introdução à Psicologia do Ser. Rio de Janeiro: Eldorado.",
          "MORENO, J. L. O Teatro da Espontaneidade. São Paulo: Summus, 1984.",
          "MORIN, Edgar. Os Sete Saberes Necessários à Educação do Futuro. São Paulo: Cortez; UNESCO, 2000.",
          "NETO, Onofre Penteado. Vida, Valor e Arte I. Rio de Janeiro: Perspectiva, 1988.",
          "NOVELLY, Maria C. Jogos Teatrais: exercícios para grupos em sala de aula. São Paulo: Papirus, 1985.",
          "OSTROWER, Fayga. Acasos e Criação Artística. São Paulo: Campus, 1990.",
          "PEIXOTO, Fernando. O Que é Teatro. São Paulo: Brasiliense, 2003.",
          "PUEBLA, Eugênia. Educar com o coração. Rio de Janeiro: Fundação Petrópolis, 1992.",
          "READ, Herbert. A Educação pela Arte. São Paulo: Martins Fontes, 1977.",
          "READ, Herbert. A Redenção do Robô. São Paulo: Summus, 1986.",
          "REVERBEL, Olga. Jogos Teatrais na Escola. São Paulo: Scipione, 2002.",
          "ROHDEN, Huberto. Filosofia da Arte. São Paulo: Martin Claret, 1990.",
          "SCHILLER, Friedrich. Sobre a Educação Estética. São Paulo: Herder, 1963.",
          "SPOLIN, Viola. Improvisação para o Teatro. São Paulo: Perspectiva, 2003.",
          "WEIL, Pierre. A Criança, o Lar e a Escola. Petrópolis: Vozes, 1986.",
          "WEIL, Pierre. A arte de viver em paz. São Paulo: Gente, 2000.",
          "YUS, Rafael. Educação integral: uma educação para o terceiro milênio. Porto Alegre: Artmed, 2003."
        ]
      },
      {
        number: 5,
        title: "Psicopatologia, psicossomática, mitologia e neurociências",
        hours: 30,
        ementa: "Correlação de distúrbios psicopatológicos com dimensões culturais e mitológicas; compreensão do adoecimento à luz das neurociências e Psiconeuroendocrinoimunologia; marcadores somáticos; doenças autoimunes; psicogênese das doenças; intervenções criativas com contribuições mitológicas.",
        objetivos: "Correlacionar fatores psicológicos e repercussões somáticas integrando neurologia, endocrinologia e imunologia com registros mitológicos do inconsciente coletivo como fontes de cura/adoecimento.",
        bibliography: [
          "BALLONE, Geraldo (org.). Da Emoção à Lesão — Guia de Medicina Psicossomática. São Paulo: Manole, 2001.",
          "BRANDÃO, Junito de Souza. Mitologia Grega. Petrópolis: Vozes, 1989.",
          "CAMPBELL, Joseph. O Poder do Mito. São Paulo: Palas Athena, 1990.",
          "CAPSANO, H.F. Doença — Episódio da Vida. Porto Alegre: Artes Médicas, 1993.",
          "CHIOZZA, L.A. (org.). Os Sentimentos Ocultos em.... São Paulo: Casa do Psicólogo, 1998.",
          "CONGER, J. P. Jung e Reich. São Paulo: Summus, 1993.",
          "DAMÁSIO, António R. O Erro de Descartes. São Paulo: Companhia das Letras, 1996.",
          "DARWIN, Charles. A Expressão das Emoções no Homem e nos Animais. São Paulo: Companhia das Letras, 2000.",
          "FIERZ, Heinrich Karl. Psiquiatria Junguiana. São Paulo: Paulus, 1997.",
          "HILLMAN, James. O Mito da Análise. Rio de Janeiro: Paz e Terra, 1984.",
          "KERÉNYI, Karl. Os Deuses Gregos / Os Heróis Gregos. São Paulo: Cultrix, 1994.",
          "MINDELL, Arnold. O Corpo Onírico. São Paulo: Summus, 1989.",
          "PAIVA, L.M. Medicina Psicossomática. Porto Alegre: Artes Médicas, 1992.",
          "PINHEIRO, R. Medicina Psicossomática — uma abordagem clínica. São Paulo: Fundação BYK, 1992.",
          "PORTELLANO, José Antonio. Introducción a la neuropsicobiología. Madrid: McGraw-Hill, 2005.",
          "RAMOS, D.G. A Psique do Corpo. São Paulo: Summus, 1994.",
          "ROSSI, Ernest. A Psicobiologia da Cura Mente-Corpo. São Paulo: PSI, 1997.",
          "RUBY, Paulo. As Faces do Humano: Tipologias Junguiana e Psicossomática. São Paulo: Oficina de Textos, 1998.",
          "SACKS, Oliver. Tempo de Despertar. São Paulo: Companhia das Letras, 1997.",
          "SALAND, Nancy S. A Personalidade Limítrofe. São Paulo: Cultrix, 1989.",
          "SANVITO, L.O. Cérebro e suas Vertentes. São Paulo: Roca, 199?.",
          "SEGRÉ, M.; COHEN, C. (org.). Bioética. São Paulo: EDUSP, 1995.",
          "SILVA, M.A.D. Quem Ama Não Adoece. São Paulo: Best Seller, 1994.",
          "SONTAG, Susan. A Doença como Metáfora. São Paulo: Graal, 1984.",
          "STANLEY, K. Anatomia Emocional. São Paulo: Summus, 1992.",
          "VON FRANZ, Marie-Louise. Reflexos da Alma. São Paulo: Cultrix, 1992."
        ]
      },
      {
        number: 6,
        title: "Metodologia do trabalho científico",
        hours: 30,
        ementa: "Conceitos básicos de metodologia científica; ciências e conhecimento; leitura, análise e interpretação de textos (textual, temática e interpretativa); pesquisa e projeto; subsídios para elaboração de monografia.",
        objetivos: "Capacitar para o trabalho científico: desenvolver pesquisa, analisar textos, elaborar projeto e monografia conforme métodos correntes.",
        bibliography: [
          "Manual de Elaboração do Projeto e da Monografia do IJEP.",
          "Vídeo tutorial — PROJETO E MONOGRAFIA DO IJEP: https://youtu.be/UrVA6szS84M"
        ]
      },
      {
        number: 7,
        title: "Atividades Programadas",
        hours: 160,
        ementa: "Atividades obrigatórias de formação acadêmica e pesquisa: no 18º mês, apresentação do projeto de conclusão; resenhas de no mínimo 4 livros que comporão o referencial teórico; horas complementam as horas-aula (45min).",
        objetivos: "Consolidar pesquisa e produção acadêmica por meio de apresentação de projeto e resenhas, cumprindo créditos obrigatórios.",
        bibliography: []
      },
      {
        number: 8,
        title: "Atividades Complementares",
        hours: 220,
        ementa: "Integralização de 220h (ou mais), facultativas: até 120h de atendimentos clínicos e 100h de supervisão de casos; participação no Congresso Junguiano do IJEP com certificação computável.",
        objetivos: "Ampliar formação prática e científica via atendimentos, supervisões e participação em eventos.",
        bibliography: []
      },
      {
        number: 9,
        title: "Trabalho de Conclusão",
        hours: null,
        ementa: "Produção de monografia conforme normas técnicas do IJEP; trabalhos de destaque poderão integrar biblioteca virtual; etapa atende exigências legais.",
        objetivos: "Sistematizar o aprendizado e divulgar a produção acadêmica do discente, atendendo às exigências de conclusão.",
        bibliography: [
          "Manual de Elaboração do Projeto e da Monografia do IJEP.",
          "Vídeo tutorial — PROJETO E MONOGRAFIA DO IJEP: https://youtu.be/UrVA6szS84M"
        ]
      }
    ],
    avaliacao: [
      'Frequência mínima de 75% e aproveitamento mínimo de 70% (nota 7,0) nas disciplinas',
      'Serão concedidos certificados aos discentes que cursarem todas as disciplinas e apresentarem o trabalho de conclusão de curso.'
    ],
    cargahoraria: {
        texto: [
        'A carga horária do Curso de Especialização em Arteterapia e Expressões Criativas é de 390 horas, distribuídas em 3 disciplinas de 45 horas/aula, 2 disciplinas de 35 horas/aula, uma disciplina de 30 horas/aula e 160 horas de atividades programadas, e elaboração de trabalhos expressivos, com previsão de integralização de mais 220 horas (que podem ser acrescidas, facultativamente, com 120 horas de atendimentos clínicos e 100 horas de supervisão de casos), podendo totalizar 610 horas.',
        'Sua duração é de 24 meses, oferecido em aulas presenciais, que acontecem num único sábado de cada mês, das 9h às 17h45.'
        ],
        atividades: [
            { descricao: 'Horas aulas', carga: 230 },
            { descricao: 'Atividades programadas', carga: 160 },
            { descricao: 'Atendimentos/Ateliê*', carga: 120 },
            { descricao: 'Supervisão*', carga: 100 },
            { descricao: 'Total Geral', carga: 610 }
        ],
        observacao: '* Atendimentos/Ateliê e Supervisão são facultativos. Nota: há uma divergência de 5 horas entre a soma textual das disciplinas (235h) e a tabela (230h); a tabela fecha 230h aulas + 160h atividades = 390h.'
    },
    coordenacao: {
      professor: 'Prof. Dr. Waldemar Magaldi Filho',
      descricao: 'Psicólogo, Mestre e Doutor em Ciências da Religião, Educador, Especialista em Psicologia Analítica Junguiana, Psicossomática, Arteterapia, EMDR e Homeopatia e autor do livro: \"Dinheiro, saúde e sagrado - interfaces culturais, econômicas e religiosas à luz da psicologia analítica\".'
    },
    professores: [
      {
        name: 'Prof. Ana Paula Maluf',
        title: 'Arteterapeuta',
        experience: 'Especialista em Sonhos e Arte',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg'
      },
      {
        name: 'Prof. Bárbara Pessanha',
        title: 'Psicóloga Junguiana',
        experience: 'Especialista em Análise de Sonhos',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg'
      }
    ],
    testimonials: [
      {
        text: 'Experiência transformadora! Os sonhos ganharam uma nova dimensão.',
        author: 'Dra. Sofia Costa',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg',
        borderColor: 'border-secondary'
      }
    ],
    contact: {
      phone: '(11) 3333-4444',
      whatsapp: '(11) 99999-8888',
      email: 'contato@fafih.edu.br'
    },
    breadcrumb: ['Início', 'Curta Duração', 'Sonhando Através da Arteterapia']
  },
  6: {
    id: 6,
    title: 'De Aion a Jó',
    subtitle: 'Do Javismo da Antiga Era de Áries à Revolução Aquariana',
    description: 'Do Javismo da Antiga Era de Áries à Revolução Aquariana do Mundo que Deseja Nascer.',
    fullDescription: [
      'Um curso que explora a evolução da consciência humana através dos tempos, analisando as transformações religiosas, filosóficas e psicológicas desde a antiguidade até os dias atuais.',
      'Com os professores Dimas Künsch e Waldemar Magaldi, os participantes examinarão textos fundamentais de Jung sobre religião, mitologia e transformação da consciência.'
    ],
    image: 'https://i.imgur.com/REzhmRK.jpeg',
    hero: {
      type: 'video',
      source: heroVideoCursoDeAion,
      alt: 'Divulgação do curso De Aion a Jó',
      fallbackImage: 'https://i.imgur.com/REzhmRK.jpeg',
    },
    category: 'extensao',
    categoryLabel: 'Curta Duração',
    price: 3790.00,
    precoMatricula: 300.00,
    originalPrice: null,
    modalidade: 'Online',
    duration: '3 meses',
    workload: '45h',
    startDate: 'Junho 2024',
    maxStudents: 'Máx. 35 alunos',
    certificate: 'Certificado de Participação',
    monthlyPrice: 'R$ 263,33/mês',
    justificativa: [
      'Explora a evolução da consciência humana da era de Áries à perspectiva aquariana à luz da psicologia analítica.',
      'Integra estudos de mitologia, religião comparada e simbolismo nas obras de Jung.',
      'Propõe debates sobre transformações culturais contemporâneas e suas implicações psíquicas.'
    ],
    objetivos: [
      'Compreender a obra Aion e suas conexões com o livro de Jó.',
      'Relacionar símbolos arquetípicos às mudanças históricas e espirituais.',
      'Ampliar a leitura junguiana sobre transformação da consciência e novos paradigmas.'
    ],
    publico: [
      'Estudiosos da psicologia analítica, teologia, filosofia e áreas afins.',
      'Profissionais e interessados em espiritualidade, mitologia e simbolismo.'
    ],
    highlights: [
      {
        icon: 'fas fa-history',
        title: 'Perspectiva Histórica',
        description: 'Evolução da consciência através dos tempos',
        bgColor: 'bg-amber-50',
        iconColor: 'bg-amber-500'
      },
      {
        icon: 'fas fa-star',
        title: 'Era Aquariana',
        description: 'Compreensão das transformações contemporâneas',
        bgColor: 'bg-blue-50',
        iconColor: 'bg-blue-500'
      },
      {
        icon: 'fas fa-book-open',
        title: 'Textos Fundamentais',
        description: 'Estudo de Aion e Resposta a Jó de Jung',
        bgColor: 'bg-green-50',
        iconColor: 'bg-green-500'
      }
    ],
    curriculum: [
      {
        number: 1,
        title: 'Aion e a Era de Peixes',
        hours: 20,
        ementa: 'Análise da obra Aion de Jung; simbolismo cristão; transformação da consciência.',
        objetivos: 'Compreender a obra Aion e suas conexões com o livro de Jó.',
        bibliography: [
          'Jung, C.G. Aion: Estudos sobre o Simbolismo do Si-mesmo. Vozes, 1982',
          'Jung, C.G. Psicologia e Religião. Vozes, 1987',
          'Edinger, E. The Aion Lectures. Inner City Books, 1996'
        ]
      },
      {
        number: 2,
        title: 'Resposta a Jó',
        hours: 15,
        ementa: 'Estudo do livro Resposta a Jó; teodiceia junguiana; transformação de Deus.',
        objetivos: 'Relacionar símbolos arquetípicos às mudanças históricas e espirituais.',
        bibliography: [
          'Jung, C.G. Resposta a Jó. Vozes, 1979',
          'Dourley, J. Jung and the Religious Alternative. Edwin Mellen, 1995',
          'Ulanov, A. Religion and the Spiritual in Carl Jung. Paulist Press, 1999'
        ]
      },
      {
        number: 3,
        title: 'Era Aquariana',
        hours: 10,
        ementa: 'Perspectivas futuras da consciência; nova espiritualidade; paradigmas emergentes.',
        objetivos: 'Ampliar a leitura junguiana sobre transformação da consciência e novos paradigmas.',
        bibliography: [
          'Ferguson, M. A Conspiração Aquariana. Record, 1980',
          'Capra, F. A Teia da Vida. Cultrix, 1996',
          'Wilber, K. O Espectro da Consciência. Cultrix, 1990'
        ]
      }
    ],
    avaliacao: [
      'Frequência mínima de 75% e aproveitamento mínimo de 70% (nota 7,0) nas disciplinas',
      'Serão concedidos certificados aos discentes que cursarem todas as disciplinas e apresentarem o trabalho de conclusão de curso.'
    ],
    cargahoraria: {
      texto: [
        'A carga horária do Curso De Aion a Jó é de 45 horas, distribuídas em disciplinas teóricas, com previsão de integralização completa.',
        'Sua duração é de 3 meses, oferecido em modalidade online.'
      ],
      atividades: [
        { descricao: 'Aion e a Era de Peixes', carga: 20 },
        { descricao: 'Resposta a Jó', carga: 15 },
        { descricao: 'Era Aquariana', carga: 10 },
        { descricao: 'Total Geral', carga: 45 }
      ],
      observacao: 'Carga horária para curso de extensão de curta duração.'
    },
    coordenacao: {
      professor: 'Prof. Dimas Künsch',
      descricao: 'Filósofo e Comunicólogo, especialista em Jung e Religião, com vasta experiência em estudos sobre transformação da consciência.'
    },
    testimonials: [
      {
        text: 'Curso profundo que amplia a compreensão sobre nossa época.',
        author: 'Dr. Ricardo Nunes',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg',
        borderColor: 'border-primary'
      }
    ],
    contact: {
      phone: '(11) 3333-4444',
      whatsapp: '(11) 99999-8888',
      email: 'contato@fafih.edu.br'
    },
    breadcrumb: ['Início', 'Curta Duração', 'De Aion a Jó']
  },
  7: {
    id: 7,
    title: 'Formação de Membros Analistas Junguianos',
    subtitle: 'Filiação e Formação de Analistas do IJEP',
    description: 'Filiação e Formação de Analistas. Somente para Ex-Alunos do Curso de Psicologia Junguiana do IJEP.',
    fullDescription: [
      'Programa exclusivo de formação em análise junguiana, destinado aos egressos do curso de Pós-Graduação em Psicologia Junguiana do IJEP. Este programa oferece a formação completa para se tornar um analista junguiano certificado.',
      'O programa inclui análise pessoal obrigatória, supervisão clínica intensiva, seminários avançados e participação em atividades do instituto, preparando analistas de excelência para a prática da psicologia analítica.'
    ],
    image: 'https://i.imgur.com/lXkjLLG.png',
    hero: {
      type: 'video',
      source: heroVideoCursoFormacao,
      alt: 'Representação do curso Formação de Membros Analistas Junguianos',
      fallbackImage: 'https://i.imgur.com/lXkjLLG.png',
    },
    category: 'formacao',
    categoryLabel: 'Formação',
    price: 12000.00,
    precoMatricula: 900.00,
    originalPrice: null,
    modalidade: 'Presencial',
    duration: '4 anos',
    workload: '800h',
    startDate: 'Fevereiro 2024',
    maxStudents: 'Máx. 8 candidatos',
    certificate: 'Certificado de Analista Junguiano',
    monthlyPrice: 'R$ 250,00/mês',
    justificativa: [
      'Programa exclusivo de formação para analistas junguianos, destinado a egressos do curso de Psicologia Junguiana do IJEP.',
      'Oferece percurso completo com análise pessoal obrigatória, supervisão clínica intensiva e participação institucional.',
      'Garante alinhamento com os critérios de certificação e ética do IJEP.'
    ],
    objetivos: [
      'Formar analistas junguianos aptos a atuar com excelência clínica.',
      'Garantir aprofundamento teórico, vivencial e supervisionado nos pilares da Psicologia Analítica.',
      'Promover inserção institucional e compromisso ético com a comunidade IJEP.'
    ],
    publico: [
      'Ex-alunos do curso de Psicologia Junguiana do IJEP habilitados a ingressar na formação didática.',
      'Profissionais com experiência clínica que buscam certificação oficial como analistas junguianos.'
    ],
    highlights: [
      {
        icon: 'fas fa-graduation-cap',
        title: 'Formação Completa',
        description: 'Programa integral de 4 anos para analistas',
        bgColor: 'bg-indigo-50',
        iconColor: 'bg-indigo-500'
      },
      {
        icon: 'fas fa-user-md',
        title: 'Supervisão Clínica',
        description: 'Acompanhamento individual intensivo',
        bgColor: 'bg-green-50',
        iconColor: 'bg-green-500'
      },
      {
        icon: 'fas fa-certificate',
        title: 'Certificação Oficial',
        description: 'Reconhecimento como Analista Junguiano',
        bgColor: 'bg-purple-50',
        iconColor: 'bg-purple-500'
      }
    ],
    curriculum: [
      {
        number: 1,
        title: 'Análise Pessoal',
        hours: 200,
        ementa: 'Análise pessoal obrigatória com analista didata; autoconhecimento; elaboração de complexos pessoais.',
        objetivos: 'Desenvolver autoconhecimento necessário para a prática analítica.',
        bibliography: [
          'Jung, C.G. O Desenvolvimento da Personalidade. Vozes, 1986',
          'Henderson, J. Thresholds of Initiation. Wesleyan University Press, 1967',
          'Fordham, M. Children as Individuals. Hodder & Stoughton, 1969'
        ]
      },
      {
        number: 2,
        title: 'Supervisão Clínica',
        hours: 300,
        ementa: 'Supervisão de casos clínicos; discussão de processos terapêuticos; ética profissional.',
        objetivos: 'Garantir aprofundamento teórico, vivencial e supervisionado nos pilares da Psicologia Analítica.',
        bibliography: [
          'Guggenbuhl-Craig, A. Power in the Helping Professions. Spring Publications, 1971',
          'Stein, M. Jung\'s Map of the Soul. Open Court, 1998',
          'Samuels, A. The Political Psyche. Routledge, 1993'
        ]
      },
      {
        number: 3,
        title: 'Seminários Teóricos',
        hours: 200,
        ementa: 'Aprofundamento teórico avançado; estudo de casos; pesquisa em Psicologia Analítica.',
        objetivos: 'Formar analistas junguianos aptos a atuar com excelência clínica.',
        bibliography: [
          'Jung, C.G. Obras Completas. Vozes, 1971-2013',
          'Hillman, J. Re-Visioning Psychology. Harper & Row, 1975',
          'Von Franz, M.L. Alchemical Active Imagination. Shambhala, 1979'
        ]
      },
      {
        number: 4,
        title: 'Atividades Institucionais',
        hours: 100,
        ementa: 'Participação em eventos e pesquisas; congressos; atividades do IJEP.',
        objetivos: 'Promover inserção institucional e compromisso ético com a comunidade IJEP.',
        bibliography: [
          'Anais dos Congressos Junguianos do IJEP',
          'Revista Junguiana da Sociedade Brasileira de Psicologia Analítica',
          'Journal of Analytical Psychology - SAP London'
        ]
      }
    ],
    avaliacao: [
      'Frequência mínima de 75% e aproveitamento mínimo de 70% (nota 7,0) nas disciplinas',
      'Serão concedidos certificados aos discentes que cursarem todas as disciplinas e apresentarem o trabalho de conclusão de curso.'
    ],
    cargahoraria: {
      texto: [
        'A carga horária do Programa de Formação de Membros Analistas Junguianos é de 800 horas, distribuídas em análise pessoal, supervisão clínica, seminários teóricos e atividades institucionais.',
        'Sua duração é de 4 anos, oferecido em modalidade presencial com participação intensiva.'
      ],
      atividades: [
        { descricao: 'Análise Pessoal', carga: 200 },
        { descricao: 'Supervisão Clínica', carga: 300 },
        { descricao: 'Seminários Teóricos', carga: 200 },
        { descricao: 'Atividades Institucionais', carga: 100 },
        { descricao: 'Total Geral', carga: 800 }
      ],
      observacao: 'Programa de formação para analistas junguianos com certificação oficial do IJEP.'
    },
    coordenacao: {
      professor: 'Analistas Didatas IJEP',
      descricao: 'Corpo docente especializado composto por analistas certificados com experiência didática e supervisionamento de formação.'
    },
    testimonials: [
      {
        text: 'Formação transformadora que prepara verdadeiros analistas.',
        author: 'Dr. Eduardo Silva',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg',
        borderColor: 'border-primary'
      }
    ],
    contact: {
      phone: '(11) 3333-4444',
      whatsapp: '(11) 99999-8888',
      email: 'formacao@fafih.edu.br'
    },
    breadcrumb: ['Início', 'Formação', 'Formação de Membros Analistas Junguianos']
  },
  8: {
    id: 8,
    title: 'Congressos Junguianos do IJEP',
    subtitle: 'Eventos científicos de excelência',
    description: 'Adquira ou saiba mais deste e dos demais Congressos Junguianos do IJEP.',
    fullDescription: [
      'Os Congressos Junguianos do IJEP são eventos científicos de alto nível que reúnem pesquisadores, analistas e interessados em psicologia analítica de todo o mundo. Estes encontros promovem o intercâmbio de conhecimentos e experiências na área junguiana.',
      'Com palestrantes internacionais renomados e uma programação diversificada, os congressos oferecem oportunidades únicas de aprendizado, networking e atualização profissional.'
    ],
    image: 'https://i.imgur.com/M3vP6UT.png',
    hero: {
      type: 'image',
      source: 'https://i.imgur.com/M3vP6UT.png',
      alt: 'Divulgação dos Congressos Junguianos do IJEP',
    },
    category: 'eventos',
    categoryLabel: 'Eventos',
    price: 4450.00,
    precoMatricula: 300.00,
    originalPrice: null,
    modalidade: 'Online',
    duration: '3 dias',
    workload: '24h',
    startDate: 'Setembro 2024',
    maxStudents: 'Inscrições ilimitadas',
    certificate: 'Certificado de Participação',
    monthlyPrice: 'Pagamento único',
    justificativa: [
      'Evento científico que reúne pesquisadores e profissionais da psicologia analítica em âmbito nacional e internacional.',
      'Promove atualização, networking e divulgação de pesquisas na área junguiana.',
      'Oferece programação diversificada com palestras, mesas redondas e comunicações livres.'
    ],
    objetivos: [
      'Disseminar produções científicas e práticas inovadoras em psicologia analítica.',
      'Conectar profissionais e estudantes em torno de debates atuais.',
      'Incentivar a participação em redes de pesquisa e formação continuada.'
    ],
    publico: [
      'Analistas, psicólogos, estudantes e interessados em psicologia analítica e áreas correlatas.',
      'Pesquisadores e instituições que buscam apresentar trabalhos e projetos junguianos.'
    ],
    highlights: [
      {
        icon: 'fas fa-globe',
        title: 'Alcance Internacional',
        description: 'Palestrantes e participantes do mundo todo',
        bgColor: 'bg-blue-50',
        iconColor: 'bg-blue-500'
      },
      {
        icon: 'fas fa-microphone',
        title: 'Palestras Magistrais',
        description: 'Conteúdo de alta qualidade científica',
        bgColor: 'bg-green-50',
        iconColor: 'bg-green-500'
      },
      {
        icon: 'fas fa-network-wired',
        title: 'Networking',
        description: 'Oportunidades de conexão profissional',
        bgColor: 'bg-purple-50',
        iconColor: 'bg-purple-500'
      }
    ],
    curriculum: [
      {
        number: 1,
        title: 'Palestras Magistrais',
        hours: 12,
        ementa: 'Apresentações de especialistas internacionais; temas atuais da Psicologia Analítica; conferências plenárias.',
        objetivos: 'Disseminar produções científicas e práticas inovadoras em psicologia analítica.',
        bibliography: [
          'Anais do Congresso Junguiano do IJEP',
          'Journal of Analytical Psychology',
          'Spring - Journal of Archetype and Culture'
        ]
      },
      {
        number: 2,
        title: 'Mesas Redondas',
        hours: 8,
        ementa: 'Debates e discussões temáticas; painéis com especialistas; temas transversais.',
        objetivos: 'Conectar profissionais e estudantes em torno de debates atuais.',
        bibliography: [
          'Cadernos Junguianos',
          'Revista da Sociedade Brasileira de Psicologia Analítica',
          'International Journal of Jungian Studies'
        ]
      },
      {
        number: 3,
        title: 'Comunicações Livres',
        hours: 4,
        ementa: 'Apresentação de pesquisas; trabalhos de conclusão; estudos de caso.',
        objetivos: 'Incentivar a participação em redes de pesquisa e formação continuada.',
        bibliography: [
          'Normas de Apresentação Científica IJEP',
          'Manual de Metodologia Científica',
          'Guidelines for Research Presentation'
        ]
      }
    ],
    avaliacao: [
      'Frequência mínima de 75% e aproveitamento mínimo de 70% (nota 7,0) nas disciplinas',
      'Serão concedidos certificados aos discentes que cursarem todas as disciplinas e apresentarem o trabalho de conclusão de curso.'
    ],
    cargahoraria: {
      texto: [
        'A carga horária dos Congressos Junguianos do IJEP é de 24 horas, distribuídas em palestras magistrais, mesas redondas e comunicações livres.',
        'Sua duração é de 3 dias, oferecido em modalidade online com transmissão ao vivo.'
      ],
      atividades: [
        { descricao: 'Palestras Magistrais', carga: 12 },
        { descricao: 'Mesas Redondas', carga: 8 },
        { descricao: 'Comunicações Livres', carga: 4 },
        { descricao: 'Total Geral', carga: 24 }
      ],
      observacao: 'Carga horária para evento científico com certificado de participação.'
    },
    coordenacao: {
      professor: 'Palestrantes Internacionais',
      descricao: 'Especialistas mundiais e autoridades em psicologia analítica que coordenam e conduzem as atividades científicas do congresso.'
    },
    testimonials: [
      {
        text: 'Evento imperdível para quem estuda Jung!',
        author: 'Dra. Marina Alves',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg',
        borderColor: 'border-secondary'
      }
    ],
    contact: {
      phone: '(11) 3333-4444',
      whatsapp: '(11) 99999-8888',
      email: 'eventos@fafih.edu.br'
    },
    breadcrumb: ['Início', 'Eventos', 'Congressos Junguianos do IJEP']
  }
};

export const getCourseDetails = (courseId, { fallback = true } = {}) => {
  const hasId = courseId !== undefined && courseId !== null && courseId !== '';
  const key = hasId ? String(courseId) : '';

  if (key && courseDetailsMap[key]) {
    return courseDetailsMap[key];
  }

  if (!fallback) {
    return null;
  }

  if (!hasId || !key) {
    if (courseDetailsMap[1]) {
      return courseDetailsMap[1];
    }
  }

  const first = Object.values(courseDetailsMap)[0];
  return first ?? null;
};
