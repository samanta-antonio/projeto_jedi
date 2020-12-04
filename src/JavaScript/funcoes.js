function exibir_categoria(categoria){
  //alert(categoria);

  let elementos = document.getElementsByClassName('box_produtos');
  console.log(elementos);
  for(var i=0; i<elementos.length; i++){
     console.log(elementos[i].id);
     if(categoria === elementos[i].id)
        elementos[i].style = "display:inline-block";
    else
        elementos[i].style = "display:none";
  }
}

  let exibir_todos = () => {
  let elementos = document.getElementsByClassName('box_produtos');
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style = "display:inlie-block";
  }
}


function mOver(obj)
{
obj.innerHTML="Utilize o cupom UNI10 em sua primeira compra!"
}

function mOut(obj)
{
obj.innerHTML="Aproveite os melhores descontos deste Sistema Planetário."
}

