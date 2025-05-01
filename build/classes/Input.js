var Input = /** @class */ (function () {
    function Input() {
    }
    Input.getAxisX = function () {
        return this.axisX;
    };
    Input.listen = function () {
        var _this = this;
        document.addEventListener("keydown", function (event) {
            switch (event.key) {
                case "q":
                case "Q":
                    _this.axisX = -1;
                    break;
                case "d":
                case "D":
                    _this.axisX = 1;
                    break;
                default:
                    break;
            }
        });
        document.addEventListener("keyup", function (event) {
            switch (event.key) {
                case "q":
                case "Q":
                case "d":
                case "D":
                    _this.axisX = 0;
                    break;
                default:
                    break;
            }
        });
    };
    Input.axisX = 0;
    return Input;
}());
export { Input };
