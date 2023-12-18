//list
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
window["q"+k] = `What is the correct way to create a list in Python?`;
window["o1"+k] = `my list = ["apple", "banana", "cherry"]`;
window["o2"+k] = `mylist = ("apple", "banana", "cherry")`;
window["o3"+k] = `mylist = ["apple", "banana", "cherry"]`;
window["o4"+k] = `list = "apple", "banana", "cherry"`;
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = `Which method is used to determine the number of items in a list?`;
window["o1"+k] = "length()";
window["o2"+k] = "count()";
window["o3"+k] = "size()";
window["o4"+k] = "len()";
window["ans"+k] = 4;

k++;
window["type"+k] = "word";
window["q"+k] = `How do you access the second item in a list with the variable ${WordCode('thislist')}?`;
window["o1"+k] = "thislist(1)";
window["o2"+k] = "thislist[1]";
window["o3"+k] = "thislist{1}";
window["o4"+k] = "thislist.1";
window["ans"+k] = 2;

k++;
window["type"+k] = "word";
window["q"+k] = `Which method is used to add an item to the end of a list?`;
window["o1"+k] = "add()";
window["o2"+k] = `insert()`;
window["o3"+k] = "append()";
window["o4"+k] = `extend()`;
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = `How can you sort a list in descending order?`;
window["o1"+k] = "list.sort(reverse = True)";
window["o2"+k] = "list.sort(reverse = False)";
window["o3"+k] = "list.sort(order = 'desc')";
window["o4"+k] = `list.sort(descending = True)`;
window["ans"+k] = 1;

k++;
window["type"+k] = "word";
window["q"+k] = `What method removes the last item from a list?`;
window["o1"+k] = "remove()";
window["o2"+k] = "delete()";
window["o3"+k] = "pop()";
window["o4"+k] = "clear()";
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = `Which method is used to remove a specific item from a list?`;
window["o1"+k] = "delete()";
window["o2"+k] = "remove()";
window["o3"+k] = "erase()";
window["o4"+k] = "discard()";
window["ans"+k] = 2;

k++;
window["type"+k] = "word";
window["q"+k] = `How do you copy a list to another variable without referencing the original list?`;
window["o1"+k] = "list2 = list1.clone()";
window["o2"+k] = "list2 = copy(list1)";
window["o3"+k] = "list2 = list1";
window["o4"+k] = "list2 = list1.copy()";
window["ans"+k] = 4;

k++;
window["type"+k] = "word";
window["q"+k] = `Which method is used to join two lists together?`;
window["o1"+k] = "concatenate()";
window["o2"+k] = "merge()";
window["o3"+k] = "add()";
window["o4"+k] = "+ operator";
window["ans"+k] = 4;

k++;
window["type"+k] = "word";
window["q"+k] = `What does the ${WordCode('clear()')} method do in Python lists?`;
window["o1"+k] = "Removes the last item";
window["o2"+k] = "Deletes the list";
window["o3"+k] = "Empties the list";
window["o4"+k] = "Clears all elements with a specific value";
window["ans"+k] = 3;

totalLevel = k;