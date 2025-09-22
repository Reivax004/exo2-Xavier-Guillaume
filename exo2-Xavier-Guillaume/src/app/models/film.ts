export interface Film {
  id: number;
  name: string;
  affiche : string;
}
export const FILMS: Film[] = [
  { id: 1, name: 'Spiderman', affiche: 'spiderman.jpg'},
  { id: 2, name: 'Spiderman 2', affiche: 'spiderman2.jpg'},
  { id: 3, name: 'Spiderman 3', affiche: 'spiderman3.jpg'},
  { id: 4, name: 'New Generation', affiche: 'newgen.jpg'},
  { id: 5, name: 'Across the Spider-Verse', affiche: 'across.jpg'}
];
