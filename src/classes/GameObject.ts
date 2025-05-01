import { Assets } from "./Assets.js";
import { Game } from "./Game.js";
import { Position } from "../interfaces/Position.js";

export class GameObject{
    private game : Game
    private position : Position;
    private image : HTMLImageElement;

    constructor(game : Game){
        this.position = {
            x : 0,
            y : 0
        }
        this.image = Assets.getDefaultImage();
        this.game = game;
        this.start();
    }

    public getImage() : HTMLImageElement{
        return this.image
    }

    public getPosition() : Position{
        return this.position;
    }

    public getGame() : Game{
        return this.game;
    }

    public setImage(image : HTMLImageElement){
        this.image = image;
    }

    public setPosition(position : Position){
        this.position = position;
    }

    protected start(){
        // console.log("test")
    }

    protected update(){
        console.log("update !")
    }
    public callUpdate(){
        this.update();
    }
    public overlap(other : GameObject) : boolean{
        const zoneHeightGameObject = {
            min :Math.floor(this.position.y - this.getImage().height),
            max : Math.floor(this.position.y)
        }
        const zoneWidthGameObject = {
            max : Math.floor(this.position.x + this.getImage().width),
            min : Math.floor(this.position.x)
        }
        // const condition1 : boolean = other.position.y >= zoneHeightGameObject.min && other.position.y <= zoneHeightGameObject.max;
        // const condition2 : boolean = other.position.y >= zoneHeightGameObject.min && other.position.y <= zoneHeightGameObject.max
        const heightOtherImage = other.getImage().height
        const widthOtherImage = other.getImage().width
        if (zoneHeightGameObject.min <= other.position.y && zoneHeightGameObject.max >= other.position.y-heightOtherImage) {
            if (zoneWidthGameObject.min <= other.position.x && zoneWidthGameObject.max >= other.position.x-widthOtherImage ) {
                console.log(other.position.y-heightOtherImage)
                return true;
            }
        }
        return false;
    }
}