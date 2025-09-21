import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Mock API data baseada nos cursos oficiais
const courseDetailsAPI = {
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
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/e30c4d6bd3-d8d26c9e64de72469123.png',
      alt: 'Ambiente acadêmico para o curso Pós-Graduação em Psicologia Junguiana',
    },
    category: 'especializacao',
    categoryLabel: 'Pós-Graduação',
    price: 2890.00,
    originalPrice: null,
    modalidade: 'Presencial',
    duration: '18 meses',
    workload: '360h',
    startDate: 'Março 2024',
    maxStudents: 'Máx. 25 alunos',
    certificate: 'Reconhecida MEC',
    monthlyPrice: 'R$ 160,56/mês',
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
      image: 'https://i.imgur.com/cTs1Zdf.png',
      alt: 'Ambiente representativo do curso Psicossomática',
    },
    category: 'especializacao',
    categoryLabel: 'Pós-Graduação',
    price: 2200.00,
    originalPrice: null,
    modalidade: 'Presencial',
    duration: '18 meses',
    workload: '360h',
    startDate: 'Março 2024',
    maxStudents: 'Máx. 25 alunos',
    certificate: 'Reconhecida MEC',
    monthlyPrice: 'R$ 122,22/mês',
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
    subtitle: 'Desperte a criatividade como ferramenta terapêutica',
    description: 'Capacite-se para despertar e utilizar a criatividade como uma poderosa ferramenta terapêutica.',
    fullDescription: [
      'O curso de Arteterapia e Expressões Criativas oferece uma formação completa no uso das artes como instrumento terapêutico. Através de metodologias inovadoras, os participantes aprendem a facilitar processos de cura e autoconhecimento através da expressão artística.',
      'Com uma abordagem prático-vivencial, o programa combina teoria, prática e experiência pessoal, preparando profissionais para atuar em diferentes contextos clínicos e educacionais.'
    ],
    image: 'https://i.imgur.com/iVpnrwc.png',
    hero: {
      image: 'https://i.imgur.com/iVpnrwc.png',
      alt: 'Ambiente criativo do curso Arteterapia e Expressões Criativas',
    },
    category: 'especializacao',
    categoryLabel: 'Pós-Graduação',
    price: 2800.00,
    originalPrice: null,
    modalidade: 'Híbrido',
    duration: '18 meses',
    workload: '360h',
    startDate: 'Março 2024',
    maxStudents: 'Máx. 20 alunos',
    certificate: 'Reconhecida MEC',
    monthlyPrice: 'R$ 155,56/mês',
    highlights: [
      {
        icon: 'fas fa-palette',
        title: 'Expressão Criativa',
        description: 'Desenvolvimento da criatividade como ferramenta terapêutica',
        bgColor: 'bg-yellow-50',
        iconColor: 'bg-yellow-500'
      },
      {
        icon: 'fas fa-users',
        title: 'Prática Supervisionada',
        description: 'Ateliês práticos com supervisão especializada',
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
        title: 'Fundamentos da Arteterapia',
        description: '60h - História, teoria e aplicações da arteterapia'
      },
      {
        number: 2,
        title: 'Técnicas Expressivas',
        description: '80h - Pintura, escultura, colagem e outras modalidades'
      },
      {
        number: 3,
        title: 'Psicologia da Arte',
        description: '45h - Aspectos psicológicos da criação artística'
      },
      {
        number: 4,
        title: 'Ateliê Terapêutico',
        description: '75h - Prática supervisionada em arteterapia'
      }
    ],
    professors: [
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
      phone: '(11) 3333-4444',
      whatsapp: '(11) 99999-8888',
      email: 'contato@fafih.edu.br'
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
      image: 'https://i.imgur.com/qwiCmA6.jpeg',
      alt: 'Representação visual do curso Livros Negros e Livro Vermelho',
    },
    category: 'extensao',
    categoryLabel: 'Curta Duração',
    price: 850.00,
    originalPrice: null,
    modalidade: 'Online',
    duration: '3 meses',
    workload: '60h',
    startDate: 'Abril 2024',
    maxStudents: 'Máx. 40 alunos',
    certificate: 'Certificado de Participação',
    monthlyPrice: 'R$ 283,33/mês',
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
      image: 'https://i.imgur.com/AnnChjx.png',
      alt: 'Representação do curso Sonhando Através da Arteterapia',
    },
    category: 'extensao',
    categoryLabel: 'Curta Duração',
    price: 950.00,
    originalPrice: null,
    modalidade: 'Presencial',
    duration: '2 meses',
    workload: '40h',
    startDate: 'Maio 2024',
    maxStudents: 'Máx. 15 alunos',
    certificate: 'Certificado de Participação',
    monthlyPrice: 'R$ 475,00/mês',
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
      image: 'https://i.imgur.com/REzhmRK.jpeg',
      alt: 'Divulgação do curso De Aion a Jó',
    },
    category: 'extensao',
    categoryLabel: 'Curta Duração',
    price: 790.00,
    originalPrice: null,
    modalidade: 'Online',
    duration: '3 meses',
    workload: '45h',
    startDate: 'Junho 2024',
    maxStudents: 'Máx. 35 alunos',
    certificate: 'Certificado de Participação',
    monthlyPrice: 'R$ 263,33/mês',
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
      image: 'https://i.imgur.com/lXkjLLG.png',
      alt: 'Representação do curso Formação de Membros Analistas Junguianos',
    },
    category: 'formacao',
    categoryLabel: 'Formação',
    price: 12000.00,
    originalPrice: null,
    modalidade: 'Presencial',
    duration: '4 anos',
    workload: '800h',
    startDate: 'Fevereiro 2024',
    maxStudents: 'Máx. 8 candidatos',
    certificate: 'Certificado de Analista Junguiano',
    monthlyPrice: 'R$ 250,00/mês',
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
      image: 'https://i.imgur.com/M3vP6UT.png',
      alt: 'Divulgação dos Congressos Junguianos do IJEP',
    },
    category: 'eventos',
    categoryLabel: 'Eventos',
    price: 450.00,
    originalPrice: null,
    modalidade: 'Online',
    duration: '3 dias',
    workload: '24h',
    startDate: 'Setembro 2024',
    maxStudents: 'Inscrições ilimitadas',
    certificate: 'Certificado de Participação',
    monthlyPrice: 'Pagamento único',
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

const CursoDetalhes = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      setLoading(true);
      // Simular delay da API
      await new Promise(resolve => setTimeout(resolve, 500));

      const courseData = courseDetailsAPI[id] || courseDetailsAPI[1]; // Fallback para o curso 1
      setCourse(courseData);
      setLoading(false);
    };

    fetchCourseDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando detalhes do curso...</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Curso não encontrado</h2>
          <p className="text-gray-600">O curso solicitado não existe ou foi removido.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="curso-detalhes-page">
      {/* Hero Section */}
      <section className="curso-hero">
        <div className="curso-container">
          <div className="curso-imagem">
            <img src={course.image} alt={course.title} />
          </div>
          <div className="curso-info">
            <span className="curso-tipo">{course.categoryLabel}</span>
            <h1>{course.title}</h1>
            <p className="subtitulo-curso">{course.subtitle}</p>

            <div className="info-block">
              <h3>Informações do Curso</h3>
              <ul>
                <li><strong>Duração:</strong> {course.duration}</li>
                <li><strong>Modalidade:</strong> {course.modalidade}</li>
                <li><strong>Carga Horária:</strong> {course.workload}</li>
                <li><strong>Início:</strong> {course.startDate}</li>
                <li><strong>Certificação:</strong> {course.certificate}</li>
              </ul>
            </div>

            <div className="info-block">
              <h3>Investimento</h3>
              <div className="curso-preco">
                <div className="valor-desconto" style={{color: 'var(--primary-color)', fontSize: '2rem', fontWeight: '700'}}>
                  R$ {course.price.toLocaleString('pt-BR')}
                </div>
                <p className="preco-parcelado">{course.monthlyPrice}</p>
              </div>
            </div>

            <div className="curso-actions">
              <a href="#" className="btn btn-matricule-agora">Inscrever-se Agora</a>
              <a href="/escolha-cursos" className="btn btn-voltar">Voltar aos Cursos</a>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="curso-detalhes">
        <div className="detalhes-container">
          {/* About Section */}
          <div className="detalhes-section">
            <h2>Sobre o Curso</h2>
            {course.fullDescription.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {/* Highlights */}
            <div className="info-cards">
              {course.highlights.map((highlight, index) => (
                <div key={index} className="info-card">
                  <h3>
                    <i className={`${highlight.icon} mr-3`} style={{color: 'var(--secondary-color)'}}></i>
                    {highlight.title}
                  </h3>
                  <p>{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          <div className="detalhes-section">
            <h2>Grade Curricular</h2>
            <div className="areas-grid">
              {course.curriculum.map((module, index) => (
                <div key={index} className="area-item">
                  <h3>{module.number}. {module.title}</h3>
                  <p>{module.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professors */}
          <div className="detalhes-section">
            <h2>Corpo Docente</h2>
            <div className="professores-grid">
              {course.professors.map((professor, index) => (
                <div key={index} className="professor-card">
                  <div className="professor-foto">
                    <img src={professor.image} alt={professor.name} />
                  </div>
                  <div className="professor-info">
                    <h3>{professor.name}</h3>
                    <div className="professor-area">{professor.title}</div>
                    <div className="professor-especialidade">{professor.experience}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="detalhes-section">
            <h2>Depoimentos</h2>
            <div className="depoimentos-grid">
              {course.testimonials.map((testimonial, index) => (
                <div key={index} className="depoimento-card">
                  <div className="depoimento-placeholder">
                    <img src={testimonial.image} alt={testimonial.author} style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} />
                  </div>
                  <p>"{testimonial.text}"</p>
                  <h4>{testimonial.author}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="detalhes-section">
            <h2>Informações de Contato</h2>
            <div className="info-cards">
              <div className="info-card">
                <h3>
                  <i className="fas fa-phone mr-3" style={{color: 'var(--secondary-color)'}}></i>
                  Telefone
                </h3>
                <p className="contact-item-info">{course.contact.phone}</p>
              </div>
              <div className="info-card">
                <h3>
                  <i className="fab fa-whatsapp mr-3" style={{color: '#25D366'}}></i>
                  WhatsApp
                </h3>
                <p className="contact-item-info">{course.contact.whatsapp}</p>
              </div>
              <div className="info-card">
                <h3>
                  <i className="fas fa-envelope mr-3" style={{color: 'var(--secondary-color)'}}></i>
                  E-mail
                </h3>
                <p className="contact-item-info">{course.contact.email}</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="page-actions">
            <a href="#" className="btn-page-action btn-inscreva-se">Inscreva-se Agora</a>
            <a href="/escolha-cursos" className="btn-page-action btn-secondary">Ver Outros Cursos</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CursoDetalhes;
