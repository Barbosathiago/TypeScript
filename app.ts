import {SpaceCraft, ContainerShip} from './base-ships'
import {MilleniumFalcom} from './starfighters'

let ship = new SpaceCraft('HyperDrive')
ship.jumpIntoHyperSpace()

let falcon = new MilleniumFalcom()
falcon.jumpIntoHyperSpace()

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'Yes': 'No'}`)
