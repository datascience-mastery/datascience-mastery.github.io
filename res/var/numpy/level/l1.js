k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "NumPy - QuickStart"; //title
window["msg"+k] = `
<p>NumPy, which stands for Numerical Python, is a library consisting of multidimensional array objects and a collection of routines for processing those arrays. Using NumPy, mathematical and logical operations on arrays can be performed. This tutorial explains the basics of NumPy such as its architecture and environment. It also discusses the various array functions, types of indexing, etc. An introduction to Matplotlib is also provided. All this is explained with the help of examples for better understanding.</p>
${ShowImage('1.webp')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Audience"; //title
window["msg"+k] = `
<p>This tutorial has been prepared for those who want to learn about the basics and various functions of NumPy. It is specifically useful for algorithm developers. After completing this tutorial, you will find yourself at a moderate level of expertise from where you can take yourself to higher levels of expertise.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Prerequisites"; //title
window["msg"+k] = `
<p>You should have a basic understanding of computer programming terminologies. A basic understanding of <b>Python</b> and any of the programming languages is a plus.</p>
`; //message

totalLevel = k;