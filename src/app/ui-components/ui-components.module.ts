import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicFormComponent } from 'src/app/ui-components/topic-form/topic-form.component';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TopicFormComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  exports: [TopicFormComponent],
})
export class UiComponentsModule {}
