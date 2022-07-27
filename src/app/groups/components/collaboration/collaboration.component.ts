import { Component, OnInit } from '@angular/core';
import {ApiUrlConstant} from "../../../apiUrlConstant";
import {HttpClient} from "@angular/common/http";
import {SseService} from "../../../mercure/sse.service";
import {MercureService} from "../../../mercure/mercure.service";
import {interval, Subscription} from "rxjs";
import {CodeService} from "../../../post/service/code.service";
import {UpdateCollabCodeDto} from "../../../post/post-body/update-collab-code.dto";
import {ActivatedRoute} from "@angular/router";
import {GroupService} from "../../service/group.service";

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
  runCollab!: Subscription;
  idGroupToGet!: number;

  constructor(private http: HttpClient,
              private sseService: SseService,
              private codeService: CodeService,
              private mercureService: MercureService,
              private route: ActivatedRoute,
              private _groupService: GroupService) {
    this.idGroupToGet = Number(this.route.snapshot.paramMap.get('idGroup'))
  }

  ngOnInit() {
    this._groupService.getCollabByGroupId(this.idGroupToGet).subscribe(result=>{
      this.language = this.getLangString(result.code.language);
      this.theme = 'vs-dark'
      this.editorOptions = {readOnly: false, theme: this.theme, language: this.language, automaticLayout: true};
      this.code = result.code.content;
      this.sseService.getServerSentEvent(this.mercureService.getMercureUrlCollabTopic(this.idGroupToGet).toString()).subscribe(data => {
        this.codeService.getCodeById(result.code.id).subscribe(code => {
            this.code = code.content;
            console.log(code)
          }
        );
      });
    })

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

  getLangString(language: number){
    if (language == 0) return "java" ;
    if (language == 2) return "cpp" ;
    return "python" ;
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

  updateContentLoop(i: number){
    return interval(i).subscribe(async () => {
      const code = new UpdateCollabCodeDto(2, this.code)
      await this.codeService.updateCodeById(21, code).subscribe()
      //await this.mercureService.sendCollabUpdate(this.code, 2)
      console.log('test')
    });
  }

  updateCode(){
    //this.mercureService.sendCollabUpdate(this.code, 2)

  }

  async startCollab() {
    console.log('start')
    this.runCollab = this.updateContentLoop(1000)
  }

  stopCollab(){
    console.log('stop')
    this.runCollab.unsubscribe()
  }
}
