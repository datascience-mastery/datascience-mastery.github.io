//dict
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
window["q"+k] = `What is the correct way to create a dictionary in Python?`;
window["o1"+k] = `my_dict = ["brand": "Ford", "model": "Mustang", "year": 2022]`;
window["o2"+k] = `my_dict = {"brand", "Ford", "model", "Mustang", "year", 2022}`;
window["o3"+k] = `my_dict = {"brand": "Ford", "model": "Mustang", "year": 2022}`;
window["o4"+k] = `my_dict = ("brand": "Ford", "model": "Mustang", "year": 2022)`;
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = `How can you access the value of the "model" key in the dictionary?`;
window["o1"+k] = `my_dict.access("model")`;
window["o2"+k] = `my_dict["model"]`;
window["o3"+k] = `my_dict.get("model")`;
window["o4"+k] = `my_dict.value("model")`;
window["ans"+k] = 2;

k++;
window["type"+k] = "word";
window["q"+k] = `Which method is used to remove the last inserted key-value pair from a dictionary?`;
window["o1"+k] = "remove()";
window["o2"+k] = "delete()";
window["o3"+k] = "popitem()";
window["o4"+k] = "pop()";
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = `How can you find the length of a dict in Python?`;
window["o1"+k] = "dict.size()";
window["o2"+k] = `len(dict)`;
window["o3"+k] = "dict.length()";
window["o4"+k] = `size(dict)`;
window["ans"+k] = 2;

k++;
window["type"+k] = "word";
window["q"+k] = `Which method is used to add a new item to a dictionary?`;
window["o1"+k] = "append()";
window["o2"+k] = "add()";
window["o3"+k] = "insert()";
window["o4"+k] = `my_dict["new_key"] = "new_value"`;
window["ans"+k] = 4;

k++;
window["type"+k] = "word";
window["q"+k] = `What is the purpose of the ${WordCode('update()')} method for dictionaries?`;
window["o1"+k] = "A. To add a new key-value pair to the dictionary";
window["o2"+k] = "B. To update the value of an existing key in the dictionary";
window["o3"+k] = "C. To remove a key-value pair from the dictionary";
window["o4"+k] = "D. Both A and B";
window["ans"+k] = 4;

k++;
window["type"+k] = "word";
window["q"+k] = `If you want to get a list of all the keys in a dictionary, which method would you use?`;
window["o1"+k] = "keys()";
window["o2"+k] = "get_keys()";
window["o3"+k] = "list_of_keys()";
window["o4"+k] = "get_all_keys()";
window["ans"+k] = 1;

k++;
window["type"+k] = "word";
window["q"+k] = `How can you clear all elements from a dictionary?`;
window["o1"+k] = "my_dict.clear()";
window["o2"+k] = "my_dict.delete()";
window["o3"+k] = "my_dict.remove_all()";
window["o4"+k] = "my_dict.empty()";
window["ans"+k] = 1;

k++;
window["type"+k] = "word";
window["q"+k] = `What data types can be used as values in a Python dictionary?`;
window["o1"+k] = "Only integers";
window["o2"+k] = "Only strings";
window["o3"+k] = "Any data type";
window["o4"+k] = "Only lists";
window["ans"+k] = 3;

totalLevel = k;