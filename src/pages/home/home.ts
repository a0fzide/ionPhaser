import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import Phaser from 'phaser'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log(Phaser)
    this.buildPhaserRenderer();
  }

  private buildPhaserRenderer() {
    var poly, graphics, game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { create: create });
    
    function create() {
        poly = new Phaser.Polygon();
        poly.setTo([ new Phaser.Point(200, 100), new Phaser.Point(350, 100), new Phaser.Point(375, 200), new Phaser.Point(150, 200) ]);
        graphics = game.add.graphics(0, 0);
        graphics.beginFill(0xFF33ff);
        graphics.drawPolygon(poly.points);
        graphics.endFill();
    }
  }
}
