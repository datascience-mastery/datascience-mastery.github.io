//Read CSV
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Read CSV Files"; //title
window["msg"+k] = `
<p>A simple way to store big data sets is to use CSV files (comma separated files).</p>
<p>CSV files contains plain text and is a well know format that can be read by everyone including Pandas.</p>
<p>In our examples we will be using a CSV file called 'data.csv'.</p>
<p><a href="data.csv">Download data.csv</a>.</p>
${FullCode(`
df = pd.read_csv('data.csv')
print(df.to_string())`, 'Load the CSV into a DataFrame:')}
${Note(`use ${WordCode(`to_string()`)} to print the entire DataFrame.`)}
<p>If you have a large DataFrame with many rows, Pandas will only return the first 5 rows, and the last 5 rows:</p>
${FullCode(`
df = pd.read_csv('data.csv')
print(df)`, `Print the DataFrame without the ${WordCode(`to_string()`)} method:`)}
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

[169 rows x 4 columns]`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "max_rows"; //title
window["msg"+k] = `
<p>The number of rows returned is defined in Pandas option settings.</p>
<p>You can check your system's maximum rows with the ${WordCode(`pd.options.display.max_rows`)} statement.</p>
${FullCode(`
print(pd.options.display.max_rows)`)}
${OutputCode(`60`)}
<p>In my system the number is 60, which means that if the DataFrame contains more than 60 rows, the ${WordCode(`print(df)`)} statement will return only the headers and the first and last 5 rows.</p>
<p>You can change the maximum rows number with the same statement.</p>
${FullCode(`
pd.options.display.max_rows = 9999
df = pd.read_csv('data.csv')
print(df) `, 'Increase the maximum number of rows to display the entire DataFrame:')}
`; //message

totalLevel = k;