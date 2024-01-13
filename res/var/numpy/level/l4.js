k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Ndarray Object"; //title
window["msg"+k] = `
<p>The most important object defined in NumPy is an N-dimensional array type called <b>ndarray</b>. It describes the collection of items of the same type. Items in the collection can be accessed using a zero-based index.</p>
<p>Every item in an ndarray takes the same size of block in the memory. Each element in ndarray is an object of data-type object (called <b>dtype</b>).</p>
<p>Any item extracted from ndarray object (by slicing) is represented by a Python object of one of array scalar types. The following diagram shows a relationship between ndarray, data type object (dtype) and array scalar type −</p>
${ShowImage('2.jpg')}
<p>An instance of ndarray class can be constructed by different array creation routines described later in the tutorial. The basic ndarray is created using an array function in NumPy as follows −</p>
${FullCode(`numpy.array`)}
<p>It creates an ndarray from any object exposing array interface, or from any method that returns an array.</p>
${FullCode(`numpy.array(object, dtype = None, copy = True, order = None, subok = False, ndmin = 0)`)}
<p>The above constructor takes the following parameters −</p>
<table>
<tbody><tr>
<th style="text-align:center;">Sr.No.</th>
<th style="text-align:center;">Parameter &amp; Description</th>
</tr>
<tr>
<td class="ts">1</td>
<td><p><b>object</b></p>
<p>Any object exposing the array interface method returns an array, or any (nested) sequence.</p>
</td>
</tr>
<tr>
<td class="ts">2</td>
<td><p><b>dtype</b></p>
<p>Desired data type of array, optional</p>
</td>
</tr>
<tr>
<td class="ts">3</td>
<td><p><b>copy</b></p>
<p>Optional. By default (true), the object is copied</p>
</td>
</tr>
<tr>
<td class="ts">4</td>
<td><p><b>order</b></p>
<p>C (row major) or F (column major) or A (any) (default)</p>
</td>
</tr>
<tr>
<td class="ts">5</td>
<td><p><b>subok</b></p>
<p>By default, returned array forced to be a base class array. If true, sub-classes passed through</p>
</td>
</tr>
<tr>
<td class="ts">6</td>
<td><p><b>ndmin</b></p>
<p>Specifies minimum dimensions of resultant array</p>
</td>
</tr>
</tbody></table>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Operations using NumPy"; //title
window["msg"+k] = `
<p>Using NumPy, a developer can perform the following operations −</p>
<ul>
<li><p>Mathematical and logical operations on arrays.</p></li>
<li><p>Fourier transforms and routines for shape manipulation.</p></li>
<li><p>Operations related to linear algebra. NumPy has in-built functions for linear algebra and random number generation.</p></li>
</ul>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "NumPy – A Replacement for MatLab"; //title
window["msg"+k] = `
<p>NumPy is often used along with packages like <b>SciPy</b> (Scientific Python) and <b>Mat−plotlib</b> (plotting library). This combination is widely used as a replacement for MatLab, a popular platform for technical computing. However, Python alternative to MatLab is now seen as a more modern and complete programming language.</p>
<p>It is open source, which is an added advantage of NumPy.</p>
`; //message

totalLevel = k;