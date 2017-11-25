import {SpaceCraft, ContainerShip} from './base-ships'
import {MilleniumFalcom} from './starfighters'


// Passos para a instalação de dependencias JS
// 1 - Executar o node init
// 2 - Instalar os pacotes necessários utilizando node install
// 2.1 - Utilizando o parametro --save instala-se tanto no desenvolvimento quanto em produção
// 2.2 - Utilizando --save-dev instala-se apenas para o desenvolvimento
// 3 - Caso estejam disponíveis, é posssível instalar as tipagens da dependencia através do
// comando install, o padrão de instalação das tipagens geralmente é @types/suadependencia

import * as _ from 'lodash'
console.log(_.pad("Typescript Examples", 40, "="))

let ship = new SpaceCraft('HyperDrive')
ship.jumpIntoHyperSpace()

let falcon = new MilleniumFalcom()
falcon.jumpIntoHyperSpace()

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'Yes': 'No'}`)
