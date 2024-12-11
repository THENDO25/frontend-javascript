namespace Subjects {
    export class Subject {
      protected _teacher: Teacher | null = null;
  
      setTeacher(teacher: Teacher) {
        this._teacher = teacher;
      }
  
      getTeacher(): Teacher | null {
        return this._teacher;
      }
    }
  }