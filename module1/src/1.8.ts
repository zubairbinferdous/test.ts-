{
  // array destructuring
  const myFriend = ["ami", "joy", "peb", "mon", "sun"];
  const [, , boy, ...rest] = myFriend;

  // object destructuring
  const user = {
    role: 2222,
    name: {
      first: "zubair",
      last: "khan",
    },
    country: "bangladesh",
  };

  const {
    country,
    name: { last: lastName },
  } = user;
}
