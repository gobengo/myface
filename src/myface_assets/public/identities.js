import myfaceImageUri from "./myface.jpg";
import benImageUri from "./ben.jpg";
import harrietImageUri from "./harriet.jpg";
import bertrandImageUri from "./bertrand.jpg";

export const me = {
    name: "Me",
    bio: "I am you",
    icon: myfaceImageUri,
};

export const bertrand = {
    name: 'Bertrand Russell',
    bio: 'Philosopher',
    favoriteQuote: "Love is wise. Hate is foolish.",
    icon: bertrandImageUri,
};

export const ben = {
    name: 'Benjamin Goering',
    url: 'https://bengo.is',
    bio: 'I help build the SDK at DFINITY.org',
    icon: benImageUri,
};

export const harriet = {
    name: 'Harriet Tubman',
    bio: 'American abolitionist and political activist.',
    url: 'https://en.wikipedia.org/wiki/Harriet_Tubman',
    icon: harrietImageUri,
};
