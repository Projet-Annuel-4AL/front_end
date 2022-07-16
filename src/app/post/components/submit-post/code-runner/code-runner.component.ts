import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
import {CreateCode} from "../../../post-body/create-code.dto";
import {PostService} from "../../../service/post.service";
import {ApiUrlConstant} from "../../../../apiUrlConstant";

@Component({
  selector: 'app-code-runner',
  templateUrl: './code-runner.component.html',
  styleUrls: ['./code-runner.component.scss']
})
export class CodeRunnerComponent implements OnInit {
  title!: string;
  language!: string;
  langNumber!: number;
  theme!: string;
  code!: string;
  editorOptions!: any;
  output!: string;
  codeRunne: boolean = false;

  postForm!: FormGroup;

  constructor(private http: HttpClient, private postService: PostService) { }

  ngOnInit(): void {
    this.title = '';
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
    this.codeRunne = false;
    this.getLangNumber()
    const body = {language: this.langNumber, code: this.code};

    this.http
      .post( ApiUrlConstant.HOST+"compiler",body, {responseType: 'text'}).toPromise()
      .then(response => {
        this.output = response;
        this.codeRunne = true;
      })
      .catch( err => {
        console.log(err)
      });
  }

  isNotValidPost(): boolean{
    if(this.codeRunne){
      if (this.title.length > 0){
        return false
      }
    }
    return true;
  }

  submitPostForm() {
    this.getLangNumber()
    const createCode: CreateCode = new CreateCode(this.langNumber, this.code);
    this.postService.addCode(createCode, this.title).subscribe();
  }
}
