//Perceptron
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Single Layer Perceptron in TensorFlow"; //title
window["msg"+k] = `
<p>In this article, we will be understanding the single-layer perceptron and its implementation in Python using the TensorFlow library. Neural Networks work in the same way that our biological neuron works.</p>
${ShowImage('6.png')}
<p>Biological neuron has three basic functionality&nbsp;</p>
<ul>
<li>Receive signal from outside.</li>
<li>Process the signal and enhance whether we need to send information or not.</li>
<li>Communicate the signal to the target cell which can be another neuron or gland.</li>
</ul>
<p>In the same way, neural networks also work.</p>
${ShowImage('7.jpg')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "What is Single Layer Perceptron?"; //title
window["msg"+k] = `
<p>It is one of the oldest and first introduced neural networks. It was proposed by <strong>Frank Rosenblatt </strong>in <strong>1958</strong>. Perceptron is also known as an artificial neural network. Perceptron is mainly used to compute the logical gate like <strong>AND, OR, and NOR </strong>which has binary input and binary output.</p>
<p>The main functionality of the perceptron is:-</p>
<ul>
<li>Takes input from the input layer</li>
<li>Weight them up and sum it up.</li>
<li>Pass the sum to the nonlinear function to produce the output.</li>
</ul>
${ShowImage('8.png')}
<p>Here activation functions can be anything like <strong>sigmoid, tanh, relu</strong> Based on the requirement we will be choosing the most appropriate nonlinear activation function to produce the better result. Now let us implement a single-layer perceptron.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "IMPLEMENTATION OF SINGLE-LAYER PERCEPTRON"; //title
window["msg"+k] = `
<p>Let us now implement a single-layer perceptron using the “MNIST” dataset using the TensorFlow library.</p>
<p><strong>Step1:</strong> Import necessary libraries</p>
<ul>
<li><strong>Numpy </strong>– Numpy arrays are very fast and can perform large computations in a very short time.</li>
<li><strong>Matplotlib</strong><strong> </strong>– This library is used to draw visualizations.</li>
<li><strong>TensorFlow</strong> – This is an open-source library that is used for Machine Learning and Artificial intelligence and provides a range of functions to achieve complex functionalities with single lines of code.</li>
</ul>
${FullCode(`
import numpy as np 
import tensorflow as tf 
from tensorflow import keras 
import matplotlib.pyplot as plt 
%matplotlib inline`)}
<p><strong>Step 2:</strong> Now load the dataset using “Keras” from the imported version of tensor flow.</p>
${FullCode(`
(x_train, y_train),\ 
    (x_test, y_test) = keras.datasets.mnist.load_data() `)}
<p><strong>Step 3:</strong> Now display the shape and image of the single image in the dataset. The image size contains a 28*28 matrix and length of the training set is 60,000 and the testing set is 10,000.</p>
${FullCode(`
len(x_train) 
len(x_test) 
x_train[0].shape 
plt.matshow(x_train[0]) `)}
<h3>Output:</h3>
${ShowImage('9.png')}
<p><strong>Step 4: </strong>Now normalize the dataset in order to compute the calculations in a fast and accurate manner.</p>
${FullCode(`
# Normalizing the dataset 
x_train = x_train/255
x_test = x_test/255
  
# Flatting the dataset in order 
# to compute for model building 
x_train_flatten = x_train.reshape(len(x_train), 28*28) 
x_test_flatten = x_test.reshape(len(x_test), 28*28) `)}
<p><strong>Step 5:</strong> Building a neural network with single-layer perception. Here we can observe as the model is a single-layer perceptron that only contains one input layer and one output layer there is no presence of the hidden layers. &nbsp;</p>
${FullCode(`
model = keras.Sequential([ 
    keras.layers.Dense(10, input_shape=(784,), 
                       activation='sigmoid') 
]) 
model.compile( 
    optimizer='adam', 
    loss='sparse_categorical_crossentropy', 
    metrics=['accuracy']) 
  
model.fit(x_train_flatten, y_train, epochs=5)`)}
<h4>Output:</h4>
${ShowImage('10.png')}
<p><strong>Step 6:</strong> Output the accuracy of the model on the testing data.</p>
${FullCode(`model.evaluate(x_test_flatten, y_test)`)}
<h4>Output:</h4>
${ShowImage('11.png')}
`; //message

totalLevel = k;