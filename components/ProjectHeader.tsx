export default ({ title, dark }: { dark?: boolean; title: string }) => (
  <h1
    style={{
      textAlign: "center",
      paddingTop: 20,
      paddingBottom: 20,
      fontSize: "2em",
      color: dark ? "black" : "whitesmoke",
    }}
  >
    {title}
  </h1>
);
