type User = {
    name: string;
    age: number;
};

const greet = ({name, age}: User): void => {
    console.log(`こんにちは、${name}さん。${age}歳ですね。`);
};

const person = { name: "鈴木", age: 30 };
greet(person);