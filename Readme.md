# CSS Interview Notes: Display, Visibility & Font/Text Properties

---

## 1. Display Property

### a. `display: inline`

* Elements do **not** start on a new line.
* Takes **only the width** required by the content.
* **Width and height cannot** be set explicitly.
* **Top and bottom margins/padding are ignored.**
* Commonly used tags: `<span>`, `<a>`, `<b>`, `<i>`

> 💡 **Interview Tip:** Inline elements are great for flowing content within text, but they lack box-model flexibility.

---

### b. `display: block`

* Element **starts on a new line**.
* Takes up **full width** available by default.
* You **can set width, height, margin, and padding**.
* Common tags: `<div>`, `<p>`, `<h1>` to `<h6>`, `<section>`

> 💡 **Interview Tip:** All major layout containers (like divs) are block by default, allowing structural control.

---

### c. `display: inline-block`

* Behaves like inline (sits next to elements).
* But **accepts width, height, margin, and padding**.
* Best of both `inline` and `block`.

**Use Case:** Buttons, navigation items, badges.

> 💡 **Interview Tip:** This is useful for creating flexible inline layouts with controlled box sizes.

---

## 2. display: none vs visibility: hidden

| Property             | Effect                                                       |
| -------------------- | ------------------------------------------------------------ |
| `display: none`      | Removes the element **completely** from layout and DOM flow. |
| `visibility: hidden` | **Hides the element**, but reserves its space in the layout. |

**Use Case Difference:**

* Use `display: none` for conditional rendering.
* Use `visibility: hidden` when you need the layout to remain intact.

> 💡 **Interview Tip:** This is often asked in visibility vs layout control questions.

---

## 3. text-align

* Controls **horizontal alignment** of inline content.
* Values:

  * `left` (default)
  * `right`
  * `center`
  * `justify`

```css
text-align: center;
```

> 💡 **Interview Tip:** Works on block containers that wrap inline elements.

---

## 4. text-decoration

* Adds decorative lines to text.
* Values:

  * `none`
  * `underline`
  * `overline`
  * `line-through`
  * `underline overline`

```css
text-decoration: underline;
```

> 💡 **Interview Tip:** Commonly used for links and styling headings.

---

## 5. text-transform

* Controls letter casing of text.
* Values:

  * `uppercase`
  * `lowercase`
  * `capitalize`

```css
text-transform: uppercase;
```

> 💡 **Interview Tip:** Great for consistent typography especially on buttons or headings.

---

## 6. line-height

* Controls space **between lines of text**.
* Can be unitless, number, %, or px.

```css
line-height: 1.5;
```

> 💡 **Interview Tip:** Unitless values are recommended for scalable layouts.

---

## 7. font-family

* Specifies the font used for text.
* Always provide a **fallback** generic family.

```css
font-family: "Roboto", Arial, sans-serif;
```

> 💡 **Interview Tip:** If a font name has a space, wrap it in quotes.

---

## 8. Web Safe Fonts

* Fonts that are **pre-installed** on most systems.
* Examples:

  * Arial
  * Times New Roman
  * Courier New
  * Verdana

> 💡 **Interview Tip:** Use web-safe fonts to ensure visual consistency across browsers.

---

## 9. Google Fonts

* Open-source fonts hosted by Google.
* Steps to use:

  1. Visit [https://fonts.google.com](https://fonts.google.com)
  2. Choose a font, copy the `<link>` tag.
  3. Paste into HTML `<head>`.
  4. Use it in CSS:

```css
font-family: 'Poppins', sans-serif;
```

> 💡 **Interview Tip:** Google Fonts are widely used in production. Know how to import and apply them.

---

## ✅ Overall Tips

* Know the difference between inline/block/inline-block.
* Understand layout impact of visibility vs display.
* Practice using font properties in real projects.
* Be ready to explain use cases with examples.
* Use browser dev tools to test how each property behaves.

---
