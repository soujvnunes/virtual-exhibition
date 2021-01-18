import { createContext } from "react";
import {
  Decade000600001,
  Decade000600002,
  Decade000600003,
  Decade000600004,
  Decade000600005,
  Decade000600006,
  Decade000600007,
  Decade000600008,
  Decade000600009,
  Decade000600010,
  Decade000700001,
  Decade000700002,
  Decade000700003,
  Decade000700004,
  Decade000700005,
  Decade000700006,
  Decade000700007,
  Decade000700008,
  Decade000700009,
  Decade000700010,
  Decade000800001,
  Decade000800002,
  Decade000800003,
  Decade000800004,
  Decade000800005,
  Decade000800006,
  Decade000800007,
  Decade000800008,
  Decade000800009,
  Decade000800010,
  Decade000900001,
  Decade000900002,
  Decade000900003,
  Decade000900004,
  Decade000900005,
  Decade000900006,
  Decade000900007,
  Decade000900008,
  Decade000900009,
  Decade000900010,
  Decade200000001,
  Decade200000002,
  Decade200000003,
  Decade200000004,
  Decade200000005,
  Decade200000006,
  Decade200000007,
  Decade200000008,
  Decade200000009,
  Decade200000010,
  Decade201000001,
  Decade201000002,
  Decade201000003,
  Decade201000004,
  Decade201000005,
  Decade201000006,
  Decade201000007,
  Decade201000008,
  Decade201000009,
} from "./asset";

export const KEY_THEME_DARK = "dark";
export const KEY_THEME_LIGHT = "light";
export const HEADING_TYPE = {
  fontFamily: ["Georgia, 'Times New Roman', Times, serif"].join(", "),
  fontWeight: 900,
  letterSpacing: 2.618,
  textTransform: "uppercase",
};
export const PRIMARY_COLOR = "#EA2934";
export const SECONDARY_COLOR = "#3F9CF9";
export const BAR_HEIGHT = 64;
export const HERO_SLOTS = new Array(6);
export const HERO_TITLE = [
  "Década de 1960.",
  "Década de 1970.",
  "Década de 1980.",
  "Década de 1990.",
  "Década de 2000.",
  "Década de 2010.",
];
export const HERO_DESCRIPTION = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
];
export const HERO_GALLERY = [
  [
    Decade000600001,
    Decade000600002,
    Decade000600003,
    Decade000600004,
    Decade000600005,
    Decade000600006,
    Decade000600007,
    Decade000600008,
    Decade000600009,
    Decade000600010,
  ],
  [
    Decade000700001,
    Decade000700002,
    Decade000700003,
    Decade000700004,
    Decade000700005,
    Decade000700006,
    Decade000700007,
    Decade000700008,
    Decade000700009,
    Decade000700010,
  ],
  [
    Decade000800001,
    Decade000800002,
    Decade000800003,
    Decade000800004,
    Decade000800005,
    Decade000800006,
    Decade000800007,
    Decade000800008,
    Decade000800009,
    Decade000800010,
  ],
  [
    Decade000900001,
    Decade000900002,
    Decade000900003,
    Decade000900004,
    Decade000900005,
    Decade000900006,
    Decade000900007,
    Decade000900008,
    Decade000900009,
    Decade000900010,
  ],
  [
    Decade200000001,
    Decade200000002,
    Decade200000003,
    Decade200000004,
    Decade200000005,
    Decade200000006,
    Decade200000007,
    Decade200000008,
    Decade200000009,
    Decade200000010,
  ],
  [
    Decade201000001,
    Decade201000002,
    Decade201000003,
    Decade201000004,
    Decade201000005,
    Decade201000006,
    Decade201000007,
    Decade201000008,
    Decade201000009,
  ],
];
export const HERO_CAPTION = [
  [
    "Canteiro de obras",
    "Construção do Instituto de Química - outubro de 1968",
    "Presidente Juscelino Kubitschek sancionando a lei de criação da Ufal - janeiro de 1961",
    "Sala de Aula do Curso de Administração e Economia - junho de 1969",
    "Trabalhadores no canteiro de obras da Ufal",
    "Tomada do campus da Ufal em construção",
    "Reunião do Conselho Universitário da Ufal quando da assinatura do contrato para elaboração do Plano Diretor da construção da Cidade Universitária - 1965",
    "Residência Universitária Masculina - 1966",
    "Prédio que se tornaria sede da 1° Reitoria da Ufal na Praça Sinimbu",
    "Início das obras de implantação do Campus, na Cidade Universitária - 1967",
  ],
  [
    "Capa da primeira edição da Revista Scientia Ad Sapientiam lançada em 1978",
    "Diploma recebido pelo Corufal pela participação do 3º Festival Nacional de Coros em outubro de 1971",
    "Formatura Unificada no Estádio Rei Pelé - 1974",
    "Impresso contendo a programação da 1ª Semana de Cultura Popular - 1976",
    "Inauguração do Núcleo de Educação Física e Desportos - abril de 1974",
    "Inauguração do Salão Nobre Professor Guedes de Miranda - 1975",
    "Instalação do Museu de Artes plásticas - 1975",
    "Ministro Ney Braga, Governador Divaldo Suruagy e Reitor Nabuco Lopes ",
    "Navio Hope em Maceió - março de 1977",
    "Vista parcial do Vestibular Unificado, realizado no Estádio Rei Pelé - 1973",
  ],
  [
    "Visita do Ministro da Educação Jorge BornHausen às dependências da Ufal - março de 1986",
    "Abertura dos Jogos internos Internos do Curso de Educação Física - setembro de 1988",
    "Campanha para Reitor da Ufal - 1986",
    "Cônsul da Alemanha em visita à Ufal - outubro de 1989",
    "Embaixador de Israel em visita a Ufal",
    "Ex-reitores na comemoração de 25 anos da Ufal - janeiro de 1986",
    "Manifestação dos Estudantes da Ufal reinvidicando o Restaurante Universitário - março de 1988",
    "Inauguração da reitoria no campus universitário - novembro de 1987",
    "Espeço Cultural da Ufal - dezembro de 1989",
    "Eleição direta para reitor. Flagrante da apuração de votos - novembro de 1986",
  ],
  [
    "Atendimento aos alunos na Proest - 1994",
    "Aula Inaugural do Curso de Formação do Ator no Circo Cultural - dezembro de 1990",
    "Aula Inaugural Noturna março 96",
    "Frei Beto em sessão de autógrafos na Bienal do Livro set 98",
    "Inauguração das salas de música do Departamento de Arte março 91",
    "Novos alunos passando pela experiência do trote - janeiro de 1997",
    "Primeira defesa de tese do curso de mestradoem Letras da Ufal - maio de 1991",
    "Assinatura de convência com o MEC sobre o programa nacional de Alfabetização - novembro de 1990",
    "Reitor Rogério Pinheiro, a diretora do Museu Théo Brandão, Cármen Lúcia Dantas e o senador Teotônio Vilela Filho, que destinou recursos de emenda parlamentar para restauração do MTB -1999",
    "Exposição de livros no pátio da Reitoria promovida pela Edufal - agosto de 1996",
  ],
  [
    "Reuniao do Consuni sobre cotas raciais - novembro de 2003",
    "Unauguração Forum Ufal-CJUR - fevereiro 2001",
    "XI Encontro Nacional de Corais Amadores - setembro de 2004",
    "Abertura da exposição de paineis em comemoração aos 45 anos da Ufal no Shopping Iguatemi  - janeiro de 2006",
    "Abertura dos Jogos Internos - novembro de 2008",
    "Alunos da rede púplica de ensino participando da Expofísica - maio de 2006 ",
    "Área destinada à construção da sede da Ufal em Delmiro Gouveia - 2010",
    "Inauguração do busto do primeiro reitor, AC Simoes - janeiro de 2001",
    "Publico na II Bienal Internacional do Livro - outubro de 2005",
    "Reinauguração do Museu Théo Brandão, em julho de 2002. Avenida da Paz fechada para a celebração.",
  ],
  [
    "Solenidade de Abertura do Caiite 2016",
    "Tenda Cultural da Ufal",
    "Apresentação teatral parte do Natal da Avenida, realizado no Museu Theo Branão",
    "Criança recebendo atendimento na Faculdade de Odontologia ",
    "Integrantes do Movimento dos Trabalhadores sem Terra fazem plantio em terreno ocioso da Ufal",
    "Montagem das estruturas da SBPC no campus A.C. Simões",
    "Público tomando as ruas do Jaraguá na 9ª edição da Bienal Internacional do Livro de Alagoas",
    "Sede do Campus do Sertão em Delmiro Gouveia",
    "Apresentação Musical durante as atividades do Caiite em Penedo",
  ],
];
export const DISPATCH_UPDATE_HERO = "hero update";
export const DISPATCH_UPDATE_BACKGROUND = "background update";
export const DISPATCH_UPDATE_THEME = "theme update";
export const STATE_CONTEXT = createContext();
export const DISPATCH_CONTEXT = createContext();
