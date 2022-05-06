import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-code-runner',
  templateUrl: './code-runner.component.html',
  styleUrls: ['./code-runner.component.scss']
})
export class CodeRunnerComponent implements OnInit {
  title!: string;
  language!: string;
  theme!: string;
  code!: string;
  editorOptions!: any;
  output!: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.language = 'java';
    this.theme = 'vs-dark'
    this.editorOptions = {readOnly: false, theme: this.theme, language: this.language};
    this.code = 'public class Main{\n\tpublic static void main(String [] args){\n\t\tSystem.out.println("Hello Java!");\n\t}\n}';
  }

  onChangeLanguageToJava(){
    this.language = 'java';
    this.code = 'public class Main{\n\tpublic static void main(String [] args){\n\t\tSystem.out.println("Hello Java!");\n\t}\n}'
  }

  onChangeLanguageToPython(){
    this.language = 'python';
    this.code = 'print(\'Hello Python!\')'
  }

  onChangeLanguageToCpp(){
    this.language = 'cpp';
    this.code = '#include <iostream>\nint main() {\n\tstd::cout << "Hello C++!\\n";\n\treturn 0;\n}'
  }

  onRunCode(){
    let lang: number = 0;
    if (this.language == 'python') lang = 1;
    if (this.language == 'cpp') lang = 2;
    if (this.language == 'java') lang = 0;
    const body = {language: lang, code: this.code};
    this.http
      .post( "http://localhost:3000/compiler",body, {responseType: 'text'})
      .subscribe(response => {
        this.output = response;
      })
  }
}
