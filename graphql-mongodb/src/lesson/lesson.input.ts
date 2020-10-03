/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, IsUUID, MinLength } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(1)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;

  @Field(() => [ID], { defaultValue: [] })
  students: string[];
}

@InputType()
export class AssignStudentstoLesson {
  @IsUUID()
  @Field(type => ID)
  lessonId: string;

  @IsUUID('4', { each: true })
  @Field(type => [ID])
  studentIds: string[];
}
