//Read JSON
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Read JSON"; //title
window["msg"+k] = `
<p>Big data sets are often stored, or extracted as JSON.</p>
<p>JSON is plain text, but has the format of an object, and is well known in the world of programming, including Pandas.</p>
<p>In our examples we will be using a JSON file called 'data.json'.</p>
<a href="data.js" target="_blank">Open data.json</a>
${FullCode(`
df = pd.read_json('data.json')
print(df.to_string())`, 'Load the JSON file into a DataFrame:')}
${Note(`Above code will list out all data inside the JSON file in ${WordCode(`string`)} data type`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Dictionary as JSON"; //title
window["msg"+k] = `
${Note(`JSON objects have the same format as Python dictionaries.`)}
<p>If your JSON code is not in a file, but in a Python Dictionary, you can load it into a DataFrame directly:</p>
${FullCode(`
data = {
  "Duration":{
    "0":60,
    "1":60,
    "2":60,
    "3":45,
    "4":45,
    "5":60
  },
  "Pulse":{
    "0":110,
    "1":117,
    "2":103,
    "3":109,
    "4":117,
    "5":102
  },
  "Maxpulse":{
    "0":130,
    "1":145,
    "2":135,
    "3":175,
    "4":148,
    "5":127
  },
  "Calories":{
    "0":409.1,
    "1":479.0,
    "2":340.0,
    "3":282.4,
    "4":406.0,
    "5":300.5
  }
}

df = pd.DataFrame(data)
print(df)`, 'Load a Python Dictionary into a DataFrame:')}
${OutputCode(`
   Duration  Pulse  Maxpulse  Calories
0        60    110       130     409.1
1        60    117       145     479.0
2        60    103       135     340.0
3        45    109       175     282.4
4        45    117       148     406.0
5        60    102       127     300.5`)}
`; //message

totalLevel = k;