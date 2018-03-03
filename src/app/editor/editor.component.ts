import { Component, OnInit, ViewRef, ElementRef, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Application, loader, Sprite, Graphics, autoDetectRenderer, Container, Texture, Rectangle, interaction, Point } from 'pixi.js';
import { AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UrlShortenerService } from '../url-shortener.service';
import * as lerp from 'lerp';
import * as copy from 'clipboard-copy';
import { SelectedService } from '../selected.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements AfterViewInit {

  @ViewChild('editor') editor: ElementRef;
  desiredZoom = 25;

  private app: Application = new Application({transparent: true});
  private grid = new Graphics();
  private blueprint = new Container();
  private selected: Sprite = new Sprite();
  private lastMousePos: Point = new Point(0, 0);


  constructor(
    private http: Http,
    private urlShortenerService: UrlShortenerService, 
    private selectedService: SelectedService,
    public snackBar: MatSnackBar) {
    // http.get('assets/json/iconMap.json').subscribe(j => {
    //   this.file = j.json().map(r => ({name: r.name, path: r.path, group: r.group }));
    // });
    selectedService.asObservable().subscribe(v => {
      var texture = Texture.fromImage(`${environment.deployUrl}/${v.url}`);
      this.selected = new Sprite(texture);
      this.selected.position = this.lastMousePos;
      console.log(this.selected);
    });
   }

   openSnackBar(message: string, action?: string) {
     this.urlShortenerService.getCurrent((shortUrl) => {
      copy(shortUrl);
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    });
  }

  ngAfterViewInit() {
    if (document.body.addEventListener){
        document.body.addEventListener( 'mousewheel', this.zoom.bind(this), false );     // Chrome/Safari/Opera
        document.body.addEventListener( 'DOMMouseScroll', this.zoom.bind(this), false ); // Firefox
    }

    // The application will create a renderer using WebGL, if possible,
  // with a fallback to a canvas render. It will also setup the ticker
  // and the root stage PIXI.Container

  // The application will create a canvas element for you that you
  // can then insert into the DOM
  this.editor.nativeElement.appendChild(this.app.view);
  setTimeout(() => {
    this.adjustCanvasSize();
    this.app.ticker.add(e => {
      if(this.lastMousePos.x !== this.app.renderer.plugins.interaction.mouse.global.x ||
         this.lastMousePos.y !== this.app.renderer.plugins.interaction.mouse.global.y) {
        this.lastMousePos = new Point(
          this.app.renderer.plugins.interaction.mouse.global.x,
          this.app.renderer.plugins.interaction.mouse.global.y);
        this.drawSelected({x: this.lastMousePos.x, y: this.lastMousePos.y });
      }
    });
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
    this.app.renderer.resize(this.editor.nativeElement.clientWidth, this.editor.nativeElement.clientHeight);
    this.drawGrid();
  }

  drawSelected(pos: {x: number, y: number}) {
    this.selected.position.set(pos.x, pos.y);
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

    const halfWidth = this.app.renderer.width / 2;
    const halfHeight = this.app.renderer.height / 2;
    const cellSize = this.desiredZoom;
    for(let x = halfWidth % cellSize - (cellSize / 2); x < this.app.renderer.width; x += cellSize) {
      this.grid.moveTo(x, 0);
      this.grid.lineTo(x, this.app.renderer.height);
    }

    for(let y = halfHeight % cellSize - (cellSize / 2); y < this.app.renderer.height; y += cellSize) {
      this.grid.moveTo(0, y);
      this.grid.lineTo(this.app.renderer.width, y);
    }

    this.grid.endFill();
    this.app.stage.addChild(this.grid);
  }

  zoom(event: MouseWheelEvent){
    let newZoom = this.desiredZoom + (event.wheelDelta / 200);
    if (newZoom > 1) { this.desiredZoom = newZoom; }
    this.adjustCanvasSize();
  }
}
