class Balls{
    constructor(x,y,radius, choice){
        this.redBall= loadImage("sprites/spr_redBall2.png");
        this.blackBall= loadImage("sprites/spr_blackBall2.png");
        this.yellowBall= loadImage("sprites/spr_yellowBall2.png");
        this.whiteBall= loadImage("sprites/spr_ball2.png");
        this.position = createVector(x, y)
        var options={
           // 'restituion': 0.02,
            'friction': 0.5,
            'density': 0.3
     }

        this.body= Bodies.circle(this.position.x,this.position.y,radius/2,options);
        this.radius = radius;
        World.add(Myworld, this.body);
        this.choice= choice;
    }

    display(){
        var position= this.body.position
        
        //var rand=  Math.round(Math.random(1,3))
        push()
    translate(this.body.position.x, this.body.position.y)
    rotate(this.body.angle)
   // this.displayBall(this.number)
    ellipse(0, 0 , this.radius);
       // console.log(this.choice);
       /* switch(this.choice){
            case 1:ellipse(0, 0 , this.radius);
                //image(this.redBall,position.x, position.y);
            break;
            case 2:image(this.yellowBall,position.x, position.y);
            break;
            case 3:image(this.blackBall,position.x, position.y);
            break;
            default:
            break;

    }*/    pop();


        
        

    }



}