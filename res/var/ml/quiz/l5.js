k=0;

k++;
window["type"+k] = "word";
window["q"+k] = `What is the purpose of Percentiles in statistics?`;
window["o1"+k] = "To find the average value";
window["o2"+k] = "To describe the spread of values";
window["o3"+k] = "To identify the middle point";
window["o4"+k] = "To indicate the value below which a given percentage of values fall";
window["ans"+k] = 4;

k++;
window["type"+k] = "word";
window["q"+k] = "How is the 75th percentile interpreted?";
window["o1"+k] = "75% of values are greater than the specified value";
window["o2"+k] = "75% of values are equal to the specified value";
window["o3"+k] = "75% of values are lower than the specified value";
window["o4"+k] = "75% of values are exactly at the specified value";
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = "Which Python module has a method for finding percentiles?";
window["o1"+k] = "TensorFlow";
window["o2"+k] = "PyTorch";
window["o3"+k] = "NumPy";
window["o4"+k] = "Scikit-Learn";
window["ans"+k] = 3;

k++;
window["type"+k] = "word";
window["q"+k] = `What does the output of ${WordCode('numpy.percentile(ages, 75)')} represent in the given example?`;
window["o1"+k] = "The average age";
window["o2"+k] = "The highest age";
window["o3"+k] = "The age below which 75% of people fall";
window["o4"+k] = "The age above which 75% of people fall";
window["ans"+k] = 3;

totalLevel = k;