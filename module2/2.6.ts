{
  // con

  const studentData2 = <
    T extends { id: number; name: string; type: string; email: string }
  >(
    student: T
  ) => {
    const course = "hello programmer";
    return {
      ...student,
      course,
    };
  };

  const student1 = studentData2<{
    id: number;
    name: string;
    email: string;
    type: string;
  }>({
    id: 1111,
    name: "zubair",
    email: "zubi@gmail.com",
    type: "developer 1",
  });

  const student2 = studentData2({
    id: 222,
    name: "zubair khan",
    email: "zubi001@gmail.com",
    type: "developer 2",
  });
  //
}
