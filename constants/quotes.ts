export default () => {
  const temp = [
    {
      author: "Monkey D. Luffy",
      quote: "If you dont take risks, you cant create a future",
    },
    {
      author: "Roronoa Zoro",
      quote: `You need to accept the fact that you're not the best and have all the will to strive to be better than anyone you face.`,
    },
    {
      author: "Nami (One Piece)",
      quote:
        "There comes a time in your life when you can no longer put off choosing. You have to choose one path or the other",
    },
    {
      author: "Vinsmoke Sanji",
      quote: `Men who can't wipe away the tears from a women's eyes, aren't real men.`,
    },
    {
      author: "Gol D. Roger",
      quote:
        "Inherited will, the destiny of the age, and the dreams of the people. As long as people continue to pursue the meaning of freedom, these things will never cease to be.",
    },
    {
      author: "Dr. Hiluluk",
      quote:
        "When do you think a person dies? When they are shot through the heart? No. It is when they are forgotten.",
    },
    {
      author: "Dr. Hiluluk",
      quote: `A man's dream will never die.`,
    },
    {
      author: "Portgas D. Ace",
      quote:
        `I don't want to live a thousand years. If I just live a single moment, that will be enough.`,
    },
    {
      author: "Portgas D. Ace",
      quote: "Thank you for loving me.",
    },
    {
      author: "Jinbe",
      quote: "Being weak is nothing to be ashamed of. Staying weak is.",
    },
    {
      author: "Jinbe",
      quote:
        "I am not telling you to forget what you lost. I am telling you to look at what you have left.",
    },
    {
      author: "Jinbe",
      quote:
        "There is no shame in falling down. The only shame is refusing to stand back up.",
    },
    {
      author: "Monkey D. Luffy",
      quote:
        `I don't want to conquer anything. The freest person on the sea is the one I want to be.`,
    },
    {
      author: "Monkey D. Luffy",
      quote:
        "It is not about whether I can or cannot. I am doing it because I want to.",
    },
    {
      author: "Monkey D. Luffy",
      quote: "Being alone hurts far more than any wound.",
    },
    {
      author: "Monkey D. Luffy",
      quote:
        "I cannot do anything by myself. That is exactly why I need people beside me.",
    },
    {
      author: "Monkey D. Luffy",
      quote:
        "If I give up now, I am going to regret it for the rest of my life.",
    },
    {
      author: "Monkey D. Luffy",
      quote: "I am not a hero. I am the one who eats the meat.",
    },
    {
      author: "Roronoa Zoro",
      quote:
        `A scar on a swordsman's back is his shame. Never run from what you chose to face.`,
    },
    {
      author: "Roronoa Zoro",
      quote: "If I die here, then I am a man who could only make it this far.",
    },
    {
      author: "Roronoa Zoro",
      quote:
        "When the world says it is impossible, that is exactly when you draw your sword.",
    },
    {
      author: "Dracule Mihawk",
      quote:
        "Grow stronger. However long it takes, I will be waiting at the top.",
    },
    {
      author: "Nami",
      quote:
        "If you want to cry, cry now. Once we set sail, there will be no time for tears.",
    },
    {
      author: "Nami",
      quote:
        "I will draw a map of the entire world. That is my dream, and I will not trade it for anything.",
    },
    {
      author: "Vinsmoke Sanji",
      quote:
        "Never waste food. Someone risked their life so that you could eat.",
    },
    {
      author: "Vinsmoke Sanji",
      quote: `A man who cannot forgive a woman's lie has no style at all.`,
    },
    {
      author: "Zeff",
      quote:
        "No matter who they are, you never let a starving person go hungry.",
    },
    {
      author: "Usopp",
      quote:
        "If you are going to tell a lie, tell one big enough that you have to make it come true.",
    },
    {
      author: "Usopp",
      quote:
        "I do not want to be the kind of man who only knows how to run away.",
    },
    {
      author: "Usopp",
      quote: "Being scared is fine. Standing there anyway is what matters.",
    },
    {
      author: "Tony Tony Chopper",
      quote:
        "I want to become a doctor who can cure any illness. That is why I keep studying.",
    },
    {
      author: "Tony Tony Chopper",
      quote:
        "You are not useless. You just have not found what only you can do yet.",
    },
    {
      author: "Nico Robin",
      quote: "I want to live! Take me out to sea with you!",
    },
    {
      author: "Nico Robin",
      quote:
        "The past always leaves a way forward for anyone willing to read it.",
    },
    {
      author: "Franky",
      quote: "Live in a way that leaves you nothing to regret when it is over.",
    },
    {
      author: "Franky",
      quote: "Men are supposed to fix what they broke, not run from it.",
    },
    {
      author: "Brook",
      quote: "A promise is worth waiting fifty years to keep.",
    },
    {
      author: "Brook",
      quote:
        "Even when everything is lost, you can still choose to keep singing.",
    },
    {
      author: "Edward Newgate",
      quote: "A family is not about blood. It is about who calls you family.",
    },
    {
      author: "Edward Newgate",
      quote:
        "No matter how far the world pushes them away, my sons are still my sons.",
    },
    {
      author: "Shanks",
      quote:
        "I do not care if you spill my drink. But I will never forgive anyone who hurts my friends.",
    },
    {
      author: "Shanks",
      quote: "Some things you can laugh off. Others you stand up for.",
    },
    {
      author: "Silvers Rayleigh",
      quote: "Do not think about anything except what you can do right now.",
    },
    {
      author: "Silvers Rayleigh",
      quote: "You are in too much of a hurry. The sea is not going anywhere.",
    },
    {
      author: "Monkey D. Garp",
      quote:
        "Marines are not always heroes, and pirates are not always villains.",
    },
    {
      author: "Kuzan",
      quote:
        "Whoever wins the war is the one who gets to decide what justice means.",
    },
    {
      author: "Bentham",
      quote: "Friends do not need a reason to help each other.",
    },
    {
      author: "Bellemere",
      quote:
        "There is nothing wrong with being alive. Do not ever apologise for it.",
    },
    {
      author: "Nefertari Vivi",
      quote:
        "A country is its people. Protect them and you have protected everything.",
    },
    {
      author: "Trafalgar D. Water Law",
      quote:
        "I carry the will of the people who are gone. That is how they keep living.",
    },
    {
      author: "Donquixote Doflamingo",
      quote: "Winners write the history. Losers are erased by it.",
    },
    {
      author: "Sir Crocodile",
      quote:
        "Only those who have suffered a long time are able to recognise the light.",
    },
    {
      author: "Monkey D. Dragon",
      quote: "When people have been hurt enough, they finally stand up.",
    },
    {
      author: "Kozuki Oden",
      quote: "Whatever you decide to be, be it loudly and without apology.",
    },
  ];

  return temp[Math.floor(Math.random() * temp.length)];
};
