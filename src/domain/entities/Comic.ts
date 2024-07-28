export interface Comic {
    id: number;
    thumbnail: { path: string; extension: string };
    title: string;
    dates: { type: string; date: Date }[];
}
