// // Given this string input...
// const input = `2173|Books|The Hobbit|12.54
// 7212|Books|The Davinci Code|32.12
// 7312|Music|The Best of Yanni|16.00
// 7313|Music|Bold As Love|15.00
// 5831|Music|The White Album|21.00
// 5811|Electronics|Sony a6000|500.00
// 9788|Electronics|iPhone Classic|400.00`;

import { Product } from "./model/product";

// // Create a function that returns an object structure like below and log it to the console
// const sampleResult = {
//   Books: [
//     {
//       id: '2173',
//       category: 'Books',
//       title: 'The Hobbit',
//       price: '12.54'
//     },
//     {
//       id: '7212',
//       category: 'Books',
//       title: 'The Davinci Code',
//       price: '32.12'
//     }
//   ],
//     Music: [
//       {
//         id: '7312',
//         category: 'Music',
//         title: 'The Best of Yanni',
//         price: '16.00'
//       },
//       {
//         id: '7313',
//         category: 'Music',
//         title: 'Bold As Love',
//         price: '15.00'
//       },
//       {
//         id: '5831',
//         category: 'Music',
//         title: 'The White Album',
//         price: '21.00'
//       }
//     ],
//       Electronics: [
//         {
//           id: '5811',
//           category: 'Electronics',
//           title: 'Sony a6000',
//           price: '500.00'
//         },
//         {
//           id: '9788',
//           category: 'Electronics',
//           title: 'iPhone Classic',
//           price: '400.00'
//         }
//       ]
// };


const parseInput = (input: String) => {
    const lines = input.split('\n');
    const result : Record<string, Product[]> = {};

    for(const line of lines){
        const [id, category, title, price] = line.split('|');

        if(!result[category]){
            result[category] = [];
        }
        result[category].push({id:id as unknown as number, category, name:title, price: price as unknown as number});
    }
    return result;
}

const input = `2173|Books|The Hobbit|12.54
7212|Books|The Davinci Code|32.12
7312|Music|The Best of Yanni|16.00
7313|Music|Bold As Love|15.00
5831|Music|The White Album|21.00
5811|Electronics|Sony a6000|500.00
9788|Electronics|iPhone Classic|400.00`;

console.log(parseInput(input));


// -- We want to be able to associate products & categories. For example, we want to create a "Cookies" category, and an "Oreo" product would be associated with that category.
// -- Given the two pre-existing tables below, walk me through how you would implement this capability.

// CREATE TABLE Product (
//     id SERIAL PRIMARY KEY,
//     name TEXT NOT NULL
// );

// CREATE TABLE Category (
//     id SERIAL PRIMARY KEY,
//     name TEXT NOT NULL
// );