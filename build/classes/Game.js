import { Alien } from "./Alient.js";
import { GameObject } from "./GameObject.js";
import { Input } from "./Input.js";
import { Player } from "./Player.js";
import { Star } from "./Star.js";
var Game = /** @class */ (function () {
    function Game() {
        this.CANVAS_WIDTH = 900;
        this.CANVAS_HEIGHT = 600;
        this.tab_gO = [];
        this.nb_aliens = 10;
        this.nb_stars = 20;
        var canvas = document.querySelector("canvas");
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
        this.context = canvas.getContext("2d");
    }
    Game.prototype.start = function () {
        this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414";
        this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        var gameObject = new GameObject(this);
        this.player = new Player(this);
        this.instanciate(this.player);
        for (var i = 0; i < this.nb_aliens; i++) {
            this.instanciate(new Alien(this));
        }
        for (var i = 0; i < this.nb_stars; i++) {
            this.instanciate(new Star(this));
        }
        Input.listen();
        this.loop();
    };
    Game.prototype.draw = function (gameObject) {
        this.context.drawImage(gameObject.getImage(), gameObject.getPosition().x, gameObject.getPosition().y);
    };
    Game.prototype.loop = function () {
        var _this = this;
        setInterval(function () {
            _this.context.clearRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            _this.context.fillStyle = "#141414";
            _this.context.fillRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            _this.tab_gO.forEach(function (gO) {
                _this.draw(gO);
                gO.callUpdate();
                if (gO instanceof Alien && _this.player.overlap(gO)) {
                    gO.setPosition({ x: 0, y: 0 });
                }
            });
        }, 10);
    };
    Game.prototype.instanciate = function (gameObject) {
        this.tab_gO.push(gameObject);
    };
    return Game;
}());
export { Game };
