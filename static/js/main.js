document.addEventListener('DOMContentLoaded', function() {
    todos_Eventos(); // Chame a função para adicionar os eventos após o carregamento do DOM
    atualizarContadorCarrinho();
    listarProdutosNoCarrinho(); 
});
// Função para logar 
document.addEventListener('DOMContentLoaded', function() {
    // ADICIONA EVENTO PARA O FORMULÁRIO DE LOGIN
    document.getElementById('loginForm').addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Obter os valores dos campos de entrada
        const email = document.getElementById('loginEmail').value;
        const senha = document.getElementById('loginPassword').value;

        // Verificar se os valores correspondem aos dados de login esperados
        if (email === "group2@gmail.com" && senha === "senai123") {
            // Redirecionar para a página homepage.html
            window.location.href = "./homepage.html";
        } else {
            // Exibir mensagem de erro
            alert("Credenciais inválidas. Por favor, verifique seu email e senha.");
        }
    });
});
let docTitle = document.title;
window.addEventListener('blur', () => {
    document.title = 'Volte para a página Carlos!🙁';
});
window.addEventListener('focus', () => {
    document.title = docTitle;
});
function todos_Eventos() {
    // ADICIONA EVENTO DE COMPRA PARA TODOS OS BOTÕES DE COMPRA
    document.querySelectorAll(".botao-comprar button").forEach(function(button) {
        button.addEventListener("click", function() {
            const produto = {
                marca: this.parentNode.parentNode.querySelector("#nome").textContent,
                descricao: this.parentNode.parentNode.querySelector("#descricao").textContent,
                valor: parseFloat(this.parentNode.parentNode.querySelector("#valor").textContent.replace("R$ ", ""))
            };
            adicionarProdutoAoCarrinho(produto);
        });
    });
    document.querySelectorAll(".botoes-compra1 button").forEach(function(button) {
        button.addEventListener("click", function() {
            const produto = {
                marca: document.querySelector("#nome").textContent,
                descricao: document.querySelector("#descricao").textContent,
                valor: parseFloat(document.querySelector("#valor").textContent.replace("R$ ", ""))
            };
            
            adicionarProdutoAoCarrinho(produto);
            setTimeout(() => {
                window.location.href = "../homepage.html";
            }, 2000)
            
        });
    });

    // ADICIONA EVENTO PARA ABRIR MODAL DE CARRINHO
    document.querySelector("#abrirModalCarrinho").addEventListener("click", function() {
        document.getElementById("modalCarrinho").style.display = "block";
    });

    // ADICIONA EVENTO PARA FECHAR MODAL DE CARRINHO
    document.querySelector(".fecharModalCarrinho").addEventListener("click", function() {
        document.getElementById("modalCarrinho").style.display = "none";
    });
}

// Função para adicionar produto ao carrinho
function adicionarProdutoAoCarrinho(produto) {
    axios.post(`http://127.0.0.1:5000/add`, produto)
        .then(function() {
            alert(`O produto ${produto.marca} foi adicionado ao carrinho.`);
            // Atualiza o contador do carrinho
            atualizarContadorCarrinho();
            // Lista os produtos do carrinho na modal
            listarProdutosNoCarrinho();
        })
        .catch(function(error) {
            console.error(error);
        });
}

// Função para atualizar o contador do carrinho
function atualizarContadorCarrinho() {
    axios.get(`http://127.0.0.1:5000/list`)
        .then(function(response) {
            const produtos = response.data;
            const contador = produtos.length;
            document.getElementById("carrinho-counter").textContent = contador;
        })
        .catch(function(error) {
            console.error(error);
        });
}

// Função para listar os produtos do carrinho na modal
// Função para listar os produtos do carrinho na modal
function listarProdutosNoCarrinho() {
    axios.get(`http://127.0.0.1:5000/list`)
        .then(function(response) {
            const produtos = response.data;
            const modalBody = document.querySelector("#modalCarrinho #listaProdutosCarrinho");
            modalBody.innerHTML = ""; // Limpa o conteúdo anterior

            produtos.forEach(function(produto, index) {
                const produtoHTML = `
                    <div class="item-carrinho">
                        <p><strong>Marca:</strong> ${produto.Marca}</p>
                        <p><strong>Descrição:</strong> ${produto.Descrição}</p>
                        <p><strong>Valor:</strong> R$ ${produto.Valor.toFixed(2)}</p>
                        <button class="btn-excluir" data-index="${index}">-</button>
                    </div>
                `;
                modalBody.innerHTML += produtoHTML;
            });

            // Adiciona evento de clique para o botão de exclusão
            document.querySelectorAll(".btn-excluir").forEach(function(button) {
                button.addEventListener("click", function() {
                    const index = parseInt(this.getAttribute("data-index"));
                    deletarProdutoDoCarrinho(index);
                });
            });
        })
        .catch(function(error) {
            console.error(error);
        });
}

// Função para excluir o produto do carrinho
function deletarProdutoDoCarrinho(index) {
    axios.delete(`http://127.0.0.1:5000/delete/${index}`)
        .then(function(response) {
            alert(response.data.message);
            listarProdutosNoCarrinho();
            atualizarContadorCarrinho();
        })
        .catch(function(error) {
            console.error(error);
        });
}

// Função para retornar para a página anterior
document.getElementById("botaoRetornar").addEventListener("click", function() {
    window.history.back();
});

