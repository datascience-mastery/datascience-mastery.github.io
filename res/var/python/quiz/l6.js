//string
k=0;
// k++;
// window["type"+k] = "typing";
// window["ti"+k] = "Exercise"; //title
// window["msg"+k] = `
// <h3>What is the correct syntax to get the length?</h3>
// x = "Hello World"<br>
// print(${Typing('len(x)')})
// `; //message

k++;
window["type"+k] = "word";
window["q"+k] = `What are the two possible values for Booleans in Python?`;
window["o1"+k] = "1 and 0";
window["o2"+k] = `On and Off`;
window["o3"+k] = "Yes and No";
window["o4"+k] = "True and False";
window["ans"+k] = 4;

k++;
window["type"+k] = "word";
window["q"+k] = `How do you check the type of a Boolean variable in Python?`;
window["o1"+k] = "typeOf()";
window["o2"+k] = "type()";
window["o3"+k] = "checkType()";
window["o4"+k] = "typeof()";
window["ans"+k] = 2;

k++;
window["type"+k] = "word";
window["q"+k] = `
<h3>What will be the output of the following code?</h3>
${FullCode(`
x = True
y = False
print(type(x))
print(type(y))`)}
`;
window["o1"+k] = "<class 'bool'> <class 'bool'>";
window["o2"+k] = "<class 'int'> <class 'int'>";
window["o3"+k] = "<class 'str'> <class 'str'>";
window["o4"+k] = "<class 'bool'> <class 'int'>";
window["ans"+k] = 1;

k++;
window["type"+k] = "word";
window["q"+k] = `Which of the following values will evaluate to ${WordCode('True')} in Python?`;
window["o1"+k] = "0";
window["o2"+k] = `""`;
window["o3"+k] = "[]";
window["o4"+k] = `"abc"`;
window["ans"+k] = 4;

k++;
window["type"+k] = "word";
window["q"+k] = `Which of the following values will evaluate to ${WordCode('False')} in Python?`;
window["o1"+k] = "()";
window["o2"+k] = "None";
window["o3"+k] = "123";
window["o4"+k] = `{"apple", "cherry", "banana"}`;
window["ans"+k] = 1;

k++;
window["type"+k] = "word";
window["q"+k] = `What is the purpose of the escape character in Python strings?`;
window["o1"+k] = "To create multiline strings";
window["o2"+k] = "To insert characters that are illegal in a string";
window["o3"+k] = "To concatenate strings";
window["o4"+k] = "To remove whitespace from a string";
window["ans"+k] = 2;

totalLevel = k;