{
  // type assertion
  let anything: any;
  anything = "hello";
  anything = 3000;
  //   (anything as number).

  const KgToGm = (value: number | string) => {
    if (typeof value === "string") {
      const convertValue = parseFloat(value) * 1000;
      return `this is the ${convertValue}`;
    }
    if (typeof value === "number") {
      return value * 33;
    }
  };

  const result1 = KgToGm(1000) as number;
  const result2 = KgToGm("102020") as string;
  console.log(result1);
  console.log(result2);

  //   my build function
  type buildError = {
    sms: string;
  };

  try {
  } catch (error) {
    console.log((error as buildError).sms);
  }
}
