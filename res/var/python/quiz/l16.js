//function
k=0;
k++;
window["type"+k] = "word";
window["q"+k] = `What is a lambda function in Python?`;
window["o1"+k] = `A large, named function`;
window["o2"+k] = `An anonymous, small function`;
window["o3"+k] = `A function that requires a name`;
window["o4"+k] = `A loop statement`;
window["ans"+k] = 2;

k++;
window["type"+k] = "word";
window["q"+k] = `What is the syntax for a lambda function?`;
window["o1"+k] = `${FullCode(`function(arguments): expression`)}`; 
window["o2"+k] = `${FullCode(`def function(arguments) { expression }`)}`;
window["o3"+k] = `${FullCode(`lambda arguments: expression`)}`;
window["o4"+k] = `${FullCode(`anonymous function(arguments): expression`)}`;
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = `How many expressions can a lambda function have?`;
window["o1"+k] = `Only one`;
window["o2"+k] = `Two or more`;
window["o3"+k] = `None`;
window["o4"+k] = `It depends on the arguments`;
window["ans"+k] = 1;

k++;
window["type"+k] = "word";
window["q"+k] = `What does the following lambda function do?
${FullCode(`x = lambda a, b: a * b
`)}`;
window["o1"+k] = "Adds two numbers";
window["o2"+k] = "Subtracts two numbers";
window["o3"+k] = `Multiplies two numbers`;
window["o4"+k] = `Divides two numbers`;
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = `What is the output of the following code?
${FullCode(`
myfunc = lambda x: x + 5
print(myfunc(3))`)}`;
window["o1"+k] = `3`;
window["o2"+k] = `5`;
window["o3"+k] = `8`;
window["o4"+k] = `15`;
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = `How can you make a function using lambda that doubles a number?`;
window["o1"+k] = `${FullCode(`myfunc = lambda x: x * 2`)}`;
window["o2"+k] = `${FullCode(`myfunc = lambda x: x + 2`)}`;
window["o3"+k] = `${FullCode(`myfunc = lambda x: x / 2`)}`;
window["o4"+k] = `${FullCode(`myfunc = lambda x: x - 2`)}`;
window["ans"+k] = 1;

totalLevel = k;