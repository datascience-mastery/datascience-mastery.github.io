// Array From Numerical Ranges
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Array From Numerical Ranges"; //title
window["msg"+k] = `
<p>In this chapter, we will see how to create an array from numerical ranges.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `1. ${WordCode('numpy.arange')}`; //title
window["msg"+k] = `
<p>This function returns an <b>ndarray</b> object containing evenly spaced values within a given range. The format of the function is as follows −</p>
${WordCode(`numpy.arange(start, stop, step, dtype)`)}
<p>The constructor takes the following parameters.</p>
<table>
<tbody><tr>
<th style="text-align:center;">Sr.No.</th>
<th style="text-align:center;">Parameter &amp; Description</th>
</tr>
<tr>
<td class="ts">1</td>
<td><p><b>start</b></p>
<p>The start of an interval. If omitted, defaults to 0</p>
</td>
</tr>
<tr>
<td class="ts">2</td>
<td><p><b>stop</b></p>
<p>The end of an interval (not including this number)</p>
</td>
</tr>
<tr>
<td class="ts">3</td>
<td><p><b>step</b></p>
<p>Spacing between values, default is 1</p>
</td>
</tr>
<tr>
<td class="ts">4</td>
<td><p><b>dtype</b></p>
<p>Data type of resulting ndarray. If not given, data type of input is used</p>
</td>
</tr>
</tbody></table>
<h3>Example 1</h3>
${FullCode(`
x = np.arange(5) 
print(x)`)}
${OutputCode(`[0  1  2  3  4]`)}
<h3>Example 2</h3>
${FullCode(`
x = np.arange(5, dtype = float)
print(x)`)}
${OutputCode(`[0.  1.  2.  3.  4.] `)}
<h3>Example 3</h3>
${FullCode(`
x = np.arange(10,20,2) 
print(x)`, `start, stop and step-size parameters set`)}
${OutputCode(`[10  12  14  16  18]`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `2. ${WordCode('numpy.linspace')}`; //title
window["msg"+k] = `
<p>This function is similar to ${WordCode('arange()')} function. In this function, instead of step size, the number of evenly spaced values between the interval is specified. The usage of this function is as follows −</p>
${WordCode('numpy.linspace(start, stop, num, endpoint, retstep, dtype)')}
<p>The constructor takes the following parameters.</p>
<table>
<tbody><tr>
<th style="text-align:center;">Sr.No.</th>
<th style="text-align:center;">Parameter &amp; Description</th>
</tr>
<tr>
<td class="ts">1</td>
<td><p><b>start</b></p>
<p>The starting value of the sequence</p>
</td>
</tr>
<tr>
<td class="ts">2</td>
<td><p><b>stop</b></p>
<p>The end value of the sequence, included in the sequence if endpoint set to true</p>
</td>
</tr>
<tr>
<td class="ts">3</td>
<td><p><b>num</b></p>
<p>The number of evenly spaced samples to be generated. Default is 50</p>
</td>
</tr>
<tr>
<td class="ts">4</td>
<td><p><b>endpoint</b></p>
<p>True by default, hence the stop value is included in the sequence. If false, it is not included</p>
</td>
</tr>
<tr>
<td class="ts">5</td>
<td><p><b>retstep</b></p>
<p>If true, returns samples and step between the consecutive numbers</p>
</td>
</tr>
<tr>
<td class="ts">6</td>
<td><p><b>dtype</b></p>
<p>Data type of output <b>ndarray</b></p>
</td>
</tr>
</tbody></table>
<h3>Example 1</h3>
${FullCode(`
x = np.linspace(10,20,5) 
print(x)`)}
${OutputCode(`[10.   12.5   15.   17.5  20.]`)}
<h3>Example 2</h3>
${FullCode(`
x = np.linspace(10,20, 5, endpoint = False) 
print(x)`, 'endpoint set to false')}
${OutputCode(`[10.   12.   14.   16.   18.]`)}
<h3>Example 3</h3>
${FullCode(`
x = np.linspace(1,2,5, retstep = True) 
print(x)`, 'retstep here is 0.25')}
${OutputCode(`(array([ 1.  ,  1.25,  1.5 ,  1.75,  2.  ]), 0.25)`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `3. ${WordCode('numpy.logspace')}`; //title
window["msg"+k] = `
<p>This function returns an ${WordCode(`ndarray`)} object that contains the numbers that are evenly spaced on a log scale. Start and stop endpoints of the scale are indices of the base, usually 10.</p>
${WordCode(`numpy.logspace(start, stop, num, endpoint, base, dtype)`)}
<p>Following parameters determine the output of ${WordCode(`logspace`)} function.</p>
<table>
<tbody><tr>
<th style="text-align:center;">Sr.No.</th>
<th style="text-align:center;">Parameter &amp; Description</th>
</tr>
<tr>
<td class="ts">1</td>
<td><p><b>start</b></p>
<p>The starting point of the sequence is base<sup>start</sup></p>
</td>
</tr>
<tr>
<td class="ts">2</td>
<td><p><b>stop</b></p>
<p>The final value of sequence is base<sup>stop</sup></p>
</td>
</tr>
<tr>
<td class="ts">3</td>
<td><p><b>num</b></p>
<p>The number of values between the range. Default is 50</p>
</td>
</tr>
<tr>
<td class="ts">4</td>
<td><p><b>endpoint</b></p>
<p>If true, stop is the last value in the range</p>
</td>
</tr>
<tr>
<td class="ts">5</td>
<td><p><b>base</b></p>
<p>Base of log space, default is 10</p>
</td>
</tr>
<tr>
<td class="ts">6</td>
<td><p><b>dtype</b></p>
<p>Data type of output array. If not given, it depends upon other input arguments</p>
</td>
</tr>
</tbody></table>
<h3>Example 1</h3>
${FullCode(`
a = np.logspace(1.0, 2.0, num = 10) 
print(a)`, 'default base is 10')}
${OutputCode(`
[ 10.           12.91549665     16.68100537      21.5443469  27.82559402      
    35.93813664   46.41588834     59.94842503      77.42636827    100.    ]`)}
<h3>Example 2</h3>
${FullCode(`
a = np.logspace(1,10,num = 10, base = 2) 
print(a)`, 'set base of log space to 2 ')}
${OutputCode(`[ 2.     4.     8.    16.    32.    64.   128.   256.    512.   1024.]`)}

`; //message

totalLevel = k;