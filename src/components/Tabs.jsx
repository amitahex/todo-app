export function Tabs(props) {
  const { todos, selectedTab, setSelectedTab } = props;
  const tabs = ["All", "Open", "Completed"];
  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const countOfTabs =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((val) => !val.complete).length
            : todos.filter((val) => val.complete).length;
        return (
          <button
            key={tabIndex}
            className={
              "tab-button" + (tab == selectedTab ? " tab-selected" : "")
            }
            onClick={() => {
              setSelectedTab(tab);
            }}
          >
            <h4>
              {tab} <span>({countOfTabs})</span>
            </h4>
          </button>
        );
      })}
      <hr></hr>
    </nav>
  );
}
