import { Alien } from "./Alient.js";
import { Assets } from "./Assets.js";
import { GameObject } from "./GameObject.js";
import { Input } from "./Input.js";
import { Player } from "./Player.js";
import { Star } from "./Star.js";

export class Game{
    private context : CanvasRenderingContext2D;
    public readonly CANVAS_WIDTH : number = 900;
    public readonly CANVAS_HEIGHT : number = 600;
    private player : Player;
    private tab_gO : Array <GameObject> = [];
    private nb_aliens : number = 1;
    private nb_stars : number = 20;

    constructor(){
        const canvas : HTMLCanvasElement = document.querySelector("canvas");
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
        this.context = canvas.getContext("2d");
    }

    public start() : void{
        this.context.clearRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414";
        this.context.fillRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
        const gameObject = new GameObject(this);
        this.player = new Player(this);
        this.instanciate(this.player);
        for (let i = 0; i < this.nb_aliens; i++) {
            this.instanciate(new Alien(this));
        }
        for (let i = 0; i < this.nb_stars; i++) {
            this.instanciate(new Star(this));        
        }
        Input.listen();
        this.loop();
    }

    private draw(gameObject : GameObject){
        this.context.drawImage(gameObject.getImage(),gameObject.getPosition().x,gameObject.getPosition().y)
    }

    private loop(){
        setInterval(()=>{
            this.context.clearRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
            this.context.fillStyle = "#141414";
            this.context.fillRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
            // console.log("ok");
            this.tab_gO.forEach(gO => {
                this.draw(gO)
                // if (gO instanceof Player) {
                //     // const zoneHeightGameObject = {
                //     //     min :Math.floor(gO.getPosition().y - gO.getImage().height),
                //     //     max : Math.floor(gO.getPosition().y)
                //     // }
                //     // const zoneWidthGameObject = {
                //     //     max : Math.floor(gO.getPosition().x + gO.getImage().width),
                //     //     min : Math.floor(gO.getPosition().x)
                //     // }
                //     // console.log(zoneHeightGameObject,zoneWidthGameObject);
                // }
                gO.callUpdate()
                if (gO instanceof Alien && this.player.overlap(gO)) {
                    gO.setPosition({x:0,y:0})
                }
            });
        },10)
    }

    public instanciate(gameObject : GameObject){
        this.tab_gO.push(gameObject)
    }
}