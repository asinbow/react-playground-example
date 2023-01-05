import { Class, createStudent } from "./types";
import { useAllTeachers } from "./hooks";
import EditableList from "./EditableList";
import InputBox from "./InputBox";
import StudentComponent from "./Student";

type Props = Readonly<{
  value: Class;
  onChange: (value: Class) => void;
  onRemove?: () => void;
}>;

export default function ClassComponent({ value, onChange, onRemove }: Props) {
  const { name, teachers, students } = value;

  const allTeachers = useAllTeachers();

  return (
    <div>
      <InputBox
        value={name}
        onChange={(name) => onChange({ ...value, name })}
      />
      {onRemove && <input type="button" value="Remove" onClick={onRemove} />}
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
      <EditableList
        value={students}
        component={StudentComponent}
        onChange={(students) => onChange({ ...value, students })}
        defaultItem={() => createStudent(students.length)}
        addItemText="Add student"
      />
    </div>
  );
}
