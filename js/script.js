function tas(){
secenekler=['tas','kagıt','makas'];
//console.log(Math.floor(Math.random() * 3))//
bilgisayarinSecimi=Math.floor(Math.random() * 3);
console.log(secenekler[bilgisayarinSecimi]);
resim_yolu = 'images/'+ secenekler[bilgisayarinSecimi]+'.jpg';
document.getElementById('bilgisayarinSecimi').src= resim_yolu;

if (secenekler[bilgisayarinSecimi] == 'tas'){
    document.getElementById('result').innerHTML='Sonuç:Berabere';
}
        
if (secenekler[bilgisayarinSecimi] == 'kagıt'){
    document.getElementById('result').innerHTML='Sonuç:Yenildiniz';
}
        
if (secenekler[bilgisayarinSecimi] == 'makas'){
    document.getElementById('result').innerHTML='Sonuç:Kazandınız';
}
}

function kagıt(){
    secenekler=['tas','kagıt','makas'];
    //console.log(Math.floor(Math.random() * 3))//
    bilgisayarinSecimi=Math.floor(Math.random() * 3);
    console.log(secenekler[bilgisayarinSecimi]);
    resim_yolu = 'images/'+ secenekler[bilgisayarinSecimi]+'.jpg';
    document.getElementById('bilgisayarinSecimi').src= resim_yolu;
    
    if (secenekler[bilgisayarinSecimi] == 'tas'){
        document.getElementById('result').innerHTML='Sonuç:Kazandınız';
    }
            
    if (secenekler[bilgisayarinSecimi] == 'kagıt'){
        document.getElementById('result').innerHTML='Sonuç:Berabere';
    }
            
    if (secenekler[bilgisayarinSecimi] == 'makas'){
        document.getElementById('result').innerHTML='Sonuç:Yenildiniz';
    }
    }

    function makas(){
        secenekler=['tas','kagıt','makas'];
        //console.log(Math.floor(Math.random() * 3))//
        bilgisayarinSecimi=Math.floor(Math.random() * 3);
        console.log(secenekler[bilgisayarinSecimi]);
        resim_yolu = 'images/'+ secenekler[bilgisayarinSecimi]+'.jpg';
        document.getElementById('bilgisayarinSecimi').src= resim_yolu;
        
        if (secenekler[bilgisayarinSecimi] == 'tas'){
            document.getElementById('result').innerHTML='Sonuç:Yenildiniz';
        }
                
        if (secenekler[bilgisayarinSecimi] == 'kagıt'){
            document.getElementById('result').innerHTML='Sonuç:Kazandınız';
        }
                
        if (secenekler[bilgisayarinSecimi] == 'makas'){
            document.getElementById('result').innerHTML='Sonuç:Berabere';
        }
        }