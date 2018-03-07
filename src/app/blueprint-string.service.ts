import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Buffer } from 'buffer';
import { unzip } from 'zlib';
import { Point } from 'pixi.js';
import { remove } from 'lodash';
import { Action } from './Action';

@Injectable()
export class BlueprintStringService { 

  public blueprintString: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public blueprintJson: Observable<any> = this.blueprintString.let(deflatePipe());
  public blueprintJsonString = '';

  constructor(private router: Router, private ar: ActivatedRoute) {
    this.blueprintString.subscribe(s => this.router.navigate([], {queryParams: {'string': s}}));
    this.ar.queryParams.take(1).filter(p => p['string']).subscribe(p => this.blueprintString.next(p['string']));
    // this.blueprintJson.subscribe(s => console.log(s));
    this.blueprintJson.map(v => v.toString()).subscribe(s => this.blueprintJsonString = s || ' ');
  }
}

export const deflatePipe = () => <T extends string>(source: Observable<T>) => new Observable(observer => {
  return source.subscribe({
    next(x) {
      if (x && x.length > 1) {
        const subX = (x || '  ').substring(1, x.length);
        const buffer = Buffer.from(subX, 'base64');
        unzip(buffer, (err, buf) => {
          if (!err) {
            observer.next(buf.toString());
          } else {
            // handle error
            observer.error(err);
          }
        });
      }
    },
    error(err) { observer.error(err); },
    complete() { observer.complete(); }
  });
});

class GenericConstructor<T> {
  constructor(args: Partial<T>) {
    Object.assign(this, args);
  }
}

export namespace Blueprint {

  export class Book extends GenericConstructor<Book> {
    public item = 'blueprint-book';
    public label: string;
    public blueprints: Object[] = [];
    public active_index = 0;
    public version: number;
  }

  export class Object extends GenericConstructor<Object> {
    public item = 'blueprint';
    public label: string;
    public entities: Entity[] = [];
    public icons: Icon[] = [];

    public SetEntity(entity: Entity) {
      remove(this.entities, e => e.position.x === entity.position.x && e.position.y === entity.position.y);
      this.entities = [...this.entities, entity];
    }
  }

  export  class Icon extends GenericConstructor<Icon> {
    public index: number;
    public signal: Signal;
  }

  export class Signal extends GenericConstructor<Signal> {
    public type: 'virtual' | 'item';
    public name: string;
  }

  export class Entity extends GenericConstructor<Entity> {
    public entity_number: number;
    public name: string;
    public position: Point;
    public direction: number;
    public type: 'input' | 'output';
  }
}
