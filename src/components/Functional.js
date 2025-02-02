function Functional() {
    return (
        <h1>functional component</h1>
    )
}
export default Functional;

/* 

types of JSX rendering methods

1) Element Rendering Using Array

function App() {
return(
[
<h1>Welcome to React-App</h1>
<h1>This is Second Line </h1>
]
)}

export default App;

2) Element Rendering Using div tag

function App() {
return(
<div>
<h1>Welcome to React-App</h1>
<h1>This is Second Line </h1>
</div>
);
}

export default App;

3) Element Rendering Using React Fragment

function App() {
return(
<React.Fragment>
<h1>Welcome to React-App</h>
<h1>This is Second Line </h1>
);
}

export default App;


4) Element Rendering Using Short syntax or sugar syntax

function App() {
<>
<h1>Welcome to React-App</h1>
<h1>This is Second Line </h1>
</>
};

export default App;

*/