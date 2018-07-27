import { NgModule } from '@angular/core';
import { CountDownResourceComponent } from './count-down-resource/count-down-resource';
import { LessonComponent } from './lesson/lesson';
@NgModule({
	declarations: [CountDownResourceComponent,
    LessonComponent],
	imports: [],
	exports: [CountDownResourceComponent,
    LessonComponent]
})
export class ComponentsModule {}
