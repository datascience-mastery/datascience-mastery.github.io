//intro to Pandas
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "What is Pandas?"; //title
window["msg"+k] = `
<p>Pandas is a Python library used for working with data sets.</p>
<p>It has functions for analyzing, cleaning, exploring, and manipulating data.</p>
<p>The name "Pandas" has a reference to both "Panel Data", and "Python Data 
Analysis" and was created by Wes McKinney in 2008.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Why Use Pandas?"; //title
window["msg"+k] = `
<p>Pandas allows us to analyze big data and make conclusions based on statistical theories.</p>
<p>Pandas can clean messy data sets, and make them readable and relevant.</p>
<p>Relevant data is very important in data science.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "What Can Pandas Do?"; //title
window["msg"+k] = `
<p>Pandas gives you answers about the data. Like:</p>
<ul>
  <li>Is there a correlation between two or more columns?</li>
  <li>What is average value?</li>
  <li>Max value?</li>
  <li>Min value?</li>
</ul>
<p>Pandas are also able to delete rows that are not relevant, or contains wrong 
values, like empty or NULL values. This is called <em>cleaning</em> the data.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Where is the Pandas Codebase?"; //title
window["msg"+k] = `
<p>The source code for Pandas is located at this github repository
<a href="https://github.com/pandas-dev/pandas" target="_blank">https://github.com/pandas-dev/pandas</a></p>
${Note('<b>Github</b> enables many people to work on the same codebase.')}
`; //message

totalLevel = k;