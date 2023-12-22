k=0;
k++;
window["type"+k] = "word";
window["q"+k] = `Which of the following is a Numeric Type in Python?`;
window["o1"+k] = "str";
window["o2"+k] = "list";
window["o3"+k] = "int";
window["o4"+k] = "set";
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = `What function can you use to get the data type of an object in Python?`;
window["o1"+k] = "type()";
window["o2"+k] = "dtype()";
window["o3"+k] = "typeof()";
window["o4"+k] = "datatype()";
window["ans"+k] = 1;

k++;
window["type"+k] = "word";
window["q"+k] = `Which data type is used for representing complex numbers in Python?`;
window["o1"+k] = "int";
window["o2"+k] = "float";
window["o3"+k] = "complex";
window["o4"+k] = "bool";
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = `What is the purpose of the following Python code?
${FullCode(`
x = ["apple", "banana", "cherry"]`)}`;
window["o1"+k] = "Defining a tuple";
window["o2"+k] = "Creating a set";
window["o3"+k] = "Initializing a list";
window["o4"+k] = "Assigning a boolean value";
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = `What is the output of the following code?
${FullCode(`
x = True
print(type(x))`)}`;
window["o1"+k] = "&lt;class 'str'&gt;";
window["o2"+k] = "&lt;class 'int'&gt;";
window["o3"+k] = "&lt;class 'bool'&gt;";
window["o4"+k] = "&lt;class 'list'&gt;";
window["ans"+k] = 3;

totalLevel = k;