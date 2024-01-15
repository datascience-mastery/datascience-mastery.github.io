// Advanced Indexing
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Advanced Indexing"; //title
window["msg"+k] = `
<p>It is possible to make a selection from ndarray that is a non-tuple sequence, ndarray object of integer or Boolean data type, or a tuple with at least one item being a sequence object. Advanced indexing always returns a copy of the data. As against this, the slicing only presents a view.</p>
<p>There are two types of advanced indexing − <b>Integer</b> and <b>Boolean</b>.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Integer Indexing`; //title
window["msg"+k] = `
<p>This mechanism helps in selecting any arbitrary item in an array based on its Ndimensional index. Each integer array represents the number of indexes into that dimension. When the index consists of as many integer arrays as the dimensions of the target ndarray, it becomes straightforward.</p>
<p>In the following example, one element of specified column from each row of ndarray object is selected. Hence, the row index contains all row numbers, and the column index specifies the element to be selected.</p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Examples`; //title
window["msg"+k] = `
<h3>Example 1</h3>
${FullCode(`
x = np.array([[1, 2], [3, 4], [5, 6]]) 
y = x[[0,1,2], [0,1,0]] 
print(y)`)}
${OutputCode(`[1  4  5]`)}
<p>The selection includes elements at (0,0), (1,1) and (2,0) from the first array.</p>
<p>In the following example, elements placed at corners of a 4X3 array are selected. The row indices of selection are [0, 0] and [3,3] whereas the column indices are [0,2] and [0,2].</p>
<h3>Example 2</h3>
${FullCode(`
x = np.array([[ 0,  1,  2],[ 3,  4,  5],[ 6,  7,  8],[ 9, 10, 11]]) 
   
print('Our array is:') 
print(x)
print('\\n') 

rows = np.array([[0,0],[3,3]])
cols = np.array([[0,2],[0,2]]) 
y = x[rows,cols] 
   
print('The corner elements of this array are:')
print(y)`)}
${OutputCode(`
Our array is:                                                                 
[[ 0  1  2]                                                                   
 [ 3  4  5]                                                                   
 [ 6  7  8]                                                                   
 [ 9 10 11]]
 
The corner elements of this array are:                                        
[[ 0  2]                                                                      
 [ 9 11]]`)}
<p>The resultant selection is an ndarray object containing corner elements.</p>
<p>Advanced and basic indexing can be combined by using one slice (:) or ellipsis (…) with an index array. The following example uses slice for row and advanced index for column. The result is the same when slice is used for both. But advanced index results in copy and may have different memory layout.</p>
<h3>Example 3</h3>
${FullCode(`
x = np.array([[ 0,  1,  2],[ 3,  4,  5],[ 6,  7,  8],[ 9, 10, 11]]) 

print('Our array is:')
print(x)
print('\\n')

# slicing 
z = x[1:4,1:3] 

print('After slicing, our array becomes:' )
print(z )
print('\\n'  )

# using advanced index for column 
y = x[1:4,[1,2]] 

print('Slicing using advanced index for column:')
print(y)`)}
${OutputCode(`
Our array is:
[[ 0  1  2] 
 [ 3  4  5] 
 [ 6  7  8]
 [ 9 10 11]]
 
After slicing, our array becomes:
[[ 4  5]
 [ 7  8]
 [10 11]]

Slicing using advanced index for column:
[[ 4  5]
 [ 7  8]
 [10 11]]`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Boolean Array Indexing`; //title
window["msg"+k] = `
<p>This type of advanced indexing is used when the resultant object is meant to be the result of Boolean operations, such as comparison operators.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `Examples`; //title
window["msg"+k] = `
<h3>Example 1</h3>
<p>In this example, items greater than 5 are returned as a result of Boolean indexing.</p>
${FullCode(`
x = np.array([[ 0,  1,  2],[ 3,  4,  5],[ 6,  7,  8],[ 9, 10, 11]]) 

print('Our array is:' )
print(x )
print('\\n'  )

# Now we will print the items greater than 5 
print('The items greater than 5 are:' )
print(x[x > 5])
`)}
${OutputCode(`
Our array is: 
[[ 0  1  2] 
 [ 3  4  5] 
 [ 6  7  8] 
 [ 9 10 11]] 
 
The items greater than 5 are:
[ 6  7  8  9 10 11]`)}
<h3>Example 2</h3>
<p>In this example, NaN (Not a Number) elements are omitted by using ~ (complement operator).</p>
${FullCode(`
a = np.array([np.nan, 1,2,np.nan,3,4,5]) 
print(a[~np.isnan(a)])
`)}
${OutputCode(`[ 1.   2.   3.   4.   5.]`)}
<h3>Example 3</h3>
<p>The following example shows how to filter out the non-complex elements from an array.</p>
${FullCode(`
a = np.array([1, 2+6j, 5, 3.5+5j]) 
print a[np.iscomplex(a)]`)}
${OutputCode(`[2.0+6.j  3.5+5.j]`)}
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