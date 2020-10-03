import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AssignStudentstoLesson, CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(returns => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLessonById(id);
  }

  @Query(returns => [LessonType])
  allLesson() {
    return this.lessonService.allLessons();
  }

  @Mutation(returns => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation(returns => LessonType)
  assignStudentstoLesson(
    @Args('assignStudentstoLesson')
    assignStudentstoLesson: AssignStudentstoLesson,
  ) {
    const { lessonId, studentIds } = assignStudentstoLesson;
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }
}
