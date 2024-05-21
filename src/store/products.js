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
      "Malware",
      "Emotet",
      "Spreads via Outlook harvesting, where the Trojan reads emails from the victim’s computer and sends phishing emails containing a Word document to the victim’s contacts, making it appear as if the content is from a trusted source.",
      // image here"",
      45000.0,
      4,
    ),
    createProduct(
      "Malware",
      "WannaCry",
      "Remotely infect unsuspecting victims via an email phishing attack.",
      // image here"",
      30000.0,
      15,
    ),
    createProduct(
      "Malware",
      "Zeus",
      "Zeus, also known as Zbot, is a Trojan horse malware discovered in 2007 after the cyberattack on the United States Department of Transportation. It uses the man-in-browser keystroke logging and form-grabbing method to steal banking information.",
      // image here"",
      24999.0,
      30,
    ),
    createProduct(
      "Virus",
      "Stuxnet, Worm",
      "Stuxnet was originally designed to target Programmable Logic Controllers (PLCs) used to automate the electromechanics and machine process.",
      // image here"",
      19999.0,
      18,
    ),
  ],
  filteredProducts: [
    createProduct(
      "Malware",
      "Emotet",
      "Spreads via Outlook harvesting, where the Trojan reads emails from the victim’s computer and sends phishing emails containing a Word document to the victim’s contacts, making it appear as if the content is from a trusted source.",
      // image here"",
      45000.0,
      4,
    ),
    createProduct(
      "Malware",
      "WannaCry",
      "Remotely infect unsuspecting victims via an email phishing attack.",
      // image here"",
      30000.0,
      15,
    ),
    createProduct(
      "Malware",
      "Zeus",
      "Zeus, also known as Zbot, is a Trojan horse malware discovered in 2007 after the cyberattack on the United States Department of Transportation. It uses the man-in-browser keystroke logging and form-grabbing method to steal banking information.",
      // image here"",
      24999.0,
      30,
    ),
    createProduct(
      "Virus",
      "Stuxnet, Worm",
      "Stuxnet was originally designed to target Programmable Logic Controllers (PLCs) used to automate the electromechanics and machine process.",
      // image here"",
      19999.0,
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

