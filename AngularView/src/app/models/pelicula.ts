export class Pelicula {
    public year: number;
    public title: string;
    public image: string

    constructor(title:string, year:number, image:string){
        this.title=title;
        this.year=year,
        this.image=image
    }
}