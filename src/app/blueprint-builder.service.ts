import { Injectable } from '@angular/core';
import { Point } from 'pixi.js';
import { ImageRef } from './tab-list/tab-list.component';
import { remove } from 'lodash';
import { BlueprintStringService, Blueprint } from './blueprint-string.service';

@Injectable()
export class BlueprintBuilderService {

  public BlueprintBuilder: Blueprint.Object;

  constructor(private blueprintStringService: BlueprintStringService) { }

  Export() {
    // return this.blueprintStringService.StringFromTiles(this._tiles);
  }
}
