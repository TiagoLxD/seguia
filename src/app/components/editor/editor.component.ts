import { Component, OnInit, OnDestroy } from '@angular/core';
import { languages } from './core/utils/languages';
import { ScriptRunnerService } from '../core/services/editor/script-runner.service';
import { Subscription, delay, take, tap, timeout } from 'rxjs';
import * as Diff from 'diff';
import { MatDialog } from '@angular/material/dialog';
import { DialogSuccessComponent } from './dialog-success/dialog-success.component';
import { saveAs } from 'file-saver';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor, NgIf, NgClass, NgStyle } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { AngularSplitModule } from 'angular-split';


@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss'],
    standalone: true,
    imports: [AngularSplitModule, MatDividerModule, MatExpansionModule, NgFor, MatFormFieldModule, MatSelectModule, FormsModule, MatOptionModule, MatButtonModule, MatIconModule, NgIf, MatProgressSpinnerModule, NgClass, MonacoEditorModule, NgStyle]
})
export class EditorComponent implements OnInit, OnDestroy {

  private readonly sub$ = new Subscription()
  result: { output: string; isCorrect: boolean } = { output: '', isCorrect: false }
  panelOpenState = true

  languages = languages
  selectedLanguage: string = "javascript"
  expandirResultado = false;
  resultadoHeight = '100px';
  fontSize = 17

  isDownloadIcon: boolean = true;
  loading = false

  stdOutEditorOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
    theme: 'vs-dark',
    readOnly: false,
    minimap: { enabled: false },
    wordWrap: "on",
    language: this.selectedLanguage,
    tabSize: 4,
    automaticLayout: true,
    fontSize: this.fontSize,
  }

  diffResult: any;
  loadingResults = false

  constructor(
    private _scriptRunnerService: ScriptRunnerService,
    public dialog: MatDialog
  ) { }

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
      input: "",
      expectedOutput: 'Hello World!'
    }],
    originalCode: `console.log('Hello World!')`
  }

  code = this.desafio.originalCode;


  toggleExpansao() {
    this.expandirResultado = !this.expandirResultado;

  }

  mostrarDiff() {
    const diff = Diff.diffChars(this.desafio.testCases[0].expectedOutput, this.result.output);
    this.diffResult = diff;
    this.expandirResultado = true;
  }

  run() {

    const payload: PayloadRun = {
      code: this.code,
      input: "hello",
      language: this.selectedLanguage,
      testCases: this.desafio.testCases
    }

    this.loading = true;

    const sub = this._scriptRunnerService.run(payload)
      .pipe(
        tap(() => this.loadingResults = true),
        take(1),
        timeout(5000)
      )
      .subscribe({
        next: (data) => {

          if (data) {
            this.loadingResults = true
            this.result = { output: data[0].output, isCorrect: data[0].isCorrect }
            console.log(this.result)
            if (data[0].isCorrect) this.abrirDialogSucesso()
          }
        },
        complete: () => {
          this.loading = false;
        },
      })

    this.sub$.add(sub)
  }

  diffOutput(expectedOutput: string, actualOutput: string): any[] {
    const diff = Diff.diffChars(expectedOutput, actualOutput);
    let diffResult: any[] = [];

    diff.forEach((part) => {
      const color = part.added ? 'green' : part.removed ? 'red' : 'inherit';

      diffResult.push({ value: part.value, color: color });
    });

    return diffResult;
  }

  abrirDialogSucesso(): void {
    const dialogRef = this.dialog.open(DialogSuccessComponent, {
      width: '400px',
      data: { mensagem: 'Ir para o próximo desafio.' },
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog fechado');
    });
  }
  salvarComoJS(): void {

    this.isDownloadIcon = false;

    setTimeout(() => {
      this.isDownloadIcon = true;
    }, 2000);

    const blob = new Blob([this.code], { type: 'text/javascript;charset=utf-8' });
    const fileName = this.desafio.nome.replace("\n", '') + ".js"

    saveAs(blob, fileName);
  }
}


type PayloadRun = {
  code: string;
  input: string;
  language: string;
  testCases: TestCase[];
}

type TestCase = {
  id: number;
  input: string;
  expectedOutput: string;
}
