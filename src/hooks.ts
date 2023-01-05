import { useEffect, useState } from "react";

export function useAllTeachers(): readonly string[] {
  const [allTeachers, setAllTeachers] = useState<readonly string[]>([]);

  useEffect(() => {
    setTimeout(
      () =>
        setAllTeachers([
          "Teacher A",
          "Teacher B",
          "Teacher C",
          "Teacher D",
          "Teacher E",
          "Teacher F"
        ]),
      1200
    );
  }, []);

  return allTeachers;
}
