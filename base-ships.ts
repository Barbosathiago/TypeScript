// Definição de uma classe
class SpaceCraft {

  constructor(public propulsor: string){} // Declaração de atributos minimizada

  jumpIntoHyperSpace(){
    console.log(`Entering hyperspace with ${this.propulsor}`)
  }
}

interface ContainerShip{
    cargoContainers: number
}


// Com essa forma de exportação, todos os arquivos passados na Array
// sao exportados. Assim, temos uma melhor interpretação do código e
// um código mais centralizado
export {SpaceCraft, ContainerShip}
