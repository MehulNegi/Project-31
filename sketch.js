const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var umbrella;
var thunder, thunder1, thunder2, thunder3, thunder4;
var drops = [];
var rand;
var maxDrops=100;
var thunderFrame=0;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(700,650);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(350, 480, 155);

    //creating drops
    if(frameCount % 150 === 0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drops(random(0,700), random(0,600)));
        }
    
    }
        
}

function draw(){
    background("Black");
    Engine.update(engine);

    umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].Drop();
        drops[i].Update();
    }
    thunderBolt();

    drawSprites();
}   

function thunderBolt() {
    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%50===0){
        thunderFrame=frameCount;
        thunder = createSprite(random(10,640), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.5,0.8)
        }
            
    if(thunderFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }
}