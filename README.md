# Configuração do Ambiente Virtual e Estrutura do Projeto

Este guia fornecerá instruções sobre como configurar um ambiente virtual e organizar a estrutura do projeto, mantendo as pastas `static` e `templates` fora da pasta do ambiente virtual. Isso é útil para manter a organização do projeto e separar os recursos estáticos e os arquivos de modelo do código Python.

## Configuração do Ambiente Virtual

1. Abra o terminal ou prompt de comando.

2. Navegue até o diretório do projeto.

3. Para criar um novo ambiente virtual, execute o seguinte comando:

    ```bash
    python -m venv venv
    ```

    Isso criará um novo diretório chamado `venv` que conterá todos os pacotes instalados localmente.

4. Ative o ambiente virtual. No Windows, execute:

    ```bash
    venv\Scripts\activate
    ```

    Você saberá que o ambiente virtual está ativado quando o prefixo `(venv)` aparecer à esquerda do prompt de comando.

## Estrutura do Projeto

1. Mantenha as pastas `static` e `templates` fora da pasta do ambiente virtual. A estrutura do projeto pode ser semelhante à seguinte:

    ```
    projeto/
    ├── venv/
    │   ├── ...
    ├── static/
    │   ├── css/
    │   │   └── style.css
    │   ├── img/
    │   │   └── ...
    ├── templates/
    │   ├── index.html
    │   ├── ...
    ├── app.py
    ├── README.md
    ```

    Coloque arquivos estáticos, como CSS, JavaScript e imagens, na pasta `static`, e arquivos de modelo HTML na pasta `templates`.

## Instalação das Dependências

1. Com o ambiente virtual ativado, instale as dependências necessárias usando o `pip install`. Execute os seguintes comandos:

    ```bash
    pip install flask
    pip install flask-cors
    pip install pandas
    ```

    Isso instalará o Flask, Flask-CORS e Pandas no ambiente virtual atual.

2. Após a conclusão da instalação, você estará pronto para prosseguir com o desenvolvimento do projeto!

    Certifique-se de que o ambiente virtual esteja ativado sempre que estiver trabalhando no projeto.

3. Para visualizar a Landing page rode a API em python, e utilize o link localHost fornecido.

Este é um guia básico para configurar um ambiente virtual, organizar a estrutura do projeto e instalar dependências no Python.

## Credenciais de Login

Para fazer login no sistema, utilize as seguintes credenciais:

- **E-mail:** group2@gmail.com
- **Senha:** senai123

Certifique-se de usar essas credenciais ao acessar o sistema.
