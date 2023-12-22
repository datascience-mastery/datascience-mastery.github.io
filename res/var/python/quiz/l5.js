//string
k=0;
k++;
window["type"+k] = "typing";
window["ti"+k] = "Exercise"; //title
window["msg"+k] = `
<h3>What is the correct syntax to get the length?</h3>
x = "Hello World"<br>
print(${Typing('len(x)')})
`; //message

k++;
window["type"+k] = "typing";
window["ti"+k] = "Exercise"; //title
window["msg"+k] = `
<h3>Get the first character of the string txt</h3>
txt = "Hello World"<br>
x = ${Typing('txt[0]')}
`; //message

k++;
window["type"+k] = "typing";
window["ti"+k] = "Exercise"; //title
window["msg"+k] = `
<h3>Get the characters from index 2 to index 4 (${WordCode('llo')})</h3>
txt = "Hello World"<br>
x = ${Typing('txt[2:5]')}
`; //message

k++;
window["type"+k] = "typing";
window["ti"+k] = "Exercise"; //title
window["msg"+k] = `
<h3>Return the string without any whitespace at the beginning or the end</h3>
txt = " Hello World "<br>
x = ${Typing('txt.strip()')}
`; //message

k++;
window["type"+k] = "typing";
window["ti"+k] = "Exercise"; //title
window["msg"+k] = `
<h3>Convert the value of txt to upper case</h3>
txt = "Hello World"<br>
txt = ${Typing('txt.upper()')}
`; //message

k++;
window["type"+k] = "typing";
window["ti"+k] = "Exercise"; //title
window["msg"+k] = `
<h3>Convert the value of txt to lower case</h3>
txt = "Hello World"<br>
txt = ${Typing('txt.lower()')}
`; //message

k++;
window["type"+k] = "typing";
window["ti"+k] = "Exercise"; //title
window["msg"+k] = `
<h3>Replace the character ${WordCode('H')} with a ${WordCode('J')}</h3>
txt = "Hello World"<br>
txt = txt.replace("${Typing('H')}", "${Typing('J')}")

${Note(`Remember to make it capital letter. Python is case-sensitive.`)}
`; //message

k++;
window["type"+k] = "typing";
window["ti"+k] = "Exercise"; //title
window["msg"+k] = `
<h3>Insert the correct syntax to add a placeholder for the age parameter</h3>
age = 36<br>
txt = "My name is John, and I am ${Typing('{}')}"<br>
print(txt.format(age))
`; //message

k++;
window["type"+k] = "word";
window["q"+k] = `How do you assign a multiline string to a variable in Python?`;
window["o1"+k] = "Using a single pair of quotation marks";
window["o2"+k] = `Using triple quotation marks (''' or """)`;
window["o3"+k] = "Using double quotation marks";
window["o4"+k] = "Using parentheses";
window["ans"+k] = 2;

k++;
window["type"+k] = "word";
window["q"+k] = `How do you access individual characters in a string in Python?`;
window["o1"+k] = "Using square brackets with the character's position";
window["o2"+k] = "Using parentheses with the character's position";
window["o3"+k] = "Using curly braces with the character's position";
window["o4"+k] = "Using angle brackets with the character's position";
window["ans"+k] = 1;

k++;
window["type"+k] = "word";
window["q"+k] = `What is the length of the string "Hello, World!"?`;
window["o1"+k] = "11";
window["o2"+k] = "12";
window["o3"+k] = "13";
window["o4"+k] = "14";
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = `How do you slice a string to get characters from position 2 to position 5 (not included)?`;
window["o1"+k] = "string[2, 5]";
window["o2"+k] = "string[2:5]";
window["o3"+k] = "string[2-5]";
window["o4"+k] = "string[2,5]";
window["ans"+k] = 2;

k++;
window["type"+k] = "word";
window["q"+k] = `Which method is used to convert a string to uppercase in Python?`;
window["o1"+k] = "to_upper()";
window["o2"+k] = "uppercase()";
window["o3"+k] = "toUppercase()";
window["o4"+k] = "upper()";
window["ans"+k] = 4;

k++;
window["type"+k] = "word";
window["q"+k] = `What is the purpose of the escape character in Python strings?`;
window["o1"+k] = "To create multiline strings";
window["o2"+k] = "To insert characters that are illegal in a string";
window["o3"+k] = "To concatenate strings";
window["o4"+k] = "To remove whitespace from a string";
window["ans"+k] = 2;

k++;
window["type"+k] = "word";
window["q"+k] = `How do you insert the character double quote (") inside a string surrounded by double quotes?`;
window["o1"+k] = `"You "are" awesome."`;
window["o2"+k] = `"You \\"are\\" awesome."`;
window["o3"+k] = `"You "\\are\\" awesome."`;
window["o4"+k] = `"You 'are' awesome."`;
window["ans"+k] = 2;

totalLevel = k;