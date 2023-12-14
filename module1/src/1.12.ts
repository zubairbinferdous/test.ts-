{
  // Never,unknown and nullable type

  // nullable type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("hello this is me");
    } else {
      console.log("good by");
    }
  };
  searchName(null);

  // unknown type
  const speed = (value: unknown) => {
    if (typeof value === "number") {
      const convert = (value * 1000) / 3000;
      console.log(`this is ${convert}`);
    } else if (typeof value === "string") {
      const [val, unit] = value.split(" ");
      const convert = (parseFloat(val) * 1000) / 3000;
      console.log(`this is ${convert} as string`);
    } else {
      console.log("plz input a right value");
    }
  };

  speed(null);

  // never type
  const throwError = (mg: string): never => {
    throw new Error(mg);
  };
  throwError("hello");
}
