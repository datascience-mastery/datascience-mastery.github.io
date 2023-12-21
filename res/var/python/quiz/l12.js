//if else
k=0;
k++;
window["type"+k] = "word";
window["q"+k] = `What is the purpose of the indentation in Python if statements?`;
window["o1"+k] = `A. Enhances code readability`;
window["o2"+k] = `B. Required by the Python syntax`;
window["o3"+k] = `C. Both A and B`;
window["o4"+k] = `D. Indentation is optional in Python`;
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = `Which keyword is used to define an ${WordCode('else')} block in Python?`;
window["o1"+k] = `elif`;
window["o2"+k] = `then`;
window["o3"+k] = `else`;
window["o4"+k] = `otherwise`;
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = `What is the role of the "elif" keyword in Python?`;
window["o1"+k] = "It defines the beginning of a loop";
window["o2"+k] = "It is used for exception handling";
window["o3"+k] = `It indicates the end of a conditional statement`;
window["o4"+k] = `It is an abbreviation for "else if" and introduces an additional condition`;
window["ans"+k] = 4;

k++;
window["type"+k] = "word";
window["q"+k] = `How does Python handle code blocks and scope?`;
window["o1"+k] = "Python uses curly braces for code blocks";
window["o2"+k] = `Python relies on indentation to define code blocks and scope`;
window["o3"+k] = "Python uses parentheses for code blocks";
window["o4"+k] = `Python does not have the concept of code blocks`;
window["ans"+k] = 2;

k++;
window["type"+k] = "word";
window["q"+k] = `What does the ${WordCode('pass')} statement do in Python?`;
window["o1"+k] = "Terminates the program execution";
window["o2"+k] = "Skips the current iteration of a loop";
window["o3"+k] = "Indicates an empty code block and avoids syntax errors";
window["o4"+k] = `Raises an exception`;
window["ans"+k] = 3;

totalLevel = k;