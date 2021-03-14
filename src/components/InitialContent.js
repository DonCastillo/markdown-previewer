const InitialContent = `
# Markdown Previewer

## About
Markdown Previewer lets you convert Markdown files to HTML courtesy of [Marked](https://marked.js.org/) parser.

## How to Use
1. Type any markdown syntax in the editor on the left. For the list of markdown syntax, click [here](https://www.markdownguide.org/basic-syntax/).
2. See the real-time HTML update on the right

***
Sample Markdown Syntax
***
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

This is a paragraph. This paragraph is written in Markdown syntax and is converted to HTML with ${'`<p>`'} tags contained within this text. Don't put tabs or spaces in from of your paragraphs. You can emphasize text by putting it in **bold** like this or __this__. You can also *italicize* like this. You can put a text in ***bold and italic*** like this.

> You can put a paragraph in blockquotes like this. 
> Notice the indentation at the beginning of this paragraph.
>> You can also put blockquote within a blockquote. 
>> You can add more markdown syntax here like **bold** text, *italics* etc.

Sample ordered list:
1. First
2. Second
3. Third

Sample unordered list:
- First
- Second
- Third

| Column 1 | Column 2 |
|----------|----------|
| Row 1    | Row 1    |
| Row 2    | Row 2    |
| Row 3    | Row 3    |

![Stark Sigil](./gameofthrones.jpeg)

Embed code: ${'\n```html\n<html>\n  <head><head>\n</html>\n```'}`;

export default InitialContent;