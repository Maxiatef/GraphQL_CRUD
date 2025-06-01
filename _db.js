let games= [
    {id:1, title: "The Legend of Zelda: Breath of the Wild", platform: ["Nintendo Switch", "Wii U"]},
    {id:2, title: "The Witcher 3: Wild Hunt", platform: ["PC", "PS4", "Xbox One", "Nintendo Switch"]},
    {id:3, title: "Red Dead Redemption 2", platform: ["PC", "PS4", "Xbox One"]},
    {id:4, title: "Dark Souls III", platform: ["PC", "PS4", "Xbox One"]},
    {id:5, title: "God of War", platform: ["PS4"]},
]
let reviews = [
    {id: 1, gameId: 1, authorId: 1, rating: 10, content: "An amazing open-world experience!"},
    {id: 2, gameId: 2, authorId: 2, rating: 9, content: "A masterpiece of storytelling and gameplay."},
    {id: 3, gameId: 3, authorId: 3, rating: 8, content: "A beautiful and immersive world."},
    {id: 4, gameId: 4, authorId: 1, rating: 7, content: "Challenging but rewarding."},
    {id: 5, gameId: 5, authorId: 2, rating: 10, content: "An emotional journey with stunning visuals."},
    {id: 6, gameId: 1, authorId: 3, rating: 9, content: "A must-play for any Zelda fan."},
    {id: 7, gameId: 2, authorId: 1, rating: 8, content: "A vast world with countless quests."},
    {id: 8, gameId: 3, authorId: 2, rating: 9, content: "A gripping story with memorable characters."},
]
let authors = [
    {id: 1, name: "John Doe", verified: true},
    {id: 2, name: "Jane Smith", verified: false},
    {id: 3, name: "Alice Johnson", verified: true},
]

export default {
    games,
    reviews,
    authors
}