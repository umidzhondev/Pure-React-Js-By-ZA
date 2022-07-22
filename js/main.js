const root  = ReactDOM.createRoot(document.getElementById("root"));

function createElement(name="div",attributes={},content){
    const element = React.createElement(name,attributes,content);
    return element;
}
const container = React.createElement("div",{className:"container"},[
    createElement("div",{className:"boxs"},[
        createElement("div",{className:"box"},[
            createElement("img",{src:"./images/angular js logo png.png", className:"box__image", alt:"Box Image",}),
            createElement("h2",{className:"box__title"},"Couldn't find a size you need?"),
            createElement("p",{className:"box__description"},"Well work directly with you to create a fully branded packaging system."),
            createElement("button",{className:"box__button",type:"button"},"Request a quote"),
        ]),
        createElement("div",{className:"box"},[
            createElement("img",{src:"./images/vuejs.png", className:"box__image", alt:"Box Image",}),
            createElement("h2",{className:"box__title"},"Need a free dieline template?"),
            createElement("p",{className:"box__description"},"Let us know what size you need and we'll email an Adobe Illustrator dieline to you within 3-4 bussines days."),
            createElement("button",{className:"box__button",type:"button"},"Request dieline"),
        ]),
    ])    
])

root.render(container)