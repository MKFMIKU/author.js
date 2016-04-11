(function(){

    
    var author = document.querySelector('author');
    var name = author.getAttribute('name');
    var time = author.getAttribute('time');
    
    console.info("Document By %s at %s",name,time);
    
    if(author.hasAttribute('debug')){
        
        //Get files which been load
        console.log("%cScripts been used:","color:green;background-color:yellow");   
        Array.prototype.slice.call(document.scripts).forEach(function(elm){
            console.log("    "+elm.src); 
        });
        
        console.log("%cStyleSheets been used:","color:green;background-color:yellow");
        Array.prototype.slice.call(document.styleSheets).forEach(function(elm){
            console.log("    "+elm.href); 
        });
        
         
        
    }
    
    
    
})();