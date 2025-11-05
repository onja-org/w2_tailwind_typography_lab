# Tailwind CSS Theme Variables

## What You’ll Learn

By the end of this lesson, you’ll be able to:

- **Understand** what theme variables are and why they’re the foundation of Tailwind’s design system  
- **Recognize** how to create custom colors, fonts, spacing, shadows, and breakpoints  
- **See** how utility classes like `bg-brand`, `font-heading`, or `p-cozy` are generated automatically  
- **Differentiate** between theme variables and regular CSS variables  
- **Explore** responsive typography with full control over design tokens  

---

## What Are Theme Variables?

Think of theme variables as your design system's building blocks. They define colors, fonts, spacing, and more in one central place — like a recipe book for your website's appearance.

### The Magic Behind Tailwind Classes

Classes like `bg-red-500` or `text-blue-300` are created automatically from **theme variables**. Here’s how it works:

```css
/* This theme variable... */
--color-red-500: oklch(0.637 0.237 25.331);

/* ...creates these utility classes for you */
.bg-red-500 { background-color: oklch(0.637 0.237 25.331); }
.text-red-500 { color: oklch(0.637 0.237 25.331); }
.border-red-500 { border-color: oklch(0.637 0.237 25.331); }

```

## A Custom Theme Variable Example

Imagine defining a brand color: **Mint Green**.

### How It’s Defined

In the main CSS file (e.g., `app.css` or `styles.css`):

```css
@import "tailwindcss";

@theme {
  --color-mint-500: #50d4a0;
}
```

### How It’s Used

```html
<div class="bg-mint-500 text-white p-4 rounded">
  This div has your custom mint background!
</div>

<button class="border-2 border-mint-500 text-mint-500 px-4 py-2">
  Mint border button
</button>
```

---

## Theme Variable Namespaces (Categories)

Tailwind organizes variables into **namespaces** — each creates specific utility classes.

| Namespace       | Example                                      | Generates                                          |
|-----------------|----------------------------------------------|----------------------------------------------------|
| `--color-*`     | `--color-brand-primary`<br>`--color-brand-secondary`<br>`--color-danger` | `bg-brand-primary`<br> `text-brand-secondary`<br> `bborder-danger`, etc. |
| `--font-*`      | `--font-heading`<br> `--font-body`                            | `font-heading`<br>`font-body`                                     |
| `--spacing-*`   | `--spacing-huge`<br>`--spacing-tiny`                            | `p-huge`<br> `m-tiny`<br> `gap-huge`                     |
| `--shadow-*`    | `--shadow-card`                              | `shadow-card`                                      |

## Practical Example: Coffee Shop Brand Theme

Here’s a complete theme for a fictional coffee shop website:

```css
@import "tailwindcss";

@theme {
  /* Brand Colors */
  --color-coffee-light: #d4a574;
  --color-coffee-medium: #8b4513;
  --color-coffee-dark: #3c1810;
  --color-cream: #f5f5dc;
  --color-warm-white: #fefefe;
  
  /* Custom Fonts */
  --font-brand: "Playfair Display", serif;
  --font-body: "Source Sans Pro", sans-serif;
  
  /* Custom Spacing */
  --spacing-cozy: 1.25rem;
  --spacing-spacious: 3rem;
  
  /* Custom Shadows */
  --shadow-warm: 0 4px 20px rgba(139, 69, 19, 0.1);
}
```

## How It Looks in HTML

```html
<header class="bg-coffee-dark text-cream p-cozy">
  <h1 class="font-brand text-3xl">Brew & Bean</h1>
</header>

<main class="bg-warm-white font-body p-spacious">
  <div class="bg-cream shadow-warm rounded-xl p-cozy">
    <h2 class="text-coffee-dark font-brand text-2xl mb-3">
      Welcome to Our Cozy Corner
    </h2>
    <p class="text-coffee-dark leading-relaxed">
      Hand-crafted coffee, made with love.
    </p>
  </div>
</main>
```

---

### Override Default Colors

Replace Tailwind’s defaults easily:

```css
@theme {
  --color-red-500: #e11d48; /* Your brand red */
}
```

> Now `bg-red-500` will use your custom color instead of Tailwind's default.

---

### Use Theme Variables in Custom CSS

All theme variables become CSS variables automatically:

```css
.custom-gradient {
  background: linear-gradient(
    45deg, 
    var(--color-coffee-light), 
    var(--color-coffee-dark)
  );
}

.custom-button:hover {
  box-shadow: var(--shadow-warm);
  transform: translateY(-2px);
}
```

---

### Custom Responsive Breakpoints

```css
@theme {
  --breakpoint-mobile: 36rem;
  --breakpoint-tablet: 48rem;
  --breakpoint-desktop: 80rem;
}
```

```html
<div class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3">
  <!-- Responsive grid with your custom breakpoints -->
</div>
```

---

## Best Practices for Beginners

## Common Questions

**Q**: **Can I use hex, rgb, or hsl?**
**A**: *Yes! All work*:

```css
--color-brand: #ff6b6b;
--color-brand: rgb(255, 107, 107);
--color-brand: hsl(0, 100%, 71%);
```

**Q**: **Theme variable vs CSS variable?**

| Feature                  | Theme Variable               | CSS Variable                |
|--------------------------|------------------------------|-----------------------------|
| Creates utility classes? | Yes                          | No                          |
| Example                  | `--color-brand` → `bg-brand` | `--my-color` → only in CSS  |

**Q**: **Do I need to restart the server?**  
**A**: *Yes for new variables. But changes to existing values often update automatically*.

---

## Your Next Steps: Apply Theme Variables

Now that you understand **theme variables**, let’s **bring them to life** in your `index.html` project!

### Step 1: Create a Custom Theme

Open your **index.html** file and add these following inside of the **<head>**:

```html
 <!-- Tailwind CDN (supports theme via config) -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- INJECT CONFIG: This makes bg-fill, text-base, etc. WORK -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            base: 'var(--color-base)',
            muted: 'var(--color-muted)',
            inverted: 'var(--color-inverted)',
            fill: 'var(--color-fill)',
            accent: 'var(--color-accent)',
            outline: 'var(--color-outline)'
          },
          spacing: {
            card: 'var(--spacing-card)',        // 2rem
            tight: 'var(--spacing-tight)'       // 0.75rem
          },
          screens: {
            'card-wide': 'var(--breakpoint-card-wide)'  // 28rem = 448px
          }
        }
      }
    }
  </script>

   <!-- YOUR THEME COLORS -->
  <style>
    :root {
      --color-base: #000;
      /* black */
      --color-muted: #f7c625;
      /* yellow */
      --color-inverted: #fff;
      /* white */
      --color-fill: #b91c1c;
      /* dark red */
      --color-accent: #f0a6ba;
      /* pink */
      --color-outline: #0e11b4;
      /* dark blue */

        /* Custom Spacing */
      --spacing-card: 2rem;
      --spacing-tight: 0.75rem;

      /* Custom Breakpoints */
      --breakpoint-card-wide: 28rem;
    },

  </style>
```

### Step 2: Update **Section 1 – Basic Card** with Responsive Theming

You will apply **your custom theme** to create a **visually striking card** with:

- **Red background** (using `--color-fill`)
- **Yellow title** (using `--color-muted`)
- **Smart text color**:  
  - **White** on **small screens** (mobile)  
  - **Black** on **large screens** (desktop) → better contrast on bright red

---

Replace the current Section 1 card with this updated version:

```html
  <!-- ==================== SECTION 1: BASIC CARD  ==================== -->
  <section class="mb-12">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">Section 1: Basic Card</h2>

    <!-- RED BACKGROUND -->
    <div class="bg-fill rounded-lg shadow-lg p-6 text-center">
      <div class="space-y-5">
        <!-- YELLOW TITLE -->
        <h3 class="text-muted text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Welcome to Our Platform
        </h3>
        <!--dark text on large screen and white on small screen -->
        <p class="text-inverted text-sm sm:text-base md:text-lg leading-relaxed">
          Discover amazing features that scale beautifully across all devices. Our responsive design ensures the
          best experience on mobile, tablet, and desktop.
        </p>
      </div>
    </div>
  </section>
```

### Step 3: Add a **Blue Outline Border** to Sections 2–4

You will **highlight each card** in **Sections 2 through 5** with a **bold blue border** using your theme color `--color-outline`.

---

#### Goal
- Apply a **2px solid blue border** to **every card** in **Sections 2, 3, and 4**
- Use **your custom theme class**: `border-outline`
- Keep the **rounded corners and shadow** intact

---

#### How to Apply

Add the class **`border-2 border-outline`** to the **main card wrapper** (`<div>`) in **each section**.

> **Important**: `border-2` = 2px thickness  
> `border-outline` = uses `--color-outline` → **dark blue**

---

#### Example: Section 2 – Article Card

```html
<!-- SECTION 2: ARTICLE CARD -->
<section>
  <h2 class="text-xl font-semibold text-gray-800 mb-4">Section 2: Article Card</h2>

  <!-- ADD border-2 border-outline HERE -->
  <div class="bg-white rounded-lg shadow-md p-6 border-2 border-outline">
    <article class="space-y-4">
      <!-- Title, date, content, tags -->
    </article>
  </div>
</section>
```

### Step 4: Apply **Light Pink Background** to All Cards in **Section 5**

You will **unify the design** of the **card grid** by applying your **custom theme background** to **every card**.

---

#### Goal
- Change **all 3 cards** in **Section 5** to have a **light pink background**
- Use your **custom theme class**: `bg-accent`
- Keep **rounded corners**, **shadow**, and **spacing**

---

#### How to Apply

Add the class **`bg-accent`** to **each grid card** (replace `bg-white`).

> **Important**: `bg-accent` → uses your theme variable → **light pink**

---

#### Updated Example: **Card 1** (Web Development)

```html
<!-- ADD bg-accent HERE (replace bg-white) -->
<div class="bg-accent rounded-lg shadow-md p-6 space-y-3">
  <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
    Web Development
  </h3>
  <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
    Build fast, scalable, and responsive websites using modern frameworks and best practices.
  </p>
  <p class="text-xs text-gray-500">
    <strong>Skills:</strong> HTML, CSS, JavaScript, React, Tailwind
  </p>
</div>
```

## See It in Action

- Save both CSS and HTML
- Refresh your browser
- Resize the window:

  - **Mobile**: Compact card, small text
  - **≥28rem**: Card widens, text scales up

>You just built a fully themed, responsive card using your design system!

## Quick Reference

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-brand: #your-color;
  
  /* Fonts */
  --font-heading: "Your Font", sans-serif;
  
  /* Spacing */
  --spacing-custom: 1.5rem;
  
  /* Shadows */
  --shadow-custom: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  /* Breakpoints */
  --breakpoint-tablet: 48rem;
}
```

|| Pro Tip: Theme variables are your design system’s single source of truth. Define once, style everywhere.
