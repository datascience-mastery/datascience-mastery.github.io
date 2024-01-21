//DataFrames
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "What is a DataFrame?"; //title
window["msg"+k] = `
<p>A Pandas DataFrame is a 2 dimensional data structure, like a 2 dimensional array, or a table with rows and columns.</p>
${FullCode(`
data = {
  "calories": [420, 380, 390],
  "duration": [50, 40, 45]
}
#load data into a DataFrame object:
df = pd.DataFrame(data)
print(df)`, 'Create a simple Pandas DataFrame:')}
${OutputCode(`
   calories  duration
0       420        50
1       380        40
2       390        45
`)}

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Locate Row"; //title
window["msg"+k] = `
<p>As you can see from the result above, the DataFrame is like a table with rows and columns.</p>
<p>Pandas use the ${WordCode('loc')} attribute to return one or more specified row(s)</p>
${FullCode(`
#refer to the row index:
print(df.loc[0])`, 'Return row 0:')}
${OutputCode(`
calories    420
duration     50
Name: 0, dtype: int64`)}
${Note('This example returns a Pandas <b>Series</b>.')}
${FullCode(`
data = {
  "calories": [420, 380, 390],
  "duration": [50, 40, 45]
}
#load data into a DataFrame object:
df = pd.DataFrame(data)
print(df.loc[[0, 1]])`, 'Return row 0 and 1:')}
${OutputCode(`
   calories  duration
0       420        50
1       380        40`)}
${Note(`When using ${WordCode('[]')}, the result is a Pandas <b>DataFrame</b>.`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Named Indexes"; //title
window["msg"+k] = `
<p>With the ${WordCode('index')} argument, you can name your own indexes.</p>
${FullCode(`
data = {
  "calories": [420, 380, 390],
  "duration": [50, 40, 45]
}
df = pd.DataFrame(data, index = ["day1", "day2", "day3"])
print(df) 
`, 'Add a list of names to give each row a name:')}
${OutputCode(`
      calories  duration
day1       420        50
day2       380        40
day3       390        45`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Locate Named Indexes"; //title
window["msg"+k] = `
<p>Use the named index in the ${WordCode('loc')} attribute to return the specified row(s).</p>
${FullCode(`
#refer to the named index:
print(df.loc["day2"])`, 'Return "day2":')}
${OutputCode(`
calories    380
duration     40
Name: day2, dtype: int64
`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Load Files Into a DataFrame"; //title
window["msg"+k] = `
<p>If your data sets are stored in a file, Pandas can load them into a DataFrame.</p>
${FullCode(`
df = pd.read_csv('data.csv')
print(df) `)}
${OutputCode(`
     Duration  Pulse  Maxpulse  Calories
0          60    110       130     409.1
1          60    117       145     479.0
2          60    103       135     340.0
3          45    109       175     282.4
4          45    117       148     406.0
..        ...    ...       ...       ...
164        60    105       140     290.8
165        60    110       145     300.4
166        60    115       145     310.2
167        75    120       150     320.4
168        75    125       150     330.4

[169 rows x 4 columns]
`)}
${Note('Make sure you have a "data.csv" file located inside your project')}
${Note(`You will learn more about importing files in the next chapters.`)}
`; //message

totalLevel = k;