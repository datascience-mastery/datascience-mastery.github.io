k=0;
k++;
window["type"+k] = "word";
window["q"+k] = `What is the primary purpose of One Hot Encoding in machine learning?`;
window["o1"+k] = "To create a backup of the dataset";
window["o2"+k] = "To convert categorical variables into numerical format";
window["o3"+k] = "To remove outliers from the data";
window["o4"+k] = "To reduce the dimensionality of the dataset";
window["ans"+k] = 2;

k++;
window["type"+k] = "word";
window["q"+k] = "What issue can arise if One Hot Encoding leads to increased dimensionality?";
window["o1"+k] = "Improved model performance";
window["o2"+k] = "Reduced sparsity in the data";
window["o3"+k] = "Elimination of outliers";
window["o4"+k] = "Slower training of the model";
window["ans"+k] = 4;

k++;
window["type"+k] = "word";
window["q"+k] = "How can you use the pandas library to perform One Hot Encoding?";
window["o1"+k] = `By using the ${WordCode('encode()')} function`;
window["o2"+k] = `By applying the ${WordCode('hot_encode()')} method`;
window["o3"+k] = `By utilizing the ${WordCode('get_dummies()')} function`;
window["o4"+k] = `By using the ${WordCode('numerical_encode()')} method`;
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = "Which library provides the OneHotEncoder function for One Hot Encoding in Python?";
window["o1"+k] = "NumPy";
window["o2"+k] = "TensorFlow";
window["o3"+k] = "Scikit-learn";
window["o4"+k] = "Matplotlib";
window["ans"+k] = 3;

totalLevel = k;