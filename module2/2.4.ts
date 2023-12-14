{
  // interface generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type watch1 = {
    brand: string;
    model: string;
  };

  const user1: Developer<watch1> = {
    name: "zubair",
    computer: {
      brand: "asd",
      model: "live",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "apple",
      model: "X-mel",
    },
  };

  interface apple {
    brand: string;
    model: string;
    heartTrack: true;
    sleepTrack: false;
  }

  type bike = {
    bikeName: string;
    modelBike: string;
  };
  const user2: Developer<apple, bike> = {
    name: "zubair khan",
    computer: {
      brand: "ReadMe",
      model: "live-009",
      releaseYear: 2030,
    },
    smartWatch: {
      brand: "apple watch ",
      model: "X-mel",
      heartTrack: true,
      sleepTrack: false,
    },
    bike: {
      bikeName: "hello bike xpo",
      modelBike: "hello Bike",
    },
  };
}
