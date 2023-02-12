from flask import Flask, request, jsonify
import os
import calendar
import time
import predictDisease
import numpy as np
from flask_cors import CORS
app = Flask(__name__)

import predictDisease

@app.route('/')
def hello_world():
    return 'Hello world!'


@app.route('/predict-disease', methods=['POST'])
def upload_image():
    image_file = request.files['image']
    if image_file == None:
        return 'No image file provided', 410
    fileName = str(calendar.timegm(time.gmtime())) + image_file.filename
    image_file.save(os.path.join('./files', fileName))
    solution = predictDisease.predictMNv2_224(fileName)
    data = {
        "success": True,
        "code": 200,
        "data": solution
    }
    response = jsonify(data)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

