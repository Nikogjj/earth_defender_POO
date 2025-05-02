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
            min: Math.floor(this.position.x),
            max: Math.floor(this.position.x + this.getImage().width)
        };
        // console.log(zoneHeightGameObject,zoneWidthGameObject)
        var heightOtherImage = other.getImage().height;
        var widthOtherImage = other.getImage().width;
        if (zoneHeightGameObject.min <= other.position.y && zoneHeightGameObject.max >= other.position.y - heightOtherImage) {
            if (zoneWidthGameObject.min <= other.getPosition().x + widthOtherImage && zoneWidthGameObject.max >= other.getPosition().x) {
                console.log("touché");
                other.setPosition({ x: 0, y: 0 });
            }
        }
        return false;
    };
    return GameObject;
}());
export { GameObject };
//player y min 412 - max 487
//height player 75
//height alien 88
// = 163
