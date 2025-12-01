// attributes ={
//     className;"element",
//     id:"first"
// }

// element = {
//     tag:"h1",
//     textContent:"Hello Coder Army",
//     className:"element",
//     id:"first"
// }

function createElement(tag,attributes,children){
    const element = document.createElement(tag);
    element.textContent = children;

    for (const key in attributes){
        if(key == 'style'){
            Object.assign(element.style, attributes.style);
        }
        else{
        element[key] = attributes[key];
        }
    }

    return element;

}

const element1 = createElement("h1",{className:"element",id:"first", style:{fontSize: "30px", backgroundColor:"Orange", color:"white"}},"Hello Coder Army");
const element2 = createElement("h2",{className:"element",id:"second", style:{fontSize: "30px", backgroundColor:"pink", color:"green"}},"Strike is launching")


// create a h1 element using js
// const element1 = document.createElement('h1');
// element1.textContent = 'Hello Coder army'
// element1.className = 'element';
// element1.id = 'first';
// element1.style.fontSize = "30px";
// element1.style.backgroundColor = "orange";
// element1.style.color = "white";

// const element2 = document.createElement('h2');
// element2.textContent = 'Strike is launched'
// element2.className = 'element';
// element2.id = 'second';
// element2.style.fontSize = "20px";
// element2.style.backgroundColor = "pink";
// element2.style.color = "green";

const root = document.getElementById('root');
root.append(element1, element2);
