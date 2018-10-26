import { NgModule } from '@angular/core';
import { CountDownResourceComponent } from './count-down-resource/count-down-resource';
import { LessonComponent } from './lesson/lesson';
import { SkeletonCardComponent } from './skeleton-card/skeleton-card';
import { SkeletonListItemComponent } from './skeleton-list-item/skeleton-list-item';
@NgModule({
	declarations: [CountDownResourceComponent,
    LessonComponent,
    SkeletonCardComponent,
    SkeletonListItemComponent],
	imports: [],
	exports: [CountDownResourceComponent,
    LessonComponent,
    SkeletonCardComponent,
    SkeletonListItemComponent]
})
export class ComponentsModule {}
