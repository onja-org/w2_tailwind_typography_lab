
## 1. Font Families
Tailwind provides utility classes for setting font families:
- `font-sans` — Sans-serif (default)
- `font-serif` — Serif
- `font-mono` — Monospace

**Example:**
```html
<p class="font-serif">This is serif text.</p>
```

## 2. Font Size
Use `text-{size}` classes to set font size. Sizes are responsive:
- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, ...

**Responsive Example:**
```html
<h1 class="text-lg sm:text-xl md:text-2xl">Responsive Heading</h1>
```

## 3. Font Weight
Control font weight with classes like:
- `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`

**Example:**
```html
<span class="font-bold">Bold text</span>
```

## 4. Text Color
Set text color using `text-{color}` classes:
- `text-gray-700`, `text-blue-600`, `text-red-500`, etc.

**Example:**
```html
<p class="text-green-600">Success message</p>
```

## 5. Text Alignment
Align text with:
- `text-left`, `text-center`, `text-right`, `text-justify`

**Example:**
```html
<div class="text-center">Centered text</div>
```

## 6. Letter Spacing & Line Height
- Letter spacing: `tracking-tight`, `tracking-wide`, etc.
- Line height: `leading-none`, `leading-relaxed`, etc.

**Example:**
```html
<p class="tracking-wide leading-relaxed">Spaced and relaxed text</p>
```

## 7. Responsive Typography
Combine responsive prefixes (`sm:`, `md:`, `lg:`, etc.) with typography classes to adapt text for different screens.

**Example:**
```html
<p class="text-sm sm:text-base md:text-lg">This text grows on larger screens.</p>
```

## 8. Decoration & Transform
- `underline`, `line-through`, `uppercase`, `lowercase`, `capitalize`

**Example:**
```html
<span class="underline uppercase">Important</span>
```

## 9. Prose Class (Typography Plugin)
If you use the `@tailwindcss/typography` plugin, you can use the `prose` class for beautiful article-style text.

**Example:**
```html
<article class="prose">
  <h1>Article Title</h1>
  <p>Paragraph text...</p>
</article>
```

---

**Now that you’ve read the lesson, you’re ready to try the lab!** 