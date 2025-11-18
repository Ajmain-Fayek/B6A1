type TFormatValueFunction = (arg: string | number | boolean) => string | number | boolean;

const formatValue: TFormatValueFunction = (arg) => {
  if (typeof arg === "string") {
    return arg.toUpperCase();
  } else if (typeof arg === "number") {
    return arg * 10;
  } else if (typeof arg === "boolean") {
    return !arg;
  } else {
    throw new Error("Invalid argument type!");
  }
};

type TGetLength = (arg: string | number[]) => number;

const getLength: TGetLength = (arg) => {
  if (typeof arg === "string") {
    return arg.length;
  } else if (Array.isArray(arg)) {
    return arg.length;
  } else {
    throw new Error("Invalid argument type!");
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

interface TItems {
  title: string;
  rating: number;
}
type TFilterByRating = (arg: TItems[]) => TItems[];

const filterByRating: TFilterByRating = (arg) => {
  return arg.filter((a) => a.rating >= 4);
};

interface IUser {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
type TFilterActiveUsers = (arg: IUser[]) => IUser[];

const filterActiveUsers: TFilterActiveUsers = (arg) => {
  return arg.filter((a) => a.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (arg: Book) => {
  console.log(
    `Title: ${arg.title}, Author: ${arg.author}, Published: ${arg.publishedYear}, Available: ${
      arg.isAvailable ? "Yes" : "No"
    }`
  );
};

function getUniqueValues(arg1: number[], arg2: number[]): number[];
function getUniqueValues(arg1: string[], arg2: string[]): string[];
function getUniqueValues(arg1: any[], arg2: any[]): any[] {
  if (
    (Array.isArray(arg1) && typeof arg1[0] === "number" && Array.isArray(arg2) && typeof arg2[0] === "number") ||
    (Array.isArray(arg1) && typeof arg1[0] === "string" && Array.isArray(arg2) && typeof arg2[0] === "string")
  ) {
    const uniqueArray = [];

    for (const value1 of arg1) {
      let isMatch = false;

      for (const value2 of uniqueArray) {
        if (value1 === value2) {
          isMatch = true;
          break;
        }
      }

      if (!isMatch) {
        uniqueArray[uniqueArray.length] = value1;
      }
    }

    for (const value1 of arg2) {
      let isMatch = false;

      for (const value2 of uniqueArray) {
        if (value1 === value2) {
          isMatch = true;
          break;
        }
      }

      if (!isMatch) {
        uniqueArray[uniqueArray.length] = value1;
      }
    }

    return uniqueArray;
  } else {
    throw new Error(
      "Invalid arguments type. Both arguments must be same type! ( string[], string[] ) || ( number[], number[] )"
    );
  }
}

interface TProducts {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

type TCalculateTotalPrice = (arg: TProducts[]) => number;

const calculateTotalPrice: TCalculateTotalPrice = (arg) => {
  if (arg.length === 0) {
    return 0;
  } else {
    const result = arg.reduce((acc, item) => {
      const { price, quantity } = item;

      if (item?.discount && item.discount > 0) {
        return (acc += price * quantity - price * quantity * (item.discount / 100));
      } else {
        return (acc += price * quantity);
      }
    }, 0);

    return result;
  }
};
