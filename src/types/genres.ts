export interface Genre {
    id: number,
    name: string,
    games_count: number,
    slug: string
}

export interface FetchGenres {
    count: number,
    results: Genre[]
}

export type SelectedGenreType = Genre | null;