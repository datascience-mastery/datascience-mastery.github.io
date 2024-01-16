from transformers import pipeline

text = """
Copy of White Simple Student Cv Resume

L A N G U A G E

9037142332

English

Malayalam

MOHAMMED     
NIZAM TC

C O N T A C T  M E

officialark11@gmail.com

Thayattuchira (H)
Othukkungal
Malappuram

EDUCATION

2022-2023

2018-2021

2016-2018

2015-2016

Expertzlab Technologies, Ernakulam 

Big Data Analyst

Higher Secondary

High School

Priyadarshini Arts & Science College, Malappuram

Government Higher Secondary School, Othukkungal

PKMMHSS Edarikode

SKILLS

Programming

Operating System

Database
Management 

Scripting
Language

Python, Django, SQL, HTML

Linux, Windows

MySQL, HBase

Problem solving, Communication,
Leadership, Time-Management

To work with an organization
where I can enhance my skills
and knowledge. I will update my
knowledge every time and use it
for the process of the company. 

Hindi

B.com  

Big Data
Technologies

Hadoop, Spark, HDFS, Hive, Pig

Visualization Matplotlib, Seaborn

Soft Skills

HTML, CSS

PROJECTS

Live Streaming

Streamed data from Twitter using Spark Streaming and saved it
in HDFS.
From HDFS, did a sentimental analysis on that data using Spark
engine.
For sentimental analysis, TextBlob Package of NLP( Natural
Language Processing) was used.
TextBlob was used to find polarization and subjectivity of tweets.

Analysing Airport Data

Sample data taken from kaggle.com was saved in HDFS.
Loaded this data from HDFS into hive and made partitions in it.
Analysed data to find average delay of each flight, average delay
for each airport, etc.
"""

# Use the NER pipeline
ner = pipeline("ner", model="dbmdz/bert-large-cased-finetuned-conll03-english")

# Extract entities from the text
entities = ner(text)

# Print the extracted entities
for entity in entities:
    print(f"{entity['word']}: {entity['entity']}")

# Now, you can format the extracted entities into the desired structure
# based on the information you want to include in the context.