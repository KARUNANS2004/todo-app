export function Tabs(props) {
    // Object destructuring
    const { todos, selectedTab, setSelectedTab } = props;

    // Mapping: We use mapping when our app has to render multiple components of the same type simultaneously.
    const tabs = ['All', 'Open', 'Completed'];

    return (
        // This is mapping after the <nav> tag
        <nav className="tab-container">
            {
                tabs.map((tab, tabIndex) => {
                    // Props
                    const numberOfTasks = tab === 'All' ?
                        todos.length :
                        tab === "Open" ?
                            todos.filter(val => !val.complete).length :
                            todos.filter(val => val.complete).length;

                    return (
                        // Adding custom classes in React
                        <button onClick={() => {
                            setSelectedTab(tab);
                        }} key={tabIndex} className={"tab-button " + (tab === selectedTab ? "tab-selected" : '')}>
                            <h4>{tab} <span>({numberOfTasks})</span></h4>
                        </button>
                    );
                })
            }
            <hr />
        </nav>
    );
}
