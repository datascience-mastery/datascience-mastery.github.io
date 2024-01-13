k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "NumPy - Introduction"; //title
window["msg"+k] = `
<p>NumPy is a Python package. It stands for 'Numerical Python'. It is a library consisting of multidimensional array objects and a collection of routines for processing of array.</p>
<p><b>Numeric</b>, the ancestor of NumPy, was developed by Jim Hugunin. Another package Numarray was also developed, having some additional functionalities. In 2005, Travis Oliphant created NumPy package by incorporating the features of Numarray into Numeric package. There are many contributors to this open source project.</p>
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