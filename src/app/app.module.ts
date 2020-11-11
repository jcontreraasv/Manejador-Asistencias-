import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { DndDirective } from './asistencias5000.directive';
import { DndComponent } from './dnd/dnd.component';
import { ProgressComponent } from './progress/progress.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import { MatTableModule } from '@angular/material/table';
import { ListAsistComponent } from './list-asist/list-asist.component';
import { from } from 'rxjs';
import { ConfirmDialogComponent } from './components/shared/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DndDirective,
    DndComponent,
    ProgressComponent,
    ListAsistComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents:[ConfirmDialogComponent],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
