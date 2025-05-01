var Assets = /** @class */ (function () {
    function Assets() {
    }
    Assets.getDefaultImage = function () {
        var image = document.querySelector("img#asset_default");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    };
    Assets.getPlayerImage = function () {
        var image = document.querySelector("img#asset_player");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    };
    Assets.getAlienImage = function () {
        var image = document.querySelector("img#asset_alien");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    };
    Assets.getStarImage = function () {
        var image = document.querySelector("img#asset_star");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    };
    Assets.getWidthImage = function (image) {
        return image.width;
    };
    Assets.getHeightImage = function (image) {
        return image.height;
    };
    return Assets;
}());
export { Assets };
