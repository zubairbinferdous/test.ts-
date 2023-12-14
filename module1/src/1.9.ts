{
  // type:alias

  type Stu = {
    name: string;
    age: number;
    gender: string;
    contact: number;
  };
  const student1: Stu = {
    name: "zubair",
    age: 33,
    gender: "male",
    contact: 222222222,
  };

  const student2: Stu = {
    name: "khan",
    age: 40,
    gender: "fe-male",
    contact: 222222222,
  };

  //   **********************************

  type UserName = string;
  type IsAdmin = boolean;
  const User: UserName = "zubair";
  const admin: IsAdmin = true;

  //   ************************************

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
