export class Movie{
   
    id: number
   
    overview: string
   
    title: string
   
    constructor(id: number, title: string, descripcion: string){
     this.title = title;
     this.id = id;
     this.overview = descripcion;
    }
   }