from app import app
from flask import render_template, request

import app.function as f

@app.route('/')
@app.route('/acceuil')
def acceuil():
    return render_template('acceuil.html')

@app.route('/librairie')
def librairie():
    files_names = f.get_file_name('app/static/assets/img/CN_PF_SVG')
    names_sublistes = f.list_to_sublist(files_names,4)

    return render_template('librairie.html',names_sublistes = names_sublistes )

@app.route('/galerie')
def galerie():
    return render_template('gallery.html')

@app.route('/modules')
def modules():
    files_names = f.get_file_name('app/static/assets/img/modules')
    names_sublistes = f.list_to_sublist(files_names, 4)

    return render_template('modules.html', names_sublistes = names_sublistes)