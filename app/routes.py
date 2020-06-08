from app import app
from flask import render_template, request

import app.function as f

@app.route('/')
@app.route('/acceuil')
def acceuil():
    return render_template('acceuil.html')

@app.route('/librairie')
def librarie():
    files_names = f.get_file_name()
    names_sublistes = f.list_to_sublist(files_names,4)

    return render_template('librairie.html',names_sublistes = names_sublistes )
@app.route('/galerie')
def galerie():
    pass

