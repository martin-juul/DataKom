export class CoursesRaw {
  constructor(
    public course_no: number,
    public name: string,
    public length: string,
    public school_attendance_desc: string,
    public internship_desc: string
  ) {}
}

export class SemesterRaw {
  constructor(
    public semester: number,
    public courses: CoursesRaw[]
  ) {}
}
