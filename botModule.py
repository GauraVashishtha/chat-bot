
# coding: utf-8

# In[212]:


import nltk
from nltk.tokenize import sent_tokenize,word_tokenize
from nltk.corpus import stopwords
from nltk.tokenize import RegexpTokenizer
from nltk.stem import WordNetLemmatizer
from nltk.corpus import wordnet 


# In[213]:


# Map for little conversation
convo = {
    "hii":"Hello",
    "hello":"Hello",
    "hey":"Hello",
    "hi":"Hello",
    "want":"OK",
    "know":"OK",
    "tell":"OK",
    "show":"OK",
    "near":"OK",
    "find":"OK",
    "search":"OK",
    "give":"OK",
    "provide":"OK",
    }


# In[214]:


def trigger(data,flag):
    if flag != 0:
        if len(data) != 0:
            return (' '.join(data))
    return ' '
            
def filter_words(word_list):
    sw  = set(stopwords.words('english'))
    useful_words = [w for w in word_list if w not in sw]
    return useful_words
def user(text):
    tokenizer = RegexpTokenizer("[a-zA-Z@]+")
    text = tokenizer.tokenize(text.lower())    
    useful_words= filter_words(text)
    l = WordNetLemmatizer()
    text = []
    for i in useful_words:
        text.append(l.lemmatize(i))
    return text
    
def predict(tex):
    tex = user(tex)
#     print "HERE",tex
    poss_data_op = []
    search_data = []
    flag = 0
    for t in tex:
        poss_data = []
        synonyms = [] 
        for syn in wordnet.synsets(t): 
            for l in syn.lemmas(): 
                synonyms.append(l.name()) 
        for data in synonyms:
            if data in convo:
                ans = convo[data]
                poss_data.append(ans)
                if ans == 'OK':
                    flag = 1
        s = sorted(set(poss_data), key=poss_data.index)
        if(s):
            poss_data_op.append(s)
        else:
            search_data.append(t)
    poss_data_out = []
    for j in range(len(poss_data_op)):
        poss_data_out += list(poss_data_op[j])
    poss_data_out = sorted(set(poss_data_out), key=poss_data_out.index)
    
    print "*************************",search_data

    if(len(poss_data_out)==0):
        flag = 0
        return "Sorry, under training not trained for that!",' '
    return ' '.join(poss_data_out),trigger(search_data,flag)
        
