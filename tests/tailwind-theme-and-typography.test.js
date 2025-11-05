/**
 * Responsive Typography Cards – Content Presence Tests
 *
 * Checks that each section has real content (not just TODO placeholders).
 */
const fs = require('fs');
const path = require('path');

describe('Lab – Content Presence in Sections 1–5', () => {
  let doc;

  beforeAll(() => {
    const htmlPath = path.join(__dirname, '..', 'lab/index.html');
    if (!fs.existsSync(htmlPath)) {
      throw new Error(`index.html not found at: ${htmlPath}`);
    }
    const html = fs.readFileSync(htmlPath, 'utf8');
    const parser = new DOMParser();
    doc = parser.parseFromString(html, 'text/html');
  });

  const section = (n) => {
    const sections = doc.querySelectorAll('section');
    if (sections.length <= n) {
      throw new Error(`Section ${n + 1} is missing`);
    }
    return sections[n];
  };

  /* ==============================================================
   * SECTION 1: Basic Card – Must have title + description
   * ============================================================== */
  test('Section 1: Basic Card – must have a title and description', () => {
    const card = section(0).querySelector('div.bg-white');
    expect(card).toBeTruthy();

    const title = card.querySelector('h3');
    const desc = card.querySelector('p');

    expect(title).toBeTruthy();
    expect(title.textContent.trim()).not.toBe('');
    expect(desc).toBeTruthy();
    expect(desc.textContent.trim()).not.toBe('Your card content will go here...');
  });

  /* ==============================================================
   * SECTION 2: Article Card – Must have title, date, 2+ paragraphs, tags
   * ============================================================== */
  test('Section 2: Article Card – must have title, date, body, and tags', () => {
    const card = section(1).querySelector('div.bg-white');
    expect(card).toBeTruthy();

    expect(card.querySelector('h2')).toBeTruthy();
    expect(card.querySelector('time')).toBeTruthy(); // date
    expect(card.querySelectorAll('p').length).toBeGreaterThanOrEqual(2);
    expect(card.querySelectorAll('span').length).toBeGreaterThanOrEqual(2); // tags
  });

  /* ==============================================================
   * SECTION 3: Product Card – Must have image, title, price, button, features
   * ============================================================== */
  test('Section 3: Product Card – must have image, title, price, button, and features', () => {
    const card = section(2).querySelector('div.bg-white');
    expect(card).toBeTruthy();

    expect(card.querySelector('div.h-48')).toBeTruthy(); // image placeholder
    expect(card.querySelector('h3')).toBeTruthy();
    expect(card.querySelector('p.text-green-600')).toBeTruthy(); // price
    expect(card.querySelector('button')).toBeTruthy();
    expect(card.querySelectorAll('li').length).toBeGreaterThanOrEqual(3); // features
  });

  /* ==============================================================
   * SECTION 4: Profile Card – Must have avatar, name, job, bio, social links
   * ============================================================== */
  test('Section 4: Profile Card – must have avatar, name, job, bio, and links', () => {
    const card = section(3).querySelector('div.bg-white');
    expect(card).toBeTruthy();

    expect(card.querySelector('div.rounded-full')).toBeTruthy(); // avatar
    expect(card.querySelector('h3')).toBeTruthy(); // name
    expect(card.querySelector('p.text-blue-600')).toBeTruthy(); // job
    expect(card.querySelector('p.max-w-prose')).toBeTruthy(); // bio
    expect(card.querySelectorAll('a').length).toBe(3); // 3 social links
  });

  /* ==============================================================
   * SECTION 5: Card Grid – Must have 3 cards with titles and descriptions
   * ============================================================== */
  test('Section 5: Card Grid – must have 3 cards with titles and real content', () => {
    const grid = section(4).querySelector('div.grid');
    expect(grid).toBeTruthy();

    const cards = grid.querySelectorAll('div.bg-white');
    expect(cards.length).toBe(3);

    cards.forEach(card => {
      const title = card.querySelector('h3');
      const desc = card.querySelector('p');

      expect(title).toBeTruthy();
      expect(title.textContent.trim()).not.toBe('');
      expect(desc).toBeTruthy();
      expect(desc.textContent.trim()).not.toMatch(/Card \d content\.\.\./);
    });
  });
});