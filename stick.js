class Stick{
    constructor(x,y){
            this.stick= loadImage("sprites/spr_stick.png");
            var options={
                'restituion': 0.02,
                'friction': 0.5,
                'density': 0.3
         }
            this.position= createVector(x,y);
            this.body= Bodies.rectangle(this.position.x,this.position.y,30,100,options)
            this.velocity= createVector(this.body.velocity.x, this.body.velocity.y)
            World.add(Myworld,this.body)
        }
    
        display(){
            

            var position= this.body.position 
            
            image(this.stick, position.x, position.y, 500,30);
            
    
        }
    
    
    
    
}