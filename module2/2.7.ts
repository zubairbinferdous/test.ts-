{
  //
  type ve = {
    bike: string;
    car: string;
    bmw: string;
  };

  type owner = "bike" | "car" | "bmw";
  type owner2 = keyof ve;

  const data = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const user = {
    name: "zubair",
    age: 25,
    school: "hello programmer",
  };
  const phone = {
    name: "xoi",
    age: 1500,
    dataTo: "x22",
  };
  const res = data(user, "name");
  const res2 = data(phone, "dataTo");

  //   user.name;
  //   user["age"];
  //
}
