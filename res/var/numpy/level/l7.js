// Array Creation Routines
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Array Creation Routines"; //title
window["msg"+k] = `
<p>A new <b>ndarray</b> object can be constructed by any of the following array creation routines or using a low-level ndarray constructor.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `1. ${WordCode('numpy.empty')}`; //title
window["msg"+k] = `
<p>The ${WordCode('numpy.empty()')} function is used to create a new array of a given shape and type, without initializing the entries. This function is typically used for large arrays when performance is critical, and the values will be filled in later.</p>
${Note(`Don't forget to import NumPy before running the code.`)}
${FullCode(`
arr = np.empty(2)
print(arr)`, `Here’s an example of how to use ${WordCode('numpy.empty()')} to create an empty 1D array of size 2:`)}
${OutputCode('[1.32335909e-270 1.66793515e+066]')}
${Note(`The value will change each time you run the code.`)}
${FullCode(`
arr = np.empty([2, 2], dtype=int)
print(arr)`, `Here’s an example of how to use ${WordCode('numpy.empty')} to create an empty 2D array of size (2, 2) with the specified data type ${WordCode('int')}:`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `2. ${WordCode('numpy.zeros')}`; //title
window["msg"+k] = `
<p>Returns a new array of specified size, filled with zeros.</p>
${WordCode(`numpy.zeros(shape, dtype = float, order = 'C')`)}
<p>The constructor takes the following parameters.</p>
<table>
<tbody><tr>
<th style="text-align:center;">Sr.No.</th>
<th style="text-align:center;">Parameter &amp; Description</th>
</tr>
<tr>
<td class="ts">1</td>
<td><p><b>Shape</b></p>
<p>Shape of an empty array in int or sequence of int</p>
</td>
</tr>
<tr>
<td class="ts">2</td>
<td><p><b>Dtype</b></p>
<p>Desired output data type. Optional</p>
</td>
</tr>
<tr>
<td class="ts">3</td>
<td><p><b>Order</b></p>
<p>'C' for C-style row-major array, 'F' for FORTRAN style column-major array</p>
</td>
</tr>
</tbody></table>
<h3>Example 1</h3>
${FullCode(`
x = np.zeros(5) 
print(x)`, 'array of five zeros. Default dtype is float')}
${OutputCode(`[ 0.  0.  0.  0.  0.]`)}
${FullCode(`
x = np.zeros((5,), dtype = np.int) 
print(x)`)}
${OutputCode(`[0  0  0  0  0]`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `3. ${WordCode('numpy.ones')}`; //title
window["msg"+k] = `
<p>Returns a new array of specified size and type, filled with ones.</p>
${WordCode("numpy.ones(shape, dtype = None, order = 'C')")}
<p>The constructor takes the following parameters.</p>
<table>
<tbody><tr>
<th style="text-align:center;">Sr.No.</th>
<th style="text-align:center;">Parameter &amp; Description</th>
</tr>
<tr>
<td class="ts">1</td>
<td><p><b>Shape</b></p>
<p>Shape of an empty array in int or tuple of int</p>
</td>
</tr>
<tr>
<td class="ts">2</td>
<td><p><b>Dtype</b></p>
<p>Desired output data type. Optional</p>
</td>
</tr>
<tr>
<td class="ts">3</td>
<td><p><b>Order</b></p>
<p>'C' for C-style row-major array, 'F' for FORTRAN style column-major array</p>
</td>
</tr>
</tbody></table>
<h3>Example 1</h3>
${FullCode(`
x = np.ones(5) 
print(x)`), `array of five ones. Default dtype is float`}
${OutputCode(`[ 1.  1.  1.  1.  1.]`)}
<h3>Example 2</h3>
${FullCode(`
x = np.ones([2,2], dtype = int) 
print(x)`)}
${OutputCode(`
[[1  1] 
 [1  1]]`)}
`; //message

totalLevel = k;