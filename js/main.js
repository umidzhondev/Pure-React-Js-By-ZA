const root = ReactDOM.createRoot(document.getElementById("root"));

function createElement(name = "div", attributes = {}, content) {
  const element = React.createElement(name, attributes, content);
  return element;
}
function createCardElement(title, subtitle, weight, age, src,alt) {
  return createElement("div", { className: "products__card" }, [
    createElement("div", { className: "products__card-imgbox" }, [
      createElement("img", {
        src,
        alt,
      }),
    ]),
    createElement("div",{className:"products__card-info"},[
      createElement("img",{className:"products__card-icon",src:"./images/heart-icon.svg"}),
      createElement("h2",{className:"products__card-title"},title),
      createElement("h4",{className:"products__card-subtitle"},subtitle),
      createElement("div",{className:"products__card-footer"},[
        createElement("span",{},weight),
        createElement("span",{},age),
      ])
    ])
  ]);
}

const pokemonCard = createCardElement("Pokemons","Grass, Poison","6.9 kg","99 age","./images/card-image.png","Pokemon Card Image");

const styles = {
  container: {
    maxWidth: "1185px",
    width: "100%",
    margin: "0 auto",
    paddingInline: "30px",
  },
};

const section = React.createElement("section", { className: "products" }, [
  createElement("div", { className: "container", style: styles.container }, [
    createElement("div", { className: "products__content" }, [
      createElement("div", { className: "products__header" }, [
        createElement("div", { className: "products__logo" }, [
          createElement("img", {
            src: "./images/pokemon-logo.png",
            alt: "Logo",
          }),
        ]),
        createElement("img", {
          src: "./images/heart-icon.svg",
          className: "products__header-icon",
          alt: "Icon",
        }),
        createElement("div", { className: "products__header-menu" }, [
          createElement(
            "select",
            { className: "products__select", name: "Gross" },
            [
              createElement("option", {}, "Gross"),
              createElement("option", {}, "item-2"),
              createElement("option", {}, "item-3"),
              createElement("option", {}, "item-4"),
            ]
          ),
          createElement("div", { className: "products__search-box" }, [
            createElement("input", { type: "text", placeholder: "Search" }),
            createElement("img", {
              src: "./images/search-icon.svg",
              alt: "Icon",
            }),
          ]),

          createElement(
            "select",
            { className: "products__select", name: "Aa-Zz" },
            [
              createElement("option", {}, "Aa-Zz"),
              createElement("option", {}, "item-2"),
              createElement("option", {}, "item-3"),
              createElement("option", {}, "item-4"),
            ]
          ),
          createElement(
            "button",
            { className: "products__header-button" },
            "Button"
          ),
        ]),
      ]),
      createElement("div", { className: "products__cards" }, [
        pokemonCard,
        pokemonCard,
        pokemonCard,
        pokemonCard,
        pokemonCard,
        pokemonCard,
        pokemonCard,
        pokemonCard,
      ]),
    ]),
  ]),
]);

root.render(section);
