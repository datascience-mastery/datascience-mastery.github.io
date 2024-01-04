//Convolution Neural Network
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Convolution Neural Network (CNN)"; //title
window["msg"+k] = `
<p dir="ltr"><span>A </span><b><strong>Convolutional Neural Network (CNN)</strong></b><span> is a type of Deep Learning neural network architecture commonly used in Computer Vision. Computer vision is a field of Artificial Intelligence that enables a computer to understand and interpret the image or visual data.&nbsp;</span></p>
${ShowImage('28.png')}
<p dir="ltr"><span>When it comes to Machine Learning, </span><b>Artificial Neural Networks</b><span> perform really well. Neural Networks are used in various datasets like images, audio, and text. Different types of Neural Networks are used for different purposes, for example for predicting the sequence of words we use </span><b><strong>Recurrent Neural Networks</strong></b><span> more precisely an </span><b>LSTM</b><span>, similarly for image classification we use Convolution Neural networks. In this blog, we are going to build a basic building block for CNN.</span></p>
<p dir="ltr"><span>In a regular Neural Network there are three types of layers:</span></p>
<ol>
<li value="1"><b><strong>Input Layers:</strong></b><span> It’s the layer in which we give input to our model. The number of neurons in this layer is equal to the total number of features in our data (number of pixels in the case of an image).</span></li>
<li value="2"><b><strong>Hidden Layer:</strong></b><span> The input from the Input layer is then fed into the hidden layer. There can be many hidden layers depending on our model and data size. Each hidden layer can have different numbers of neurons which are generally greater than the number of features. The output from each layer is computed by matrix multiplication of the output of the previous layer with learnable weights of that layer and then by the addition of learnable biases followed by activation function which makes the network nonlinear.</span></li>
<li value="3"><b><strong>Output Layer:</strong></b><span> The output from the hidden layer is then fed into a logistic function like sigmoid or softmax which converts the output of each class into the probability score of each class.</span></li>
</ol>
<p dir="ltr"><span>The data is fed into the model and output from each layer is obtained from the above step is called </span><b><strong>feedforward</strong></b><span>, we then calculate the error using an error function, some common error functions are cross-entropy, square loss error, etc. The error function measures how well the network is performing. After that, we backpropagate into the model by calculating the derivatives. This step is called </span><b><strong>Backpropagation</strong></b><span> which basically is used to minimize the loss.</span></p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = ""; //title
window["msg"+k] = `
<p dir="ltr"><span>Convolutional Neural Network (CNN) is the extended version of </span><b><span>artificial neural networks (ANN)</span></b><span> which is predominantly used to extract the feature from the grid-like matrix dataset. For example visual datasets like images or videos where data patterns play an extensive role.</span></p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "CNN architecture"; //title
window["msg"+k] = `
<p dir="ltr"><span>Convolutional Neural Network consists of multiple layers like the input layer, Convolutional layer, Pooling layer, and fully connected layers.&nbsp;</span></p>
${ShowImage('29.png')}
<p dir="ltr"><span>The Convolutional layer applies filters to the input image to extract features, the Pooling layer downsamples the image to reduce computation, and the fully connected layer makes the final prediction. The network learns the optimal filters through backpropagation and gradient descent.</span></p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "How Convolutional Layers works"; //title
window["msg"+k] = `
<p dir="ltr"><span>Convolution Neural Networks or covnets are neural networks that share their parameters. Imagine you have an image. It can be represented as a cuboid having its length, width (dimension of the image), and height (i.e the channel as images generally have red, green, and blue channels).&nbsp;</span></p>
${ShowImage('30.jpg')}
<p dir="ltr"><span>Now imagine taking a small patch of this image and running a small neural network, called a filter or kernel on it, with say, K outputs and representing them vertically. Now slide that neural network across the whole image, as a result, we will get another image with different widths, heights, and depths. Instead of just R, G, and B channels now we have more channels but lesser width and height. This operation is called </span><b><strong>Convolution</strong></b><span>. If the patch size is the same as that of the image it will be a regular neural network. Because of this small patch, we have fewer weights.&nbsp;</span></p>
${ShowImage('31.png')}
<p dir="ltr"><span>Now let’s talk about a bit of mathematics that is involved in the whole convolution process.&nbsp;</span></p>
<ul>
<li value="1"><span>Convolution layers consist of a set of learnable filters (or kernels) having small widths and heights and the same depth as that of input volume (3 if the input layer is image input).</span></li>
<li value="2"><span>For example, if we have to run convolution on an image with dimensions 34x34x3. The possible size of filters can be axax3, where ‘a’ can be anything like 3, 5, or 7 but smaller as compared to the image dimension.</span></li>
<li value="3">During the forward pass, we slide each filter across the whole input volume step by step where each step is called <strong>stride</strong><span> (which can have a value of 2, 3, or even 4 for high-dimensional images) and compute the dot product between the kernel weights and patch from input volume.</span></li>
<li value="4"><span>As we slide our filters we’ll get a 2-D output for each filter and we’ll stack them together as a result, we’ll get output volume having a depth equal to the number of filters. The network will learn all the filters.</span></li>
</ul>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Layers used to build ConvNets"; //title
window["msg"+k] = `
<p dir="ltr"><span>A complete Convolution Neural Networks architecture is also known as covnets. A covnets is a sequence of layers, and every layer transforms one volume to another through a differentiable function.&nbsp;</span><br><b><strong>Types of layers:</strong></b><span>&nbsp;datasets</span><br><span>Let’s take an example by running a covnets on of image of dimension 32 x 32 x 3.&nbsp;</span></p>
<ul>
<li value="1"><b><strong>Input Layers:</strong></b><span> It’s the layer in which we give input to our model. In CNN, Generally, the input will be an image or a sequence of images. This layer holds the raw input of the image with width 32, height 32, and depth 3.</span></li>
<li value="2"><b><strong>Convolutional Layers: </strong></b><span>This is the layer, which is used to extract the feature from the input dataset. It applies a set of learnable filters known as the kernels to the input images. The filters/kernels are smaller matrices usually 2×2, 3×3, or 5×5 shape. it slides over the input image data and computes the dot product between kernel weight and the corresponding input image patch. The output of this layer is referred ad feature maps. Suppose we use a total of 12 filters for this layer we’ll get an output volume of dimension 32 x 32 x 12.</span></li>
<li value="3"><b><strong>Activation Layer: </strong></b><span>By adding an activation function to the output of the preceding layer, activation layers add nonlinearity to the network. it will apply an element-wise activation function to the output of the convolution layer. Some common activation functions are </span><b><strong>RELU</strong></b><span>: max(0, x), &nbsp;</span><b><strong>Tanh</strong></b><span>, </span><b><strong>Leaky RELU</strong></b><span>, etc. The volume remains unchanged hence output volume will have dimensions 32 x 32 x 12.</span></li>
<li value="4"><b><strong>Pooling layer:</strong></b><span> This layer is periodically inserted in the covnets and its main function is to reduce the size of volume which makes the computation fast reduces memory and also prevents overfitting. Two common types of pooling layers are </span><b><strong>max pooling</strong></b><span> and </span><b><strong>average pooling</strong></b><span>. If we use a max pool with 2 x 2 filters and stride 2, the resultant volume will be of dimension 16x16x12.&nbsp;</span></li>
</ul>
${ShowImage('32.png')}
<ul>
<li value="1"><b><strong>Flattening: </strong></b><span>The resulting feature maps are flattened into a one-dimensional vector after the convolution and pooling layers so they can be passed into a completely linked layer for categorization or regression.</span></li>
<li value="2"><b><strong>Fully Connected Layers: </strong></b><span>It takes the input from the previous layer and computes the final classification or regression task.</span></li>
</ul>
${ShowImage('33.jpg')}
<ul>
<li value="1"><b><strong>Output Layer:</strong></b><span> The output from the fully connected layers is then fed into a logistic function for classification tasks like sigmoid or softmax which converts the output of each class into the probability score of each class.</span></li>
</ul>
`; //message


totalLevel = k;