import { SelectedGenreType } from './genres';
import { SelectedPltaformType } from './platforms';

export interface FetchRespone<T> {
    count: number,
    results: T[]
}

export interface QueryType {
    selectedGenre: SelectedGenreType;
    selectedPlatform: SelectedPltaformType;
    selectedOrder: string | null
}