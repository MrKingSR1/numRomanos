 

export function NumeroRomano( stringNumero ){
    this.stringNumero = stringNumero;
    this.arrayNumero = [];
    this.isRomano = true;
    this.apuntador = 0;
    this.entradaAEnviar = [];

    this.aumentarEntrada = function ( ){
        this.apuntador++;
        this.entradaAEnviar = this.arrayNumero[ this.apuntador ];
    }
    this.estadoDeError = function (  ){
        this.isRomano = false;
    }

    
    this.estado0 = function( entrada ){
        if(!entrada){
            return;
        }else{ 
            this.estadoDeError();
         }
    }

    this.estado1 = function( entrada ){
       if(!entrada){
           return;
       }else{
        this.aumentarEntrada();
        switch (entrada) {
            case 'I':
                this.estado0(this.entradaAEnviar);
                break;
            default:
                this.estadoDeError();
                break;
        }
       }

    }
    this.estado2 = function( entrada ) {
        if(!entrada){
            return;
        }else{
         this.aumentarEntrada();
         switch (entrada) {
             case 'I':
                 this.estado1(this.entradaAEnviar);
                 break;
             case 'V':
             case 'X' : 
                this.estado0( this.entradaAEnviar );
                break;     
             default:
                 this.estadoDeError();
                 break;
         }
        }

    }
    this.estado3 = function( entrada ){
        if(!entrada){
            return;
        }else{
         this.aumentarEntrada();
         switch (entrada) {
             case 'I':
                 this.estado1(this.entradaAEnviar);
                 break;
             default:
                 this.estadoDeError();
                 break;
         }
        }

    }

    this.estado4 = function( entrada ){
        if(!entrada){
            return;
        }else{
         this.aumentarEntrada();
         switch (entrada) {
             case 'I':
                 this.estado3(this.entradaAEnviar);
                 break;
             default:
                 this.estadoDeError();
                 break;
         }
        }

    }

    this.estado5 = function( entrada ) {
        if(!entrada){
            return;
        }else{
         this.aumentarEntrada();
         switch (entrada) {
             case 'I':
                 this.estado2(this.entradaAEnviar);
                 break;
             case 'V':
                this.estado4( this.entradaAEnviar );
                break;     
             default:
                 this.estadoDeError();
                 break;
         }
        }

    }

    this.estadoX = function( entrada ){
        if(!entrada){
            return;
        }else{
         this.aumentarEntrada();
         switch (entrada) {
             case 'I':
                 this.estado2(this.entradaAEnviar);
                 break;
             case 'V':
                this.estado4( this.entradaAEnviar );
                break; 
             case 'X':
                this.estadoXX( this.entradaAEnviar );
                 break;  
             case 'L':
                this.estado5( this.entradaAEnviar );
                 break;    
             default:
                 this.estadoDeError();
                 break;
         }
        }

    }

    this.estadoXX = function( entrada ){

        if(!entrada){
            return;
        }else{
         this.aumentarEntrada();
         switch (entrada) {
             case 'I':
                 this.estado2(this.entradaAEnviar);
                 break;
             case 'V':
                this.estado4( this.entradaAEnviar );
                break; 
             case 'X':
                this.estado5( this.entradaAEnviar );
                 break;  
             default:
                 this.estadoDeError();
                 break;
         }
        }

    }

    
    this.estadoInicial = function (entrada){ 
        this.aumentarEntrada();
        switch (entrada) {
            case 'I':
                this.estado2(this.entradaAEnviar);
                break;
            case 'V':
                this.estado4(this.entradaAEnviar);
                break;
            case 'X':
                this.estadoX(this.entradaAEnviar);
                break;
            case 'L':
            this.estado0(this.entradaAEnviar);
                break;
        
            default:
                this.estadoDeError();
                break;
        }

    }
    this.validarNumero = function (  ){
        if(this.stringNumero !== ''){
            this.stringNumero = this.stringNumero.toUpperCase();
            this.arrayNumero = Array.from( this.stringNumero );
            this.entradaAEnviar = this.arrayNumero[0];
            this.estadoInicial( this.entradaAEnviar );
            
        }else{
            this.isRomano = false;
        } 
    };
    this.validarNumero();
}

