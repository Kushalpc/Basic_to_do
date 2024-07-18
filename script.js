'use strict';

    const inputText = document.querySelector("input");
    const buttonEnter = document.querySelector("button");
    const list = document.querySelector("ul");


    buttonEnter.addEventListener("click", () => {

        const task = inputText.value;
        
        if(task == ""){
            inputText.setAttribute("placeholder", "Add something man!!") 
            return
        }else{
            inputText.value = '';
            if(task !== ""){
                inputText.setAttribute("placeholder", "") 
            }
            const cancelButton = document.createElement("button");
            cancelButton.textContent = "Delete";
    
            const taskList = document.createElement("span");
            taskList.textContent = task;
    
    
            const listItems = document.createElement("li");
            listItems.appendChild(taskList);
            listItems.appendChild(cancelButton);
    
            list.appendChild(listItems);
    
            cancelButton.addEventListener("click", () => {
    
                listItems.remove();
    
            })
        
            
    
            inputText.focus();
        }


    })