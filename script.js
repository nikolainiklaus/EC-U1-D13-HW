/* EXERCISE 5: 
        Add a new task to the list.
        Suggestion:
        - Use document.getElementById to get the UL item and the input text
        - Use the document.createElement to create the new List Item
        - Append the LI child to the UL
    */

    function addNewTask() {
        let taskTitle = document.getElementById("newTask").value;
        let taskList = document.getElementById("myTaskList");
        let newTask = document.createElement("li");
        
        newTask.innerText = taskTitle;
        taskList.appendChild(newTask);
        document.getElementById("newTask").value = "";
    }

    

/* EXERCISE 6: 
        Create a method "removeLast" which removes the last item from the task list
    */

    function removeLast() {
        let taskList = document.getElementById("myTaskList");
        let allTasks = document.getElementById("myTaskList").getElementsByTagName("li");
        let lastTask = allTasks[allTasks.length-1]

        console.log(typeof allTasks);

        taskList.removeChild(lastTask);
    }


/* EXERCISE 7: 
        Create a method "removeFirst" which removes the first item from the task list
    */


    function removeFirst() {
        let taskList = document.getElementById("myTaskList");
        let allTasks = document.getElementById("myTaskList").getElementsByTagName("li");
        let firstTask = allTasks[0]

        taskList.removeChild(firstTask);
    }
    


/* EXERCISE 8: 
        Create a method "getTasksAsArray" which returns, and prints to the console an array containing the tasks as strings
    */

    function getTasksAsArray() {
        let allTasks = document.getElementById("myTaskList").getElementsByTagName("li");

        let taskArray = [];

        for (task of allTasks) {
            taskArray.push(task.innerText);
        }

        console.log(taskArray);
    }    


    
/* EXERCISE 9:
        Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an 
        onchange event listener ad applies it as background to every list item
    */

    function onLoadOperations() {
        
        document.getElementById("colorPicker").addEventListener("change", changeTaskBackgroundColor);
    }

    function changeTaskBackgroundColor() {
        let color =  document.getElementById("colorPicker").value;
        console.log(color);

        let listItems = document.getElementById("myTaskList").getElementsByTagName("li");

        for (listItem of listItems) {
            listItem.style.backgroundColor = color;
        }
    }


/* EXTRA */

/* EXERCISE 10: 
        Create a method "bubbleSort()" which sorts the task list alphabetically using the bubble sort algorithm
    
        Use your spare time to beautify your task list with CSS.

        Suggestion:
        - Break the code into many function for semplicity 
        - Reuse the functions previously created
    */

    function bubblesort(){

        let allTasks = document.getElementById("myTaskList").getElementsByTagName("li");

        let array = [];

        for (task of allTasks) {
            array.push(task.innerText);
        }

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                            
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        console.log(array);

        //remove all tasks
        document.getElementById("myTaskList").innerHTML = "";
        
        
        //add sorted tasks        
        for (element of array) { 
            let taskTitle = element;
            let taskList = document.getElementById("myTaskList");
            let newTask = document.createElement("li");
            
    
            newTask.innerText = taskTitle;
            taskList.appendChild(newTask);
            document.getElementById("newTask").value = "";
        }
    }






    window.onload = onLoadOperations;