import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';
import { NewTopicComponent } from './new-topic/new-topic.component';
import { UiComponentsModule } from 'src/app/ui-components/ui-components.module';

@NgModule({
  declarations: [HomeComponent, ForumComponent, NewTopicComponent],
  imports: [
    CommonModule,
    UiComponentsModule
  ]
})
export class PagesModule { }
