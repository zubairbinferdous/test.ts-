{
  //
  const promise = () => {
    return new Promise((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("this is wrong data");
      }
    });
  };

  //   2-8: Asynchronous typescript //

  //
}
