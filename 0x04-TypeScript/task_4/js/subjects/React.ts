namespace Subjects {
    export class React extends Subject {
      getAvailableTeacher(): string {
        const teacher = this.getTeacher();
        if (teacher && teacher.experienceTeachingReact) {
          return `Available Teacher: ${teacher.firstName}`;
        } else {
          return 'No available teacher';
        }
      }
    }
  }