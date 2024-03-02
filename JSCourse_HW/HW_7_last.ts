// 1
interface UserData {
    name: string;
    age: number;
    address: Address;
}

interface Address {
    street: string;
    apartments: number;
    zCode: number;
}

type VillageAddress = Address & {vilage: string};
type PrivateHouseAddress = Omit<Address, 'apartments'> & {houseNum: number};
type UserName = Pick<UserData, 'name'>;

// 2
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const obj1 = { name: 'John', age: 30 };
const obj2 = { city: 'New York', job: 'Developer' };
const mergedObj = mergeObjects(obj1, obj2);