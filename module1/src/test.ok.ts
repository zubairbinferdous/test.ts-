{
  type data = string | number;
  function union(data: data): number {
    if (typeof data === "string") {
      return data.length;
    } else {
      return data * data;
    }
  }
  const result = union("hello");
  const result2 = union(4);
  console.log(result);
  console.log(result2);
  //////////////////////////////////////////// 1
  interface person {
    name: string;
    address?: {
      city: string;
      street: string;
    };
    phone?: number;
  }
  const user: person = {
    name: "user1",
    address: {
      city: "Dhaka",
      street: "uttor badda road",
    },
    phone: 1245888,
  };
  const user2: person = {
    name: "user1",
  };
  function getAddressCity(person: person) {
    return person.address?.city;
  }
  const resUser = getAddressCity(user);
  const resUser1 = getAddressCity(user2);
  console.log(resUser);
  console.log(resUser1);
  //////////////////////////////////////////// 2

  class Cat {}

  function isCat(obj: any) {
    if (obj instanceof Cat) {
      console.log("Yes, it's a cat.");
      return true;
    } else {
      console.log("No, it's not a cat.");
      return false;
    }
  }

  // Example usage:
  const myPet: Cat = new Cat();
  const someObject: any = {};

  isCat(myPet);
  isCat(someObject);
  //////////////////////////////////////////////// 3
  type someValue = number | string;
  function sumNumber(allData: someValue[]): number {
    let total = 0;

    for (const item of allData) {
      if (typeof item === "number") {
        total += item as number;
      }
    }
    return total;
  }
  const data3: someValue[] = [1, "two", 3, "four", 5];
  const res = sumNumber(data3);
  console.log(res);
  ///////////////////////////////////////////////// 4
  interface Car {
    make: string;
    model: string;
    year: number;
  }

  interface Driver {
    name: string;
    licenseNumber: number;
  }

  function data(userCar: Car, userDriver: Driver): object {
    return { ...userCar, ...userDriver };
  }

  const userCarData: Car = {
    make: "BMW Car",
    model: "2019",
    year: 2001,
  };

  const userCarData2: Driver = {
    name: "BMW Car",
    licenseNumber: 2001,
  };

  const Car = data(userCarData, userCarData2);
  console.log(Car);
  ///////////////////////////////////// 5
  function findFirstOccurrence<T>(array: T[], data: T): number {
    const index = array.indexOf(data);
    return index;
  }

  const numbers: number[] = [1, 2, 3, 4, 5, 2];
  const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

  const targetNumber = 2;
  const targetString = "cherry";

  const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
  const indexInStrings = findFirstOccurrence(strings, targetString);

  console.log(indexInNumbers); // Output: 1
  console.log(indexInStrings);
  /////////////////////////////// 6
  interface Product {
    name: string;
    price: number;
    quantity: number;
  }

  type array = Product[];
  function cost(cart: array): number {
    return cart.reduce(
      (price, product) => price + product.price * product.quantity,
      0
    );
  }
  const shoppingCart: array = [
    { name: "shoe", price: 200, quantity: 1 },
    { name: "Bag", price: 159, quantity: 5 },
    { name: "Computer", price: 109, quantity: 6 },
  ];

  const totalCost = cost(shoppingCart);
  console.log("total cost:", totalCost);
  //////////////////////////// 7
}
