// Iterating Over Array
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Iterating Over Array"; //title
window["msg"+k] = `
<p>NumPy package contains an iterator object ${WordCode('numpy.nditer')}. It is an efficient multidimensional iterator object using which it is possible to iterate over an array. Each element of an array is visited using Python’s standard Iterator interface.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Example 1`; //title
window["msg"+k] = `
<p>Let us create a 3X4 array using ${WordCode('arange()')}function and iterate over it using ${WordCode('nditer')}.</p>
${FullCode(`
a = np.arange(0,60,5)
a = a.reshape(3,4)

print('Original array is:')
print(a)
print('\\n')

print('Modified array is:')
for x in np.nditer(a):
   print(x)`)}
${OutputCode(`
Original array is:
[[ 0 5 10 15]
 [20 25 30 35]
 [40 45 50 55]]

Modified array is:
0 5 10 15 20 25 30 35 40 45 50 55`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Example 2`; //title
window["msg"+k] = `
<p>The order of iteration is chosen to match the memory layout of an array, without considering a particular ordering. This can be seen by iterating over the transpose of the above array.</p>
${FullCode(`
a = np.arange(0,60,5) 
a = a.reshape(3,4) 
   
print('Original array is:')
print(a )
print('\\n'  )

print('Transpose of the original array is:' )
b = a.T 
print(b )
print('\\n')
   
print('Modified array is:' )
for x in np.nditer(b): 
   print(x)
`)}
${OutputCode(`
Original array is:
[[ 0 5 10 15]
 [20 25 30 35]
 [40 45 50 55]]

Transpose of the original array is:
[[ 0 20 40]
 [ 5 25 45]
 [10 30 50]
 [15 35 55]]

Modified array is:
0 5 10 15 20 25 30 35 40 45 50 55`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Iteration Order`; //title
window["msg"+k] = `
<p>If the same elements are stored using F-style order, the iterator chooses the more efficient way of iterating over an array.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Example 1`; //title
window["msg"+k] = `
${FullCode(`
a = np.arange(0,60,5)
a = a.reshape(3,4)
print('Original array is:')
print(a)
print('\\n')

print('Transpose of the original array is:')
b = a.T
print(b)
print('\\n')

print('Sorted in C-style order:')
c = b.copy(order = 'C')
print(c)
for x in np.nditer(c):
   print(x)

print('\\n')

print('Sorted in F-style order:')
c = b.copy(order = 'F')
print(c)
for x in np.nditer(c):
   print(x)`)}
${OutputCode(`
Original array is:
[[ 0 5 10 15]
 [20 25 30 35]
 [40 45 50 55]]

Transpose of the original array is:
[[ 0 20 40]
 [ 5 25 45]
 [10 30 50]
 [15 35 55]]

Sorted in C-style order:
[[ 0 20 40]
 [ 5 25 45]
 [10 30 50]
 [15 35 55]]
0 20 40 5 25 45 10 30 50 15 35 55

Sorted in F-style order:
[[ 0 20 40]
 [ 5 25 45]
 [10 30 50]
 [15 35 55]]
0 5 10 15 20 25 30 35 40 45 50 55
`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Example 2`; //title
window["msg"+k] = `
<p>It is possible to force ${WordCode('nditer')} object to use a specific order by explicitly mentioning it.</p>
${FullCode(`
a = np.arange(0,60,5) 
a = a.reshape(3,4) 

print('Original array is:')
print(a)
print('\\n')

print('Sorted in C-style order:')
for x in np.nditer(a, order = 'C'): 
   print(x)  
print('\\n') 

print('Sorted in F-style order:')
for x in np.nditer(a, order = 'F'): 
   print(x)`)}
${OutputCode(`
Original array is:
[[ 0 5 10 15]
 [20 25 30 35]
 [40 45 50 55]]

Sorted in C-style order:
0 5 10 15 20 25 30 35 40 45 50 55

Sorted in F-style order:
0 20 40 5 25 45 10 30 50 15 35 55`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Modifying Array Values`; //title
window["msg"+k] = `
<p>The ${WordCode('nditer')} object has another optional parameter called ${WordCode('op_flags')}. Its default value is read-only, but can be set to read-write or write-only mode. This will enable modifying array elements using this iterator.</p>
${FullCode(`
a = np.arange(0,60,5)
a = a.reshape(3,4)
print('Original array is:')
print(a)
print('\\n')

for x in np.nditer(a, op_flags = ['readwrite']):
   x[...] = 2*x
print('Modified array is:')
print(a)`)}
${OutputCode(`
Original array is:
[[ 0 5 10 15]
 [20 25 30 35]
 [40 45 50 55]]

Modified array is:
[[ 0 10 20 30]
 [ 40 50 60 70]
 [ 80 90 100 110]]`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `External Loop`; //title
window["msg"+k] = `
<p>The nditer class constructor has a ${WordCode('flags')} parameter, which can take the following values −</p>
<table>
<tbody><tr>
<th style="text-align:center;">Sr.No.</th>
<th style="text-align:center;">Parameter &amp; Description</th>
</tr>
<tr>
<td class="ts">1</td>
<td><p><b>c_index</b></p>
<p>C_order index can be tracked</p>
</td>
</tr>
<tr>
<td class="ts">2</td>
<td><p><b>f_index</b></p>
<p>Fortran_order index is tracked</p>
</td>
</tr>
<tr>
<td class="ts">3</td>
<td><p><b>multi-index</b></p>
<p>Type of indexes with one per iteration can be tracked</p>
</td>
</tr>
<tr>
<td class="ts">4</td>
<td><p><b>external_loop</b></p>
<p>Causes values given to be one-dimensional arrays with multiple values instead of zero-dimensional array</p>
</td>
</tr>
</tbody></table>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Example`; //title
window["msg"+k] = `
<p>In the following example, one-dimensional arrays corresponding to each column is traversed by the iterator.</p>
${FullCode(`
a = np.arange(0,60,5) 
a = a.reshape(3,4) 

print('Original array is:')
print(a)
print('\\n')

print('Modified array is:')
for x in np.nditer(a, flags = ['external_loop'], order = 'F'):
   print(x)`)}
${OutputCode(`
Original array is:
[[ 0 5 10 15]
 [20 25 30 35]
 [40 45 50 55]]

Modified array is:
[ 0 20 40] [ 5 25 45] [10 30 50] [15 35 55]`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Broadcasting Iteration`; //title
window["msg"+k] = `
<p>If two arrays are <b>broadcastable</b>, a combined ${WordCode('nditer')} object is able to iterate upon them concurrently. Assuming that an array ${WordCode('a')} has dimension 3X4, and there is another array ${WordCode('b')} of dimension 1X4, the iterator of following type is used (array ${WordCode('b')} is broadcast to size of ${WordCode('a')}).</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Example`; //title
window["msg"+k] = `
${FullCode(`
a = np.arange(0,60,5) 
a = a.reshape(3,4) 

print('First array is:')
print(a)
print('\\n')  

print('Second array is:')
b = np.array([1, 2, 3, 4], dtype = int) 
print(b)
print('\\n')

print('Modified array is:')
for x,y in np.nditer([a,b]): 
   print("%d:%d" % (x,y))`)}
${OutputCode(`
First array is:
[[ 0 5 10 15]
 [20 25 30 35]
 [40 45 50 55]]

Second array is:
[1 2 3 4]

Modified array is:
0:1 5:2 10:3 15:4 20:1 25:2 30:3 35:4 40:1 45:2 50:3 55:4`)}
`; //message

totalLevel = k;