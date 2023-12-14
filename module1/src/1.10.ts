{
  // union type
  type FrontendDeveloper = "fakibajDeveloper" | "juniorDeveloper";
  type FullstackDeveloper = "fakibajDeveloper" | "ExpertDeveloper";
  const DeveloperType: FrontendDeveloper = "juniorDeveloper";

  type Developer = FrontendDeveloper | FullstackDeveloper;
  const newDeveloper: Developer = "ExpertDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "0+" | "A+" | "AB+";
  };

  const user1: User = {
    name: "hello",
    gender: "male",
    bloodGroup: "0+",
  };

  //   interSection type

  type FrontendDevelopers = {
    skills: string[];
    des1: "Front end developer";
  };

  type BackendDevelopers = {
    skills: string[];
    des2: "Back end developer";
  };

  type Full = FrontendDevelopers & BackendDevelopers;

  const developer: Full = {
    skills: ["html", "css", "js"],
    des1: "Front end developer",
    des2: "Back end developer",
  };
}
