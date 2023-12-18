//numbers
k=0;
k++;
window["type"+k] = "word";
window["q"+k] = `How many numeric types are there in Python?`;
window["o1"+k] = "One";
window["o2"+k] = "Two";
window["o3"+k] = "Three";
window["o4"+k] = "Four";
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = `Which of the following is an example of a complex number in Python?`;
window["o1"+k] = "3+5j";
window["o2"+k] = "1.10";
window["o3"+k] = "3";
window["o4"+k] = "-35.59";
window["ans"+k] = 1;

k++;
window["type"+k] = "word";
window["q"+k] = `What is the purpose of the following code?
${FullCode(`
x = 35e3
y = 12E4
z = -87.7e100`)}`;
window["o1"+k] = "Writing scientific numbers";
window["o2"+k] = "Converting integers to floats";
window["o3"+k] = "Converting floats to integers";
window["o4"+k] = "Creating complex numbers";
window["ans"+k] = 4;

k++;
window["type"+k] = "word";
window["q"+k] = `Which method can be used to convert a variable to a float in Python?`;
window["o1"+k] = "int()";
window["o2"+k] = "float()";
window["o3"+k] = "complex()";
window["o4"+k] = "convert()";
window["ans"+k] = 2;

k++;
window["type"+k] = "typing";
window["ti"+k] = "Exercise"; //title
window["msg"+k] = `
<h3>What is the correct syntax to convert a float into int?</h3>
x = 2.8<br>
y = ${Typing('int')}(${Typing('x')})
`; //message

totalLevel = k;