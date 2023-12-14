{
  //  Ternary, optional chaining & nullish coalescing operator

  // Ternary operator

  const age: number = 17;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }
  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });

  // nullish coalescing operator only for null and undefine
  const isAuth = undefined;
  const res1 = isAuth ?? "Guest";
  console.log(res1);

  // optional chaining
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "zubair",
    address: {
      city: "dhaka",
      road: "gandArea",
      presentAddress: "this is good for me ",
    },
  };

  const Address = user?.address?.permanentAddress ?? "there is no address";
  console.log({ Address });
}
