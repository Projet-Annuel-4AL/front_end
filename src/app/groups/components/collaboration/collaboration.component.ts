import { Component, OnInit } from '@angular/core';
import {ApiUrlConstant} from "../../../apiUrlConstant";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.scss']
})
export class CollaborationComponent implements OnInit {

  language!: string;
  langNumber!: number;
  theme!: string;
  code!: string;
  editorOptions!: any;
  output!: string;

  constructor(private http: HttpClient,) { }

  ngOnInit(): void {
    this.language = 'java';
    this.theme = 'vs-dark'
    this.editorOptions = {readOnly: false, theme: this.theme, language: this.language, automaticLayout: true};
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

  getLangNumber() {
    if (this.language == 'python') this.langNumber = 1;
    if (this.language == 'cpp') this.langNumber = 2;
    if (this.language == 'java') this.langNumber = 0;
  }
  onRunCode(){
    this.getLangNumber()
    const body = {language: this.langNumber, code: this.code};

    this.http
      .post( ApiUrlConstant.HOST+"compiler",body, {responseType: 'text'}).toPromise()
      .then(response => {
        this.output = response;

      })
      .catch( err => {
        console.log(err)
      });
  }
}
