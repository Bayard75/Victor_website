from app import app
from flask import render_template, request

@app.route('/')
@app.route('/acceuil')
def acceuil():
    return render_template('acceuil.html')

@app.route('/librairie')
def librarie():
    return render_template('librairie.html')
@app.route('/galerie')
def galerie():
    pass
