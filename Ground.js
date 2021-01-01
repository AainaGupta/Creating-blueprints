class Ground{
    constructor(x,y,width,height){
     var options1={
         isStatic:true
     }
     this.width=width;
this.height=height;
this.body=Bodies.rectangle(x,y,this.width,this.height,options1);
World.add(world,this.body);
    }
    Display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}

