//type of DL
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "Type of DL"; //title
window["msg"+k] = `
<p>Deep Learning models are able to automatically learn features from the data, which makes them well-suited for tasks such as image recognition, speech recognition, and natural language processing. The most widely used architectures in deep learning are feedforward neural networks, convolutional neural networks (CNNs), and recurrent neural networks (RNNs).</p>
<p><b>1. Feedforward neural networks (FNNs)</b> are the simplest type of ANN, with a linear flow of information through the network. FNNs have been widely used for tasks such as image classification, speech recognition, and natural language processing.</p>
<p><b>2. Convolutional Neural Networks (CNNs)</b> are specifically for image and video recognition tasks. CNNs are able to automatically learn features from the images, which makes them well-suited for tasks such as image classification, object detection, and image segmentation.</p>
<p><b>3. Recurrent Neural Networks (RNNs) </b>are a type of neural network that is able to process sequential data, such as time series and natural language. RNNs are able to maintain an internal state that captures information about the previous inputs, which makes them well-suited for tasks such as speech recognition, natural language processing, and language translation.</p>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Application of DL"; //title
window["msg"+k] = `
${ShowImage('4.webp')}
`; //message

totalLevel = k;