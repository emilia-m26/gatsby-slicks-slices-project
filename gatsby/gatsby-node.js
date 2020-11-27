import path from 'path';

async function turnPizzasIntoPages({ graphql, actions }) {
    //get template for page
    const pizzaTemplate = path.resolve('./src/templates/Pizza.js');
    //query all pizzas
    const { data } = await graphql(`
        query {
            pizzas: allSanityPizza {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);
    console.log(data);
    //loop over each pizza and create page for that pizza
        data.pizzas.nodes.forEach((pizza) => {
            actions.createPage( {
                //url for new page
                path: `pizza/${pizza.slug.current}`,
                component: pizzaTemplate,
            });
        });
};

export async function createPages(params){
    //create pages dynamically
    //pizzas
    await turnPizzasIntoPages(params);
    //toppings
    //slicemasters
}