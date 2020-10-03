/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver(of => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation(returns => StudentType)
  createStudent(@Args('createStudentInput') createStudentInput: StudentInput) {
    return this.studentService.createStudent(createStudentInput);
  }

  @Query(returns => [StudentType])
  async allStudents() {
    return this.studentService.allStudents();
  }

  @Query(returns => StudentType)
  async getStudentById(@Args('id') id: string) {
    return this.studentService.getStudentById(id);
  }
}
