class Hero
{
    constructor(x,y,width,height,angle)
    {
       var options = 
       {
           'density' : 1
       }

       this.width=width;
       this.height=height;
       this.image=loadImage("Superhero-01.png");
       this.body=Bodies.rectangle(x,y,width,height,options);
       World.add(world,this.body);
    }

    display()
    {
      var pos=this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      rotate(angle);
      fill(255,0,255);
      //ellipse(0,0,this.width,this.height);
      image(this.image,0,0,this.width,this.height);
      pop();
    }
}