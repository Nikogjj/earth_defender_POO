import { Assets } from "./Assets.js";
var GameObject = /** @class */ (function () {
    function GameObject(game) {
        this.position = {
            x: 0,
            y: 0
        };
        this.image = Assets.getDefaultImage();
        this.game = game;
        this.start();
    }
    GameObject.prototype.getImage = function () {
        return this.image;
    };
    GameObject.prototype.getPosition = function () {
        return this.position;
    };
    GameObject.prototype.getGame = function () {
        return this.game;
    };
    GameObject.prototype.setImage = function (image) {
        this.image = image;
    };
    GameObject.prototype.setPosition = function (position) {
        this.position = position;
    };
    GameObject.prototype.start = function () {
        // console.log("test")
    };
    GameObject.prototype.update = function () {
        console.log("update !");
    };
    GameObject.prototype.callUpdate = function () {
        this.update();
    };
    GameObject.prototype.overlap = function (other) {
        var zoneHeightGameObject = {
            min: Math.floor(this.position.y - this.getImage().height),
            max: Math.floor(this.position.y)
        };
        var zoneWidthGameObject = {
            max: Math.floor(this.position.x + this.getImage().width),
            min: Math.floor(this.position.x)
        };
        // const condition1 : boolean = other.position.y >= zoneHeightGameObject.min && other.position.y <= zoneHeightGameObject.max;
        // const condition2 : boolean = other.position.y >= zoneHeightGameObject.min && other.position.y <= zoneHeightGameObject.max
        var heightOtherImage = other.getImage().height;
        var widthOtherImage = other.getImage().width;
        if (zoneHeightGameObject.min <= other.position.y && zoneHeightGameObject.max >= other.position.y - heightOtherImage) {
            if (zoneWidthGameObject.min <= other.position.x && zoneWidthGameObject.max >= other.position.x - widthOtherImage) {
                console.log(other.position.y - heightOtherImage);
                return true;
            }
        }
        return false;
    };
    return GameObject;
}());
export { GameObject };
