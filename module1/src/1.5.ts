// reference type  --> Object
const user: {
  readonly company: "tech-baba"; // type --> literal type
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
} = {
  company: "tech-baba",
  firstName: "zubair",
  lastName: "khan",
};

user.firstName = "labiba";
user.lastName = "joy roy";
