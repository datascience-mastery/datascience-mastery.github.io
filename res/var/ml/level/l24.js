//Decision Tree
k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "What is a Decision Tree?"; //title
window["msg"+k] = `
<p>A decision tree is&nbsp;<strong>a non-parametric supervised learning algorithm for classification and regression tasks</strong>. It has a hierarchical tree structure consisting of a root node, branches, internal nodes, and leaf nodes. Decision trees are used for classification and regression tasks, providing easy-to-understand models.</p>
<p>A decision tree is a hierarchical model used in decision support that depicts decisions and their potential outcomes, incorporating chance events, resource expenses, and utility. This algorithmic model utilizes conditional control statements and is non-parametric, supervised learning, useful for both classification and regression tasks. The tree structure is comprised of a root node, branches, internal nodes, and leaf nodes, forming a hierarchical, tree-like structure.</p>
<p>It is a tool that has applications spanning several different areas. Decision trees can be used for classification as well as regression problems. The name itself suggests that it uses a flowchart like a tree structure to show the predictions that result from a series of feature-based splits. It starts with a root node and ends with a decision made by leaves.</p>
${ShowImage('95.png')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Decision Tree Terminologies"; //title
window["msg"+k] = `
<p>Before learning more about decision trees let’s get familiar with some of the terminologies: </p>
<ul>
<li><em><strong>Root Node</strong>: </em>The initial node at the beginning of a decision tree, where the entire population or dataset starts dividing based on various features or conditions.</li>
<li><em><strong>Decision Nodes</strong>:</em> Nodes resulting from the splitting of root nodes are known as decision nodes. These nodes represent intermediate decisions or conditions within the tree.</li>
<li><em><strong>Leaf Nodes</strong>:</em> Nodes where further splitting is not possible, often indicating the final classification or outcome. Leaf nodes are also referred to as terminal nodes.</li>
<li><em><strong>Sub-Tree</strong>:</em> Similar to a subsection of a graph being called a sub-graph, a sub-section of a decision tree is referred to as a sub-tree. It represents a specific portion of the decision tree.</li>
<li><strong><em>Pruning</em></strong>: The process of removing or cutting down specific nodes in a decision tree to prevent overfitting and simplify the model.</li>
<li><em><strong>Branch / Sub-Tree</strong>:</em> A subsection of the entire decision tree is referred to as a branch or sub-tree. It represents a specific path of decisions and outcomes within the tree.</li>
<li><em><strong>Parent and Child Node</strong>:</em> In a decision tree, a node that is divided into sub-nodes is known as a parent node, and the sub-nodes emerging from it are referred to as child nodes. The parent node represents a decision or condition, while the child nodes represent the potential outcomes or further decisions based on that condition.</li>
</ul>
${ShowImage('96.png')}
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Example of Decision Tree"; //title
window["msg"+k] = `
<p>Let’s understand decision trees with the help of an example: </p>
${ShowImage('97.png')}
<p>Decision trees are upside down which means the root is at the top and then this root is split into various several nodes. Decision trees are nothing but a bunch of if-else statements in layman terms. It checks if the condition is true and if it is then it goes to the next node attached to that decision.</p>
<p>In the below diagram the tree will first ask what is the weather? Is it sunny, cloudy, or rainy? If yes then it will go to the next feature which is humidity and wind. It will again check if there is a strong wind or weak, if it’s a weak wind and it’s rainy then the person may go and play. </p>
${ShowImage('98.png')}
<p>Did you notice anything in the above flowchart? We see that if the <i>weather is cloudy</i> then we must go to play. Why didn’t it split more? Why did it stop there?</p>
<p>To answer this question, we need to know about few more concepts like entropy, information gain, and Gini index. But in simple terms, I can say here that the output for the training dataset is always yes for cloudy weather, since there is no disorderliness here we don’t need to split the node further.</p>
<p>The goal of machine learning is to decrease uncertainty or disorders from the dataset and for this, we use decision trees.</p>
<p>Now you must be thinking how do I know what should be the root node? what should be the decision node? when should I stop splitting? To decide this, there is a metric called “Entropy” which is the amount of uncertainty in the dataset.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Decision Tree Assumptions"; //title
window["msg"+k] = `
<p>Several assumptions are made to build effective models when creating decision trees. These assumptions help guide the tree’s construction and impact its performance. Here are some common assumptions and considerations when creating decision trees:</p>
<h3>Binary Splits</h3>
<p>Decision trees typically make binary splits, meaning each node divides the data into two subsets based on a single feature or condition. This assumes that each decision can be represented as a binary choice.</p>
<h3>Recursive Partitioning</h3>
<p>Decision trees use a recursive partitioning process, where each node is divided into child nodes, and this process continues until a stopping criterion is met. This assumes that data can be effectively subdivided into smaller, more manageable subsets.</p>
<h3>Feature Independence</h3>
<p>Decision trees often assume that the features used for splitting nodes are independent. In practice, feature independence may not hold, but decision trees can still perform well if features are correlated.</p>
<h3>Homogeneity</h3>
<p>Decision trees aim to create homogeneous subgroups in each node, meaning that the samples within a node are as similar as possible regarding the target variable. This assumption helps in achieving clear decision boundaries.</p>
<h3>Top-Down Greedy Approach</h3>
<p>Decision trees are constructed using a top-down, greedy approach, where each split is chosen to maximize information gain or minimize impurity at the current node. This may not always result in the globally optimal tree.</p>
<h3>Categorical and Numerical Features</h3>
<p>Decision trees can handle both categorical and numerical features. However, they may require different splitting strategies for each type.</p>
<h3>Overfitting</h3>
<p>Decision trees are prone to overfitting when they capture noise in the data. Pruning and setting appropriate stopping criteria are used to address this assumption.</p>
<h3>Impurity Measures</h3>
<p>Decision trees use impurity measures such as Gini impurity or entropy to evaluate how well a split separates classes. The choice of impurity measure can impact tree construction.</p>
<h3>No Missing Values</h3>
<p>Decision trees assume that there are no missing values in the dataset or that missing values have been appropriately handled through imputation or other methods.</p>
<h3>Equal Importance of Features</h3>
<p>Decision trees may assume equal importance for all features unless feature scaling or weighting is applied to emphasize certain features.</p>
<h3>No Outliers</h3>
<p>Decision trees are sensitive to outliers, and extreme values can influence their construction. Preprocessing or robust methods may be needed to handle outliers effectively.</p>
<h3>Sensitivity to Sample Size</h3>
<p>Small datasets may lead to overfitting, and large datasets may result in overly complex trees. The sample size and tree depth should be balanced.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Entropy"; //title
window["msg"+k] = `
<p>Entropy is nothing but the uncertainty in our dataset or measure of disorder. Let me try to explain this with the help of an example.</p>
<p>Suppose you have a group of friends who decides which movie they can watch together on Sunday. There are 2 choices for movies, one is <i><b>“Lucy”</b></i> and the second is <i><b>“Titanic”</b></i> and now everyone has to tell their choice. After everyone gives their answer we see that <i>“Lucy” gets 4 votes</i> and <i>“Titanic” gets 5 votes</i>. Which movie do we watch now? Isn’t it hard to choose 1 movie now because the votes for both the movies are somewhat equal.</p>
<p>This is exactly what we call disorderness, there is an equal number of votes for both the movies, and we can’t really decide which movie we should watch. It would have been much easier if the votes for “Lucy” were 8 and for “Titanic” it was 2. Here we could easily say that the majority of votes are for “Lucy” hence everyone will be watching this movie.</p>
<p>In a decision tree, the output is mostly “yes” or “no”</p>
<p>The formula for Entropy is shown below:</p>
${ShowImage('99.png')}
<p>Here,</p>
<ul>
<li>p<sub>+</sub> is the probability of positive class</li>
<li>p<sub>–</sub> is the probability of negative class</li>
<li>S is the subset of the training example</li>
</ul>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "How do Decision Trees use Entropy?"; //title
window["msg"+k] = `
<p><span>Now we know what entropy is and what is its formula, Next, we need to know that how exactly does it work in this algorithm.</span></p>
<p><span>Entropy basically measures the impurity of a node. Impurity is the degree of randomness; it tells how random our data is. A </span><b>pure sub-split</b><span> means that either you should be getting “yes”, or you should be getting “no”.</span></p>
<p><span>Suppose a </span><i><span>feature</span></i><span> has 8 “yes” and 4 “no” initially, after the first split the left node</span><i><span> gets 5 ‘yes’ and 2 ‘no’</span></i><span>whereas right node</span><i><span> gets 3 ‘yes’ and 2 ‘no’.</span></i></p>
<p><span>We see here the split is not pure, why? Because we can still see some negative classes in both the nodes. In order to make a decision tree, we need to calculate the impurity of each split, and when the purity is 100%, we make it as a leaf node.</span></p>
<p><span>To check the impurity of feature 2 and feature 3 we will take the help for Entropy formula.</span></p>
${ShowImage('100.png')}
${ShowImage('101.png')}
<p>For feature 3,</p>
${ShowImage('102.png')}
<p><span>We can clearly see from the tree itself that left node has low entropy or more purity than right node since left node has a greater number of “yes” and it is easy to decide here.</span></p>
<p><span>Always remember that the higher the Entropy, the lower will be the purity and the higher will be the impurity.</span></p>
<p><span>As mentioned earlier the goal of machine learning is to decrease the uncertainty or impurity in the dataset, here by using the entropy we are getting the impurity of a particular node, we don’t know if the parent entropy or the entropy of a particular node has decreased or not.</span></p>
<p><span>For this, we bring a new metric called <b>“Information gain”</b> which tells us how much the parent entropy has decreased after splitting it with some feature.</span></p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Information Gain"; //title
window["msg"+k] = `
<p>Information gain measures the reduction of uncertainty given some feature and it is also a deciding factor for which attribute should be selected as a decision node or root node.</p>
${ShowImage('103.png')}
<p>It is just entropy of the full dataset – entropy of the dataset given some feature.</p>
<p>To understand this better let’s consider an example:Suppose our entire population has a total of 30 instances. The dataset is to predict whether the person will go to the gym or not. Let’s say 16 people go to the gym and 14 people don’t</p>
<p>Now we have two features to predict whether he/she will go to the gym or not.</p>
<ul>
<li>Feature 1 is <b>“Energy”</b> which takes two values <i>“high” and “low”</i></li>
<li>Feature 2 is <b>“Motivation”</b> which takes 3 values <i>“No motivation”, “Neutral” and “Highly motivated”.</i></li>
</ul>
<p>Let’s see how our decision tree will be made using these 2 features. We’ll use information gain to decide which feature should be the root node and which feature should be placed after the split.</p>
${ShowImage('104.png')}
<p>Let’s calculate the entropy</p>
${ShowImage('105.png')}
<p>To see the weighted average of entropy of each node we will do as follows:</p>
${ShowImage('106.png')}
<p>Now we have the value of E(Parent) and E(Parent|Energy), information gain will be:</p>
${ShowImage('107.png')}
<p>Our parent entropy was near 0.99 and after looking at this value of information gain, we can say that the entropy of the dataset will decrease by 0.37 if we make “Energy” as our root node.</p>
<p>Similarly, we will do this with the other feature “Motivation” and calculate its information gain.</p> 
${ShowImage('108.png')}
<p>Let’s calculate the entropy here:</p>
${ShowImage('109.png')}
<p>To see the weighted average of entropy of each node we will do as follows:</p>
${ShowImage('110.png')}
<p>Now we have the value of E(Parent) and E(Parent|Motivation), information gain will be:</p>
${ShowImage('111.png')}
<p>We now see that the “Energy” feature gives more reduction which is 0.37 than the “Motivation” feature. Hence we will select the feature which has the highest information gain and then split the node based on that feature.</p>
<p>In this example “Energy” will be our root node and we’ll do the same for sub-nodes. Here we can see that when the energy is “high” the entropy is low and hence we can say a person will definitely go to the gym if he has high energy, but what if the energy is low? We will again split the node based on the new feature which is “Motivation”.</p>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "When to Stop Splitting?"; //title
window["msg"+k] = `
<p>You must be asking this question to yourself that when do we stop growing our tree? Usually, real-world datasets have a large number of features, which will result in a large number of splits, which in turn gives a huge tree. Such trees take time to build and can lead to overfitting. That means the tree will give very good accuracy on the training dataset but will give bad accuracy in test data.</p>
<p>There are many ways to tackle this problem through hyperparameter tuning. We can set the maximum depth of our decision tree using the<i><b>max_depth</b></i> parameter. The more the value of <i><b>max_depth</b></i>, the more complex your tree will be. The training error will off-course decrease if we increase the <i><b>max_depth</b></i> value but when our test data comes into the picture, we will get a very bad accuracy. Hence you need a value that will not overfit as well as underfit our data and for this, you can use GridSearchCV.</p>
<p>Another way is to set the minimum number of samples for each spilt. It is denoted by <i><b>min_samples_split</b></i>. Here we specify the minimum number of samples required to do a spilt. For example, we can use a minimum of 10 samples to reach a decision. That means if a node has less than 10 samples then using this parameter, we can stop the further splitting of this node and make it a leaf node.</p>
<p>There are more hyperparameters such as :</p>
<ul>
<li><i><b>min_samples_leaf</b></i> – represents the minimum number of samples required to be in the leaf node. The more you increase the number, the more is the possibility of overfitting.</li>
<li><i><b>max_features</b></i> – it helps us decide what number of features to consider when looking for the best split.</li>
</ul>
`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Pruning"; //title
window["msg"+k] = `
<p>Pruning is another method that can help us avoid overfitting. It helps in improving the performance of the tree by cutting the nodes or sub-nodes which are not significant. Additionally, it removes the branches which have very low importance.</p>
<p>There are mainly 2 ways for pruning:</p>
<ul>
<li><b>Pre-pruning</b> – we can stop growing the tree earlier, which means we can prune/remove/cut a node if it has low importance <b>while growing</b> the tree.</li>
<li><b>Post-pruning</b> – once our <b>tree is built to its depth</b>, we can start pruning the nodes based on their significance.</li>
</ul>

`; //message

k++;
window["type"+k] = "message";
window["ti"+k] = "Decision Tree Code Implementation"; //title
window["msg"+k] = `
Lets create a model using Decision Tree Classifier.
${FullCode(`
# Import necessary libraries
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn import metrics

# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create a decision tree classifier
clf = DecisionTreeClassifier()

# Train the classifier on the training set
clf.fit(X_train, y_train)

# Make predictions on the test set
y_pred = clf.predict(X_test)

# Evaluate the performance of the model
accuracy = metrics.accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy}")

# You can also visualize the decision tree (optional)
# Note: You need to have the 'graphviz' library installed for this
# You can install it using: pip install graphviz
from sklearn.tree import export_graphviz
import graphviz

dot_data = export_graphviz(clf, out_file=None, 
                           feature_names=iris.feature_names,  
                           class_names=iris.target_names,  
                           filled=True, rounded=True,  
                           special_characters=True)

graph = graphviz.Source(dot_data)
graph.render("iris_decision_tree", format="png", cleanup=True)

# To view the decision tree, you can open the generated 'iris_decision_tree.png' file`)}
${Note(`${WordCode('DecisionTreeClassifier()')} is for Classification problems. For regression, we use ${WordCode('DecisionTreeRegressor()')}`)}
${OutputCode(`
Accuracy: 1.0`)}
${ShowImage('112.png')}
`; //message

totalLevel = k;