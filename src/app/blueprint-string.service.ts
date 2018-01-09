import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs';
import { Buffer } from 'buffer';
import { unzip } from 'zlib';

@Injectable()
export class BlueprintStringService {

  public blueprintString: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public blueprintJson: Observable<any> = this.blueprintString.let(deflatePipe());
  public blueprintJsonString: string = '';

  constructor(private router: Router, private ar: ActivatedRoute) {
    this.blueprintString.subscribe(s => this.router.navigate([], {queryParams: {'string': s}}));
    this.ar.queryParams.take(1).filter(p => p['string']).subscribe(p => this.blueprintString.next(p['string']));
    // this.blueprintJson.subscribe(s => console.log(s));
    this.blueprintJson.map(v => v.toString()).subscribe(s => this.blueprintJsonString = s || ' ');
  }

}

export const deflatePipe = () => <T extends string>(source: Observable<T>) =>
new Observable(observer => {
  return source.subscribe({
    next(x) {
      if(x && x.length > 1) {
        let subX = (x || '  ').substring(1, x.length);
        const buffer = Buffer.from(subX, 'base64');
        unzip(buffer, (err, buffer) => {
          if (!err) {
            observer.next(buffer.toString());
          } else {
            // handle error
            observer.error(err);
          }
        });
      }
    },
    error(err) { observer.error(err); },
    complete() { observer.complete(); }
  })
});