
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
    originalPrice: null,
    modalidade: 'Presencial',
    duration: '18 meses',
    workload: '360h',
    startDate: 'Março 2024',
    maxStudents: 'Máx. 25 alunos',
    certificate: 'Reconhecida MEC',
    monthlyPrice: 'R$ 160,56/mês',
    justificativa: [
      'Atende à crescente procura por especialização na Psicologia Analítica junguiana com sólida base teórica e prática supervisionada.',
      'Integra conceitos de inconsciente coletivo, arquétipos e individuação à atuação clínica contemporânea.',
      'Oferece ambiente de estudo e pesquisa alinhado às demandas atuais de cuidado em saúde mental e autoconhecimento.'
    ],
    objetivos: [
      'Aprofundar a compreensão dos fundamentos da teoria analítica de C. G. Jung.',
      'Aplicar métodos e técnicas da Psicologia Analítica na prática profissional.',
      'Desenvolver competências para análise de sonhos, supervisão clínica e intervenção simbólica.'
    ],
    publico: [
      'Psicólogos, psiquiatras e profissionais da saúde mental que desejam especialização em Psicologia Analítica.',
      'Educadores, terapeutas e pesquisadores interessados em abordagens simbólicas e junguianas do psiquismo.'
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
        title: 'Fundamentos da Psicologia Analítica',
        description: '60h - Introdução aos conceitos básicos da teoria junguiana'
      },
      {
        number: 2,
        title: 'Inconsciente Coletivo e Arquétipos',
        description: '60h - Estudo aprofundado dos padrões universais da psique'
      },
      {
        number: 3,
        title: 'Tipos Psicológicos',
        description: '45h - Classificação tipológica e aplicações clínicas'
      },
      {
        number: 4,
        title: 'Análise de Sonhos',
        description: '45h - Técnicas de interpretação e análise onírica'
      },
      {
        number: 5,
        title: 'Prática Clínica Supervisionada',
        description: '90h - Aplicação prática com supervisão especializada'
      }
    ],
    professors: [
      {
        name: 'Prof. Dra. Maria Silva',
        title: 'Analista Junguiana Certificada',
        experience: '25 anos de experiência clínica',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg'
      },
      {
        name: 'Prof. Dr. João Santos',
        title: 'Especialista em Tipos Psicológicos',
        experience: 'PhD em Psicologia Analítica',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg'
      },
      {
        name: 'Prof. Dra. Ana Costa',
        title: 'Especialista em Análise de Sonhos',
        experience: 'Membro da IAAP',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg'
      },
      {
        name: 'Prof. Dr. Carlos Lima',
        title: 'Pesquisador em Arquétipos',
        experience: 'Autor de 15 livros',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg'
      }
    ],
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
        description: '60h - Base teórica e histórica da medicina psicossomática'
      },
      {
        number: 2,
        title: 'Neuropsicoimunologia',
        description: '45h - Interações entre sistema nervoso e imunológico'
      },
      {
        number: 3,
        title: 'Técnicas de Intervenção',
        description: '60h - Métodos terapêuticos integrativo'
      },
      {
        number: 4,
        title: 'Estudos de Caso',
        description: '45h - Análise prática de casos clínicos'
      }
    ],
    professors: [
      {
        name: 'Prof. Dr. Carlos Mendes',
        title: 'Especialista em Psicossomática',
        experience: '20 anos de experiência clínica',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg'
      }
    ],
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
        hours: '45h',
        summary: 'Origens da arteterapia, fundamentos junguianos, criatividade e ética profissional.',
        ementa: [
          'Histórico da arteterapia e diferenciações conceituais',
          'Criatividade, processo criador e materiais simbólicos',
          'Transferência, contratransferência e ética em arteterapia',
          'O pensamento de Nise da Silveira e referências junguianas'
        ],
        objetivos: [
          'Compreender os fundamentos históricos e teóricos da Arteterapia',
          'Relacionar a Psicologia Analítica de C. G. Jung às práticas expressivas',
          'Reconhecer critérios éticos e clínicos para atuação arteterapêutica'
        ],
        bibliografia: {
          descricao: 'Bibliografia básica',
          referencias: [
            'SILVEIRA, Nise da. Imagens do Inconsciente. Rio de Janeiro: Imago, 1978.',
            'JUNG, C. G. O Homem e seus Símbolos. Rio de Janeiro: Nova Fronteira, 1964.',
            'KRAMER, Edith. Arteterapia: Teoria e Prática. Porto Alegre: Artes Médicas, 2001.'
          ]
        }
      },
      {
        number: 2,
        title: 'Teorias e Técnicas Expressivas',
        hours: '45h',
        summary: 'Práticas com desenho, colagem, pintura e modelagem sob a lente junguiana.',
        ementa: [
          'Técnicas de desenho e percepção visual',
          'Colagem, narrativa imagética e simbolismo',
          'Pintura como expressão emocional e processo catártico',
          'Modelagem e construção de objetos simbólicos'
        ],
        objetivos: [
          'Vivenciar recursos expressivos variados e suas leituras simbólicas',
          'Planejar atividades arteterapêuticas alinhadas à teoria analítica',
          'Desenvolver sensibilidade para conteúdos afetivos nas produções plásticas'
        ],
        bibliografia: {
          descricao: 'Referências principais',
          referencias: [
            'OSTROWER, Fayga. Criatividade e Processos de Criação. Petrópolis: Vozes, 2007.',
            'NACHMANOVITCH, Stephen. Ser Criativo. São Paulo: Summus, 1993.',
            'WITHMONT, Edward. A Busca do Símbolo. São Paulo: Cultrix, 1995.'
          ]
        }
      },
      {
        number: 3,
        title: 'Metodologias de Oficinas',
        hours: '60h',
        summary: 'Planejamento de vivências, escolha de materiais e condução de grupos.',
        ementa: [
          'Estruturação de oficinas e roteiros terapêuticos',
          'Seleção de materiais e ambientação simbólica',
          'Gestão de grupos, escuta ativa e manejo de emergências',
          'Documentação de processos e avaliação qualitativa'
        ],
        objetivos: [
          'Elaborar oficinas arteterapêuticas coerentes com objetivos terapêuticos',
          'Ampliar repertório de materiais expressivos e seus usos clínicos',
          'Desenvolver critérios de avaliação e registro de processos'
        ],
        bibliografia: {
          descricao: 'Leituras recomendadas',
          referencias: [
            'URRUTIGARAY, Maria Cristina. Arteterapia: A transformação pessoal pelas imagens. Rio de Janeiro: WAK, 2003.',
            'TEIXEIRA, Lygia (org.). Oficinas Terapêuticas: Criatividade e Saúde. São Paulo: Summus, 2010.'
          ]
        }
      },
      {
        number: 4,
        title: 'Ateliê Terapêutico Supervisionado',
        hours: '120h',
        summary: 'Prática clínica supervisionada, elaboração de casos e supervisão em grupo.',
        ementa: [
          'Atendimentos clínicos supervisionados',
          'Estudos de caso e apresentação em seminários',
          'Supervisão em grupo e devolutiva individual',
          'Ética, contrato terapêutico e autocuidado do terapeuta'
        ],
        objetivos: [
          'Consolidar habilidades clínicas por meio de prática supervisionada',
          'Refletir sobre postura ética e manejo simbólico em atendimentos',
          'Produzir relatórios e sínteses dos processos acompanhados'
        ],
        bibliografia: {
          descricao: 'Aprofundamento clínico',
          referencias: [
            'EDINGER, Edward F. Ego e Arquétipo. São Paulo: Cultrix, 1989.',
            'HILLMAN, James. Estudos de Psicologia Arquetípica. Rio de Janeiro: Achiamé, 1981.'
          ]
        }
      },
      {
        number: 5,
        title: 'Atividades Complementares',
        hours: '220h',
        summary: 'Participação em atendimentos, supervisões e eventos científicos do IJEP.',
        ementa: [
          'Atendimentos clínicos extramuros e supervisões adicionais',
          'Participação no Congresso Junguiano do IJEP',
          'Registro e validação de horas complementares'
        ],
        objetivos: [
          'Incentivar aprofundamento prático e integração com a comunidade científica',
          'Computar as horas clínicas e acadêmicas exigidas para certificação'
        ],
        bibliografia: {
          descricao: 'Referências complementares indicadas nas supervisões',
          referencias: []
        }
      }
    ],
    professors: [
      {
        name: 'Prof. Dr. Waldemar Magaldi Filho',
        title: 'Coordenador Geral · Psicólogo, Doutor em Ciências da Religião',
        experience: 'Especialista em Psicologia Analítica, Psicossomática e Arteterapia; fundador do IJEP',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg'
      },
      {
        name: 'Prof. Dra. Ana Paula Maluf',
        title: 'Arteterapeuta e Psicóloga',
        experience: 'Especialista em Expressões Criativas',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg'
      }
    ],
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
        description: '15h - Período de criação dos Livros Negros'
      },
      {
        number: 2,
        title: 'Análise dos Textos',
        description: '30h - Estudo detalhado do conteúdo'
      },
      {
        number: 3,
        title: 'Relevância Contemporânea',
        description: '15h - Aplicações na prática atual'
      }
    ],
    professors: [
      {
        name: 'Prof. Lilian Wurzba',
        title: 'Especialista em Jung',
        experience: 'Autoridade mundial em Livros Negros',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg'
      }
    ],
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
    originalPrice: null,
    modalidade: 'Presencial',
    duration: '2 meses',
    workload: '40h',
    startDate: 'Maio 2024',
    maxStudents: 'Máx. 15 alunos',
    certificate: 'Certificado de Participação',
    monthlyPrice: 'R$ 475,00/mês',
    justificativa: [
      'Oficina imersiva que une arteterapia e análise de sonhos para favorecer processos de autoconhecimento.',
      'Promove vivências expressivas que traduzem conteúdos oníricos em materiais artísticos e simbólicos.',
      'Integra teorias junguianas e práticas de arteterapia conduzidas por especialistas.'
    ],
    objetivos: [
      'Estimular o uso de imagens oníricas como recurso terapêutico.',
      'Desenvolver repertório de técnicas expressivas aplicadas a sonhos.',
      'Capacitar participantes a conduzir oficinas e atendimentos com foco em arteterapia e sonhos.'
    ],
    publico: [
      'Arteterapeutas, psicólogos, educadores e profissionais da saúde interessados em trabalhar com sonhos.',
      'Pessoas em busca de processos pessoais de criação e interpretação simbólica.'
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
        title: 'Sonhos e Símbolos',
        description: '15h - Linguagem simbólica dos sonhos'
      },
      {
        number: 2,
        title: 'Técnicas Expressivas',
        description: '20h - Materiais e métodos artísticos'
      },
      {
        number: 3,
        title: 'Integração Terapêutica',
        description: '5h - Síntese e aplicações práticas'
      }
    ],
    professors: [
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
        description: '20h - Análise da obra Aion de Jung'
      },
      {
        number: 2,
        title: 'Resposta a Jó',
        description: '15h - Estudo do livro Resposta a Jó'
      },
      {
        number: 3,
        title: 'Era Aquariana',
        description: '10h - Perspectivas futuras da consciência'
      }
    ],
    professors: [
      {
        name: 'Prof. Dimas Künsch',
        title: 'Filósofo e Comunicólogo',
        experience: 'Especialista em Jung e Religião',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg'
      },
      {
        name: 'Prof. Waldemar Magaldi',
        title: 'Psicólogo Junguiano',
        experience: 'Estudioso de Mitologia e Religião',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg'
      }
    ],
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
        description: '200h - Análise pessoal obrigatória com analista didata'
      },
      {
        number: 2,
        title: 'Supervisão Clínica',
        description: '300h - Supervisão de casos clínicos'
      },
      {
        number: 3,
        title: 'Seminários Teóricos',
        description: '200h - Aprofundamento teórico avançado'
      },
      {
        number: 4,
        title: 'Atividades Institucionais',
        description: '100h - Participação em eventos e pesquisas'
      }
    ],
    professors: [
      {
        name: 'Analistas Didatas IJEP',
        title: 'Corpo Docente Especializado',
        experience: 'Analistas certificados com experiência didática',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg'
      }
    ],
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
        description: '12h - Apresentações de especialistas internacionais'
      },
      {
        number: 2,
        title: 'Mesas Redondas',
        description: '8h - Debates e discussões temáticas'
      },
      {
        number: 3,
        title: 'Comunicações Livres',
        description: '4h - Apresentação de pesquisas'
      }
    ],
    professors: [
      {
        name: 'Palestrantes Internacionais',
        title: 'Especialistas Mundiais',
        experience: 'Autoridades em psicologia analítica',
        image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg'
      }
    ],
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
