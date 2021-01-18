class Ground{
   constructor(){
    this.body=Bodies.rectangle(0,780,480,20,{isStatic:true});
    this.width=480;
    this.height=20;
    World.add(world,this.body);
   }
   display(){
    var pos=this.body.position;
    rect(pos.x,pos.y,this.width,this.height);
   }
}