import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from '@angular/forms';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { EditorModule } from '@progress/kendo-angular-editor';
import { FlashCardListItemComponent } from './flash-card/flash-card-list-item.component';
import { CommonModule } from '@angular/common';
import { FlashCardItemComponent } from './flash-card/flash-card-item.component';
import { SanitizeHtmlPipe } from './common/pipes/sanitize-html.pipe';
import * as signalR from '@aspnet/signalr';
import { TopicsComponent } from './topics/topics.component';


@NgModule({
  declarations: [
    AppComponent,
    FlashCardComponent,
    FlashCardListItemComponent,
    FlashCardItemComponent,
    TopicsComponent,
    SanitizeHtmlPipe //TODO: move to common module
  ],
  imports: [
    //TODO: move to common module
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    AppRoutingModule,
    DropDownsModule,
    FormsModule,
    TreeViewModule,
    ScrollViewModule,
    DialogsModule,
    EditorModule,
    CommonModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
