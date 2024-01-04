//ANN
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Artificial neural networks"; //title
window["msg"+k] = `
<p><b>Artificial neural networks</b> are built on the principles of the structure and operation of human neurons. It is also known as neural networks or neural nets. An artificial neural network’s input layer, which is the first layer, receives&nbsp;input from external sources and passes it on to the hidden layer, which is the second layer. Each neuron in the hidden layer gets information from the neurons in the previous layer, computes the weighted total, and then transfers it to the neurons in the next layer. These connections are weighted, which means that the impacts of the inputs from the preceding layer are more or less optimized by giving each input a distinct weight. These weights are then adjusted during the training process to enhance the performance of the model.</p>
${ShowImage('5.png')}
<p>Artificial neurons, also known as units, are found in artificial neural networks. The whole Artificial Neural Network&nbsp;is composed&nbsp;of these artificial neurons, which are arranged in a series of layers. The complexities of neural networks will depend on the complexities&nbsp;of&nbsp;the underlying patterns in the dataset whether a layer has a dozen units or millions of units. &nbsp;Commonly, Artificial Neural Network has an input layer, an output layer as well as hidden layers. The input layer receives data from the outside world which the neural network needs to analyze or learn about.</p>
<p>In a fully connected artificial neural network, there is an input layer and one or more hidden layers connected one after the other. Each neuron receives input from the previous layer neurons or the input layer. The output of one neuron becomes the input to other neurons in the next layer of the network, and this process continues until the final layer produces the output of the network. Then, after passing through one or more hidden layers, this data is transformed into valuable data for the output layer.&nbsp;Finally,&nbsp;the output layer provides an output in the form of an artificial neural network’s response to the data that comes in.&nbsp;</p>
<p>Units are linked to one another from one layer to another in the bulk of neural networks. Each of these links has weights that control how much one unit influences another. The neural network learns more and more about the data as it moves from one unit to another, ultimately producing an output from the output layer.&nbsp;</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Difference between Machine Learning and Deep Learning"; //title
window["msg"+k] = `
<p>machine learning and deep learning both are subsets of artificial intelligence but there are many similarities and differences between them.</p>
<table>
<thead>
<tr>
<th>
<p style="text-align:center">Machine Learning</p>
</th>
<th>
<p style="text-align:center">Deep Learning</p>
</th>
</tr>
</thead>
<tbody>
<tr>
<td>Apply statistical algorithms to learn the hidden patterns and relationships in the dataset.</td>
<td>Uses artificial neural network architecture to learn the hidden patterns and relationships in the dataset.</td>
</tr>
<tr>
<td>Can work on the smaller amount of dataset</td>
<td>Requires the larger volume of dataset compared to machine learning</td>
</tr>
<tr>
<td>Better for the low-label task.</td>
<td>Better for complex task like image processing, natural language processing, etc.</td>
</tr>
<tr>
<td>Takes less time to train the model.</td>
<td>Takes more time to train the model.</td>
</tr>
<tr>
<td>A model is created by relevant features which are manually extracted from images to detect an object in the image.</td>
<td>Relevant features are automatically extracted from images. It is an end-to-end learning process.</td>
</tr>
<tr>
<td>Less complex and easy to interpret the result.</td>
<td>More complex, it works like the black box interpretations of the result are not easy.</td>
</tr>
<tr>
<td>It can work on the CPU or requires less computing power as compared to deep learning.</td>
<td>It requires a high-performance computer with GPU.</td>
</tr>
</tbody>
</table>
`; //message

totalLevel = k;