//getting started
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Installation of Pandas"; //title
window["msg"+k] = `
<p>If you have Python and PIP already installed on a system, then installation of Pandas is very easy.</p>
<p>Install it using this command:</p>
${OutputCode(`pip install pandas`, color='gray', output=false)}
<p>If this command fails, then use a python distribution that already has Pandas installed like, Anaconda, Spyder etc.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Import Pandas"; //title
window["msg"+k] = `
<p>Once Pandas is installed, import it in your applications by adding the ${WordCode('import')} keyword:</p>
${FullCode(`import pandas`)}
<p>Now Pandas is imported and ready to use.</p>
${FullCode(`
import pandas

mydataset = {
  'cars': ["BMW", "Volvo", "Ford"],
  'passings': [3, 7, 2]
}

myvar = pandas.DataFrame(mydataset)

print(myvar)`)}
${OutputCode(`
cars  passings
0    BMW         3
1  Volvo         7
2   Ford         2`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Pandas as pd"; //title
window["msg"+k] = `
<p>Pandas is usually imported under the ${WordCode('pd')} alias.</p>
${Note('alias: In Python alias are an alternate name for referring to the same thing.')}
<p>Create an alias with the ${WordCode('as')} keyword while importing:</p>
${FullCode(`import pandas as pd`)}
<p>Now the Pandas package can be referred to as ${WordCode('pd')} instead of ${WordCode('pandas')}.</p>
${FullCode(`
import pandas as pd

mydataset = {
  'cars': ["BMW", "Volvo", "Ford"],
  'passings': [3, 7, 2]
}

myvar = pd.DataFrame(mydataset)

print(myvar)`)}
${OutputCode(`
cars  passings
0    BMW         3
1  Volvo         7
2   Ford         2`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Checking Pandas Version"; //title
window["msg"+k] = `
<p>The version string is stored under ${WordCode('__version__')} attribute.</p>
${FullCode(`
import pandas as pd

print(pd.__version__)`)}
`; //message

totalLevel = k;