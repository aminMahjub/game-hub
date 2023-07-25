export interface Genres {
    id: number,
    name: string,
    games_count: number,
}

export interface FetchGenres {
    count: number,
    results: Genres[]
}
