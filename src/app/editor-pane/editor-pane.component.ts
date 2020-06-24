import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-pane',
  templateUrl: './editor-pane.component.html',
  styleUrls: ['./editor-pane.component.scss']
})
export class EditorPaneComponent implements OnInit {

  markdown: string = "![Picture of terminal](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Gnome-utilities-terminal.svg/48px-Gnome-utilities-terminal.svg.png)\r\n\r\n"
                   + "## Welcome to\r\n\r\n" 
                   + "# Retro-ish markdown terminal\r\n\r\n"
                   + "> Any fool can write code that a computer can understand....\r\n\r\n"
                   + "**Read more about ```GitHub``` Markdown [here](https://guides.github.com/features/mastering-markdown/)**\r\n\r\n"               
                   + "### More information\r\n"
                   + "- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)\r\n"
                   + "- [Basic writing and formatting syntax](https://help.github.com/en/articles/basic-writing-and-formatting-syntax)\r\n"
                   + "- [Working with advanced formatting](https://help.github.com/en/articles/working-with-advanced-formatting)\r\n\r\n"
                   + "```javascript\r\n"
                   + "let awesome = true\r\n"
                   + "if(retroIshMarkdownTerminal === awesome){\r\n"
                   + "    return \":+1\"\r\n"
                   + "}\r\n"
                   + "```"
                   

  constructor() { }

  ngOnInit(): void {
  }
}
