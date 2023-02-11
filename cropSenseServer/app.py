from flask import Flask, request, jsonify
app = Flask(__name__)

import predictCrop

@app.route('/')
def hello_world():
    return 'Hello world!'


@app.route('/crop-recommend',methods=['POST'])
def recommend():
    age = request.files['age']
    print(age)
    return jsonify(age)