import path, { resolve } from 'path';
import fetch from 'isomorphic-fetch';

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

    //loop over each pizza and create page for that pizza
        data.pizzas.nodes.forEach((pizza) => {
            actions.createPage( {
                //url for new page
                path: `pizza/${pizza.slug.current}`,
                component: pizzaTemplate,
                context: {
                    slug: pizza.slug.current
                }
            });
        });
};

async function turnToppingsIntoPages({ graphql, actions }) {
    console.log(`Turning toppings into pages`)
    //get template
    const toppingTemplate = path.resolve('./src/pages/pizzas.js');
    //query all toppings
    const { data } = await graphql(`
        query {
            toppings: allSanityTopping {
                nodes {
                    name
                    id
                }
            }
        }
    `);
    //loop over data and create page for that topping
       data.toppings.nodes.forEach((topping) => {
        //console.log(`Creating page for topping`, topping.name);
        actions.createPage({
            path: `topping/${topping.name}`,
            component: toppingTemplate,
            context: {
                topping: topping.name,
                //TODO regex for topping
            }
        });
       }) 
    //pass data to pizza.js

}

async function fetchBeersAndTurnIntoNodes({ actions, createNodeId, createContentDigest}){
   //fetch list of beers
   const res = await fetch('https://sampleapis.com/beers/api/ale');
   const beers = await res.json();
   //loop over each one
   for (const beer of beers) {
       //create node for each beer
       //const nodeContent =JSON.stringify(beer);
       const nodeMeta = {
           id: createNodeId(`beer-${beer.name}`),
           parent: null,
           children: [],
           internal: {
               type: 'Beer',
               mediaType: 'application/json',
               contentDigest: createContentDigest(beer),
           }
       }
       actions.createNode({
        ...beer,
        ...nodeMeta,
    })
   } 
}

//sourcing nodes into graphql/gatsby from outside API
export async function sourceNodes(params) {
    //fetch list of beers and source them into gatsby api
    await Promise.all([
        fetchBeersAndTurnIntoNodes(params)
    ])
}

async function turnSlicemastersIntoPages({graphql, actions}) {
    //query all slicemasters
    const { data } = await graphql(`
        query {
            slicemasters: allSanityPerson {
                totalCount
                nodes {
                    name
                    id
                    slug {
                        current
                    }
                }
            }
        }
    `)
    //turn each slicemaster into their own page
        data.slicemasters.nodes.forEach((slicemaster) => {
            actions.createPage({
                component: path.resolve('./src/templates/Slicemaster.js'),
                path: `/slicemaster/${slicemaster.slug.current}`,
                context: {
                 name: slicemaster.person,
                 slug: slicemaster.slug.current,   
                }
            })
        })
    //figure out how many pages based on slicemasters count, and how many per page
    const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
    const pageCount= Math.ceil(data.slicemasters.totalCount / pageSize);
    //console.log(`there are ${data.slicemasters.totalCount} total people and we have ${pageCount} pages with ${pageSize} per page`)
    //loop over
    Array.from({ length: pageCount }).forEach((_, i) =>{
       // console.log(`creating page ${i}`);
        actions.createPage({
            path: `/slicemasters/${i+1}`,
            component: path.resolve('./src/pages/slicemasters.js'),
            context: {
            //passed to template
                skip: i * pageSize,
                currentPage: i+1,
                pageSize
            }
        })
    })
}

export async function createPages(params){
    //create pages dynamically
    //wait for all promises to be resolved before finishing this function
    await Promise.all([
        //pizzas
    turnPizzasIntoPages(params),
    //toppings
    turnToppingsIntoPages(params),
     //slicemasters
     turnSlicemastersIntoPages(params)
    ]); 
}