import movies from './movies.json';

import { atom } from 'jotai'

const moviesAtom = atom( movies ? movies : [])

export default moviesAtom
// export default class MovieService {
//   static getMovies() {
//     return movies ? movies : [];
//   }
// }
