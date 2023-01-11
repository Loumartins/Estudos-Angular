import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventsComponent } from './components/events/events.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ChangeNumber100Component } from './components/change-number100/change-number100.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ListSneakersComponent } from './components/list-sneakers/list-sneakers.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { TwoWayExComponent } from './components/two-way-ex/two-way-ex.component';
import { TwoWayIdadeComponent } from './components/two-way-idade/two-way-idade.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventsComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ChangeNumber100Component,
    ListRenderComponent,
    ListSneakersComponent,
    PipesComponent,
    TwoWayBindingComponent,
    TwoWayExComponent,
    TwoWayIdadeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
