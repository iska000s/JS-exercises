const user = {name: "Ania", city: "Wawa"};
const txt = `
Hello ${user.name} from ${user.city}.
${2+2}
`;

console.log(txt);



// korzystanie z tagów w literałach - funkcja, która jest preprocesowrem - mamy wpływ jak osadzane są wartości

function uppercase(strings, ...values) {
    console.log(strings);
    console.log(values);

    let result = " ";
    for (let i = 0; i <strings.length; i++){
        result += strings[i];
        if (i < values.length){
            let v = values[i];
            if (typeof v === "string") v = v.toUpperCase();
            result += v;
    }}
    return result;
};

console.dir("PRZYKŁAD 1")

const txt2 = uppercase`
Hello ${user.name} from ${user.city}.
${2+2}
`;

console.log(txt2);

console.dir("PRZYKŁAD 2")

const txt3 = uppercase(`
Hello ${user.name} from ${user.city}.
${2+2}
`);

console.log(txt2);


// nowe metody w string

const text = "Hello world!";
console.log(text.includes("world")) //true
console.log(text.startsWith("Hello")) //true - jeżeli zaczyna się tym tekstem


