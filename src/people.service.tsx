import peopleBoard from './people.json';

const cards = peopleBoard.cards;

const theodoListId = '586d6013f8b9fae261791916';

const theodoCards = cards.filter((card) => {
    return card.idList === theodoListId && card.attachments.length > 0;
});

export const peopleList = theodoCards.map((card) => ({
    id: card.id,
    name: card.name.split(' ')[0],
    image: card.attachments[0].url
}));
