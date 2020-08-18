import links from "constants/links";

export default "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`\n, between 2 backticks.\n\n```\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstName == 'Ralph' && lastName == 'Largo') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](" +
  `${links.SAMPLE_URL}` +
  "), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even\ntables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n*\nAnd last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](" +
  `${links.MARKDOWN_IMAGE}` +
  ")<br>";
