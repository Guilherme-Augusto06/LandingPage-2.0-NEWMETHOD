from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import pandas as pd

app = Flask(__name__, static_url_path='/static')
try:
    open('Text.csv', 'x')
    with open("Text.csv", "a", encoding='utf-8') as arquivo:
        # Cria o arquivo Text.csv com leitura de UTF-8
        arquivo.write("Valor,Marca,Descrição\n")
except:
    pass

# Define a rota para listar os produtos
@app.route("/list", methods=['GET'])
def listarProdutos():
    # Lê o arquivo Text.csv e converte para um dicionário
    produtos = pd.read_csv('Text.csv')
    # Converte o DataFrame para um dicionário
    produtos = produtos.to_dict('records')
    # Retorna os produtos em formato JSON
    return jsonify(produtos)



@app.route("/add", methods=['POST'])
def addProduto():
    # Obtém o produto enviado pelo cliente
    produto = request.json
    
    # Adiciona o produto ao arquivo Text.csv  
    with open("Text.csv", "a", encoding='utf-8') as arquivo:
        arquivo.write(f"{produto['valor']},{produto['marca']},{produto['descricao']}\n")
    
    # Lê o arquivo Text.csv e converte para um dicionário
    produtos = pd.read_csv('Text.csv')
    produtos = produtos.to_dict('records')
    
    # Retorna os produtos em formato JSON
    return jsonify(produtos)


@app.route("/delete/<int:index>", methods=['DELETE'])
def deletarProdutoPorIndice(index):
    # Lê o arquivo CSV
    produtos = pd.read_csv('Text.csv')

    # Verifica se o índice está dentro dos limites
    if 0 <= index < len(produtos):
        # Remove o produto com o índice especificado
        produtos = produtos.drop(index)

        # Atualiza o arquivo CSV sem o produto excluído
        produtos.to_csv('Text.csv', index=False)

        return jsonify({"message": "Produto deletado com sucesso."}), 200
    else:
        return jsonify({"error": "Índice inválido."}), 404
@app.route('/')
def index():
    return render_template('cadastro.html')

@app.route('/FAQ.html')
def FAQ():
    return render_template('FAQ.html')

@app.route('/contact.html')
def contato():
    return render_template('contact.html')

@app.route('/homepage.html')
def homepage():
    return render_template('homepage.html')

@app.route('/secondPage.html')
def secondPage():
    return render_template('secondPage.html')

@app.route('/index1/applevision.html')
def applevision():
    return render_template('index1/applevision.html')

@app.route('/index1/iphone.html')
def iphone():
    return render_template('index1/iphone.html')

@app.route('/index1/fone.html')
def fone():
    return render_template('index1/fone.html')

@app.route('/index1/gabinete.html')
def gabinete():
    return render_template('index1/gabinete.html')

@app.route('/index1/teclado.html')
def teclado():
    return render_template('index1/teclado.html')

@app.route('/index1/mouse.html')
def mouse():
    return render_template('index1/mouse.html')

@app.route('/index1/SSD.html')
def SSD():
    return render_template('index1/SSD.html')

@app.route('/index1/xioami.html')
def xioami():
    return render_template('index1/xioami.html')
@app.route('/index1/tecladorazer.html')
def tecladorazer():
    return render_template('index1/tecladorazer.html')

@app.route('/index1/placamae.html')
def placamae():
    return render_template('index1/placamae.html')

@app.route('/index1/rtx4090.html')
def rtx4090():
    return render_template('index1/rtx4090.html')

@app.route('/index1/alexa.html')
def alexa():
    return render_template('index1/alexa.html')

@app.route('/index2/monitor.html')
def monitor():
    return render_template('index2/monitor.html')

@app.route('/index2/ps5.html')
def ps5():
    return render_template('index2/ps5.html')

@app.route('/index2/xbox.html')
def xbox():
    return render_template('index2/xbox.html')

@app.route('/index2/controleps5.html')
def controleps5():
    return render_template('index2/controleps5.html')

@app.route('/index2/controlexbox.html')
def controlexbox():
    return render_template('index2/controlexbox.html')

@app.route('/index2/watercoller.html')
def watercoller():
    return render_template('index2/watercoller.html')


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
