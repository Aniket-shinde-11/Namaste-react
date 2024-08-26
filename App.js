const heading = React.createElement("h1",{id:"heading"},"Hello From React js!")
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);


const parent = React.createElement(
    "div",
    {id:'parent'},
    [React.createElement(
        "div",{id:'child'},
        [React.createElement("h1",{id:'heading'},"I am a h1 tag"),React.createElement("h2",{id:'heading'},"I am a h2 tag")]
        ),React.createElement(
            "div",{id:'child2'},
            [React.createElement("h1",{id:'heading'},"I am a h1 tag"),React.createElement("h2",{id:'heading'},"I am a h2 tag")]
            )]
);

console.log(parent);
root.render(parent);
