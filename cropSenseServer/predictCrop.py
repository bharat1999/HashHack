import os
import numpy as np
import lightgbm as lgb
import pandas as pd

cropdf = pd.read_csv("models/Crop_recommendation.csv")
y = cropdf['label']

lgb_path = 'models'

lgb_models = sorted(os.listdir(lgb_path))

lgb_result = np.zeros(cropdf.shape[0])

model = lgb.Booster(model_file='{}{}'.format(lgb_path, "/cropRecomendation.txt"))


def predictCropRecomendation():
    custom_pred = model.predict([[25,60,18,19.59221047,61.28633405,6.74398035,41.7704893]])
    ind = np.argmax(custom_pred)
    print(y[ind])
    return y[ind]

predictCropRecomendation()