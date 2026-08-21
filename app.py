from flask import Flask, render_template, request, redirect, url_for, session, flash, jsonify
from flask_mysqldb import MySQL
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
# app.secret_key = '678656'

# # MySQL Configuration
# app.config['MYSQL_HOST'] = 'localhost'
# app.config['MYSQL_PORT'] = 3306
# app.config['MYSQL_USER'] = 'root'
# app.config['MYSQL_PASSWORD'] ='NewPassword123@'
# app.config['MYSQL_DB'] = 'nearby_dukan'
# app.config['MYSQL_CURSORCLASS'] = 'DictCursor'


# mysql = MySQL(app)

# @app.route('/')
# def home():
#     assert mysql.connection is not None
#     cursor = mysql.connection.cursor()
#     cursor.execute("SELECT * FROM stores LIMIT 8")
#     stores = cursor.fetchall()
#     cursor.close()
#     return render_template('home.html', strores=stores)
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

@app.route('/order')
def order():
    return render_template('order-cinfirmation.html')
@app.route('/sellerAnalytic')
def sellerAnalytic():
    return render_template('sellerAnalytic.html')
@app.route('/sellerCustomer')
def sellerCustomer():
    return render_template('sellerCustomer.html')
@app.route('/sellerInventory')
def sellerInventory():
    return render_template('sellerInventory.html')
@app.route('/sellerOffers')
def sellerOffers():
    return render_template('sellerOffers.html')
@app.route('/sellerOrder')
def sellerOrder():
    return render_template('sellerOrder.html')
@app.route('/sellerProduct')
def sellerProduct():
    return render_template('sellerProduct.html')

@app.route('/sellerSetting')
def sellerSetting():
    return render_template('sellerSetting.html')
@app.route('/sellerStore')
def sellerStore():
    return render_template('sellerStore.html')

# @app.route('/register', methods=['POST'])
# def register():
#     data = request.form
#     full_name = data.get('name')
#     email = data.get('email')
#     phone = data.get('phone')
#     password = data.get('password')
#     address = data.get('address')
#     area = data.get('area')
#     city = data.get('city')
#     state = data.get('state')
#     pincode = data.get('pincode')

#     hashed_pw = generate_password_hash(password) # type: ignore

#     cursor = mysql.connection.cursor() # type: ignore
#     try:
#         cursor.execute(
#             "INSERT INTO users (full_name, email, phone, password_hash, role) VALUES (%s, %s, %s, %s, 'customer')",
#             (full_name, email, phone, hashed_pw)
#         )
#         user_id = cursor.lastrowid
#         cursor.execute(
#             "INSERT INTO customer_profiles (user_id, address, area, city, state, pincode) VALUES (%s, %s, %s, %s, %s, %s)",
#             (user_id, address, area, city, state, pincode)
#         )
#         mysql.connection.commit()
#         session['user_id'] = user_id
#         session['user_name'] = full_name
#         session['role'] = 'customer'
#         flash('Account created successfully!', 'success')
#     except Exception as e:
#         mysql.connection.rollback()
#         flash('Email already registered or error occurred.', 'error')
#     finally:
#         cursor.close()

#     return redirect(url_for('home'))

# @app.route('/seller', methods=['POST'])
# def seller():
#     data = request.form
#     full_name = data.get('name')
#     email = data.get('email')
#     phone = data.get('phone')
#     password = data.get('password')
    
#     store_name = data.get('store_name')
#     business_phone = data.get('business_phone')
#     address = data.get('address')
#     area = data.get('area')
#     city = data.get('city')
#     state = data.get('state')
#     pincode = data.get('pincode')

#     hashed_pw = generate_password_hash(password)

#     cursor = mysql.connection.cursor()
#     try:
#         cursor.execute(
#             "INSERT INTO users (full_name, email, phone, password_hash, role) VALUES (%s, %s, %s, %s, 'seller')",
#             (full_name, email, phone, hashed_pw)
#         )
#         user_id = cursor.lastrowid
#         cursor.execute(
#             "INSERT INTO stores (user_id, store_name, business_phone, address, area, city, state, pincode) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)",
#             (user_id, store_name, business_phone, address, area, city, state, pincode)
#         )
#         mysql.connection.commit()
#         session['user_id'] = user_id
#         session['user_name'] = full_name
#         session['role'] = 'seller'
#         flash('Seller store registered successfully!', 'success')
#     except Exception as e:
#         mysql.connection.rollback()
#         flash('Failed to register seller account.', 'error')
#     finally:
#         cursor.close()

#     return redirect(url_for('home'))

# @app.route('/login', methods=['POST'])
# def login():
#     email = request.form.get('email')
#     password = request.form.get('password')
#     role = request.form.get('role', 'customer')

#     cursor = mysql.connection.cursor()
#     cursor.execute("SELECT * FROM users WHERE email = %s AND role = %s", (email, role))
#     user = cursor.fetchone()
#     cursor.close()

#     if user and check_password_hash(user['password_hash'], password):
#         session['user_id'] = user['id']
#         session['user_name'] = user['full_name']
#         session['role'] = user['role']
#         flash('Logged in successfully!', 'success')
#     else:
#         flash('Invalid credentials or account type.', 'error')

#     return redirect(url_for('home'))

# @app.route('/logout')
# def logout():
#     session.clear()
#     return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True, port=5000)