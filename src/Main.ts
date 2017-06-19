/**
 * Created by thanhpv on 6/19/17.
 */

import * as PIXI from "pixi.js"

export class Main {
    app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
    bunny : PIXI.Sprite = PIXI.Sprite.fromImage('../assets/welcome.jpeg')



    constructor() {
        document.body.appendChild(this.app.view);

        this.bunny.anchor.set(0.5);

// move the sprite to the center of the screen
        this.bunny.x = this.app.renderer.width / 2;
        this.bunny.y = this.app.renderer.height / 2;

        this.app.stage.addChild(this.bunny);

// Listen for animate update
        this.app.ticker.add(this.rotation);

    }

    rotation = (delta) => {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent tranformation
    this.bunny.rotation += 0.1 * delta;
    }
}

new Main();