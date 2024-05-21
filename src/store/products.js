export const createProduct = (
  category,
  name,
  desc,
  image,
  price,
  countInStock,
) => ({
  category,
  name,
  description: desc,
  image,
  price,
  countInStock,
});

const initialState = {
  products: [
    createProduct(
      "Emotet",
      "King of Malware",
      "Spreads via Outlook harvesting, where the Trojan reads emails from the victim’s computer and sends phishing emails containing a Word document to the victim’s contacts, making it appear as if the content is from a trusted source.",
      // image here"",
      45.0,
      20,
    ),
    createProduct(
      "WannaCry",
      "Ransomeware",
      "Remotely infect unsuspecting victims via an email phishing attack.",
      // image here"",
      50.0,
      15,
    ),
    createProduct(
      "Zeus",
      "Trojan",
      "Zeus, also known as Zbot, is a Trojan horse malware discovered in 2007 after the cyberattack on the United States Department of Transportation. It uses the man-in-browser keystroke logging and form-grabbing method to steal banking information.",
      // image here"",
      40.0,
      30,
    ),
    createProduct(
      "Stuxnet, Worm",
      "Malicious Computer Worm",
      "Stuxnet was originally designed to target Programmable Logic Controllers (PLCs) used to automate the electromechanics and machine process.",
      // image here"",
      48.0,
      18,
    ),
  ],
  filteredProducts: [
    createProduct(
      "Emotet",
      "King of Malware",
      "Spreads via Outlook harvesting, where the Trojan reads emails from the victim’s computer and sends phishing emails containing a Word document to the victim’s contacts, making it appear as if the content is from a trusted source.",
      // image here"",
      45.0,
      20,
    ),
    createProduct(
      "WannaCry",
      "Ransomeware",
      "Remotely infect unsuspecting victims via an email phishing attack.",
      // image here"",
      50.0,
      15,
    ),
    createProduct(
      "Zeus",
      "Trojan",
      "Zeus, also known as Zbot, is a Trojan horse malware discovered in 2007 after the cyberattack on the United States Department of Transportation. It uses the man-in-browser keystroke logging and form-grabbing method to steal banking information.",
      // image here"",
      40.0,
      30,
    ),
    createProduct(
      "Stuxnet, Worm",
      "Malicious Computer Worm",
      "Stuxnet was originally designed to target Programmable Logic Controllers (PLCs) used to automate the electromechanics and machine process.",
      // image here"",
      48.0,
      18,
    ),
  ],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER":
      return {
        products: state.products,
        filteredProducts: state.products.filter((product) => {
          if (product.category === action.payload) {
            return product;
          } else if (action.payload === "") {
            return product;
          }
        }),
      };

    default:
      return state;
  }
};

export const productFilter = (category) => {
  return {
    type: "FILTER",
    payload: category,
  };
};

