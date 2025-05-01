import { Position } from "../interfaces/Position.js";
import { Assets } from "./Assets.js";
import { GameObject } from "./GameObject.js";

export class Star extends GameObject{
    private speed : number = 2;

    protected start(){
        this.setImage(Assets.getStarImage());
        const heightImage = this.getImage().height;
        const widthImage = this.getImage().width;
        const position : Position = {
            x : Math.floor(Math.random()*this.getGame().CANVAS_WIDTH),
            y : Math.floor(Math.random()*this.getGame().CANVAS_HEIGHT)
        }
        this.setPosition(position);
    }

    protected update(): void {
        const position : Position = {
            x : this.getPosition().x,
            y : this.getPosition().y + this.speed
        }
        this.setPosition(position)
        if (this.getPosition().y > this.getGame().CANVAS_HEIGHT) {
            position.x = Math.floor(Math.random()*this.getGame().CANVAS_WIDTH);
            position.y = 0;
        }
    }
}