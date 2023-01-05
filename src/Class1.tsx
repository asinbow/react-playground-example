import { useState } from "react";

import { Class, createStudent } from "./types";
import { replaceAt, removeAt } from "./utils";
import { useAllTeachers } from "./hooks";
import InputBox from "./InputBox";
import StudentComponent from "./Student";

type Props = Readonly<{
  value: Class;
  onChange: (value: Class) => void;
}>;

export default function ClassComponent({ value, onChange }: Props) {
  const { name, teachers, students } = value;

  const allTeachers = useAllTeachers();

  return (
    <div>
      <InputBox
        value={name}
        onChange={(name) => onChange({ ...value, name })}
      />
      <br />
      <select
        name="teachers"
        multiple
        onChange={(e) =>
          onChange({
            ...value,
            teachers: Array.from(
              e.target.selectedOptions,
              (option) => option.value
            )
          })
        }
      >
        {allTeachers.map((teacher) => (
          <option value={teacher} selected={teachers.includes(teacher)}>
            {teacher}
          </option>
        ))}
      </select>
      <br />
      {students.length} students.
      <br />
      {students.map((student, i) => (
        <StudentComponent
          key={String(i)}
          value={student}
          onChange={(student) =>
            onChange({ ...value, students: replaceAt(students, i, student) })
          }
          onRemove={() =>
            onChange({ ...value, students: removeAt(students, i) })
          }
        />
      ))}
      <br />
      <input
        type="button"
        value="Add a student"
        onClick={() =>
          onChange({
            ...value,
            students: [...students, createStudent(students.length)]
          })
        }
      />
    </div>
  );
}
