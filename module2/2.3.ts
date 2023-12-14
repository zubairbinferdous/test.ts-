{
  // Introduction to generics

  type genericArray = Array<string>;
  type genericArray1<t> = Array<t>;

  const name0: string[] = ["mali", "mona", "hay"];
  const name1: Array<string> = ["mali", "mona", "hay"];
  const name2: genericArray = ["mali", "mona", "hay"];

  const roll: number[] = [1, 2, 4];
  const roll1: genericArray1<number> = [1, 2, 4];

  const boll: boolean[] = [true, false];

  //   array of object //
  type user = {
    name: string;
    age: number;
  };

  const user2: genericArray1<user> = [
    {
      name: "zubi",
      age: 33,
    },
    {
      name: "jho",
      age: 33,
    },
  ];

  const user: genericArray1<{ name: string; age: number }> = [
    {
      name: "zubi",
      age: 33,
    },
    {
      name: "jho",
      age: 33,
    },
  ];

  // Introduction to generics tuple
  type genericTuple<x, y> = [x, y];
  const add5: genericTuple<string, number> = ["zubair", 44];
  const add50: genericTuple<string, { address: string; phone: number }> = [
    "zubair",
    { address: "dhaka", phone: 222222 },
  ];
}
