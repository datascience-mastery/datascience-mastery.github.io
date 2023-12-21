//while
k=0;
k++;
window["type"+k] = "word";
window["q"+k] = `What is the primary purpose of a ${WordCode('for')} loop in Python?`;
window["o1"+k] = `To execute a set of statements as long as a condition is true`;
window["o2"+k] = `To iterate over a sequence of items`;
window["o3"+k] = `To define conditional branching in the code`;
window["o4"+k] = `To create infinite loops`;
window["ans"+k] = 2;

k++;
window["type"+k] = "word";
window["q"+k] = `What is the purpose of the ${WordCode('break')} statement in a for loop?`;
window["o1"+k] = `It stops the loop if a condition is true`;
window["o2"+k] = `It skips the current iteration of the loop`;
window["o3"+k] = `It continues with the next iteration of the loop`;
window["o4"+k] = `It exits the loop before it has looped through all items`;
window["ans"+k] = 4;

k++;
window["type"+k] = "word";
window["q"+k] = `How is the ${WordCode('else')} block in a ${WordCode('for')} loop executed?`;
window["o1"+k] = "It is executed at the beginning of the loop";
window["o2"+k] = "It is executed for each iteration of the loop";
window["o3"+k] = `It is executed when the loop is stopped by a break statement`;
window["o4"+k] = `It is executed when the loop is finished without a break statement`;
window["ans"+k] = 4;

totalLevel = k;