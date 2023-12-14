{
  //   spread oparator
  //   rest oparator
  //   destructring

  const poorUser = {
    name: "mr.X",
  };

  const boy1: string[] = ["mira", "babu", "raj", "jaj"];
  const boy2: string[] = ["har", "riy", "jub", "rja"];
  boy1.push(...boy2);

  const mentors1 = {
    typeScript: "zubair",
    redux: "mir",
  };

  const mentors2 = {
    next: "fiz next",
    cloud: "nah",
  };

  const mentors3 = {
    ...mentors1,
    ...mentors2,
  };

  //   rest oparetot
  const greet = (...friends: string[]) => {
    // console.log(`hi ${friend1} ${friend2} ${friend3}`);
    friends.forEach((friend: string) => console.log(`hi ${friend}`));
  };
  greet("ami", "tumi", "she");
}
