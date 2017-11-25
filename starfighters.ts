import {SpaceCraft, ContainerShip} from './base-ships'

// Implementação de herança e interface
class MilleniumFalcom extends SpaceCraft implements ContainerShip{

 cargoContainers: number

  constructor(){
    super('HyperDrive')
    this.cargoContainers = 4
  }

  jumpIntoHyperSpace(){
    return Math.random() >= 0.5 ? super.jumpIntoHyperSpace() : console.log('Failed to jump into hyperspace :(')
  }
}

export {MilleniumFalcom}
