import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentEntity } from './student.entity';
import { v4 as uuid } from 'uuid';
import { StudentInput } from './create-student.input';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
  ) {}

  async allStudents(): Promise<StudentEntity[]> {
    return this.studentRepository.find();
  }

  async getStudentById(id: string): Promise<StudentEntity> {
    return this.studentRepository.findOne({ id });
  }

  async createStudent(
    createStudentInput: StudentInput,
  ): Promise<StudentEntity> {
    const { firstName, lastName } = createStudentInput;

    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });

    return this.studentRepository.save(student);
  }

  async getManyStudents(studentsId: string[]): Promise<StudentEntity[]> {
    return this.studentRepository.find({
      where: {
        id: {
          $in: studentsId,
        },
      },
    });
  }
}
