class Balls{
    constructor(x,y,choice){
       /* this.redBall= loadImage("sprites/spr_redBall2.png");
        this.blackBall= loadImage("sprites/spr_blackBall2.png");
        this.yellowBall= loadImage("sprites/spr_yellowBall2.png");
        this.whiteBall= loadImage("sprites/spr_ball2.png");*/
        this.position= createVector(x,y);
        var options={
            //'restituion': 0.02,
            'friction': 0.5,
            'density': 0.3
     }

        this.body= Bodies.circle(this.position.x,this.position.y,30,options);
        this.radius= 30
        this.choice= choice;

        World.add(Myworld,this.body)
    }

    display(){
        push();
        var position= this.body.position;
        translate(position.x, position.y); 
        rotate(this.body.angle);
        ellipse(0,0,this.radius);
        pop();   
            //var rand=  Math.round(Math.random(1,3))
        
       
        //console.log(this.choice);
        /*switch(this.choice){
            case 1:image(this.redBall,position.x, position.y);
            break;
            case 2:image(this.yellowBall,position.x, position.y);
            break;
            case 3:image(this.blackBall,position.x, position.y);
            break;
            default:
            break;

    }
    */

        
        

    }



}