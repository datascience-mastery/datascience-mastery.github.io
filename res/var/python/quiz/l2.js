k=0;
k++;
window["type"+k] = "typing";
window["ti"+k] = "Exercise"; //title
window["msg"+k] = `
<h3>Create a variable called vehicle and store a value 'bmw'?</h3>
${Typing("vehicle")} ='${Typing("bmw")}'
`; //message

k++;
window["type"+k] = "word";
window["q"+k] = `
What will be the output of the following code?
${FullCode(`
x = 4
x = "Sally"
print(x)`)}
`;
window["o1"+k] = "4";
window["o2"+k] = "Sally";
window["o3"+k] = "Sally 4";
window["o4"+k] = "Error";
window["ans"+k] = 2;

k++;
window["type"+k] = "word";
window["q"+k] = `What are variables in Python used for?`;
window["o1"+k] = "Storing multiple values in a single container";
window["o2"+k] = "Declaring functions";
window["o3"+k] = "Storing data values";
window["o4"+k] = "Performing mathematical operations";
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = "How do you declare a variable in Python?";
window["o1"+k] = "var x = 5";
window["o2"+k] = "x := 5";
window["o3"+k] = "x = 5";
window["o4"+k] = "int x = 5";
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = "Can variables in Python change their type after being set?";
window["o1"+k] = "No, variables cannot change type";
window["o2"+k] = "Yes, variables can change type";
window["o3"+k] = "Variables can only change type if explicitly declared";
window["o4"+k] = "Changing variable types is not allowed in Python";
window["ans"+k] = 2;

k++;
window["type"+k] = "word";
window["q"+k] = "In Python, do variables need to be declared with a specific type?";
window["o1"+k] = "Yes, Python requires explicit type declaration";
window["o2"+k] = "No, variables do not need to be declared with any particular type";
window["o3"+k] = "Only certain variables require type declaration";
window["o4"+k] = "Python supports only dynamic typing";
window["ans"+k] = 2;

totalLevel = k;