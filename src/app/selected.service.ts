import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Action } from './Action';
import { ImageRef } from './tab-list/tab-list.component';

@Injectable()
export class SelectedService extends Action<ImageRef> {}
