import html from "html-literal";

export default state => html`
<header>
    <h1>${state.header}</h1>
</header>
`;

// created anonymous function using arrow syntax