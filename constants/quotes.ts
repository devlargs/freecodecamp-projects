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
  ];

  return temp[Math.floor(Math.random() * temp.length)];
};
