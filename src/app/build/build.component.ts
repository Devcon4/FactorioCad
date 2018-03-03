import { Component, OnInit } from '@angular/core';
import { NavLink } from '../sidebar-nav/sidebar-nav.component';
import { ImageRef, ItemType } from '../tab-list/tab-list.component';
import { Http } from '@angular/http';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent implements OnInit {

  list = {};
  ordinalMap = {
    'Logistics': 0,
    'Production': 1,
    'Components': 2,
    'Military': 3

  };

  raw = [
    { "name": "accumulator", "path": "assets/images/icons/accumulator.png", "group": 1 },
    { "name": 'arithmetic combinator', 'path': 'assets/images/icons/arithmetic-combinator.png', 'group': 0 },
    { 'name': 'artillery turret', 'path': 'assets/images/icons/artillery-turret.png', 'group': 3 },
    { 'name': 'artillery wagon', 'path': 'assets/images/icons/artillery-wagon.png', 'group': 3 },
    { 'name': 'assembling machine 1', 'path': 'assets/images/icons/assembling-machine-1.png', 'group': 1 },
    { 'name': 'assembling machine 2', 'path': 'assets/images/icons/assembling-machine-2.png', 'group': 1 },
    { 'name': 'assembling machine 3', 'path': 'assets/images/icons/assembling-machine-3.png', 'group': 1 },
    { 'name': 'beacon', 'path': 'assets/images/icons/beacon.png', 'group': 1 },
    { 'name': 'big electric pole', 'path': 'assets/images/icons/big-electric-pole.png', 'group': 0 },
    { 'name': 'boiler', 'path': 'assets/images/icons/boiler.png', 'group': 1 },
    { 'name': 'burner inserter', 'path': 'assets/images/icons/burner-inserter.png', 'group': 0 },
    { 'name': 'burner mining drill', 'path': 'assets/images/icons/burner-mining-drill.png', 'group': 1 },
    { 'name': 'cargo wagon', 'path': 'assets/images/icons/cargo-wagon.png', 'group': 0 },
    { 'name': 'centrifuge', 'path': 'assets/images/icons/centrifuge.png', 'group': 1 },
    { 'name': 'chemical plant', 'path': 'assets/images/icons/chemical-plant.png', 'group': 1 },
    { 'name': 'concrete', 'path': 'assets/images/icons/concrete.png', 'group': 2 },
    { 'name': 'constant combinator', 'path': 'assets/images/icons/constant-combinator.png', 'group': 0 },
    { 'name': 'decider combinator', 'path': 'assets/images/icons/decider-combinator.png', 'group': 0 },
    { 'name': 'electric furnace', 'path': 'assets/images/icons/electric-furnace.png', 'group': 1 },
    { 'name': 'electric mining drill', 'path': 'assets/images/icons/electric-mining-drill.png', 'group': 1 },
    { 'name': 'express loader', 'path': 'assets/images/icons/express-loader.png', 'group': 0 },
    { 'name': 'express splitter', 'path': 'assets/images/icons/express-splitter.png', 'group': 0 },
    { 'name': 'express transport belt', 'path': 'assets/images/icons/express-transport-belt.png', 'group': 0 },
    { 'name': 'express underground belt', 'path': 'assets/images/icons/express-underground-belt.png', 'group': 0 },
    { 'name': 'fast inserter', 'path': 'assets/images/icons/fast-inserter.png', 'group': 0 },
    { 'name': 'fast loader', 'path': 'assets/images/icons/fast-loader.png', 'group': 0 },
    { 'name': 'fast splitter', 'path': 'assets/images/icons/fast-splitter.png', 'group': 0 },
    { 'name': 'fast transport belt', 'path': 'assets/images/icons/fast-transport-belt.png', 'group': 0 },
    { 'name': 'fast underground belt', 'path': 'assets/images/icons/fast-underground-belt.png', 'group': 0 },
    { 'name': 'filter inserter', 'path': 'assets/images/icons/filter-inserter.png', 'group': 0 },
    { 'name': 'flamethrower turret', 'path': 'assets/images/icons/flamethrower-turret.png', 'group': 3 },
    { 'name': 'gate', 'path': 'assets/images/icons/gate.png', 'group': 3 },
    { 'name': 'green wire', 'path': 'assets/images/icons/green-wire.png', 'group': 2 },
    { 'name': 'gun turret', 'path': 'assets/images/icons/gun-turret.png', 'group': 3 },
    { 'name': 'hazard concrete', 'path': 'assets/images/icons/hazard-concrete.png', 'group': 2 },
    { 'name': 'heat boiler', 'path': 'assets/images/icons/heat-boiler.png', 'group': 1 },
    { 'name': 'heat pipe', 'path': 'assets/images/icons/heat-pipe.png', 'group': 1 },
    { 'name': 'inserter', 'path': 'assets/images/icons/inserter.png', 'group': 0 },
    { 'name': 'iron chest', 'path': 'assets/images/icons/iron-chest.png', 'group': 0 },
    { 'name': 'lab', 'path': 'assets/images/icons/lab.png', 'group': 1 },
    { 'name': 'land mine', 'path': 'assets/images/icons/land-mine.png', 'group': 3 },
    { 'name': 'landfill', 'path': 'assets/images/icons/landfill.png', 'group': 2 },
    { 'name': 'laser turret', 'path': 'assets/images/icons/laser-turret.png', 'group': 3 },
    { 'name': 'loader', 'path': 'assets/images/icons/loader.png', 'group': 0 },
    { 'name': 'logistic chest active provider', 'path': 'assets/images/icons/logistic-chest-active-provider.png', 'group': 0 },
    { 'name': 'logistic chest buffer', 'path': 'assets/images/icons/logistic-chest-buffer.png', 'group': 0 },
    { 'name': 'logistic chest passive provider', 'path': 'assets/images/icons/logistic-chest-passive-provider.png', 'group': 0 },
    { 'name': 'logistic chest requester', 'path': 'assets/images/icons/logistic-chest-requester.png', 'group': 0 },
    { 'name': 'logistic chest storage', 'path': 'assets/images/icons/logistic-chest-storage.png', 'group': 0 },
    { 'name': 'long handed inserter', 'path': 'assets/images/icons/long-handed-inserter.png', 'group': 0 },
    { 'name': 'medium electric pole', 'path': 'assets/images/icons/medium-electric-pole.png', 'group': 0 },
    { 'name': 'nuclear reactor', 'path': 'assets/images/icons/nuclear-reactor.png', 'group': 1 },
    { 'name': 'offshore pump', 'path': 'assets/images/icons/offshore-pump.png', 'group': 1 },
    { 'name': 'oil refinery', 'path': 'assets/images/icons/oil-refinery.png', 'group': 1 },
    { 'name': 'pipe to ground', 'path': 'assets/images/icons/pipe-to-ground.png', 'group': 0 },
    { 'name': 'pipe', 'path': 'assets/images/icons/pipe.png', 'group': 0 },
    { 'name': 'power switch', 'path': 'assets/images/icons/power-switch.png', 'group': 0 },
    { 'name': 'programmable speaker', 'path': 'assets/images/icons/programmable-speaker.png', 'group': 0 },
    { 'name': 'pump', 'path': 'assets/images/icons/pump.png', 'group': 0 },
    { 'name': 'pumpjack', 'path': 'assets/images/icons/pumpjack.png', 'group': 1 },
    { 'name': 'radar', 'path': 'assets/images/icons/radar.png', 'group': 3 },
    { 'name': 'rail chain signal', 'path': 'assets/images/icons/rail-chain-signal.png', 'group': 0 },
    { 'name': 'rail signal', 'path': 'assets/images/icons/rail-signal.png', 'group': 0 },
    { 'name': 'rail', 'path': 'assets/images/icons/rail.png', 'group': 0 },
    { 'name': 'red wire', 'path': 'assets/images/icons/red-wire.png', 'group': 0 },
    { 'name': 'roboport', 'path': 'assets/images/icons/roboport.png', 'group': 0 },
    { 'name': 'rocket silo', 'path': 'assets/images/icons/rocket-silo.png', 'group': 3 },
    { 'name': 'small electric pole', 'path': 'assets/images/icons/small-electric-pole.png', 'group': 0 },
    { 'name': 'small lamp', 'path': 'assets/images/icons/small-lamp.png', 'group': 0 },
    { 'name': 'solar panel', 'path': 'assets/images/icons/solar-panel.png', 'group': 1 },
    { 'name': 'splitter', 'path': 'assets/images/icons/splitter.png', 'group': 0 },
    { 'name': 'stack filter inserter', 'path': 'assets/images/icons/stack-filter-inserter.png', 'group': 0 },
    { 'name': 'stack inserter', 'path': 'assets/images/icons/stack-inserter.png', 'group': 0 },
    { 'name': 'steam engine', 'path': 'assets/images/icons/steam-engine.png', 'group': 1 },
    { 'name': 'steam turbine', 'path': 'assets/images/icons/steam-turbine.png', 'group': 1 },
    { 'name': 'steel chest', 'path': 'assets/images/icons/steel-chest.png', 'group': 0 },
    { 'name': 'steel furnace', 'path': 'assets/images/icons/steel-furnace.png', 'group': 1 },
    { 'name': 'stone brick', 'path': 'assets/images/icons/stone-brick.png', 'group': 2 },
    { 'name': 'stone furnace', 'path': 'assets/images/icons/stone-furnace.png', 'group': 1 },
    { 'name': 'stone wall', 'path': 'assets/images/icons/stone-wall.png', 'group': 3 },
    { 'name': 'storage tank', 'path': 'assets/images/icons/storage-tank.png', 'group': 0 },
    { 'name': 'substation', 'path': 'assets/images/icons/substation.png', 'group': 1 },
    { 'name': 'tank', 'path': 'assets/images/icons/tank.png', 'group': 3 },
    { 'name': 'train stop', 'path': 'assets/images/icons/train-stop.png', 'group': 0 },
    { 'name': 'transport belt', 'path': 'assets/images/icons/transport-belt.png', 'group': 0 },
    { 'name': 'underground belt', 'path': 'assets/images/icons/underground-belt.png', 'group': 0 },
    { 'name': 'wooden chest', 'path': 'assets/images/icons/wooden-chest.png', 'group': 0 }
  ];

  constructor(private http: Http) { }

  ngOnInit() {
    this.raw.map(i => new ImageRef(i.name, i.path, i.group)).forEach(i => {
      this.list[ItemType[i.group]] = [...(this.list[ItemType[i.group]] || []), i];
    });
  }

}
