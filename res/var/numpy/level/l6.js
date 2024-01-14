// Array Attributes
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Array Attributes"; //title
window["msg"+k] = `
<p>In this chapter, we will discuss the various array attributes of NumPy.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `${WordCode('ndarray.shape')}`; //title
window["msg"+k] = `
<p>This array attribute returns a tuple consisting of array dimensions. It can also be used to resize the array.</p>
<h3>Example 1</h3>
${FullCode(`
import numpy as np 
a = np.array([[1,2,3],[4,5,6]]) 
print(a.shape)`)}
<h3>Example 2</h3>
${FullCode(`
# this resizes the ndarray 
import numpy as np 

a = np.array([[1,2,3],[4,5,6]]) 
a.shape = (3,2) 
print(a)`)}
${OutputCode(`
[[1, 2] 
 [3, 4] 
 [5, 6]]`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `${WordCode('ndarray.reshape')}`; //title
window["msg"+k] = `
<p>${WordCode('reshape')} function helps to resize an array.</p>
${FullCode(`
import numpy as np 

a = np.array([[1,2,3],[4,5,6]]) 
b = a.reshape(3,2) 
print(b)`)}
${OutputCode(`
[[1, 2] 
 [3, 4] 
 [5, 6]]`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = `${WordCode('ndarray.ndim')}`; //title
window["msg"+k] = `
<p>This array attribute returns the number of array dimensions.</p>
<p>In other words,</p>
<p>The ${WordCode('ndim')} attribute is a property of NumPy arrays that returns an integer representing the number of array dimensions.</p>
<h3>Example 1</h3>
${FullCode(`
import numpy as np

# Create a 1D array
a = np.array([1, 2, 3])
print(a.ndim)`)}
${OutputCode(`1`)}
${Note(`We will omit the import statement <br/>${WordCode('import numpy as np')}<br/> in upcoming NumPy examples. So don't forget to import NumPy.`)}
<h3>Example 2</h3>
${FullCode(`
# Create a 2D array
b = np.array([[1, 2, 3], [4, 5, 6]])
print(b.ndim)`)}
${OutputCode(`2`)}
<h3>Example 3</h3>
${FullCode(`
# Create a 3D array
c = np.array([[[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [4, 5, 6]]])
print(c.ndim)`)}
${OutputCode(`2`)}
`; //message

totalLevel = k;