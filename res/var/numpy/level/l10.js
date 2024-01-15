// Indexing & Slicing
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Indexing & Slicing"; //title
window["msg"+k] = `
<p>Contents of ndarray object can be accessed and modified by indexing or slicing, just like Python's in-built container objects.</p>
<p>As mentioned earlier, items in ndarray object follows zero-based index. Three types of indexing methods are available − <b>field access, basic slicing</b> and <b>advanced indexing</b>.</p>
<p>Basic slicing is an extension of Python's basic concept of slicing to n dimensions. A Python slice object is constructed by giving <b>start, stop</b>, and <b>step</b> parameters to the built-in <b>slice</b> function. This slice object is passed to the array to extract a part of array.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Example 1`; //title
window["msg"+k] = `
${FullCode(`
a = np.arange(10) 
s = slice(2,7,2) 
print(a[s])`)}
${OutputCode(`[2  4  6]`)}
<p>In the above example, an ${WordCode('ndarray')} object is prepared by ${WordCode('arange()')} function. Then a slice object is defined with start, stop, and step values 2, 7, and 2 respectively. When this slice object is passed to the ndarray, a part of it starting with index 2 up to 7 with a step of 2 is sliced.</p>
<p>The same result can also be obtained by giving the slicing parameters separated by a colon : (start:stop:step) directly to the ${WordCode('ndarray')} object.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Example 2`; //title
window["msg"+k] = `
${FullCode(`
a = np.arange(10) 
b = a[2:7:2] 
print(b)`)}
${OutputCode(`[2  4  6]`)}
<p>If only one parameter is put, a single item corresponding to the index will be returned. If a : is inserted in front of it, all items from that index onwards will be extracted. If two parameters (with : between them) is used, items between the two indexes (not including the stop index) with default step one are sliced.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Example 3`; //title
window["msg"+k] = `
${FullCode(`
a = np.arange(10) 
b = a[5] 
print(b)`, 'slice single item')}
${OutputCode(`5`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Example 4`; //title
window["msg"+k] = `
${FullCode(`
a = np.arange(10) 
print(a[2:])`, 'slice items starting from index')}
${OutputCode(`[2  3  4  5  6  7  8  9]`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Example 5`; //title
window["msg"+k] = `
${FullCode(`
a = np.arange(10) 
print(a[2:5])`, 'slice items between indexes')}
${OutputCode(`[2  3  4] `)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Example 6`; //title
window["msg"+k] = `
${FullCode(`
a = np.array([[1,2,3],[3,4,5],[4,5,6]]) 
print(a)
print("slice from index a[1:]")
print(a[1:])`, 'slice items starting from index')}
${OutputCode(`
[[1 2 3]
 [3 4 5]
 [4 5 6]]

slice from index a[1:]
[[3 4 5]
 [4 5 6]]
`)}
<p>Slicing can also include ellipsis (…) to make a selection tuple of the same length as the dimension of an array. If ellipsis is used at the row position, it will return an ndarray comprising of items in rows.</p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Example 7`; //title
window["msg"+k] = `
${FullCode(`
a = np.array([[1,2,3],[3,4,5],[4,5,6]]) 

print('Our array is:') 
print(a)
print('\\n')  

# this returns array of items in the second column 
print('The items in the second column are:')
print(a[...,1])
print('\\n')

# Now we will slice all items from the second row 
print('The items in the second row are:' )
print(a[1,...])
print('\\n')

# Now we will slice all items from column 1 onwards 
print('The items column 1 onwards are:')
print(a[...,1:])`)}
${OutputCode(`
Our array is:
[[1 2 3]
 [3 4 5]
 [4 5 6]] 
 
The items in the second column are: 
[2 4 5] 

The items in the second row are:
[3 4 5]

The items column 1 onwards are:
[[2 3]
 [4 5]
 [5 6]]`)}
`; //message

totalLevel = k;