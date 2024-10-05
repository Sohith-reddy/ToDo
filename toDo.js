// alert("Hello")
alert("Just A Disclaimer!It is just a simple todo app that I built for fun!! Please dont go on hate me for this shitty Thing!! Thank you");
let response = prompt("What you want to like to perform: ");
const toDos = ["1","2"]; // Add your own Tasks
while (response !== "quit" && response !== 'q') {
    if (response === 'list') {
        // for (let i = 1; i <= 2; i++)
        console.log('****************');
        for (let tasks of toDos) {
            console.log(tasks);
        }
        console.log('****************');
    }
    else if (response === 'new') {
        const new_Task = prompt("What is the new ToDo: ")
        toDos.push(new_Task);
        console.log(`${new_Task} is added`);
    }
    else if (response === 'delete') {
        const index = parseInt(prompt("Enter the index that you want to delete: "));
        if (!Number.isNaN(index)) {
            const deleted = toDos.splice(index, 1);
            console.log(`Task is deleted and the new tasks are ${toDos}`);
        } else {
            console.log("Unknown index");
        }
    }
    response = prompt("What you want to like to perform: ");
}

console.log("Ok,Bye");