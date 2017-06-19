"use strict";
/**
 * Created by thanhpv on 6/19/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = require("pixi.js");
var Main = (function () {
    function Main() {
        var _this = this;
        this.app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });
        this.bunny = PIXI.Sprite.fromImage('../assets/welcome.jpeg');
        this.rotation = function (delta) {
            // just for fun, let's rotate mr rabbit a little
            // delta is 1 if running at 100% performance
            // creates frame-independent tranformation
            _this.bunny.rotation += 0.1 * delta;
        };
        document.body.appendChild(this.app.view);
        this.bunny.anchor.set(0.5);
        // move the sprite to the center of the screen
        this.bunny.x = this.app.renderer.width / 2;
        this.bunny.y = this.app.renderer.height / 2;
        this.app.stage.addChild(this.bunny);
        // Listen for animate update
        this.app.ticker.add(this.rotation);
    }
    return Main;
}());
exports.Main = Main;
new Main();
