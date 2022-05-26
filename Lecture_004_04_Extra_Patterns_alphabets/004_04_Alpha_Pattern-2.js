let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing characters
  for (let j = 0; j < i; j++) {
    string += String.fromCharCode((i - 1) + 65);
  }
  string += "\n";
}
console.log(string);

// Output:
// A
// B B
// C C C
// D D D D
// E E E E E