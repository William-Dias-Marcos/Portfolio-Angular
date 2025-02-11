import { iProject } from '../interfaces/projects';

export const ListProject: iProject[] = [
  {
    name: 'Weather Forecast',
    description: 'Projeto que permite pesquisar o clima de uma cidade.',
    technologies: ['Angular', 'TypeScript'],
    image: 'projects/weather-forecast.png',
    website: 'https://weather-forecast-angular.vercel.app/',
    repository:
      'https://github.com/William-Dias-Marcos/Weather-Forecast-Angular',
  },
  {
    name: 'Star Wars',
    description:
      'Busca de personagens de Star Wars com exibição de suas informações.',
    technologies: ['Angular', 'TypeScript'],
    image: 'projects/starwars.png',
    website: 'https://starwarsangular.netlify.app/',
    repository: 'https://github.com/William-Dias-Marcos/Star-Wars-Angular',
  },
  {
    name: 'Card Generator',
    description: 'Permite criar um cartão de visitas personalizado.',
    technologies: ['Angular', 'TypeScript'],
    image: 'projects/cardgenerator.png',
    website: 'https://onlinecardgenerator.netlify.app/ ',
    repository: 'https://github.com/William-Dias-Marcos/Card-Generator-Angular',
  },
];
