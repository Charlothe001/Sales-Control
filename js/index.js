
import { productAddForm } from "./product.js";
import { queryForm } from "./product.js";

const newProduct = [];
// divs
const divHeaderMenu = document.querySelector('div.headerMenu');
const divSideMenu = document.querySelector('div.sideMenu');
const divMainFrame = document.querySelector('div.main');

//header buttons
const btnHeaderProduct = document.querySelector('button#btnProducts');
const btnHeaderClients = document.querySelector('button#btnClients');
const btnHeaderCustomers = document.querySelector('button#btnCustomers');
const btnHeaderRequests = document.querySelector('button#btnRequests');

const product = [];
//frame inicial
function init(){
    let presentationDiv = document.createElement('div');
    presentationDiv.className = 'presentation';
    let inicialTitle = document.createElement('h1');
    inicialTitle.innerHTML = '<h1>Bem vindo ao SalesControl.</h1>';
    let inicialParagraph = document.createElement('p');
    inicialParagraph.innerHTML = '<p>Aqui você pode gerenciar seus produtos, vendas, clientes e fornecedores.</p>';
    divMainFrame.appendChild(presentationDiv);
    presentationDiv.appendChild(inicialTitle);
    presentationDiv.appendChild(inicialParagraph);
    productList();
    headerButtonlistener();
}

import { getProduct } from "./http.js";

async function productList(){
    const getProductList = await getProduct();
    product.push(...getProductList);
}

function headerButtonlistener() {
    btnHeaderProduct.addEventListener('click', function() {
        divMainFrame.innerHTML = "";
      try {
        product.forEach(element => {
            const cardPromotionalProduct = document.createElement('div');
            cardPromotionalProduct.classList = 'divPromotional';
    
            const titleDivPromotional = document.createElement('h2');
            titleDivPromotional.innerText = "Oferta do dia";
    
            const cardPromotional = document.createElement('div');
            cardPromotional.classList = 'card';
    
            const productName = document.createElement('h3');
            productName.innerText = element.name;
    
            const productPrice = document.createElement('p');
            productPrice.innerText = `R$ ${element.price}`;
    
            const productImg = document.createElement('img');
            productImg.src = element.img;            

            divMainFrame.appendChild(cardPromotionalProduct);
            cardPromotionalProduct.appendChild(titleDivPromotional);
            cardPromotionalProduct.appendChild(cardPromotional);
            cardPromotional.appendChild(productName);
            cardPromotional.appendChild(productPrice);
            cardPromotional.appendChild(productImg);
        });
  
        renderSidebarMenu(["Adicionar Produto","Consultar Produto","Atualizar Produto","Excluir Produto"]);  
        
      } catch (error) {
        console.log("Error :",error);
      }
    });

    btnHeaderClients.addEventListener('click', function(){
        divMainFrame.innerHTML = "";
    });
    
    btnHeaderCustomers.addEventListener('click', function(){
        divMainFrame.innerHTML = "";
    });

    btnHeaderRequests.addEventListener('click', function(){
        divMainFrame.innerHTML = "";
    });
}    
//Função para criar botões com ID no submenu dinamicamente 
function renderSidebarMenu(btnOptions){
    divSideMenu.innerHTML = "";
    const btnSideBarId = ["navBtnAdd","navBtnResearch","navBtnUpdate","navBtnDelete"];

    for(let i = 0, j = 0; i < btnOptions.length, j < btnSideBarId.length; i++, j++){
        const btn = document.createElement('button');
        btn.innerText = btnOptions[i];
        btn.setAttribute('id',btnSideBarId[j])
        divSideMenu.appendChild(btn);
        btn.addEventListener('click',function(){
            renderMainFrame(this.innerText);
        })
    }
}

//Função para renderizar o conteudo de cada submenu
function renderMainFrame(btn){
    divMainFrame.innerHTML = "";

    if(btn === "Adicionar Produto"){        
        productAddForm();        
    }else if(btn === "Consultar Produto"){
        queryForm();
    }else if(btn === "Atualizar Produto"){
        //implementar lógica
    }else if(btn === "Excluir Produto"){
        //implementar lógica
    }
    else{
        divMainFrame.innerHTML = "<p>ERROR</p>";
    }
}

//Chamada das Funções
init();