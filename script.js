let url="https://api.genderize.io?name=";
let wrapper=document.getElementById("wrapper");
let predictgender=()=>{
    let name=document.getElementById("name").value;
    let error=document.getElementById("error")
    let finalUrl=url+name;
    console.log(name);
    console.log(finalUrl);
    wrapper.innerHTML="";
    if(name.length> 0 && /^[A-Za-z]+$/.test(name)){
        fetch(finalUrl).then(resp=>resp.json()).then
        (data=>{
            console.log(data);
            let div=document.createElement("div");
            div.setAttribute("id","info");
            div.innerHTML= `<h2 id="result-name">${data.name}</h2><img src"" id="gender-icon"/><h1 id="gender">${data.gender}<h4 id="prob">Probability: ${data.probability}</h4>`;
            wrapper.append(div);
        })
    }
   

};
document.getElementById("submit").addEventListener("click",predictgender);
window.addEventListener("load",predictgender)
