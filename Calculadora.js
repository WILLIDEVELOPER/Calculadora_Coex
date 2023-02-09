let Historial=[]

function evaluar(){
    cadena=document.getElementById('resultado').value;
    
    division=cadena.split('÷');
    // alert(cadena);
    adiv=division[0];
    mult1=adiv.split("x");
    amult=1;
    for(i=0; i<mult1.length; i++){
      
      sumar=mult1[i].split('+');
      
      restar=sumar[0].split('-');
      res1=restar[0];
      // alert(res1);
      for(j=1; j<restar.length; j++){
        res1=res1-restar[j];
      }
      sum1=res1;
      for(j=1; j<sumar.length; j++){
          restar=sumar[j].split('-');
          res1=restar[0];
          for(k=1; k<restar.length; k++){
            res1=res1-restar[k];
          }
        sum1=sum1*1+res1*1;
      }
      amult=amult*sum1;
      // alert(amult);
    }
    // alert(amult);
    adiv=amult;
    for(i=1; i<division.length; i++){
      adivn=division[i];
      multn=adivn.split("x");
      sumar=multn[0].split('+');
      
      restar=sumar[0].split('-');
      res1=restar[0];
      // alert(res1);
      for(j=1; j<restar.length; j++){
        res1=res1-restar[j];
      }
      sumn=res1;
      for(h=1; h<sumar.length; h++){
          restar=sumar[h].split('-');
          res1=restar[0];
          for(k=1; k<restar.length; k++){
            res1=res1-restar[k];
          }
        sumn=sumn+res1*1;
      }
      adiv=adiv/sumn;
      for(j=1; j<multn.length; j++){
        
        sumar=multn[i].split('+');
        restar=sumar[0].split('-');
          res1=restar[0];
          // alert(res1);
          for(k=1; k<restar.length; k++){
            res1=res1-restar[k];
          }
          sumn=res1;
        
        for(h=1; h<sumar.length; h++){
            restar=sumar[h].split('-');
            res1=restar[0];
            for(k=1; k<restar.length; k++){
              res1=res1-restar[k];
            }
          sumn=sumn*1+res1*1;
        }
        adiv=adiv*sumn;
      }
      
      
    }

    document.getElementById('resultado').value=adiv;
    Historial.push(adiv)
    console.log(Historial)
    document.getElementById('historial').value=Historial;


    
  }