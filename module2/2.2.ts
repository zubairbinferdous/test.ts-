{
  // u can user type alious and interface buy user to define type

  // interface
  type User1 = {
    name: string;
    age: number;
  };
  interface User2 {
    name: string;
    age: number;
    address: string;
  }
  // const user: User2 = {
  //   name: "zubair",
  //   age: 33,
  //   address: "hello this is me",
  // };
  console.log(user);

  type UserRole = User1 & { role: string };
  interface UserRole2 extends User2 {
    role: string;
  }
  const data: UserRole = {
    name: "zubi",
    age: 23,
    role: "developer",
  };

  const data2: UserRole2 = {
    name: "zubi",
    age: 23,
    role: "developer",
    address: "Dhaka",
  };

  // js->object , array->object , function->object,

  type roll = number[];
  const data4: roll = [2, 4, 5];

  interface roll2 {
    [index: number]: number;
  }

  type add1 = (num1: number, num2: number) => number;
  interface add2 {
    (num1: number, num2: number): number;
  }

  const add: add2 = (num1, num2) => num1 + num2;

  //
}
