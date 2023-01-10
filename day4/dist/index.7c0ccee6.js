//lets create an element with the help of react library:
const heading = React.createElement("h1", {
    id: "heading"
}, "Heading1");
const heading2 = React.createElement("h2", {}, "heading2");
const container = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.7c0ccee6.js.map
