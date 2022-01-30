window.onload = function()
{
              
    //nav
    let check = document.querySelectorAll(".check");  
    for(let i = 0; i < check.length; i++){
        check[i].addEventListener('click',()=>{
            for(let j = 0; j < check.length; j++){
                check[j].style.transform = "translateY(0px)";
                let dec = check[j].querySelector(".dec"); 
                dec.style.width = "0px";
            }
            check[i].style.transform = "translateY(-4px)";
            let dec = check[i].querySelector(".dec");  
            dec.style.width = "100%";
        })
    }
    // rand
    let end__link = document.querySelector('.end__link');
    let x =  Math.floor(Math.random() * 60);
    let y =  Math.floor(Math.random() * 60);
    end__link.addEventListener('mousemove',()=>{
        end__link.style.marginLeft = x + 'px';
        end__link.style.marginTop = y + 'px';
         x =  Math.floor(Math.random() * 60);
         y =  Math.floor(Math.random() * 60);
    })
};