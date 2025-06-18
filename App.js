// const pa = React.createElement("h1" , 
//     {
//     id:"heading" } ,
//      "Hello world from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("h1",
    {id:"parent"},
  [ React.createElement("h1",{id:"child"},[ React.createElement("h1",{} , 
        "i am h1 tag"
    ), React.createElement("h1",{} , 
        "i am h2 tag"
    )]), React.createElement("h1",{id:"child -2"},[ React.createElement("h1",{} , 
        "i am h1 tag"
    ), React.createElement("h1",{} , 
        "i am h2 tag"
    )])]
);


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);
