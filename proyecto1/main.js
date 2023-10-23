const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.button');



botones.forEach(boton =>{
    boton.addEventListener('click', () => {
        const botonValor = boton.textContent;
        if(boton.textContent === "←"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error"){
                pantalla.textContent = "0";
                return;
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1);
                return;
            }
            
        }

        if (boton.textContent === "=") {
            try {
                let expresion = pantalla.textContent;
        
                
                expresion = expresion.replace(/[^0-9+\-*/().]/g, ''); 
                expresion = expresion.replace(/([+\-*/()])\1+/g, '$1');
        
                
                if (!expresion || expresion === "Error") {
                    pantalla.textContent = "Error";
                    return;
                }
        
                let resultado = eval(expresion);
                pantalla.textContent = resultado;
        
                if (pantalla.textContent === "") {
                    pantalla.textContent = "0";
                }
        
                return;
            } catch {
                pantalla.textContent = "Error";
                return;
            }
        }

        if(boton.textContent === "c"){
            pantalla.textContent = "0";
            return;
        }

        if(pantalla.textContent === "0" || pantalla.textContent === "Error"){
            pantalla.textContent = botonValor;
            return;
        }else{
            pantalla.textContent += botonValor;
        }
        
        
       
    });
});

