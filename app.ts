// Definição de uma classe
class SpaceCraft {

  constructor(public propulsor: string){} // Declaração de atributos minimizada

  jumpIntoHyperSpace(){
    console.log(`Entering hyperspace with ${this.propulsor}`)
  }
}

let ship = new SpaceCraft('HyperDrive')
ship.jumpIntoHyperSpace()


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

let falcon = new MilleniumFalcom()
falcon.jumpIntoHyperSpace()

interface ContainerShip{
    cargoContainers: number
}

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'Yes': 'No'}`)
