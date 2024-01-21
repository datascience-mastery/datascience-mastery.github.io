//Pandas Series
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "What is a Series?"; //title
window["msg"+k] = `
<p>A Pandas Series is like a column in a table.</p>
<p>It is a one-dimensional array holding data of any type.</p>
${FullCode(`
import pandas as pd

a = [1, 7, 2]
myvar = pd.Series(a)
print(myvar)`, 'Create a simple Pandas Series from a list:')}
${OutputCode(`
0    1
1    7
2    2
dtype: int64`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Labels"; //title
window["msg"+k] = `
<p>If nothing else is specified, the values are labeled with their index number. First value 
has index 0, second value has index 1 etc.</p>
<p>This label can be used to access a specified value.</p>
${FullCode(`
print(myvar[0])`, 'Return the first value of the Series:')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Create Labels"; //title
window["msg"+k] = `
<p>With the index argument, you can name your own labels.</p>
${Note(`We will omit the import statement <br/>${WordCode('import pandas as pd')}<br/> in upcoming Pandas examples. So don't forget to import Pandas.`)}
${FullCode(`
import pandas as pd

a = [1, 7, 2]
myvar = pd.Series(a, index = ["x", "y", "z"])
print(myvar)`, 'Create your own labels:')}
${OutputCode(`
x    1
y    7
z    2
dtype: int64`)}
<p>When you have created labels, you can access an item by referring to the label.</p>
${FullCode(`
print(myvar["y"])`, 'Return the value of "y":')}
${OutputCode(`7`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Key/Value Objects as Series"; //title
window["msg"+k] = `
<p>You can also use a key/value object, like a dictionary, when creating a Series.</p>
${FullCode(`
calories = {"day1": 420, "day2": 380, "day3": 390}
myvar = pd.Series(calories)
print(myvar)`, 'Create a simple Pandas Series from a dictionary:')}
${OutputCode(`
day1    420
day2    380
day3    390
dtype: int64`)}
${Note('The keys of the dictionary become the labels.')}
`; //message

totalLevel = k;