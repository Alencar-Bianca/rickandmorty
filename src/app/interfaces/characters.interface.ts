export interface charactersInterface {
  id: number,
  name: string,
  gender: string,
  image: string,
  species: string,
  status: string,
  location: {name: string},
  episode: [number]
}
