
const node = React.createElement('div', {
    id: "heading",
    xyz: "abc"
},  [
    React.createElement( 'div', {} , [React.createElement('h1', {}, "this is a h1 tag") ,
         React.createElement('h2', {}, "this is a h2 tag")] ),
         
    React.createElement( 'div', {} , [React.createElement('h1', {}, "this is a h1 tag") ,
         React.createElement('h2', {}, "this is a h2 tag")] ),
])


console.log(node    )
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(node)