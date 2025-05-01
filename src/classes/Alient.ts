import { Position } from "../interfaces/Position.js";
import { Assets } from "./Assets.js";
import { GameObject } from "./GameObject.js";

export class Alien extends GameObject{
    private speed = 1;
    protected start(): void {
        this.setImage(Assets.getAlienImage())
        const heightImage = this.getImage().height
        const widthImage = this.getImage().width
        const position : Position = {
            x : Math.floor(Math.random()*this.getGame().CANVAS_WIDTH),
            y : Math.floor(Math.random() * heightImage) 
        }
        this.setPosition(position);
    }

    protected update(){
        const position : Position = {
            x : this.getPosition().x,
            y : this.getPosition().y + this.speed
        }
        this.setPosition(position)
    }
}