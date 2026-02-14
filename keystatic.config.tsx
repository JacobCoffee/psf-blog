import { config, fields, collection } from "@keystatic/core";
import { inline } from "@keystatic/core/content-components";

const knownAuthors = [
  "A. Jesse Jiryu Davis",
  "A.M. Kuchling",
  "Alex Waygood",
  "Anthony Scopatz",
  "Betsy Waliszewski",
  "Brian Curtin",
  "Charles Freeborn",
  "Cheuk Ting Ho",
  "Christopher Neugebauer",
  "Christy Heaton",
  "Craig Lang",
  "David Goodger",
  "David Mertz",
  "Deb Nicholson",
  "Diana Clarke",
  "Doug Hellmann",
  "Doug Napoleone",
  "Ee Durbin",
  "Eric Holscher",
  "Erika Pelaez",
  "Ewa Jodlowska",
  "Georgi Ker",
  "Jackie Kazil",
  "Jessica McKellar",
  "Joanna Jablonski",
  "Kushal Das",
  "Loren Crary",
  "Lorena Mesa",
  "Marc-Andre Lemburg",
  "Marie Nordin",
  "Michael Foord",
  "Mike Driscoll",
  "Naomi Ceder",
  "Nicholas Tollervey",
  "Nicole Harris",
  "Olivia Sauls",
  "Pablo Galindo",
  "Quan Nguyen",
  "Seth Michael Larson",
  "Sumana Harihareswara",
  "Tania Allard",
  "Thomas Wouters",
  "Łukasz Langa",
];

const knownTags = [
  "PSF",
  "community",
  "pycon",
  "election",
  "board",
  "grants",
  "diversity",
  "open source",
  "education",
  "sponsorship",
  "membership",
  "community service awards",
  "conference",
  "development",
  "donations",
  "infrastructure",
  "pypi",
  "pip",
  "packaging",
  "sprints",
  "volunteer",
];

const referenceComponents = {
  Pep: inline({
    label: "PEP Reference",
    schema: {
      number: fields.integer({
        label: "PEP Number",
        validation: { isRequired: true, min: 0 },
      }),
    },
  }),
  Docs: inline({
    label: "Python Docs",
    schema: {
      path: fields.text({
        label: "Path (e.g. 3/library/asyncio.html)",
        validation: { isRequired: true },
      }),
      label: fields.text({ label: "Display Label" }),
    },
  }),
  PyPi: inline({
    label: "PyPI Package",
    schema: {
      name: fields.text({
        label: "Package Name",
        validation: { isRequired: true },
      }),
    },
  }),
  GhRepo: inline({
    label: "GitHub Repo",
    schema: {
      repo: fields.text({
        label: "owner/repo",
        validation: { isRequired: true },
      }),
    },
  }),
  GhUser: inline({
    label: "GitHub User",
    schema: {
      name: fields.text({
        label: "Username",
        validation: { isRequired: true },
      }),
    },
  }),
};

export default config({
  storage:
    process.env.NODE_ENV !== "production"
      ? { kind: "local" }
      : { kind: "cloud" },
  cloud: {
    project: "psf/blog",
  },
  collections: {
    authors: collection({
      label: "Authors",
      slugField: "name",
      path: "content/authors/*",
      format: "json",
      previewUrl: "/authors/{slug}",
      columns: ["name", "postCount", "featured"],
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        bio: fields.text({ label: "Bio", multiline: true }),
        github: fields.text({ label: "GitHub Username" }),
        avatar: fields.url({ label: "Avatar URL" }),
        twitter: fields.url({ label: "Twitter/X" }),
        bluesky: fields.url({ label: "Bluesky" }),
        mastodon: fields.url({ label: "Mastodon" }),
        website: fields.url({ label: "Website" }),
        featured: fields.checkbox({ label: "Featured", defaultValue: false }),
        postCount: fields.integer({ label: "Post Count", defaultValue: 0 }),
      },
    }),
    posts: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "content/posts/*/",
      format: { contentField: "content" },
      columns: ["publishDate", "author"],
      entryLayout: "content",
      // previewUrl requires computed year/month — not supported by Keystatic template syntax
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        publishDate: fields.date({ label: "Publish Date", validation: { isRequired: true } }),
        updatedDate: fields.date({ label: "Updated Date" }),
        author: fields.text({
          label: "Author",
          description: `Known authors: ${knownAuthors.join(", ")}`,
          validation: { isRequired: true },
        }),
        description: fields.text({ label: "Description", multiline: true }),
        tags: fields.multiselect({
          label: "Tags",
          options: knownTags.map((t) => ({ label: t, value: t })),
        }),
        published: fields.checkbox({ label: "Published", defaultValue: true }),
        legacyUrl: fields.text({ label: "Legacy Blogger URL" }),
        content: fields.markdoc({
          label: "Content",
          extension: "md",
          components: referenceComponents,
        }),
      },
    }),
  },
});
