import {NgModule}      from '@angular/core';
import {DashboardIndexComponent}     from './components/index/index.component';
import {TracksModule} from '../tracks/tracks.module';
import {DashboardRoutingModule}     from './dashboard.routes';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SessionModule} from '../session/session.module';
import {BackboneModule} from '../backbone/backbone.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TracksModule,
    DashboardRoutingModule,
    SessionModule,
    BackboneModule,
    SharedModule
  ],
  declarations: [
    DashboardIndexComponent
  ]
})

export class DashboardModule {
}
