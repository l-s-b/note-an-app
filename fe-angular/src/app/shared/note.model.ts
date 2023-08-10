export class Note {
    public id!: number;
    public title!: string;
    public description!: string;
    
    constructor() {
        this.id = 0;
        this.title = '';
        this.description = '';
    }
}