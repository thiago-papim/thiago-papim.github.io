import finanhome from '../assets/images/finanhome.png'
import bragi from '../assets/images/bragi.png'
import energe from '../assets/images/energe.png'
import energeMobile from '../assets/images/energeMobile.png'

const arrBackend = [
  {
    name: 'Trybe Futebol Clube',
    url: 'https://github.com/thiago-papim/project-trybe-futebol-clube',
    description:
      'O Trybe Futebol Clube (TFC) é um portal de futebol com recursos de gerenciamento de partidas, classificações detalhadas e login seguro, desenvolvido com tecnologias avançadas como TypeScript, Sequelize, MySQL e Node.js.',
    stacks: [
      'React',
      'Node.js',
      'Express',
      'TypeScript',
      'Sequelize',
      'MySQL',
      'JWT',
    ],
  },
  {
    name: 'Blogs API',
    url: 'https://github.com/thiago-papim/project-blogs-api',
    description:
      'O Blogs API é um avançado sistema de gerenciamento de posts e usuários! 📖 Nele, os usuários podem realizar diversas ações, como criar, ler, atualizar e deletar posts, tudo isso com a segurança de um sistema de login, onde somente o usuário que criou o post tem permissão para deletá-lo ou atualizá-lo.',
    stacks: ['Node.js', 'Express', 'Sequelize', 'MySQL', 'JWT', 'Jest'],
  },
  {
    name: 'Store Manager',
    url: 'https://github.com/thiago-papim/project-store-manager',
    description:
      'Este projeto consiste no desenvolvimento de uma API RESTful de gerenciamento de vendas, com foco na criação, visualização, atualização e exclusão de produtos e vendas. A principal tecnologia utilizada é o banco de dados relacional MySQL para armazenar e gerenciar os dados.',
    stacks: ['Node.js', 'Express', 'MySQL', 'Mocha', 'Chai'],
  },
  {
    name: 'Trybe Smith',
    url: 'https://github.com/thiago-papim/tribesmith',
    description:
      'Este projeto visa desenvolver uma API para gerenciar itens medievais, seguindo o padrão CRUD (Create, Read, Update e Delete). A aplicação está escrita em TypeScript e utilizará o Sequelize, um ORM (Object-Relational Mapping), para interagir com um banco de dados.',
    stacks: ['Node.js', 'Express', 'TypeScript', 'Sequelize', 'MySQL', 'JWT'],
  },
  {
    name: 'MySQL All for One',
    url: 'https://github.com/thiago-papim/mysql-all-for-one',
    description:
      'O "MySQL All for One" é um projeto incrível do meu portfólio, consistindo em 27 desafios de consultas SQL desenvolvidos para aprimorar minhas habilidades em manipulação de dados no banco de dados MySQL.',
    stacks: ['Node.js', 'Express', 'MySQL'],
  },
  {
    name: 'MySQL One for All',
    url: 'https://github.com/thiago-papim/mysql-one-for-all',
    description:
      'O projeto One For All é um projeto de normalização e consolidação de dados que visa revisar e aplicar os principais conceitos de banco de dados aprendidos até o momento. Neste projeto, eu me propus a receber planilhas não normalizadas contendo informações diversas e transformá-las em um banco de dados relacional bem estruturado.',
    stacks: ['Node.js', 'Express', 'MySQL'],
  },
]

const arrMobile = [
  {
    name: 'Energe',
    img: energeMobile,
    description:
      'Versão mobile do projeto original, desenvolvida para resolver a limitação de uso offline, permitindo que a aplicação funcione mesmo sem conexão com a internet.',
    stacks: [
      'React Native',
      'Expo',
      'Expo Router',
      'TypeScript',
      'NativeWind (Tailwind CSS)',
      'React Native Paper',
      'Axios',
      'React Navigation',
    ],
  },
]

const arrFrontend = [
  {
    name: 'Finanhome',
    img: finanhome,
    url: 'https://github.com/thiago-papim/finanhome',
    site: 'https://finanhome.vercel.app/',
    description:
      'Desenvolvi o site da FinanHome, empresa de soluções financeiras, com foco em responsividade e captação de clientes. A aplicação foi construída em React, utilizando Tailwind CSS e Material UI para criar uma interface moderna, organizada e adaptável a todos os dispositivos.',
    stacks: ['React', 'JavaScript', 'Tailwind CSS', 'Material UI'],
  },
  {
    name: 'Bragi',
    img: bragi,
    url: 'https://github.com/thiago-papim/bragi',
    site: 'https://www.bragiprojetos.com.br/',
    description:
      'Desenvolvi o site da Bragi Projetos, empresa de construção civil, com foco em fortalecer a presença digital da construtora e gerar novos clientes. A aplicação foi construída em React com Vite, utilizando Tailwind CSS e Material UI para criar uma interface moderna, responsiva e estratégica, destacando os serviços e facilitando o contato com potenciais clientes.',
    stacks: ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'Material UI'],
  },
  {
    name: 'Energe Engenharia',
    img: energe,
    site: 'https://energe-frontend-git-main-energeengenharia.vercel.app/',
    description: `Desenvolvi um sistema completo com frontend, backend e banco de dados MySQL para otimizar a gestão interna e os processos de uma empresa de engenharia. Criação, edição, exclusão e geração de relatórios em PDF, com acesso direto para que os clientes possam visualizar e baixar os documentos.
Frontend: Interface intuitiva desenvolvida com React, facilitando a navegação e o uso.
Backend: API segura e eficiente criada com Node.js e Express.
Banco de Dados: Estrutura organizada e otimizada no MySQL para armazenar e gerenciar os dados de forma confiável.
O sistema trouxe mais agilidade e praticidade para a empresa e seus clientes, fortalecendo a gestão e a entrega de relatórios.`,
    stacks: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'Material UI',
      'PdfMake',
      'Axios',
    ],
  },
  {
    name: 'Trybe Tunes',
    url: 'https://github.com/thiago-papim/project-trybetunes',
    description:
      'Desenvolvi o TrybeTunes, uma aplicação completa que oferece uma experiência interativa para os amantes de música. A aplicação possui funcionalidades como login seguro, pesquisa por bandas ou artistas, listagem de álbuns, visualização de músicas, reprodução de prévias, favoritar/desfavoritar músicas, gestão de lista de músicas favoritas, visualização de perfil e edição de perfil para usuários logados.',
    stacks: ['React', 'JavaScript', 'Jest'],
  },
  {
    name: 'Online Store',
    url: 'https://github.com/thiago-papim/online-store',
    description:
      'Participei do desenvolvimento de uma loja online simplificada em grupo, seguindo demandas definidas em um quadro Kanban, simulando um ambiente próximo ao mercado de trabalho. A aplicação permitirá que os usuários busquem produtos via API do Mercado Livre, interajam com o carrinho de compras, visualizem detalhes e avaliações de produtos, além de simular a finalização da compra. O projeto envolve a compreensão e aplicação de métodos ágeis, Kanban e Scrum, proporcionando uma oportunidade para praticar habilidades do módulo de Front-end.',
    stacks: ['React', 'JavaScript', 'Jest'],
  },
  {
    name: 'Trivia',
    url: 'https://github.com/thiago-papim/trivia',
    description:
      'Participei no desenvolvimento do Trivia Challenge, um jogo de perguntas e respostas baseado no Trivia, usando React e Redux. Trabalhamos em grupo, organizados por um quadro Kanban no Slack, simulando um ambiente colaborativo de trabalho. A aplicação permite aos usuários logar, associar fotos do Gravatar aos perfis, responder a perguntas com tempo limitado, redirecionar para uma tela de pontuação após 5 respostas, visualizar um ranking, e configurar opções do jogo. Utilizamos React para a interface, Redux para o gerenciamento do estado, e o quadro Kanban no Slack para organização e acompanhamento. O resultado é um jogo envolvente, desafiador e personalizável, promovendo a experiência colaborativa no desenvolvimento.',
    stacks: ['React', 'Redux', 'JavaScript', 'Cypress'],
  },
  {
    name: 'Recipes App',
    url: 'https://github.com/thiago-papim/recipes-app',
    description:
      'Desenvolvi um aplicativo de receitas utilizando tecnologias modernas no ecossistema React, como Hooks e Context API. O app permite visualizar, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas de comidas e bebidas. Utilizarei duas APIs distintas para as bases de dados de comidas e bebidas, com foco no layout para dispositivos móveis. Durante o projeto, aplicarei habilidades como Redux para gerenciamento de estado, React-Redux, Context API, React Hooks como useState, useContext e useEffect, além de criar Hooks customizados. O objetivo é proporcionar uma experiência completa e eficiente para os usuários na exploração e preparo de receitas.',
    stacks: ['React', 'Bootstrap', 'Cypress', 'Tailwind CSS'],
  },
]

export { arrBackend, arrFrontend, arrMobile }
