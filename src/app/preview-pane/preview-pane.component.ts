import { Component, OnInit, Input } from '@angular/core';
import * as marked from 'marked'

@Component({
  selector: 'app-preview-pane',
  templateUrl: './preview-pane.component.html',
  styleUrls: ['./preview-pane.component.scss']
})
export class PreviewPaneComponent implements OnInit {

  @Input() markdown: string;

  constructor() { }

  ngOnInit(): void {
  }

  transformMarkdown() {
    marked.setOptions({
      breaks: true
    });
    return marked(this.markdown)
  }

}
