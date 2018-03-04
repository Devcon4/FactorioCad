// tslint:disable-next-line:import-blacklist
import { BehaviorSubject } from 'rxjs';

export abstract class Action<T> {
    public _innerObservable: BehaviorSubject<T> = new BehaviorSubject({} as T);

    asObservable() {
        return this._innerObservable;
    }

    public get value() {
        return this._innerObservable.getValue();
    }
    public set value(val: T) {
        console.log(val);
        this._innerObservable.next(val);
    }
  }
