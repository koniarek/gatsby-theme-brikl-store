# Gatsby Theme for BrikL Storefronts

A Gatsby theme for building eCommerce storefronts powered by [BrikL](https://www.brikl.io "BrikL")
A live demo can be found [here](https://gatsby-theme-brikl-demo.netlify.com "demo")

It includes:

- the theme itself (located in `theme/`)
- a demo site (located in `demo/`) that installs the theme
- a Yarn workspaces configuration so the theme and demo can be worked on simultaneously
- a bunch of generated eCommerce pages to get you started
- multi language support

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme

    ```sh
    yarn add @brikl/gatsby-theme-brikl-store
    ```

    ```sh
    npm install --save @brikl/gatsby-theme-brikl-store
    ```

2.  Add the theme to your `gatsby-config.js`:

    ```js
    module.exports = {
      plugins: [
        {
          resolve: `@brikl/gatsby-theme-brikl-store`,
          options: {
            clientId: process.env.GATSBY_BRIKL_CLIENT_ID,
            shopId: process.env.GATSBY_BRIKL_SHOP_ID,
            userId: process.env.GATSBY_BRIKL_USER_ID
          }
        }
      ]
    };
    ```

3.  Create a `.env` file in the `theme` or `demo` folder or pass environment variables to the build like below:

    ```sh
    GATSBY_BRIKL_SHOP_ID=gatsby-theme-contest
    GATSBY_BRIKL_CLIENT_ID=ASK-US-FOR-A-CLIENT-ID
    GATSBY_BRIKL_USER_ID=ASK-US-FOR-YOUR-USER-ID
    ```

4.  Start developing your site or editing the theme

    ```sh
    gatsby develop
    ```

    The demo will start at http://localhost:8000

## Component Shadowing

You can use Gatsby component shadowing to change the behaviour/appearance of components.

If you wanted to change the look of the products in /products page, you could create the following file inside your Gatsby project.

```js
// src/@brikl/gatsby-theme-brikl-store/components/Product.js

import React from "react";
import { getTextFromLanguage } from "@brikl/gatsby-theme-brikl-store/src/utils/utils";
import { Link } from "gatsby";
import { Grid } from "@material-ui/core";

const NewProduct = ({ product, langCode, urlPrefix }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={product.id}>
      <h1>{getTextFromLanguage(product.title.text, langCode)}</h1>
      <h5>{getTextFromLanguage(product.description.text, langCode)}</h5>
      <h3>
        price: ${product.price.value} {product.price.currency}
      </h3>
      <Link
        to={
          `${urlPrefix}/products/` +
          getTextFromLanguage(product.slugs, langCode)
        }
      >
        Details
      </Link>
    </Grid>
  );
};

export default NewProduct;
```

For more examples, check out the `/demo-shadowed` folder. You can also see a demo website of the shadowed examples [here](https://gatsby-theme-brikl-demo-shadowed.netlify.com "demo-shadowed")

## Roadmap

Next steps:

- [ ] NPM & sem-ver workflow
- [ ] Brikl design studio integration
- [ ] Tests
- [ ] Add to cart mutation
- [ ] Checkout & payment
- [ ] Provide sample userId and clientId for demo purposes
- [ ] Contribution guidelines
