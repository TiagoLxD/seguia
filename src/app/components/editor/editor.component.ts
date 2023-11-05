import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  stdOutEditorOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
    theme: 'vs-dark',
    readOnly: false,
    minimap: { enabled: false },
    wordWrap: "on",
    language: "javascript",
    tabSize: 4,
    automaticLayout: true,
    fontSize: 20,
  };

  code = this.getCode();
  getCode() {
    return (
      `function teste() {return 'hello world'}`
    );
  }
}
