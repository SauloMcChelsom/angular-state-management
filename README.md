angular guard
angular interceptor
angular Lazy loading
angular directive
angular Providers
angular NgZones
angular pipe
angular Lifecycle
angular Dependency injection
angular service
angular module
angular component
helpers vs utils	  

## angular Dependency injection
Quando um serviço depende de outro serviço, precisamos definir essa classe como @Injectable()

## @Injectable() @NgModule() @Component() @Pipe() @Directive()


## NgZone
NgZone nos permite executar explicitamente determinado código fora da zona do Angular.
os manipuladores(metodos...) ainda serão executados, mas como eles não serão executados dentro da Zona do Angular, o Angular não será notificado de que uma tarefa foi concluída e, portanto, nenhuma detecção de alteração será realizada.

## Providers
Os provedores são apenas a instância do serviço.

Você pode criá-los uma vez e usá-los em qualquer lugar ou pode criar várias instâncias.

Vamos entender como podemos usá-los em Angular

Todos os serviços são registrados no Angular, mas não podem ser usados ​​até que os instanciamos. Então, primeiro, temos que instanciar os serviços e fazemos isso usando provedores.

Existem duas maneiras de instanciar o serviço. Primeiro usando o array de provedores e o segundo é usar o fornecidoIn .

O primeiro método usando Providers Array

Para usar o serviço globalmente, podemos colocar os provedores no AppModule. Ao fazer isso, a instância desse serviço é criada e todos os componentes ou outros serviços do aplicativo usarão a mesma instância.

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewService } from './newService';

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [NewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
Para usar o serviço dentro de qualquer componente específico, podemos colocar os provedores em ComponentModule. Ao fazer isso, a nova instância desse serviço é criada e todos os componentes filho usarão a mesma instância (ela substituirá a instância pai).

import { Component, OnInit } from '@angular/core';
import { NewService } from './newService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[NewService]
})
export class AppComponent implements OnInit {
  constructor(private newService: newService) { }

  ngOnInit() { }
}
NOTA: Se você colocar provedores em AppComponent, todos os componentes desse aplicativo poderão usar essa instância, mas outros serviços não terão acesso a essa instância. Para fazer com que outros serviços também usem a mesma instância, coloque-a em AppModule.

O segundo método usando fornecidoIn

Você pode usar o decorador injetável para instanciar qualquer serviço.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' | Type<any>
})
export class UserService {
}
Se for root, todo o aplicativo terá acesso a esse serviço. Isso significa que o Angular cria uma única instância desse serviço e todo o aplicativo usa a mesma instância.

Se tiver que ser acessado apenas em um módulo específico, podemos fazer isso fornecendo o nome do módulo para fornecidoIn

@Injectable({
   providedIn: AnyModule
})

## canActivate | CanLoad
canActivate é usado para impedir que usuários não autorizados acessem determinadas rotas.

canLoad é usado para evitar que o aplicativo carregue módulos inteiros lentamente se o usuário não estiver autorizado a fazê-lo.

CanActivate - Decide se uma rota pode ser ativada, este guarda pode não ser o melhor caminho para módulos de recursos que são carregados com preguiça, pois esse guarda sempre carregará o módulo na memória, mesmo se o guarda retornar falso, o que significa que o usuário não está autorizado a acessar o percurso.

CanLoad - Decide se um módulo pode ser carregado lentamente, Controla se uma rota pode ser carregada. Isso se torna útil para módulos de recursos que são carregados lentamente. Eles nem carregarão se o guarda retornar falso.
