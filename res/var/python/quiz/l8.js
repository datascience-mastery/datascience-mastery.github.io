//tuple
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
window["q"+k] = `What is a tuple in Python?`;
window["o1"+k] = `A collection of ordered and changeable items`;
window["o2"+k] = `A collection of ordered and unchangeable items`;
window["o3"+k] = `A collection of unordered and changeable items`;
window["o4"+k] = `A collection of unordered and unchangeable items`;
window["ans"+k] = 2;

k++;
window["type"+k] = "word";
window["q"+k] = `How do you access the second item in a tuple with the variable name ${WordCode('thistuple')}?`;
window["o1"+k] = "thistuple[0]";
window["o2"+k] = "thistuple[1]";
window["o3"+k] = "thistuple(1)";
window["o4"+k] = "thistuple.item(2)";
window["ans"+k] = 2;

k++;
window["type"+k] = "word";
window["q"+k] = `
<h3>What is the result of the following code?</h3>
${FullCode(`
fruits = ("apple", "banana", "cherry")
(green, yellow, *red) = fruits`)}
`;
window["o1"+k] = "apple, banana, cherry";
window["o2"+k] = "('apple', 'banana', 'cherry')";
window["o3"+k] = "apple, banana, ['cherry']";
window["o4"+k] = "apple, banana, ['cherry', 'mango']";
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = `How do you join two tuples, ${WordCode('tuple1')} and ${WordCode('tuple2')}, in Python?`;
window["o1"+k] = "tuple3 = tuple1 - tuple2";
window["o2"+k] = `tuple3 = tuple1 + tuple2`;
window["o3"+k] = "tuple3 = tuple1 * tuple2";
window["o4"+k] = `tuple3 = join(tuple1, tuple2)`;
window["ans"+k] = 2;

k++;
window["type"+k] = "word";
window["q"+k] = `Which method is used to return the number of times a specified value occurs in a tuple?`;
window["o1"+k] = "count()";
window["o2"+k] = "length()";
window["o3"+k] = "occurrences()";
window["o4"+k] = `find()`;
window["ans"+k] = 1;

k++;
window["type"+k] = "word";
window["q"+k] = `How can you add items to a tuple?`;
window["o1"+k] = `Use the ${WordCode('add()')} method`;
window["o2"+k] = "Tuples cannot have items added";
window["o3"+k] = "Use the ${WordCode('insert()')} method";
window["o4"+k] = "Convert the tuple to a list, add items, and convert it back to a tuple";
window["ans"+k] = 4;

k++;
window["type"+k] = "word";
window["q"+k] = `What happens if you try to remove an item from a tuple directly?`;
window["o1"+k] = "The item is removed successfully";
window["o2"+k] = "The item is marked for removal but remains in the tuple";
window["o3"+k] = "The tuple becomes empty";
window["o4"+k] = "It raises an error";
window["ans"+k] = 4;

k++;
window["type"+k] = "word";
window["q"+k] = `How do you find the length of a tuple in Python?`;
window["o1"+k] = "length(tuple)";
window["o2"+k] = "tuple.size()";
window["o3"+k] = "tuple.len()";
window["o4"+k] = "len(tuple)";
window["ans"+k] = 4;

totalLevel = k;