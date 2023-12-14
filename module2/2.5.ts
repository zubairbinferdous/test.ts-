{
  // function with gan
  type user = {
    name: string;
    age: number;
  };
  const programmer: user = {
    name: "zubair",
    age: 25,
  };

  const data = (a: string, b: string) => {
    return a + b;
  };
  data("a", "b");

  const user = (param: string): string => {
    return param;
  };

  const userGan = <T>(param: T): T[] => {
    return [param];
  };

  const userGan2 = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  // problem hoice
  // const userGan = <T>(param: T): T[] => {
  //   return [param];
  // };

  const studentData = <T>(student: T) => {
    const course = "hello developer;";
    return;
  };

  const res = user("bangladesh");
  const res2 = userGan<string>("hello this is me");
  const res3 = userGan2<string, number>("hello this is me", 100);

  const studentData2 = <T>(student: T) => {
    const course = "hello programmer";
    return {
      ...student,
      course,
    };
  };

  const student1 = studentData2({
    name: "zubair",
    email: "zubi@gmail.com",
    type: "developer 1",
  });

  const student2 = studentData2({
    name: "zubair khan",
    email: "zubi001@gmail.com",
    type: "developer 2",
  });

  //
}
