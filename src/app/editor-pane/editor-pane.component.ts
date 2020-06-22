import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-pane',
  templateUrl: './editor-pane.component.html',
  styleUrls: ['./editor-pane.component.scss']
})
export class EditorPaneComponent implements OnInit {

  markdown: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log(this.markdown);
  }

}
