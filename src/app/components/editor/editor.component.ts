import { Component, OnInit, OnDestroy } from '@angular/core';
import { languages } from './core/utils/languages';
import { ScriptRunnerService } from '../core/services/editor/script-runner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {

  private readonly sub$ = new Subscription()
  constructor(private _scriptRunnerService: ScriptRunnerService) {

  }
  ngOnDestroy(): void {
  }
  ngOnInit(): void {
  }

  desafio = {
    id: 1,
    nome: "Hello World\n",
    dificuldade: 'easy',
    descricao: "Your first program in any programming language is usually Hello World!. In this first problem all you have to do is print this message on the screen",
    testCases: [{
      id: 1,
      input: "10 10",
      expectedOutput: 'Hello World!'
    }]
  }
  panelOpenState = true

  languages = languages
  selectedLanguage: string = "javascript"

  stdOutEditorOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
    theme: 'vs-dark',
    readOnly: false,
    minimap: { enabled: false },
    wordWrap: "on",
    language: this.selectedLanguage,
    tabSize: 4,
    automaticLayout: true,
    fontSize: 20,
  }

  code = this.getCode();
  getCode() {
    return (
      `function teste() {return 'Hello World!'}`
    );
  }

  run() {

    const payload = {
      code: this.code,
      input: "hello",
      language: this.selectedLanguage,
      testCases: this.desafio.testCases
    }

    const sub = this._scriptRunnerService.run(payload)
      .subscribe({
        next: (data) => {
          console.log(data)
        }
      })


    this.sub$.add(sub)
  }
}

