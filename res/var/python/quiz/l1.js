k=0;

k++;
window["type"+k] = "word";
window["q"+k] = `What is Python?`;
window["o1"+k] = "A programming language released in 1991 by Bill Gates.";
window["o2"+k] = "A popular programming language created by Guido van Rossum.";
window["o3"+k] = "A database management system.";
window["o4"+k] = "An operating system.";
window["ans"+k] = 2;

k++;
window["type"+k] = "typing";
window["ti"+k] = "Exercise"; //title
window["msg"+k] = `
<h3>What is the correct syntax to print 'Hello world' to the console?</h3>
${Typing('print')}('Hello ${Typing('world')}')
`; //message

k++;
window["type"+k] = "word";
window["q"+k] = "What can Python be used for?";
window["o1"+k] = "Only for creating web applications.";
window["o2"+k] = "Handling big data and performing complex mathematics.";
window["o3"+k] = "Connecting to database systems.";
window["o4"+k] = "Both B and C.";
window["ans"+k] = 4;

k++;
window["type"+k] = "word";
window["q"+k] = "Why choose Python?";
window["o1"+k] = "Because it only works on Windows platforms.";
window["o2"+k] = "Due to its complex syntax.";
window["o3"+k] = "It has a simple syntax similar to the English language.";
window["o4"+k] = "It is exclusively for rapid prototyping.";
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = "How is Python code executed?";
window["o1"+k] = "Compiled before execution.";
window["o2"+k] = "Interpreted and executed as soon as it is written.";
window["o3"+k] = "Converted to machine code.";
window["o4"+k] = "Requires a separate execution command.";
window["ans"+k] = 2;

k++;
window["type"+k] = "word";
window["q"+k] = "What does Python use indentation for?";
window["o1"+k] = "Only for improving code readability.";
window["o2"+k] = "Indentation is not important in Python.";
window["o3"+k] = "To indicate a block of code.";
window["o4"+k] = "Both A and B.";
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = "How are comments written in Python?";
window["o1"+k] = "Using double forward slashes (//).";
window["o2"+k] = "Surrounding text with curly braces.";
window["o3"+k] = "Starting a line with a # symbol.";
window["o4"+k] = "Enclosing text within /* and */.";
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = `
${FullCode(`print='hello'`)}
Is this correct way of printing a message to console?`;
window["o1"+k] = "Yes";
window["o2"+k] = "No";
window["ans"+k] = 2;


totalLevel = k;