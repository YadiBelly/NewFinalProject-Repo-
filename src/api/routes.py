"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import sendgrid
from sendgrid.helpers.mail import *
import os
api = Blueprint('api', __name__)

@api.route('signup', methods=['POST'])
def signup():
    data = request.get_json()
    newuser = User(email=data['email'],first_name=data['first_name'],last_name=data['last_name'],password=data['password'],phone=data['phone'],zip_code=data['zip_code'])
    db.session.add(newuser)
    db.session.commit()
    return 'sucess', 200

@api.route('login', methods=['POST'])
def login():
    data = request.get_json()
    if "email" not in data or data['email']=='':
        return 'user not found'
    if 'password' not in data or data['password']=='':
        return 'user not found'
    user = User.query.filter_by(email=data['email']).first()
    if user == None or data['password'] != user.password or data['email'] != user.email:
        return 'email or password is incorrect!'
    else: 
        return 'Logged in'

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/reset', methods=["POST", "GET"])
def reset():
    sg = sendgrid.SendGridAPIClient(api_key='')
    from_email = Email("nnngozi@gmail.com")
    to_email = To("nnngozi@gmail.com")
    subject = "Sending with SendGrid is Fun"
    content = Content("text/plain", "and easy to do anywhere, even with Python")
    mail = Mail(from_email, to_email, subject, content)
    response = sg.client.mail.send.post(request_body=mail.get())
    print(response.status_code)
    print(response.body)
    print(response.headers)
    return "Success"
        
        
