// index.js
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./_db.js";

const resolvers = {
    Query: {
        reviews: () => db.reviews,
        games: () => db.games,
        authors: () => db.authors,

        // Fix: Access arguments correctly
        review: (parent, args) => {
            return db.reviews.find(review => review.id == args.id);
        },
        game: (parent, args) => {
            return db.games.find(game => game.id == args.id);
        },
        author: (parent, args) => {
            return db.authors.find(author => author.id == args.id);
        },
    },
    Game: {
        reviews: (parent) => db.reviews.filter(review => review.gameId == parent.id),
    },
    Author:{
        reviews: (parent) => db.reviews.filter(review => review.authorId == parent.id),
    },
    Review: {
        game: (parent) => db.games.find(game => game.id == parent.gameId),
        author: (parent) => db.authors.find(author => author.id == parent.authorId),
    },
    Mutation: {
        DeleteGame: (parent, args) => {
            const gameId = args.id;
            db.games = db.games.filter(game => game.id != gameId);
            db.reviews = db.reviews.filter(review => review.gameId != gameId);
            return db.games;
        },
        AddGame: (parent, args) => {
            let newGame = {
                ...args.game,
                id: Math.floor(Math.random() * 10000).toString(),
            };
            db.games.push(newGame);
            return newGame;
        },
        EditGame: (parent, args) => {
            const gameId = args.id;
            let gameIndex = db.games.findIndex(game => game.id == gameId);
            if (gameIndex === -1) {
                throw new Error("Game not found");
            }
            let updatedGame = {
                ...db.games[gameIndex],
                ...args.game,
            };
            db.games[gameIndex] = updatedGame;
            return updatedGame;
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`🚀  Server ready at: ${url}`);