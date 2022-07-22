const root = ReactDOM.createRoot(document.getElementById("root"));

function createElement(name = "div", attributes = {}, content) {
  const element = React.createElement(name, attributes, content);
  return element;
}

const styles = {
  container: {
    maxWidth: "72%",
    width: "100%",
    margin: "0 auto",
    minHeight:"100vh",
    display:"flex",
    alignItems: "center"
  },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "'Poppins',sans-serif",
    color: "#000",
    marginBottom:"20px"
  },
};

const container = React.createElement("div", { className: "container", style:styles.container}, [
  createElement("div", { className: "boxs" }, [
    createElement("div", { className: "box" }, [
      createElement("img", {
        src: "./images/angular js logo png.png",
        className: "box__image",
        alt: "Box Image",
      }),
      createElement(
        "h2",
        { className: "box__title",style:styles.title },
        "Couldn't find a size you need?"
      ),
      createElement(
        "p",
        { className: "box__description" },
        "Well work directly with you to create a fully branded packaging system."
      ),
      createElement(
        "button",
        { className: "box__button", type: "button" },
        "Request a quote"
      ),
    ]),
    createElement("div", { className: "box" }, [
      createElement("img", {
        src: "./images/vuejs.png",
        className: "box__image",
        alt: "Box Image",
      }),
      createElement(
        "h2",
        { className: "box__title",style:styles.title },
        "Need a free dieline template?"
      ),
      createElement(
        "p",
        { className: "box__description" },
        "Let us know what size you need and we'll email an Adobe Illustrator dieline to you within 3-4 bussines days."
      ),
      createElement(
        "button",
        { className: "box__button", type: "button" },
        "Request dieline"
      ),
    ]),
  ]),
]);

root.render(container);
