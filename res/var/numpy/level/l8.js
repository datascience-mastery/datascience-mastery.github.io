// Array From Existing Data
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Array From Existing Data"; //title
window["msg"+k] = `
<p>In this chapter, we will discuss how to create an array from existing data.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `1. ${WordCode('numpy.asarray')}`; //title
window["msg"+k] = `
<p>This function is similar to ${WordCode('numpy.array')} except for the fact that it has fewer parameters. This routine is useful for converting Python sequence into ndarray.</p>
${WordCode('numpy.asarray(a, dtype = None, order = None)')}
<p>The constructor takes the following parameters.</p>
<table>
<tbody><tr>
<th style="text-align:center;">Sr.No.</th>
<th style="text-align:center;">Parameter &amp; Description</th>
</tr>
<tr>
<td class="ts">1</td>
<td><p><b>a</b></p>
<p>Input data in any form such as list, list of tuples, tuples, tuple of tuples or tuple of lists</p>
</td>
</tr>
<tr>
<td class="ts">2</td>
<td><p><b>dtype</b></p>
<p>By default, the data type of input data is applied to the resultant ndarray</p>
</td>
</tr>
<tr>
<td class="ts">3</td>
<td><p><b>order</b></p>
<p>C (row major) or F (column major). C is default</p>
</td>
</tr>
</tbody></table>
<h3>Example 1</h3>
${FullCode(`
x = [1,2,3] 
a = np.asarray(x) 
print(a)`, `convert list to ndarray`)}
${OutputCode(`[1  2  3] `)}
<h3>Example 2</h3>
${FullCode(`
x = [1,2,3]
a = np.asarray(x, dtype = float) 
print(a)`, 'dtype is set')}
${OutputCode(`[ 1.  2.  3.]`)}
<h3>Example 3</h3>
${FullCode(`
x = (1,2,3) 
a = np.asarray(x) 
print(a)`, 'ndarray from tuple')}
${OutputCode(`[1  2  3]`)}
<h3>Example 4</h3>
${FullCode(`
x = [(1,2,3),(4,5)] 
a = np.asarray(x) 
print(a)`, 'ndarray from list of tuples')}
${OutputCode(`[(1, 2, 3) (4, 5)]`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `2. ${WordCode('numpy.frombuffer')}`; //title
window["msg"+k] = `
<p>This function interprets a buffer as one-dimensional array. Any object that exposes the buffer interface is used as parameter to return an <b>ndarray</b>.</p>
${WordCode(`numpy.frombuffer(buffer, dtype = float, count = -1, offset = 0)`)}
<p>The constructor takes the following parameters.</p>
<table>
<tbody><tr>
<th style="text-align:center;">Sr.No.</th>
<th style="text-align:center;">Parameter &amp; Description</th>
</tr>
<tr>
<td class="ts">1</td>
<td><p><b>buffer</b></p>
<p>Any object that exposes buffer interface</p>
</td>
</tr>
<tr>
<td class="ts">2</td>
<td><p><b>dtype</b></p>
<p>Data type of returned ndarray. Defaults to float</p>
</td>
</tr>
<tr>
<td class="ts">3</td>
<td><p><b>count</b></p>
<p>The number of items to read, default -1 means all data</p>
</td>
</tr>
<tr>
<td class="ts">4</td>
<td><p><b>offset</b></p>
<p>The starting position to read from. Default is 0</p>
</td>
</tr>
</tbody></table>
<h3>Example</h3>
${FullCode(`
s = 'Hello World' 
a = np.frombuffer(s, dtype = 'S1') 
print(a)`)}
${OutputCode(`['H'  'e'  'l'  'l'  'o'  ' '  'W'  'o'  'r'  'l'  'd']`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `3. ${WordCode('numpy.fromiter')}`; //title
window["msg"+k] = `
<p>The ${WordCode('numpy.fromiter()')} function is used to create a new 1-dimensional NumPy array from an iterable object. This iterable can be any Python object that provides elements one at a time. The function is especially useful when you need to convert data from a custom data source, like a file or generator, into a NumPy array for further analysis.</p>
<p>Here’s the syntax for the ${WordCode('numpy.fromiter()')} function:</p>
${FullCode(`numpy.fromiter(iterable, dtype, count=-1)`)}
<p>Here, the constructor takes the following parameters.</p>
<table>
<tbody><tr>
<th style="text-align:center;">Sr.No.</th>
<th style="text-align:center;">Parameter &amp; Description</th>
</tr>
<tr>
<td class="ts">1</td>
<td><p><b>iterable</b></p>
<p>Any iterable object</p>
</td>
</tr>
<tr>
<td class="ts">2</td>
<td><p><b>dtype</b></p>
<p>Data type of resultant array</p>
</td>
</tr>
<tr>
<td class="ts">3</td>
<td><p><b>count</b></p>
<p>The number of items to be read from iterator. Default is -1 which means all data to be read</p>
</td>
</tr>
</tbody></table>
<h3>Example 1</h3>
${FullCode(`
iterable = (x * x for x in range(6))
gfg = np.fromiter(iterable, float)
print(gfg)`)}
${OutputCode(`[ 0.  1.  4.  9. 16. 25.]`)}
<p>In this example, we create a NumPy array ${WordCode('gfg')} containing the squares of the numbers from 0 to 5. We do this by creating an iterable object ${WordCode('iterable')} that generates these squares, and then passing it to the ${WordCode('numpy.fromiter()')} function along with the ${WordCode('float')} data type. The resulting array ${WordCode('gfg')} is of type ${WordCode('float')} and contains the squares of the numbers from 0 to 5.</p>
`; //message

totalLevel = k;