# MATH 2341 PreTeXt Template

This is a starter PreTeXt book for MATH 2341: Linear Analysis at Cal Poly SLO.

## Where to Edit

- `source/main.ptx`: book title, author, structure, and math macros.
- `source/frontmatter/overview.ptx`: course description and navigation notes.
- `source/notes/week-01.ptx`: first weekly course notes section.
- `source/activities/week-01.ptx`: first weekly in-class activity section.
- `source/problem-sets/week-01.ptx`: first weekly problem set section.
- `assets/css/math2341.css`: optional custom web styling.
- `publication/publication.ptx`: publication/theme settings.

## Adding a New Week

Copy each Week 1 file and rename it:

- `source/notes/week-02.ptx`
- `source/activities/week-02.ptx`
- `source/problem-sets/week-02.ptx`

Then add matching include lines in `source/main.ptx`:

```xml
<xi:include href="notes/week-02.ptx" />
<xi:include href="activities/week-02.ptx" />
<xi:include href="problem-sets/week-02.ptx" />
```

Remember to update all `xml:id` values inside the copied files so they remain unique.

## Building

From this folder, try:

```bash
pretext build web
```

or:

```bash
pretext build print
```

The project is intentionally minimal so it can be adapted inside GitHub Codespaces.
