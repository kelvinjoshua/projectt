export class Properties {
   
    showauthor:Boolean;//to be used explicitely elesewhere for toggling between hiding and showing an author//
    public vote:number;
    public downvote:number;
    constructor(
        public message:string,
        public author:string,
        public completeDate:Date, 

    ){
        this.showauthor=false;//initialised false so that the author isnt displayed//
        //after this initialisation proceed to the properties array and ake changes(new)//
         //initialised as zero first//
        this.vote=0;
        this.downvote=0; 
    }
}

