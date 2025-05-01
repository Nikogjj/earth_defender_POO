import { Assets } from "./Assets.js";
import { GameObject } from "./GameObject.js";
import { Position } from "../interfaces/Position.js";
import { Input } from "./Input.js";

export class Player extends GameObject{
    private speed : number = 10;
    protected start(){
        this.setImage(Assets.getPlayerImage());
        const heightImage = Assets.getHeightImage(this.getImage());
        let position = {
            x : this.getGame().CANVAS_WIDTH/2,
            y : this.getGame().CANVAS_HEIGHT-(heightImage*1.5)
        }
        console.log(heightImage)
        this.setPosition(position);
    }
    
    protected update(){
        this.setPosition({
            x : this.getPosition().x + this.speed * Input.getAxisX(),
            y : this.getPosition().y
        })
        if (this.getPosition().x >this.getGame().CANVAS_WIDTH-this.getImage().width || this.getPosition().x < 0 ) {
            this.setPosition({
                x : this.getPosition().x - this.speed * Input.getAxisX(),
                y : this.getPosition().y
            })
        }
    }
}