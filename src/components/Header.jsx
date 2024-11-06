export function Header(props){
    // The arguments in Header() is given to complete the process of communications in props.
    const {todos}=props // Unpacking the props
    const todoLength=todos.length // both of these lines are a part of props(now we can use this todoLength variable anywhere we want to);

    const isTasksPlural=todoLength!=1;
    const taskOrTasks=isTasksPlural?'tasks':'task' // This line and line above it are important

    return (
        <header>
            <h1 className="text-gradient">You have {todoLength} open {taskOrTasks}.</h1>
        </header>
    )
}