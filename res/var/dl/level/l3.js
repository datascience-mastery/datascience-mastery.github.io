//Multi-layer Perceptron
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Multi-layer Perceptron"; //title
window["msg"+k] = `
<p>Multi-layer perception is also known as MLP. It is fully connected dense layers, which transform any input dimension to the desired dimension. A multi-layer perception is a neural network that has multiple layers. To create a neural network we combine neurons together so that the outputs of some neurons are inputs of other neurons.</p>
<p>A multi-layer perceptron has one input layer and for each input, there is one neuron(or node), it has one output layer with a single node for each output and it can have any number of hidden layers and each hidden layer can have any number of nodes. A schematic diagram of a Multi-Layer Perceptron (MLP) is depicted below.</p>
${ShowImage('12.jpg')}
<p>In the multi-layer perceptron diagram above, we can see that there are three inputs and thus three input nodes and the hidden layer has three nodes. The output layer gives two outputs, therefore there are two output nodes. The nodes in the input layer take input and forward it for further process, in the diagram above the nodes in the input layer forwards their output to each of the three nodes in the hidden layer, and in the same way, the hidden layer processes the information and passes it to the output layer.&nbsp;</p>
<p>Every node in the multi-layer perception uses a sigmoid activation function. The sigmoid activation function takes real values as input and converts them to numbers between 0 and 1 using the sigmoid formula.</p>
${ShowImage('13.svg')}
<p>Now that we are done with the theory part of multi-layer perception, let’s go ahead and implement some code in <strong>python </strong>using the <strong>TensorFlow </strong>library.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Code Implementation using Tensorflow"; //title
window["msg"+k] = `
<p><strong>Step 1: </strong>Import the necessary libraries.&nbsp;</p>
${FullCode(`
# importing modules 
import tensorflow as tf 
import numpy as np 
from tensorflow.keras.models import Sequential 
from tensorflow.keras.layers import Flatten 
from tensorflow.keras.layers import Dense 
from tensorflow.keras.layers import Activation 
import matplotlib.pyplot as plt`)}
<p><strong>Step 2: </strong>Download the dataset.</p>
<p>TensorFlow allows us to read the MNIST dataset and we can load it directly in the program as a train and test dataset.</p>
${FullCode(`
(x_train, y_train), (x_test, y_test) = tf.keras.datasets.mnist.load_data() 
`)}
${OutputCode(`
11493376/11490434 [==============================] – 2s 0us/step`)}
<p><strong>Step 3: </strong>Now we will convert the pixels into floating-point values.</p>
${FullCode(`
# Cast the records into float values 
x_train = x_train.astype('float32') 
x_test = x_test.astype('float32') 
  
# normalize image pixel values by dividing  
# by 255 
gray_scale = 255
x_train /= gray_scale 
x_test /= gray_scale `)}
<p>We are converting the pixel values into floating-point values to make the predictions. Changing the numbers into <strong>grayscale </strong>values will be beneficial as the values become small and the computation becomes easier and faster. As the pixel values range from 0 to 256, apart from 0 the range is 255. So dividing all the values by 255 will convert it to range from 0 to 1</p>
<p><strong>Step 4: </strong>Understand the structure of the dataset</p>
${FullCode(`

print("Feature matrix:", x_train.shape) 
print("Target matrix:", x_test.shape) 
print("Feature matrix:", y_train.shape) 
print("Target matrix:", y_test.shape)`)}
${OutputCode(`
Feature matrix: (60000, 28, 28)
Target matrix: (10000, 28, 28)
Feature matrix: (60000,)
Target matrix: (10000,)`)}
<p>Thus we get that we have 60,000 records in the training dataset and 10,000 records in the test dataset and Every image in the dataset is of the size 28×28.</p>
<p><strong>Step 5:</strong> Visualize the data.</p>
${FullCode(`

fig, ax = plt.subplots(10, 10) 
k = 0
for i in range(10): 
    for j in range(10): 
        ax[i][j].imshow(x_train[k].reshape(28, 28),  
                        aspect='auto') 
        k += 1
plt.show()`)}
${ShowImage('14.png')}
<p><strong>Step 6: </strong>Form the Input, hidden, and output layers.</p>
${FullCode(`
model = Sequential([ 
    
    # reshape 28 row * 28 column data to 28*28 rows 
    Flatten(input_shape=(28, 28)), 
    
      # dense layer 1 
    Dense(256, activation='sigmoid'),   
    
    # dense layer 2 
    Dense(128, activation='sigmoid'),  
    
      # output layer 
    Dense(10, activation='sigmoid'),   
])`)}
<p><strong>Some important points to note:</strong></p>
<ul>
<li>The <strong>Sequential model</strong> allows us to create models layer-by-layer as we need in a multi-layer perceptron and is limited to single-input, single-output stacks of layers.</li>
<li><strong>Flatten</strong> flattens the input provided without affecting the batch size. For example, If inputs are shaped (batch_size,) without a feature axis, then flattening adds an extra channel dimension and output shape is (batch_size, 1).</li>
<li><strong>Activation</strong> is for using the sigmoid activation function.</li>
<li>The first two <strong>Dense</strong> layers are used to make a fully connected model and are the hidden layers.</li>
<li>The <strong>last Dense layer</strong> is the output layer which contains 10 neurons that decide which category the image belongs to.</li>
</ul>
<p><strong>Step 7: </strong>Compile the model.</p>
${FullCode(`
model.compile(optimizer='adam', 
              loss='sparse_categorical_crossentropy', 
              metrics=['accuracy'])`)}
<p><strong>Compile function</strong> is used here that involves the use of loss, optimizers, and metrics. Here loss function used is <strong>sparse_categorical_crossentropy</strong>, optimizer used is <strong>adam</strong>.</p>
<p><strong>Step 8: </strong>Fit the model.</p>
${FullCode(`

model.fit(x_train, y_train, epochs=10,  
    batch_size=2000,  
    validation_split=0.2)`)}
${ShowImage('15.png')}
<p>Some important points to note:</p>
<ul>
<li><strong>Epochs </strong>tell us the number of times the model will be trained in forwarding and backward passes.</li>
<li><strong>Batch Size</strong> represents the number of samples, If it’s unspecified, batch_size will default to 32.</li>
<li><strong>Validation Split</strong> is a float value between 0 and 1. The model will set apart this fraction of the training data to evaluate the loss and any model metrics at the end of each epoch. (The model will not be trained on this data)</li>
</ul>
<p><strong>Step 9:</strong> Find Accuracy of the model.</p>
${FullCode(`
results = model.evaluate(x_test,  y_test, verbose = 0) 
print('test loss, test acc:', results)`)}
${OutputCode(`
test loss, test acc: [0.27210235595703125, 0.9223999977111816]`)}
<p>We got the accuracy of our model 92% by using ${WordCode('model.evaluate()')} on the test samples.</p>
`; //message

totalLevel = k;