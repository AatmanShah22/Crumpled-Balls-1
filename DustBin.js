class DustBin {  
    constructor( x, y, width, height){
        var options = {
            'isStatic' : true
        }

        this.body = Bodies.rectangle(x,y, width, height,options );
	    World.add(world, this.body);
	    this.bodyl= Bodies.rectangle((x-(width/2)), (y-(height*2)), height, width/2 ,options);
	    World.add(world, this.bodyl);
	    this.bodyr = Bodies.rectangle((x+(width/2)), (y-(height*2)), height, width/2 ,options);
        World.add(world, this.bodyr);
        this.body.width = width
        this.body.height = height 
        
   }
   display(){
       fill("white");
       rect(this.body.position.x, this.body.position.y,this.body.width, this.body.height)
       rect((this.body.position.x-(this.body.width/2)), (this.body.position.y-(this.body.height*(2*(this.body.width/100)))), this.body.height, this.body.width/2)
       rect((this.body.position.x+(this.body.width/2)), (this.body.position.y-(this.body.height*(2*(this.body.width/100)))), this.body.height, this.body.width/2)
   }
}
