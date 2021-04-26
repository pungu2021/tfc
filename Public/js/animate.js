const pungu=.1;
var option={
    root:null ,
    rootMargin:'0px',
    threshold:pungu
}
carlos=function(entries, obserever){
     entries.forEach(function(entry){
        if(entry.intersectionRatio>pungu){
            entry.target.classList.add("visible-contenu");
            obserever.unobserve(entry.target);
        }
     });
}
var observer= new IntersectionObserver(carlos, option);
document.querySelectorAll('[class*="contenu-"]').forEach(function(elment){
      observer.observe(elment);  
});

/*----------------------------------------------------- */
const remy=.1;
var options={
    root:null ,
    rootMargin:'0px',
    threshold:remy
}
carl=function(entries, obserever){
     entries.forEach(function(entry){
        if(entry.intersectionRatio>remy){
            entry.target.classList.add("visible-trans");
            obserever.unobserve(entry.target);
        }
     });
}
var ob= new IntersectionObserver(carl, options);
document.querySelectorAll('[class*="contenus-"]').forEach(function(element){
      ob.observe(element);  
});