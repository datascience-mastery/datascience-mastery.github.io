//Recurrent Neural Network
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Introduction to Recurrent Neural Network"; //title
window["msg"+k] = `
<p><span>In this chapter, we will introduce a new variation of neural network which is the </span><b><strong>Recurrent Neural Network</strong></b><span> also known as</span><b><strong> (RNN)</strong></b><span> that works better than a simple neural network when data is sequential like Time-Series data and text data.</span></p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "What is Recurrent Neural Network (RNN)?"; //title
window["msg"+k] = `
<p>Recurrent Neural Network(RNN) is a type of Neural Network<span> where the output from the previous step is fed as input to the current step. In traditional neural networks, all the inputs and outputs are independent of each other. Still, in cases when it is required to predict the next word of a sentence, the previous words are required and hence there is a need to remember the previous words. Thus RNN came into existence, which solved this issue with the help of a Hidden Layer. The main and most important feature of RNN is its </span><b><strong>Hidden state</strong></b><span>, which remembers some information about a sequence. The state is also referred to as </span><i><em class="GFGEditorTheme__textItalic">Memory State </em></i><span>since it remembers the previous input to the network. It uses the same parameters for each input as it performs the same task on all the inputs or hidden layers to produce the output. This reduces the complexity of parameters, unlike other neural networks.</span></p>
${ShowImage('34.webp')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "How RNN differs from Feedforward Neural Network?"; //title
window["msg"+k] = `
<p>Artificial neural networks that do not have looping nodes are called feed forward neural networks. Because all information is only passed forward, this kind of neural network is also referred to as a multi-layer neural network.</p>
<p>Information moves from the input layer to the output layer – if any hidden layers are present – unidirectionally in a feedforward neural network. These networks are appropriate for image classification tasks, for example, where input and output are independent. Nevertheless, their inability to retain previous inputs automatically renders them less useful for sequential data analysis.</p>
${ShowImage('35.png')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Recurrent Neuron and RNN Unfolding"; //title
window["msg"+k] = `
<p>The fundamental processing unit in a Recurrent Neural Network (RNN) is a Recurrent Unit, which is not explicitly called a “Recurrent Neuron.” This unit has the unique ability to maintain a hidden state, allowing the network to capture sequential dependencies by remembering previous inputs while processing. <b>Long Short-Term Memory (LSTM)</b> and <b>Gated Recurrent Unit (GRU)</b> versions improve the RNN’s ability to handle long-term dependencies.</p>
${ShowImage('36.png')}
${ShowImage('37.png')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Types Of RNN"; //title
window["msg"+k] = `
<p>There are four types of RNNs based on the number of inputs and outputs in the network.</p>
<ol>
<li>One to One</li>
<li>One to Many</li>
<li>Many to One</li>
<li>Many to Many</li>
</ol>
<h2>One to One</h2>
<p><span>This type of RNN behaves the same as any simple Neural network it is also known as Vanilla Neural Network. In this Neural network, there is only one input and one output.&nbsp;</span></p>
${ShowImage('38.webp')}
<h2>One To Many</h2>
<p>In this type of RNN, there is one input and many outputs associated with it. One of the most used examples of this network is Image captioning where given an image we predict a sentence having Multiple words.</p>
${ShowImage('39.webp')}
<h2>Many to One</h2>
<p>In this type of network, Many inputs are fed to the network at several states of the network generating only one output. This type of network is used in the problems like sentimental analysis. Where we give multiple words as input and predict only the sentiment of the sentence as output.</p>
${ShowImage('40.webp')}
<h2>Many to Many</h2>
<p>In this type of neural network, there are multiple inputs and multiple outputs corresponding to a problem. One Example of this Problem will be language translation. In language translation, we provide multiple words from one language as input and predict multiple words from the second language as output.</p>
${ShowImage('41.webp')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Recurrent Neural Network Architecture"; //title
window["msg"+k] = `
<p dir="ltr" style="text-align: start"><span>RNNs have the same input and output architecture as any other deep neural architecture. However, differences arise in the way information flows from input to output. Unlike Deep neural networks where we have different weight matrices for each Dense network in RNN, the weight across the network remains the same. It calculates state hidden state &nbsp;H</span><b><sub><strong>i </strong></sub></b><span>for every input </span><b><strong>X</strong></b><b><sub><strong>i . </strong></sub></b><b><strong>By using the following formulas:</strong></b></p>
<blockquote>
<p dir="ltr"><span>h= σ(UX + Wh</span><sub><span>-1</span></sub><span> + B)</span></p>
<p dir="ltr"><span>Y = O(Vh + C) </span></p>
<p dir="ltr"><span>Hence&nbsp;</span></p>
<p dir="ltr"><span>Y = f (X, h , W, U, V, B, C)</span></p>
<p dir="ltr"><span>Here S is the State matrix which has element si as the state of the network at timestep i</span><br><span>The parameters in the network are W, U, V, c, b which are shared across timestep</span></p>
</blockquote>
${ShowImage('42.png')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "How does RNN work?"; //title
window["msg"+k] = `
<p>The Recurrent Neural Network consists of multiple fixed activation function units, one for each time step. Each unit has an internal state which is called the hidden state of the unit. This hidden state signifies the past knowledge that the network currently holds at a given time step. This hidden state is updated at every time step to signify the change in the knowledge of the network about the past. The hidden state is updated using the following recurrence relation:-</p>
<p><b>The formula for calculating the current state:</b></p>
${ShowImage('43.svg')}<br/>
<p>Where,</p>
<ul>
<li><span>h</span><sub><span>t</span></sub><span> -&gt; current state </span></li>
<li><span>h</span><sub><span>t-1</span></sub><span> -&gt; previous state </span></li>
<li><span>x</span><sub><span>t</span></sub><span> -&gt; input state</span></li>
</ul>
<p><b>Formula for applying Activation function(tanh)</b></p>
${ShowImage('44.svg')}<br/>
<p>Where,</p>
<ul>
<li><span>w</span><sub><span>hh</span></sub><span> -&gt; weight at recurrent neuron</span></li>
<li><span>w</span><sub><span>xh</span></sub><span> -&gt; weight at input neuron</span></li>
</ul>
<p><b>The formula for calculating output:</b></p>
${ShowImage('45.svg')}<br/>
<ul>
<li><span>Y</span><sub><span>t</span></sub><span> -&gt; output</span></li>
<li><span>W</span><sub><span>hy</span></sub><span> -&gt; weight at output layer</span></li>
</ul>
<p>These parameters are updated using <b>Backpropagation.</b> However, since RNN works on sequential data here we use an updated backpropagation which is known as <b>Backpropagation through time (BPTT).</b> </p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Backpropagation Through Time (BPTT)"; //title
window["msg"+k] = `
<p>In RNN the neural network is in an ordered fashion and since in the ordered network each variable is computed one at a time in a specified order like first h1 then h2 then h3 so on. Hence we will apply backpropagation throughout all these hidden time states sequentially.</p>
${ShowImage('46.webp')}
<ul>
<li><span>L(θ)(loss function) depends on h3</span></li>
<li><span>h3 in turn depends on h2 and W</span></li>
<li><span>h2 in turn depends on h1 and W</span></li>
<li><span>h1 in turn depends on h0 and W</span></li>
<li><span>where h0 is a constant starting state.<br>
</span></li>
</ul>
${ShowImage('47.svg')}<br/>
<p>For simplicity of this equation, we will apply backpropagation on only one row</p>
${ShowImage('48.svg')}<br/>
<p>We already know how to compute this one as it is the same as any simple deep neural network backpropagation.</p>
${ShowImage('49.svg')}<br/>
<p>However, we will see how to apply backpropagation to this term <span>${ShowImage('50.svg')}</span></p>
<pre><span>As we know h3 = σ(Wh2 + b)
</span></pre>
<p>And In such an ordered network, we can’t compute ${ShowImage('50.svg')} by simply treating h3 as a constant because as it also depends on W. the total derivative ${ShowImage('50.svg')} has two parts:</p>
<ol>
<li><b>Explicit:</b>${ShowImage('51.svg')}<br/> treating all other inputs as constant</li>
<li><b>Implicit:</b>Summing over all indirect paths from h<sub>3</sub> to W</li>
</ol>
<p><b>Let us see how to do this</b></p>
${ShowImage('52.svg')}
<p dir="ltr"><b><strong>For simplicity, we will short-circuit some of the paths</strong></b></p>
${ShowImage('53.svg')}
<p dir="ltr"><b><strong>Finally, we have</strong></b></p>
${ShowImage('54.svg')}
<p dir="ltr"><b>Where,</b></p>
${ShowImage('55.svg')}
<p dir="ltr"><b>Hence</b></p>
${ShowImage('56.svg')}
<p>This algorithm is called backpropagation through time (BPTT) as we backpropagate over all previous time steps</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Issues of Standard RNNs"; //title
window["msg"+k] = `
<ol>
<li><b><strong>Vanishing Gradient: </strong></b><span>Text generation, machine translation, and stock market prediction are just a few examples of the time-dependent and sequential data problems that can be modelled with recurrent neural networks. You will discover, though, that the gradient problem makes training RNN difficult.</span></li>
<li><b><strong>Exploding Gradient:</strong></b><span> An Exploding Gradient occurs when a neural network is being trained and the slope tends to grow exponentially rather than decay. Large error gradients that build up during training lead to very large updates to the neural network model weights, which is the source of this issue.</span></li>
</ol>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Training through RNN"; //title
window["msg"+k] = `
<ol>
<li value="1"><span>A single-time step of the input is provided to the network.</span></li>
<li value="2"><span>Then calculate its current state using a set of current input and the previous state.</span></li>
<li value="3"><span>The current ht becomes ht-1 for the next time step.</span></li>
<li value="4"><span>One can go as many time steps according to the problem and join the information from all the previous states.</span></li>
<li value="5"><span>Once all the time steps are completed the final current state is used to calculate the output.</span></li>
<li value="6"><span>The output is then compared to the actual output i.e the target output and the error is generated.</span></li>
<li value="7"><span>The error is then back-propagated to the network to update the weights and hence the network (RNN) is trained using Backpropagation through time.</span></li>
</ol>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Advantages and Disadvantages of Recurrent Neural Network"; //title
window["msg"+k] = `
<h3>Advantages</h3>
<ol>
<li><span>An RNN remembers each and every piece of information through time. It is useful in time series prediction only because of the feature to remember previous inputs as well. This is called </span>Long Short Term Memory.</li>
<li>Recurrent neural networks are even used with convolutional layers to extend the effective pixel neighborhood.</li>
</ol>

<h3>Disadvantages</h3>
<ol>
<li>Gradient vanishing and exploding problems.</li>
<li><span>Training an RNN is a very difficult task.</span></li>
<li><span>It cannot process very long sequences if using tanh or relu as an activation function.</span></li>
</ol>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Applications of Recurrent Neural Network"; //title
window["msg"+k] = `
<ol>
<li><span>Language Modelling and Generating Text</span></li>
<li><span>Speech Recognition</span></li>
<li><span>Machine Translation</span></li>
<li><span>Image Recognition, Face detection</span></li>
<li><span>Time series Forecasting</span></li>
</ol>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Variation Of Recurrent Neural Network (RNN)"; //title
window["msg"+k] = `
<p>To overcome the problems like vanishing gradient and exploding gradient descent several new advanced versions of RNNs are formed some of these are as;</p>
<ol>
<li><span>Bidirectional Neural Network (BiNN)</span></li>
<li><span>Long Short-Term Memory (LSTM)</span></li>
</ol>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Bidirectional Neural Network (BiNN)"; //title
window["msg"+k] = `
<p>A BiNN is a variation of a Recurrent Neural Network in which the input information flows in both direction and then the output of both direction are combined to produce the input. BiNN is useful in situations when the context of the input is more important such as Nlp tasks and Time-series analysis problems.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Long Short-Term Memory (LSTM)"; //title
window["msg"+k] = `
<p>Long Short-Term Memory works on the read-write-and-forget principle where given the input information network reads and writes the most useful information from the data and it forgets about the information which is not important in predicting the output. For doing this three new gates are introduced in the RNN. In this way, only the selected information is passed through the network.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Difference between RNN and Simple Neural Network"; //title
window["msg"+k] = `
<p dir="ltr" style="text-align: justify"><span>RNN is considered to be the better version of deep neural when the data is sequential. There are significant differences between the RNN and deep neural networks &nbsp;they are listed as:&nbsp;</span></p>
<table>
<colgroup>
<col>
<col></colgroup>
<thead></thead>
<tbody>
<tr>
<td class="GFGEditorTheme__tableCell" style="width: 350px"><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Recurrent Neural Network &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></td>
<td class="GFGEditorTheme__tableCell" style="width: 350px"><span>&nbsp; &nbsp; &nbsp; Deep Neural Network &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></td>
</tr>
<tr>
<td class="GFGEditorTheme__tableCell" style="width: 350px"><span>Weights are same across all the layers number of a Recurrent Neural Network&nbsp;</span></td>
<td class="GFGEditorTheme__tableCell" style="width: 350px"><span>Weights are different for each layer of the network&nbsp;</span></td>
</tr>
<tr>
<td class="GFGEditorTheme__tableCell" style="width: 350px"><span>Recurrent Neural Networks are used when the data is sequential and the number of inputs is not predefined.</span></td>
<td class="GFGEditorTheme__tableCell" style="width: 350px"><span>A Simple Deep Neural network does not have any special method for sequential data also here the the number of inputs is fixed&nbsp;</span></td>
</tr>
<tr>
<td class="GFGEditorTheme__tableCell" style="width: 350px"><span>The Numbers of parameter in the RNN are higher than in simple DNN</span></td>
<td class="GFGEditorTheme__tableCell" style="width: 350px"><span>The Numbers of Parameter are lower than RNN</span></td>
</tr>
<tr>
<td class="GFGEditorTheme__tableCell" style="width: 350px"><span>Exploding and vanishing gradients is the &nbsp;the major drawback of RNN</span></td>
<td class="GFGEditorTheme__tableCell" style="width: 350px"><span>These problems also occur in DNN but these are not the major problem with DNN</span></td>
</tr>
</tbody>
</table>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "RNN Code Implementation"; //title
window["msg"+k] = `
<p dir="ltr" style="text-align: start"><b><strong>Imported libraries:</strong></b></p>
${FullCode(`
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import SimpleRNN, Dense`)}
<p dir="ltr" style="text-align: start"><b><strong>Input Generation:</strong></b></p>
<p dir="ltr" style="text-align: start"><span>Generated some example data using text.</span></p>
${FullCode(`
text = "This is GeeksforGeeks a software training institute"
chars = sorted(list(set(text)))
char_to_index = {char: i for i, char in enumerate(chars)}
index_to_char = {i: char for i, char in enumerate(chars)}`)}
<p>Created input sequences and corresponding labels for further implementation.</p>
${FullCode(`
seq_length = 3
sequences = []
labels = []
 
for i in range(len(text) - seq_length):
    seq = text[i:i+seq_length]
    label = text[i+seq_length]
    sequences.append([char_to_index[char] for char in seq])
    labels.append(char_to_index[label])`)}
<p>Converted sequences and labels into numpy arrays and used one-hot encoding to convert text into vector.</p>
${FullCode(`
X = np.array(sequences)
y = np.array(labels)
 
X_one_hot = tf.one_hot(X, len(chars))
y_one_hot = tf.one_hot(y, len(chars))`)}
<p dir="ltr"><b><strong>Model Building:</strong></b></p>
<p>Build RNN Model using <b>‘relu’</b> and <b>‘softmax‘</b> activation function.</p>
${FullCode(`
model = Sequential()
model.add(SimpleRNN(50, input_shape=(seq_length, len(chars)), activation='relu'))
model.add(Dense(len(chars), activation='softmax'))`)}
<p dir="ltr" style="text-align: start"><b><strong>Model Compilation:</strong></b></p>
<p>The model.compile line builds the neural network for training by specifying the optimizer (Adam), the loss function (categorical crossentropy), and the training metric (accuracy).</p>
${FullCode(`
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])`)}
<p dir="ltr" style="text-align: start"><b><strong>Model Training:</strong></b></p>
<p>Using the input sequences (X_one_hot) and corresponding labels (y_one_hot) for 10 epochs, the model is trained using the model.fit line, which optimises the model parameters to minimise the categorical crossentropy loss.</p>
${FullCode(`
model.fit(X_one_hot, y_one_hot, epochs=10)`)}
${OutputCode(`
Epoch 1/100
2/2 [==============================] - 2s 54ms/step - loss: 2.8327 - accuracy: 0.0000e+00
Epoch 2/100
2/2 [==============================] - 0s 16ms/step - loss: 2.8121 - accuracy: 0.0000e+00
Epoch 3/100
2/2 [==============================] - 0s 16ms/step - loss: 2.7944 - accuracy: 0.0208
Epoch 4/100
2/2 [==============================] - 0s 16ms/step - loss: 2.7766 - accuracy: 0.0208
Epoch 5/100
2/2 [==============================] - 0s 15ms/step - loss: 2.7596 - accuracy: 0.0625
Epoch 6/100
2/2 [==============================] - 0s 13ms/step - loss: 2.7424 - accuracy: 0.0833
Epoch 7/100
2/2 [==============================] - 0s 13ms/step - loss: 2.7254 - accuracy: 0.1042
Epoch 8/100
2/2 [==============================] - 0s 12ms/step - loss: 2.7092 - accuracy: 0.1042
Epoch 9/100
2/2 [==============================] - 0s 11ms/step - loss: 2.6917 - accuracy: 0.1458
Epoch 10/100
2/2 [==============================] - 0s 12ms/step - loss: 2.6742 - accuracy: 0.1667
`)}
<p dir="ltr" style="text-align: start"><b><strong>Model Prediction:</strong></b></p>
<p dir="ltr" style="text-align: start"><span>Generated text using pre-trained model.</span></p>
${FullCode(`
start_seq = "This is G"
generated_text = start_seq
 
for i in range(50):
    x = np.array([[char_to_index[char] for char in generated_text[-seq_length:]]])
    x_one_hot = tf.one_hot(x, len(chars))
    prediction = model.predict(x_one_hot)
    next_index = np.argmax(prediction)
    next_char = index_to_char[next_index]
    generated_text += next_char
 
print("Generated Text:")
print(generated_text)`)}
${OutputCode(`
1/1 [==============================] - 1s 517ms/step
1/1 [==============================] - 0s 75ms/step
1/1 [==============================] - 0s 101ms/step
...
1/1 [==============================] - 0s 21ms/step
1/1 [==============================] - 0s 20ms/step
1/1 [==============================] - 0s 20ms/step
Generated Text:
This is Geeks a software training instituteais is is is is 
`)}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Frequently Asked Questions (FAQs):"; //title
window["msg"+k] = `
<h3>Q. 1 What is RNN?</h3>
<p>Ans. Recurrent neural networks (RNNs) are a type of artificial neural network that are primarily utilised in NLP (natural language processing) and speech recognition. RNN is utilised in deep learning and in the creation of models that simulate neuronal activity in the human brain.</p>

<h3>Q. 2 Which type of problem can solved by RNN?</h3>
<p>Ans. Modelling time-dependent and sequential data problems, like text generation, machine translation, and stock market prediction, is possible with recurrent neural networks. Nevertheless, you will discover that the gradient problem makes RNN difficult to train. The vanishing gradients issue affects RNNs.</p>

<h3>Q. 3 What are the types of RNN?</h3>
<p>
Ans. There are four types of RNN are:
<ul>
<li>One to One</li>
<li>One to Many</li>
<li>Many to One</li>
<li>Many to Many</li>
</ul>
</p>

<h3>Q. 4 What is the differences between RNN and CNN?</h3>
<p>Ans. The following are the key distinctions between CNNs and RNNs: CNNs are frequently employed in the solution of problems involving spatial data, like images. Text and video data that is temporally and sequentially organised is better analysed by RNNs. RNNs and CNNs are not designed alike.</p>
`; //message

totalLevel = k;