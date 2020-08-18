export const tap = {
  whileTap: { scale: 1.1 },
};

export const sequence = {
  list: { visible: { opacity: 1 }, hidden: { opacity: 0 } },
  item: {
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0, x: -100 },
  },
};
