from flask import Flask,render_template,request
app=Flask(__name__)
@app.route('/')
def home():
    return render_template('home.html')
@app.route('/about')
def about():
    return render_template('about.html')
@app.route('/categories')
def categories():
    return render_template('categories.html')
@app.route('/offers')
def offers():
    return render_template('offers.html')
@app.route('/stores')
def stores():
    return render_template('stores.html')

    
    

app.run(debug=True)