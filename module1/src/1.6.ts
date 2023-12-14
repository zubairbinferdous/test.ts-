{
  // learning function

  // function
  function add(num1: number, num2: number = 100): number {
    return num1 + num2;
  }
  add(12, 12);

  // arrow-function
  const arrow = (num3: number, num4: number): number => num3 + num4;

  // object function methord
  const poorUser = {
    name: "zubair",
    balance: 0,
    addBalance(balance: number): string {
      return `this my new balance:${this.balance + balance}`;
    },
  };

  // map-function
  const arr: number[] = [1, 2, 3];
  const newArray: number[] = arr.map((elem: number): number => elem * elem);
}
