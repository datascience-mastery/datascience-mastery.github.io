//Activation Function
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Activation Functions"; //title
window["msg"+k] = `
<p>To put in simple terms, an artificial neuron calculates the ‘weighted sum’ of its inputs and adds a bias, as shown in the figure below by the net input.</p>
${ShowImage('16.png')}
<p>Mathematically,</p>
${ShowImage('17.svg')}
<p>Now the value of net input can be any anything from -inf to +inf. The neuron doesn’t really know how to bound to value and thus is not able to decide the firing pattern. Thus the activation function is an important part of an artificial neural network. They basically decide whether a neuron should be activated or not. Thus it bounds the value of the net input.<br>
The activation function is a non-linear transformation that we do over the input before sending it to the next layer of neurons or finalizing it as output. </p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Types of Activation Functions"; //title
window["msg"+k] = `
<p>Several different types of activation functions are used in Deep Learning. Some of them are explained below:</p>
<ol>
    <li>
    <strong>Step Function:</strong><br>
    <p>Step Function is one of the simplest kind of activation functions. In this, we consider a threshold value and if the value of net input say y is greater than the threshold then the neuron is activated.</p>
    <p>Mathematically,</p>
    ${ShowImage('18.svg')}<br><br>
    ${ShowImage('19.svg')}
    <p>Given below is the graphical representation of step function.</p>
    ${ShowImage('20.png')}
    </li>
    <li>
    <strong>Sigmoid Function:</strong><br>
    <p>Sigmoid function is a widely used activation function. It is defined as:</p>
    ${ShowImage('21.svg')}
    <p>This is a smooth function and is continuously differentiable. The biggest advantage that it has over step and linear function is that it is non-linear. This is an incredibly cool feature of the sigmoid function. This essentially means that when I have multiple neurons having sigmoid function as their activation function – the output is non linear as well. The function ranges from 0-1 having an S shape.</p>
    </li>
    <li>
    <strong>ReLU:</strong><br>
    <p>The ReLU function is the Rectified linear unit. It is the most widely used activation function. It is defined as:</p>
    ${ShowImage('22.svg')}
    <p>Graphically,</p>
    ${ShowImage('23.png')}
    <p>The main advantage of using the ReLU function over other activation functions is that it does not activate all the neurons at the same time. What does this mean ? If you look at the ReLU function if the input is negative it will convert it to zero and the neuron does not get activated.</p>
    </li>
    <li>
    <strong>Leaky ReLU:</strong><br>
    <p>Leaky ReLU function is nothing but an improved version of the ReLU function.Instead of defining the Relu function as 0 for x less than 0, we define it as a small linear component of x. It can be defined as:</p>
    ${ShowImage('24.svg')}<br><br>
    ${ShowImage('25.svg')}
    <p>Graphically,</p>
    ${ShowImage('26.png')}
    </li>
</ol>
`; //message

totalLevel = k;