import { Component, OnInit, ViewRef, ElementRef, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Application, loader, Sprite, Graphics, autoDetectRenderer, Container } from 'pixi.js';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements AfterViewInit {

  @ViewChild('editor') editor: ElementRef;

  private app: Application = new Application({transparent: true});
  private grid = new Graphics();

  constructor(private http: Http) {
    // http.get('assets/json/iconMap.json').subscribe(j => {
    //   this.file = j.json().map(r => ({name: r.name, path: r.path, group: r.group }));
    // });
   }

  ngAfterViewInit() {
    // The application will create a renderer using WebGL, if possible,
  // with a fallback to a canvas render. It will also setup the ticker
  // and the root stage PIXI.Container

  // The application will create a canvas element for you that you
  // can then insert into the DOM
  this.editor.nativeElement.appendChild(this.app.view);
  setTimeout(() => {
    this.adjustCanvasSize();
  }, 0);
  // load the texture we need
  // loader.add('accumulator', 'assets/images/icons/accumulator.png').load((l, resources) => {
      // This creates a texture from a 'bunny.png' image
      // const accumulator = new Sprite(resources.accumulator.texture);

      // // Setup the position of the bunny
      // accumulator.x = this.app.renderer.width / 2;
      // accumulator.y = this.app.renderer.height / 2;

      // // Rotate around the center
      // accumulator.anchor.x = 0.5;
      // accumulator.anchor.y = 0.5;

      // // Add the bunny to the scene we are building
      // this.app.stage.addChild(accumulator);

      // // Listen for frame updates
      // this.app.ticker.add(() => {
      //     // each frame we spin the bunny around a bit
      //     accumulator.rotation += 0.01;
      // });
  // });
  }

  adjustCanvasSize() {
    console.log(this.editor);
    this.app.renderer.resize(this.editor.nativeElement.clientWidth, this.editor.nativeElement.clientHeight);
    this.drawGrid();
  }


  drawGrid() {
    this.app.stage.removeChild(this.grid);
    this.grid = new Graphics();
    // set a fill and line style
    this.grid.lineStyle(3, 0x424242, 1);

    this.grid.moveTo(this.app.renderer.width / 2, 0);
    this.grid.lineTo(this.app.renderer.width / 2, this.app.renderer.height);
    this.grid.moveTo(0, this.app.renderer.height / 2);
    this.grid.lineTo(this.app.renderer.width, this.app.renderer.height / 2);

    this.grid.lineStyle(1, 0x424242, 1);
    const rowCount = 20;
    const rowIncrement = 500 / rowCount;
    for (let x = 0; x < this.app.renderer.width; x++) {
      this.grid.moveTo(rowIncrement * x, 0);
      this.grid.lineTo(rowIncrement * x, this.app.renderer.height);
    }

    const columnCount = 20;
    const columnIncrement = 500 / columnCount;
    for (let y = 0; y < this.app.renderer.height; y++) {
      this.grid.moveTo(0, columnIncrement * y);
      this.grid.lineTo(this.app.renderer.width, columnIncrement * y);
    }

    this.grid.endFill();
    this.app.stage.addChild(this.grid);
  }
}
