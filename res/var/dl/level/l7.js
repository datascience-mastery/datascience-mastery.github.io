//feedforward neural network
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "feedforward neural network"; //title
window["msg"+k] = `
<p>A feedforward neural network (FNN) is an artificial neural network (ANN) where the information flows only in one direction, from input to output. This means the connections between the neurons do not form cycles, and the network has no feedback loops.</p>
<p>A feedforward neural network comprises of three main parts: an input layer, one or more hidden layers, and an output layer. </p>
${ShowImage('27.jpg')}
<p>A feedforward is the simplest form of a neural network</p>
<p>Multiple neurons make up each layer, and weights connect them to neurons in the layer above and below. The data goes into the input layer, and based on that data, the output layer makes a prediction or a classification. The hidden layers process the data in between, using a nonlinear transformation.</p>
<p>During training, the weights in the network are adjusted through a process called <b>backpropagation</b>, which uses an optimisation algorithm to minimise a loss function that measures the difference between the predicted output and the actual output. This allows the network to learn to make better predictions over time.</p>
<p>Feedforward neural networks are often used for many things, such as recognising images and voices, processing natural languages, and making predictions. However, they struggle with the ability to model complex temporal relationships and may not be suitable for tasks such as sequential data processing or time series forecasting. In these cases, <b>Recurrent Neural Networks (RNN)</b> or other types of ANNs may be more appropriate.</p>
`; //message

totalLevel = k;