import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  desafio = {
    id: 1,
    nome: "Hello World",
    dificuldade: 'easy',
    descricao: "Your first program in any programming language is usually Hello World!. In this first problem all you have to do is print this message on the screen",
    testCases: [{
      id: 1,
      input: "",
      expectedOutput: 'Hello World!'
    }]

  }


  languages = [
    { name: "Javascript", value: "javascript" },
    { name: "Python", value: "python" },
  ]

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
