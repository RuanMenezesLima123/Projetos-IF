function iniciar() {
    // Criação dos elementos
    var bx0 = document.createElement("div");
    var bx1 = document.createElement("div");
    var ipt = document.createElement("input");
    var but = document.createElement("button");
    var bx2 = document.createElement("div");
    var bx3 = document.createElement("div");
    var spn = document.createElement("span");

    // Estilizando o bx0 (container geral)
    bx0.style.display = "flex";
    bx0.style.flexDirection = "column";
    bx0.style.height = "100vh";
    bx0.style.alignItems = "center";

    // Estilizando o bx1 (área de entrada e botão)
    bx1.style.backgroundColor = "gray";
    bx1.style.height = "20%";
    bx1.style.width = "100%";
    bx1.style.border = "3px solid black";
    bx1.style.display = "flex";
    bx1.style.justifyContent = "center";
    bx1.style.alignItems = "center";

    // Estilizando o input
    ipt.type = "number";
    ipt.setAttribute("placeholder", "Quantidade...");
    ipt.style.height = "35px";
    ipt.style.width = "200px";
    ipt.style.border = "3px solid black";
    ipt.style.marginRight = "10px";

    // Estilizando o botão
    but.type = "button";
    but.textContent = "Start";
    but.style.height = "40px";
    but.style.width = "100px";
    but.style.border = "3px solid black";
    but.style.cursor = "pointer";

    // Estilizando o bx2 (onde as bolas vão aparecer)
    bx2.style.height = "60%";
    bx2.style.width = "100%";
    bx2.style.border = "3px solid black";
    bx2.style.position = "relative"; // Garantir que as bolas sejam posicionadas dentro de bx2

    // Estilizando o bx3 (área abaixo)
    bx3.style.backgroundColor = "gray";
    bx3.style.height = "20%";
    bx3.style.width = "100%";
    bx3.style.border = "3px solid black";
    
    //estilizando o spn
    spn.style.fontSize = "30px";

    // Adicionando os elementos na página
    bx1.appendChild(ipt);
    bx1.appendChild(but);
    bx3.appendChild(spn);
    bx0.appendChild(bx1);
    bx0.appendChild(bx2);
    bx0.appendChild(bx3);
    document.body.appendChild(bx0);

    // Adicionando evento ao botão
    but.addEventListener("click", function () {
        let c = parseInt(ipt.value);

        // Validação do valor do input
        if (isNaN(c) || c <= 0 || c > 100) {
            alert("Insira um número válido (entre 1 e 100).");
            return; // Para a execução se o valor for inválido
        }

        bx2.innerHTML = ""; // Limpa as bolas anteriores
        spn.innerHTML = ""; // Limpa o histórico

        // Pegando as dimensões de bx2
        const bx2Width = bx2.clientWidth;  // Usando clientWidth para pegar o tamanho real da área
        const bx2Height = bx2.clientHeight;  // Usando clientHeight para pegar o tamanho real da área

        // Criando as bolas dinamicamente
        for (let i = 0; i < c; i++) {
            var bola = document.createElement("div");
            bola.setAttribute("id", "bola" + (i + 1));

            // Estilizando as bolas
            bola.style.height = "80px";
            bola.style.width = "80px";
            bola.style.borderRadius = "50%";
            bola.style.backgroundColor = "blue";
            bola.style.position = "absolute";
            bola.textContent = i + 1;

            // Calculando as posições aleatórias dentro de bx2
            const topPosition = Math.floor(Math.random() * (bx2Height - 80)); // Subtrai 80px para garantir que a bola não saia da área
            const leftPosition = Math.floor(Math.random() * (bx2Width - 80)); // Subtrai 80px para garantir que a bola não saia da área

            bola.style.top = topPosition + "px";
            bola.style.left = leftPosition + "px";

            // Evento para remover a bola ao passar o mouse
            bola.addEventListener("mouseover", function () {
                this.remove();
                spn.innerHTML += ` ${this.id} `; 
            });

            bx2.appendChild(bola);
        }
    });
}

// Chama a função iniciar quando a página carrega
window.onload = iniciar;