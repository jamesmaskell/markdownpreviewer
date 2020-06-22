import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditorPaneComponent } from './editor-pane/editor-pane.component';
import { PreviewPaneComponent } from './preview-pane/preview-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorPaneComponent,
    PreviewPaneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
