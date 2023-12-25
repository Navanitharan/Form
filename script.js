let body=document.body;
body.style.color="#fff";
body.style.backgroundColor="#000";

let container = document.createElement("div");
container.style.backgroundColor="#B6C4B6"
container.style.height="80vh"
container.style.display="flex";
container.style.flexDirection="column"
container.style.justifyContent="center";
container.style.alignItems="center";
container.setAttribute("class","Container")

let form = document.createElement("form")

let formele = ["First Name:","Last Name:","Gender:","Address:","Pincode:","State:","Country:"]

for(let i=0;i<formele.length;i++){
    let lbl = document.createElement("label");
    lbl.innerText=formele[i];
    let br=document.createElement("br");
    form.appendChild(lbl);
    form.appendChild(br)
    let ele = document.createElement("input");
    ele.style.padding="5px";
    ele.style.marginBottom="10px"
    if(formele[i]=="Gender:"){
        let maleele = document.createElement("input");
        maleele.setAttribute("type","radio");
        maleele.setAttribute("id","Male");
        maleele.setAttribute("name","Gender")
        form.appendChild(maleele)
        let mlable = document.createElement("label");
        mlable.innerText="Male";
        form.appendChild(mlable);

        let femaleele = document.createElement("input");
        femaleele.setAttribute("type","radio");
        femaleele.setAttribute("id","Female");
        femaleele.setAttribute("name","Gender")
        form.appendChild(femaleele)
        let felable = document.createElement("label");
        felable.innerText="Female";
        form.appendChild(felable);
        let br = document.createElement("br");
        form.appendChild(br);
    }else{
    ele.setAttribute("id",formele[i])
    ele.setAttribute("class","inpt")
    ele.setAttribute("placeholder",`Enter ${formele[i]}`);
    ele.setAttribute("name",formele[i]);
    //form.appendChild(lbl);
    form.appendChild(ele);
    let br=document.createElement("br");
    form.appendChild(br);
    }
}

let foodlabel=document.createElement("p");
foodlabel.innerText="Choose your favourite food";
form.appendChild(foodlabel) 
let fooddiv=document.createElement("div");
fooddiv.style.marginBottom="40px";

let foods=["Pizza","Burger","Salad","Pasta","Sushi"]
for(let i=0;i<foods.length;i++){
    let food = document.createElement("input");
    food.setAttribute('type','checkbox');
    food.setAttribute("id","food");
    food.setAttribute("name","food");
    food.setAttribute("value",foods[i]);
    

    if(foods[i]==="Pizza" || foods[i]==="Burger"){
        food.setAttribute("checked","checked")
    }

    let label = document.createElement("label");
    label.innerText= foods[i];

    fooddiv.appendChild(food)
    fooddiv.appendChild(label)
    form.appendChild(fooddiv);
}

let submit = document.createElement("button");
submit.setAttribute("type","button");
submit.innerText="Submit";
submit.style.marginLeft="30px";
submit.style.padding="10px";
submit.style.width="130px"
submit.addEventListener("click",function(){
    updateTable(form)
})

form.appendChild(submit)

container.appendChild(form);

document.body.appendChild(container);


function updateTable(form){
    let table = document.querySelector("table");
    if(!table){
        formele.push("Food Preference");
        table=document.createElement("table");
        table.setAttribute("border",1);
        table.style.backgroundColor="#EEF0E5";
        table.style.color="#163020"
        table.style.borderCollapse = "collapse";
        table.style.marginTop="50px"

        let tablerow=document.createElement("tr");
        for(let i=0;i<formele.length;i++){
        let tablecell=document.createElement("th");
        tablecell.style.backgroundColor=""
        tablecell.innerText=formele[i];
        tablerow.appendChild(tablecell);
        }
        table.appendChild(tablerow);
        //document.body.appendChild(table);
    }

    let datarow=document.createElement("tr");
    console.log("ele created");
    for(let i=0;i<formele.length;i++) {
        //console.log(formele[i])
        let datacell=document.createElement("td");
        if(formele[i]==="Gender:"){
            let gender = form.querySelector('input[name="Gender"]:checked');
            if(gender){
                datacell.textContent= gender.id;
            }
        }else if(formele[i]==="Food Preference"){
            let foods=form.querySelectorAll('input[name="food"]:checked');
            let foodsarray= Array.from(foods).map(food=>{return food.value});
            datacell.textContent=foodsarray.join(", ");
        }
        else{
            console.log(formele[i]);
            let vla =document.getElementById(formele[i]).value
            datacell.textContent=vla;
            document.getElementById(formele[i]).value="";
           
        }
        datarow.appendChild(datacell);
    }
    table.appendChild(datarow)
    body.appendChild(table);
    body.style.display="flex";
    body.style.flexDirection="column"
    body.style.justifyContent="center"
}
