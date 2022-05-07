import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { PostComponent } from './post.component';
import { CreatePostComponent} from "./components/create-post/create-post.component";
import { ListPostComponent } from "./components/list-post/list-post.component";


@NgModule({
  declarations: [
    PostComponent,
  ],
    imports: [
        SharedModule
    ]
})
export class PostModule { }
