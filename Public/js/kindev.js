var visible_va=document.querySelector(".visible-text");
var test=true;
var tab=["apprene de zéro niveau","donne des connaissances incroyable","garanti un apprentissage de qualité"];
var i=tab.length;
var k=0;
function visible_true_or_false(){
    var j, b=1, c=1;
    function visible(){
        if(k>=i){
            k=0;
        }
        if(b<=tab[k].length){ 
            visible_va.innerHTML=tab[k].substr(0,b);
            b++;
            setTimeout(visible,50);
        }
    }
    function hiding(){
        j=tab[k].length;
        visible_va.innerHTML=tab[k].substr(0,j-c);
        c++;
        if(c<=j){
         setTimeout(hiding,50);
        }
         else 
         k++;
    }
    setTimeout(visible,2000);
    setTimeout(hiding,7000);
}
visible_true_or_false();
setInterval(visible_true_or_false,9000);