/** @typedef {{ text: string, href?: string, external?: boolean }} BlogTextSegment */

/** @typedef {{ type: 'paragraph', segments: BlogTextSegment[] }} BlogParagraphBlock */

/** @typedef {{ type: 'heading', text: string }} BlogHeadingBlock */

/** @typedef {{ type: 'list', items: string[] }} BlogListBlock */

/** @typedef {{ type: 'figure', src: string, alt: string, caption?: string }} BlogFigureBlock */

/** @typedef {BlogParagraphBlock | BlogHeadingBlock | BlogListBlock | BlogFigureBlock} BlogBodyBlock */

/** @typedef {{ slug: string, title: string, date: string, excerpt: string, body: BlogBodyBlock[], featured?: boolean }} BlogPost */

/** @type {BlogPost[]} */
export const blogPosts = [
  {
    slug: 'hackforgov-5-calabarzon-ctf',
    title: 'Seven Hours, Too Much Energy Drink, and a Lot of Flags: My HackForGov 5 Story',
    date: '2026-10-15',
    excerpt:
      'It was barely 8 AM in Tagaytay when Ctrl Alt Relapse walked into HackForGov 5 — seven hours of CTF, no AI, and a lot of lessons packed into one very long day.',
    featured: true,
    body: [
      {
        type: 'paragraph',
        segments: [
          {
            text: "It's barely 8 AM in Tagaytay, the air is cold, and I'm walking into Splendido Tagaytay Hotel and Country Club with my laptop, a bag full of chargers, and zero idea how the next seven hours would go.",
          },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          {
            text: 'On October 15, 2026, my team, Ctrl Alt Relapse, represented St. Dominic College of Asia at the DICT HackForGov 5 CALABARZON Regional Capture-the-Flag (CTF) Competition. (Yes, that\'s our team name. Yes, we\'re proud of it.)',
          },
        ],
      },
      {
        type: 'figure',
        src: 'blog/hackforgov-2026-calabarzon.jpg',
        alt: 'Team Ctrl Alt Relapse at HackForGov 5 CALABARZON Regional Qualifying Round, October 15, 2026',
        caption:
          'Ctrl Alt Relapse · HackForGov 5 · CALABARZON Regional Qualifying Round · Splendido Tagaytay · 15 October 2026',
      },
      { type: 'heading', text: 'The squad' },
      {
        type: 'paragraph',
        segments: [
          { text: "I couldn't have gotten through it without my teammates, " },
          {
            text: 'Jenrick Ambalong',
            href: 'https://www.linkedin.com/in/jenrick-ambalong/',
          },
          { text: ', John Emmanuel Topacio, and ' },
          {
            text: 'Kim Benedict Sumilang',
            href: 'https://www.linkedin.com/in/kim-benedict-sumilang/',
          },
          { text: ', plus our coach, ' },
          {
            text: 'Caleb John Sacdalan',
            href: 'https://www.linkedin.com/in/cj-sacdalan/',
          },
          { text: ', who kept us calm when we definitely were not.' },
        ],
      },
      { type: 'heading', text: "So what's a CTF, anyway?" },
      {
        type: 'paragraph',
        segments: [
          {
            text: 'A Capture-the-Flag is basically a giant cybersecurity puzzle hunt. Every challenge hides a secret "flag," and your job is to dig it out using whatever skills you have. Ours covered OSINT (playing internet detective), web security (poking at websites until they spill their secrets), network forensics (digging through traffic like it\'s a crime scene), and a bunch of misc challenges designed purely to break our brains.',
          },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          {
            text: 'And no AI tools allowed — just us, our notes, and pure stubbornness.',
          },
        ],
      },
      { type: 'heading', text: 'The emotional roller coaster' },
      {
        type: 'paragraph',
        segments: [
          {
            text: "Honestly? It was stressful. There were moments when we stared at the same challenge for what felt like forever, convinced the flag did not exist. Then someone would notice one tiny detail, and suddenly the whole table would light up. That feeling of finally cracking a challenge is addictive.",
          },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          {
            text: "Somewhere around hour five, I realized the real skill was not knowing every answer. It was knowing when to switch problems, when to ask a teammate, and when to just take a breath.",
          },
        ],
      },
      { type: 'heading', text: 'What I took home' },
      {
        type: 'list',
        items: [
          'A much better understanding of OSINT and web security than I had that morning',
          'A newfound respect for network forensics (and packet captures)',
          'Proof that teamwork beats panic every single time',
          'A long list of things I want to learn next',
        ],
      },
      { type: 'heading', text: 'Shout-outs' },
      {
        type: 'paragraph',
        segments: [
          {
            text: 'Huge thanks to DICT Region IV-A for running such a fun, well-organized event, and congratulations to all the winners — you earned it.',
          },
        ],
      },
    ],
  },
]

export const featuredBlogPosts = blogPosts.filter((post) => post.featured)

export function sortBlogPosts(posts = blogPosts) {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date))
}

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug) ?? null
}

export function formatBlogDate(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
