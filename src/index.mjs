import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;
const hobbies = ["s", "f", "k"];
const index = hobbies.findIndex((item) => item == "f");
console.log(index);
