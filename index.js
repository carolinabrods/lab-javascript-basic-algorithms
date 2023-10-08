// Iteration 1: Names and Input

const hacker1 = 'Carolina';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Rita';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}

// Iteration 3: Loops

// 3.1 Print the driver's name in capital letters and separated by space
const driverUpperCased = hacker1.toUpperCase();

let driverLetters = '';
for (let i = 0; i < driverUpperCased.length; i++) {
  driverLetters += driverUpperCased[i] + ' ';
}

console.log(driverLetters);

// 3.2 Print the navigator's name in reverse order
let reverseNavigator = '';
for (let j = hacker2.length - 1; j >= 0; j--) {
  reverseNavigator += hacker2[j];
}

console.log(reverseNavigator);

// 3.3 Print a message based on lexicographic order
if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log('Yo, the navigator goes first, definitely.');
} else {
  console.log('What?! You both have the same name?');
}

//BONUS 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque eros id posuere imperdiet. Vivamus gravida ornare dolor, vel dictum lacus. Nam consequat arcu a neque convallis aliquet. Vivamus sagittis eu quam a porta. Nulla tempus euismod scelerisque. Mauris porttitor libero nec mi dictum accumsan. Donec consectetur ornare lectus et rutrum. Morbi semper quis tellus eu hendrerit. Suspendisse dictum blandit enim imperdiet aliquam. Aliquam nisi urna, elementum vitae leo imperdiet, tempus facilisis urna. Nam sit amet augue venenatis, fermentum neque vitae, auctor quam. Aliquam at fringilla nunc. In et faucibus sapien, et vehicula mi. Praesent porta lacus sit amet felis bibendum auctor.
Integer lacinia laoreet eros, at blandit tortor consectetur ac. Cras ut egestas lectus. Aenean non rhoncus ligula. Aliquam nec mauris at tellus blandit consectetur ac non sapien. Aliquam finibus lacinia libero, vel finibus felis. Phasellus sodales metus dui, ut pulvinar magna lobortis eget. Donec auctor tellus a neque pellentesque porta. Nam at tellus malesuada, bibendum est sed, ultricies metus. Aliquam lacinia turpis euismod nibh viverra, et euismod velit aliquet. Aenean pharetra, velit quis venenatis fringilla, dolor augue suscipit nibh, non iaculis libero tellus a velit. Sed at ligula ante. Etiam quis ligula non leo gravida sollicitudin.
Nulla efficitur quam non tortor tempus mollis. Maecenas id purus semper, commodo ante vehicula, rutrum lacus. Integer ornare libero sed purus egestas vestibulum. Vivamus ultricies efficitur nisi, vitae scelerisque purus accumsan eget. Donec feugiat tortor felis, sed fermentum ipsum rutrum sit amet. Ut tempor, tellus sit amet aliquam pretium, nibh arcu convallis orci, id convallis nisl sapien et magna. In aliquet nisi non ante posuere, molestie malesuada sem pellentesque. Suspendisse potenti. Donec ut massa sem. Cras odio purus, scelerisque mollis augue eu, fermentum elementum turpis. Aliquam non magna venenatis eros ultrices aliquet vel quis lectus. Donec eu tincidunt diam, quis lobortis leo. Nulla interdum est scelerisque tellus dapibus, sit amet maximus sapien consectetur. Praesent pulvinar, velit in auctor hendrerit, diam sem fermentum orci, at congue tellus nisl in dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque bibendum ante sed lacus finibus sodales.`;

// 1.1 Number of words in a string
let wordCount = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === ' ' || (longText[i] === '.' && longText[i + 1] !== ' ')) {
    wordCount += 1;
  }
}
console.log(wordCount);

// 1.2 Number of times "et" appears

let etCount = 0;
for (let i = 0; i < longText.length; i++) {
  if (
    longText[i] === 'e' &&
    longText[i + 1] === 't' &&
    longText[i - 1] === ' ' &&
    longText[i + 2] === ' '
  ) {
    etCount += 1;
  }
}

console.log(etCount);

// Answer: 6
