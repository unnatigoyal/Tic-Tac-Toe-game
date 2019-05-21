
class game{
    
    constructor()
    {
        this.inProgress=true;
        this.winner=null;
        this.turn=game.x;
        this.movesmade=0;
        this.squares=new Array(9).fill().map(s => new square());
    }
     Reset()
        {
            console.log("hello");
        for(let i=0;i<9;i++)
        {
            this.squares[i].value='';
        }
          }
     makemove(i){
        if(this.inProgress && !this.squares[i].value)
        { 
            this.squares[i].value=this.turn;

            this.movesmade++;
           // this.checkforwinner();
            //this.turn=(this.turn==game.o) ? game.x : game.o;
            if(this.turn==game.o)
            {
                this.turn=game.x;
            }
            else{
                this.turn=game.o;
            }
            this.checkforwinner();
    
        }
    }
    
    checkforwinner()
    {
        const winningcombination=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        winningcombination.forEach((wc)=>{
         const [a,b,c]=wc;
         const sqA=this.squares[a];
         const sqB=this.squares[b];
         const sqC=this.squares[c];
         if(sqA.value && sqA.value===sqB.value && sqA.value===sqC.value){
             this.inProgress=false;
             this.winner=sqA.value;
             sqA.ishighlighted=sqB.ishighlighted=sqC.ishighlighted=true;
            
         }

        });
        if(this.movesmade==9){
            this.inProgress=false;
        }
    }

}
game.o= 'o';
game.x= 'x';