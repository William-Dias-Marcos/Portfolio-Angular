import { iProject } from '../interfaces/projects';

export const ListProject: iProject[] = [
  {
    name: 'Weather Forecast',
    description:
      'Aplicação para consultar o clima de diferentes cidades, exibindo dados como temperatura, umidade, vento e previsões futuras, além de salvar o histórico de pesquisas.',
    technologies: ['Angular', 'TypeScript', 'PrimeNG'],
    image: 'projects/weather-forecast.png',
    website: 'https://weather-forecast-angular.vercel.app/',
    repository:
      'https://github.com/William-Dias-Marcos/Weather-Forecast-Angular',
  },
  {
    name: 'Star Wars',
    description:
      'Projeto que permite buscar personagens de Star Wars. Após a pesquisa, a aplicação exibe informações como filmes, naves, espécie e planetas relacionados ao personagem.',
    technologies: ['Angular', 'TypeScript', 'CSS'],
    image: 'projects/starwars.png',
    website: 'https://starwarsangular.netlify.app/',
    repository: 'https://github.com/William-Dias-Marcos/Star-Wars-Angular',
  },
  {
    name: 'Card Generator',
    description:
      'Página web que permite criar cartões de visitas personalizados, com a possibilidade de editar cores da fonte e do fundo, adicionar imagens e fazer o download do cartão final.',
    technologies: ['Angular', 'TypeScript', 'CSS'],
    image: 'projects/cardgenerator.png',
    website: 'https://onlinecardgenerator.netlify.app/ ',
    repository: 'https://github.com/William-Dias-Marcos/Card-Generator-Angular',
  },
];
