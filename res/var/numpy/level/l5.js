// Data Types
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Data Types"; //title
window["msg"+k] = `
<p>NumPy supports a much greater variety of numerical types than Python does. The following table shows different scalar data types defined in NumPy.</p>
<table>
<tbody><tr>
<th style="text-align:center;">Sr.No.</th>
<th style="text-align:center;">Data Types &amp; Description</th>
</tr>
<tr>
<td class="ts">1</td>
<td><p><b>bool_</b></p>
<p>Boolean (True or False) stored as a byte</p>
</td>
</tr>
<tr>
<td class="ts">2</td>
<td><p><b>int_</b></p>
<p>Default integer type (same as C long; normally either int64 or int32)</p>
</td>
</tr>
<tr>
<td class="ts">3</td>
<td><p><b>intc</b></p>
<p>Identical to C int (normally int32 or int64)</p>
</td>
</tr>
<tr>
<td class="ts">4</td>
<td><p><b>intp</b></p>
<p>Integer used for indexing (same as C ssize_t; normally either int32 or int64)</p>
</td>
</tr>
<tr>
<td class="ts">5</td>
<td><p><b>int8</b></p>
<p>Byte (-128 to 127)</p>
</td>
</tr>
<tr>
<td class="ts">6</td>
<td><p><b>int16</b></p>
<p>Integer (-32768 to 32767)</p>
</td>
</tr>
<tr>
<td class="ts">7</td>
<td><p><b>int32</b></p>
<p>Integer (-2147483648 to 2147483647)</p>
</td>
</tr>
<tr>
<td class="ts">8</td>
<td><p><b>int64</b></p>
<p>Integer (-9223372036854775808 to 9223372036854775807)</p>
</td>
</tr>
<tr>
<td class="ts">9</td>
<td><p><b>uint8</b></p>
<p>Unsigned integer (0 to 255)</p>
</td>
</tr>
<tr>
<td class="ts">10</td>
<td><p><b>uint16</b></p>
<p>Unsigned integer (0 to 65535)</p>
</td>
</tr>
<tr>
<td class="ts">11</td>
<td><p><b>uint32</b></p>
<p>Unsigned integer (0 to 4294967295)</p>
</td>
</tr>
<tr>
<td class="ts">12</td>
<td><p><b>uint64</b></p>
<p>Unsigned integer (0 to 18446744073709551615)</p>
</td>
</tr>
<tr>
<td class="ts">13</td>
<td><p><b>float_</b></p>
<p>Shorthand for float64</p>
</td>
</tr>
<tr>
<td class="ts">14</td>
<td><p><b>float16</b></p>
<p>Half precision float: sign bit, 5 bits exponent, 10 bits mantissa</p>
</td>
</tr>
<tr>
<td class="ts">15</td>
<td><p><b>float32</b></p>
<p>Single precision float: sign bit, 8 bits exponent, 23 bits mantissa</p>
</td>
</tr>
<tr>
<td class="ts">16</td>
<td><p><b>float64</b></p>
<p>Double precision float: sign bit, 11 bits exponent, 52 bits mantissa</p>
</td>
</tr>
<tr>
<td class="ts">17</td>
<td><p><b>complex_</b></p>
<p>Shorthand for complex128</p>
</td>
</tr>
<tr>
<td class="ts">18</td>
<td><p><b>complex64</b></p>
<p>Complex number, represented by two 32-bit floats (real and imaginary components)</p>
</td>
</tr>
<tr>
<td class="ts">19</td>
<td><p><b>complex128</b></p>
<p>Complex number, represented by two 64-bit floats (real and imaginary components)</p>
</td>
</tr>
</tbody></table>
<p>NumPy numerical types are instances of dtype (data-type) objects, each having unique characteristics. The dtypes are available as np.bool_, np.float32, etc.</p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Data Type Objects (dtype)"; //title
window["msg"+k] = `
<p>A data type object describes interpretation of fixed block of memory corresponding to an array, depending on the following aspects −</p>
<ul>
<li><p>Type of data (integer, float or Python object)</p></li>
<li><p>Size of data</p></li>
<li><p>Byte order (little-endian or big-endian)</p></li>
<li><p>In case of structured type, the names of fields, data type of each field and part of the memory block taken by each field.</p></li>
<li><p>If data type is a subarray, its shape and data type</p></li>
</ul>
<p>The byte order is decided by prefixing '&lt;' or '&gt;' to data type. '&lt;' means that encoding is little-endian (least significant is stored in smallest address). '&gt;' means that encoding is big-endian (most significant byte is stored in smallest address).</p>
<p>A dtype object is constructed using the following syntax −</p>
${FullCode(`numpy.dtype(object, align, copy)`)}
<p>The parameters are −</p>
<ul>
<li><p><b>Object</b> − To be converted to data type object</p></li>
<li><p><b>Align</b> − If true, adds padding to the field to make it similar to C-struct</p></li>
<li><p><b>Copy</b> − Makes a new copy of dtype object. If false, the result is reference to builtin data type object</p></li>
</ul>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Examples"; //title
window["msg"+k] = `
<h3>Example 1</h3>
${FullCode(`
# using array-scalar type 
import numpy as np 
dt = np.dtype(np.int32) 
print(dt)`)}
${OutputCode(`int32`)}
<h3>Example 2</h3>
${FullCode(`
#int8, int16, int32, int64 can be replaced by equivalent string 'i1', 'i2','i4', etc. 
import numpy as np 

dt = np.dtype('i4')
print(dt)`)}
${OutputCode(`int32`)}
<h3>Example 3</h3>
${FullCode(`
# using endian notation 
import numpy as np 
dt = np.dtype('>i4') 
print(dt)`)}
${OutputCode(`>i4`)}
<p>The following examples show the use of structured data type. Here, the field name and the corresponding scalar data type is to be declared.</p>
<h3>Example 4</h3>
${FullCode(`
# first create structured data type 
import numpy as np 
dt = np.dtype([('age',np.int8)]) 
print(dt)`)}
${OutputCode(`[('age', 'i1')]`)}
<h3>Example 5</h3>
${FullCode(`
# now apply it to ndarray object 
import numpy as np 

dt = np.dtype([('age',np.int8)]) 
a = np.array([(10,),(20,),(30,)], dtype = dt) 
print(a)`)}
${OutputCode(`[(10,) (20,) (30,)]`)}
<h3>Example 6</h3>
${FullCode(`
# file name can be used to access content of age column 
import numpy as np 

dt = np.dtype([('age',np.int8)]) 
a = np.array([(10,),(20,),(30,)], dtype = dt) 
print(a['age'])`)}
${OutputCode(`[10 20 30]`)}
<h3>Example 7</h3>
<p>The following examples define a structured data type called <b>student</b> with a string field 'name', an <b>integer field</b> 'age' and a <b>float field</b> 'marks'. This dtype is applied to ndarray object.</p>
${FullCode(`
import numpy as np 
student = np.dtype([('name','S20'), ('age', 'i1'), ('marks', 'f4')]) 
print(student)`)}
${OutputCode(`[('name', 'S20'), ('age', 'i1'), ('marks', '&lt;f4')])`)}
<h3>Example 8</h3>
${FullCode(`
import numpy as np 

student = np.dtype([('name','S20'), ('age', 'i1'), ('marks', 'f4')]) 
a = np.array([('abc', 21, 50),('xyz', 18, 75)], dtype = student) 
print(a)`)}
${OutputCode(`[('abc', 21, 50.0), ('xyz', 18, 75.0)]`)}
${Note('Each built-in data type has a character code that uniquely identifies it.')}
<ul>
<li><p><b>'b'</b> − boolean</p></li>
<li><p><b>'i'</b> − (signed) integer</p></li>
<li><p><b>'u'</b> − unsigned integer</p></li>
<li><p><b>'f'</b> − floating-point</p></li>
<li><p><b>'c'</b> − complex-floating point</p></li>
<li><p><b>'m'</b> − timedelta</p></li>
<li><p><b>'M'</b> − datetime</p></li>
<li><p><b>'O'</b> − (Python) objects</p></li>
<li><p><b>'S', 'a'</b> − (byte-)string</p></li>
<li><p><b>'U'</b> − Unicode</p></li>
<li><p><b>'V'</b> − raw data (void)</p></li>
</ul>
`; //message

totalLevel = k;