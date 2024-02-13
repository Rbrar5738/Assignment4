"use strict";

$(document).ready( () => {
    const tasks = [];

    $("#add_task").click( () => {   
        const textbox = $("#task");
        // Splitting the entered value where comma (,) is found and storing in the task variable array
        const task = textbox.val().split(",");
        if (task === "") {
            alert("Please enter a task.");
            textbox.focus();
        } else {
            // Adding task to array with foreach loop and pushing into the tasks array
           task.forEach(task=>{ 
            tasks.push(task.trimStart());
        });

            // Clear task text box and re-display tasks
            textbox.val("");
            $("#task_list").val(tasks.join("\n"));
            textbox.focus();
        }
    });
    
    $("#clear_tasks").click( () => {
        tasks.length = 0;
        $("#task_list").val("");
        $("#task").focus();
    }); 
    
    $("#task").focus();
});