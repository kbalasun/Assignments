// let h1=document.createElement('h1');
// h1.classList.add('display-1','fw-bold','font-family-sans-serif','mt-5','d-flex','justify-content-center','align-items-center')
// document.body.append(h1)

let div=document.querySelector("div#countdown");
let callfunction=(callbackfunc) =>{

    callbackfunc();
}
let callbackfunc=()=> {
 setTimeout(()=>{
    div.innerText='10';
    setTimeout(()=>{
        div.innerText='9';
        setTimeout(()=>{
            div.innerText='8';
            setTimeout(()=>{
                div.innerText='7'
                setTimeout(()=>{
                    div.innerText='6'
                    setTimeout(()=>{
                        div.innerText='5'
                        setTimeout(()=>{
                            div.innerText='4'
                            setTimeout(()=>{
                                div.innerText='3'
                                setTimeout(()=>{
                                    div.innerText='2'
                                    setTimeout(()=>{
                                        div.innerText='1'
                                        setTimeout(()=>{
                                            var el=document.querySelector("div#countdown");
 

                                            div.innerText='Happy Independence Day';
                                            
                                            var el1=document.querySelector("div.wrapper");
                                           el1.style.display = 'inline';

                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
  },1000)
}
callfunction(callbackfunc);