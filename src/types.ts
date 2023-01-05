export type Student = Readonly<{
  firstName: string;
  lastName: string;
}>;

export type Class = Readonly<{
  name: string;
  students: readonly Student[];
  teachers: readonly string[];
}>;

export const DEFAULT_STUDENT: Student = {
  firstName: "[First Name]",
  lastName: "[Last Name]"
};

export const DEFAULT_CLASS: Class = {
  name: "[Class Name]",
  students: [],
  teachers: []
};

export function createStudent(index: number): Student {
  return {
    ...DEFAULT_STUDENT,
    firstName: `${DEFAULT_STUDENT.firstName} ${index + 1}`,
    lastName: `${DEFAULT_STUDENT.lastName} ${index + 1}`
  };
}
