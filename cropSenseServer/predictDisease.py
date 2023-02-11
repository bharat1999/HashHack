from tensorflow import keras
import cv2
import numpy as np
import json
import tensorflow as tf


modelMNv2_224 = keras.models.load_model('./models/diseasePrediction.h5')

def predictMNv2_224(path):
    pathX = './files/' + path
    print(pathX)
    img = cv2.imread(pathX)
    img = cv2.resize(img, (224, 224))
    img = img.reshape(1, 224, 224, 3)
    predict = modelMNv2_224.predict(img)
    idx = np.argmax(predict)
    f = open('./labels/diseaseLabels.json')
    data = json.load(f)
    for key, value in data.items():
        if value == idx:
            ans = key
    return ans
