function containerCores(classe){
    var divCores = document.createElement('div')


    divCores.classList.add(classe)
    
    divCores.appendChild(adicionaCores('dimencoes', 'normal'))
    divCores.appendChild(adicionaCores('dimencoes', 'laranja'))
    divCores.appendChild(adicionaCores('dimencoes', 'verde'))
 

    return divCores
}

function adicionaCores(classe, classe1 ,classe2){
    var cores = document.createElement('i')
    cores.classList.add(classe, classe1, classe2)
    return cores
}


var ulTodas = document.querySelector('#ol')
ulTodas.addEventListener('click', function(e){
    var mudar = e.target;
    var laranja = mudar.classList.contains('laranja');
    var normal = mudar.classList.contains('normal');
    var verde = mudar.classList.contains('verde');
    if(laranja){        
        mudar.parentNode.parentNode.parentNode.classList.add('orange')
        mudar.parentNode.parentNode.parentNode.classList
        .remove('color','green')
        console.log(mudar.parentNode.parentNode.parentNode)
    } else if(normal){        
        mudar.parentNode.parentNode.parentNode.classList.add('color')
        mudar.parentNode.parentNode.parentNode.classList
        .remove('orange','green')
        console.log(mudar.parentNode.parentNode.parentNode)
    } else if(verde){        
        mudar.parentNode.parentNode.parentNode.classList.add('green')
        mudar.parentNode.parentNode.parentNode.classList
        .remove('color','orange')
        console.log(mudar.parentNode.parentNode.parentNode)
    }

    
})
