import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-pane',
  templateUrl: './editor-pane.component.html',
  styleUrls: ['./editor-pane.component.scss']
})
export class EditorPaneComponent implements OnInit {

  markdown: string = "# Welcome\r\n\r\n" 
                   + "## To\r\n\r\n"
                   + "**This text will be bold**\r\n\r\n"
                   + "[Link](http://www.reddit.com)\r\n\r\n"
                   + "- Item 1\r\n\r\n"
                   + "![GitHub Logo](/images/logo.png)\r\n\r\n"
                   + "> We're living the future so\r\n\r\n"
                   + "    element here instead.\r\n\r\n"
                   + "```if (isAwesome){return true}```"
                   

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log(this.markdown);
  }

}
