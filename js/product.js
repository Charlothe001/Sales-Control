const divMainFrame = document.querySelector('div.main');

function productAddForm(){
  const formContainer = document.createElement('div');
  const imgContainer = document.createElement('div');
  const form = document.createElement('form');
  form.setAttribute('method','post');

  const labelProductName = document.createElement('label');
  labelProductName.setAttribute('for','productName');
  labelProductName.textContent = "Nome do Produto: ";

  const inputProductName = document.createElement('input');
  inputProductName.setAttribute('type','text');
  inputProductName.setAttribute('name','productName');
  inputProductName.setAttribute('id','productName');
  
  const labelProductGroup = document.createElement('label');
  labelProductGroup.setAttribute('for','productGroup');
  labelProductGroup.textContent = "Grupo do Produto: ";

  const inputProductGroup = document.createElement('input');
  inputProductGroup.setAttribute('type','text');
  inputProductGroup.setAttribute('name','productGroup');
  inputProductGroup.setAttribute('id','productGroup');

  const labelProductCode = document.createElement('label');
  labelProductCode.setAttribute('for','productCode');
  labelProductCode.textContent = "Código do Produto: ";

  const inputProductCode = document.createElement('input');
  inputProductCode.setAttribute('type','number');
  inputProductCode.setAttribute('name','productCode');
  inputProductCode.setAttribute('id','productCode');

  const labelsupplier = document.createElement('label');
  labelsupplier.setAttribute('for','supplier');
  labelsupplier.textContent = "Fornecedor: ";

  const inputSuplier = document.createElement('input');
  inputSuplier.setAttribute('type','text');
  inputSuplier.setAttribute('name','supplier');
  inputSuplier.setAttribute('id','supplier');

  const labelPurchaseDate = document.createElement('label');
  labelPurchaseDate.setAttribute('for','puchaseDate');
  labelPurchaseDate.textContent = "Data da Compra: ";

  const inputPurchaseDate = document.createElement('input');
  inputPurchaseDate.setAttribute('type','number');
  inputPurchaseDate.setAttribute('name','puchaseDate');
  inputPurchaseDate.setAttribute('id','puchaseDate');

  const labelAmount = document.createElement('label');
  labelAmount.setAttribute('for','amount');
  labelAmount.textContent = "Quantidade: ";

  const inputAmount = document.createElement('input');
  inputAmount.setAttribute('type','number');
  inputAmount.setAttribute('name','amount');
  inputAmount.setAttribute('id','amount');
        
  const productImg = document.createElement('img');
  productImg.setAttribute('alt','Imagem do Produto');
  productImg.setAttribute('src',''); 
  
  const btnSend = document.createElement("button");
  btnSend.innerText = "Cadastrar";
  btnSend.addEventListener('click',addProduct);
  
  divMainFrame.appendChild(formContainer);
  divMainFrame.appendChild(imgContainer);
  formContainer.appendChild(form);
  form.appendChild(labelProductName);
  form.appendChild(inputProductName);
  form.appendChild(labelProductGroup);
  form.appendChild(inputProductGroup);
  form.appendChild(labelProductCode);
  form.appendChild(inputProductCode);
  form.appendChild(labelsupplier);
  form.appendChild(inputSuplier);
  form.appendChild(labelPurchaseDate);
  form.appendChild(inputPurchaseDate);
  form.appendChild(labelAmount);
  form.appendChild(inputAmount);
  imgContainer.appendChild(productImg);
  form.appendChild(btnSend);
}

function addProduct(evt){
  evt.preventDefault(); 
  const novoProduto = {
    name: '',
    price: '',
    group:'',
    id:'',
    suplier:'',
    dateOfAcquisition:'',
    units:'',
    img:''
  };             
}

function queryForm(){
  const formBody = document.querySelector('div.main');
  formBody.innerHTML = "";
  const form = document.createElement('form');
  form.setAttribute('method','post');
  
  const labelProductName = document.createElement('label');
  labelProductName.setAttribute('for','productName');
  labelProductName.textContent = "Consultar Produto Pelo Nome: ";

  const inputProductName = document.createElement('input');
  inputProductName.setAttribute('type','text');
  inputProductName.setAttribute('name','productName');
  inputProductName.setAttribute('id','productName');

  const labelProductId = document.createElement('label');
  labelProductId.setAttribute('for','productId');
  labelProductId.textContent = "Consultar Produto Pelo ID: ";

  const inputProductId = document.createElement('input');
  inputProductId.setAttribute('type','text');
  inputProductId.setAttribute('name','productId');
  inputProductId.setAttribute('id','productId');

  const btnConsult = document.createElement("button");
  btnConsult.setAttribute('id', 'btnSubmitQuery');
  btnConsult.innerText = "Consultar";  

  btnConsult.addEventListener("click",query)
    
  divMainFrame.appendChild(form);
  form.appendChild(labelProductName);
  form.appendChild(inputProductName);
  form.appendChild(labelProductId);
  form.appendChild(inputProductId);
  form.appendChild(btnConsult);
}

function validatequeryinput(){
  const queryInputName = document.querySelector('#productName').value;
  const queryInputID = document.querySelector('#productId');
  if(queryInputName.length === 0 || queryInputID.length === 0){
    console.log("falso");
    return false
  }else{
    console.log("verdadeiro");
    return true
  }
}

function query(e){
  e.preventDefault();
  try {
    if(validatequeryinput()){

    }
  } catch (error) {
    const msg = `Erro: ${error}`
    messageError(msg);
  }
}

function renderQueryResponse(){
  divMainFrame.innerHTML = "";  
  consultResult7.setAttribute('src',requestProduct.img);
  const presentationDiv = document.createElement('div');
  presentationDiv.className = 'presentation';

  const consultResult1 = document.createElement('p');
  const consultResult2 = document.createElement('p');
  const consultResult3 = document.createElement('p');
  const consultResult4 = document.createElement('p');
  const consultResult5 = document.createElement('p');
  const consultResult6 = document.createElement('p');
  const consultResult7 = document.createElement('img');

  consultResult1.innerText = objProduct[0];
  consultResult2.innerText = objProduct[1];
  consultResult3.innerText = objProduct[2];
  consultResult4.innerText = objProduct[3];
  consultResult5.innerText = objProduct[4];
  consultResult6.innerText = objProduct[5];
  consultResult6.innerText = objProduct[5];
  
  divMainFrame.appendChild(presentationDiv);
  presentationDiv.appendChild(consultResult1);           
  presentationDiv.appendChild(consultResult2);           
  presentationDiv.appendChild(consultResult3);           
  presentationDiv.appendChild(consultResult4);           
  presentationDiv.appendChild(consultResult5);           
  presentationDiv.appendChild(consultResult6);           
  divMainFrame.appendChild(consultResult7); 
}

function updateProduct(){
  
}

function deleteProduct(){
 
}

export { productAddForm };
export { queryForm };