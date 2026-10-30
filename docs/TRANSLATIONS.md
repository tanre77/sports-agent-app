# Translations

English is the source of truth for documentation in this repository. Translations are machine-assisted and can lag behind the English text. When they disagree, follow the English version.

## Layout

- [`README.md`](../README.md) is the English source.
- Each translation sits next to it as `README.<lang>.md`, for example [`README.es.md`](../README.es.md), [`README.pt-BR.md`](../README.pt-BR.md), and [`README.zh-CN.md`](../README.zh-CN.md).
- This guide stays in English. It describes how to update translations from the English source.
- There are no other user-facing docs on the default branch. If you add one, put the English file in `docs/` (or the repository root for a guide such as `CONTRIBUTING.md`) and mirror it for each language:
  - root guides: `CONTRIBUTING.<lang>.md` beside the English file
  - files under `docs/`: `docs/<lang>/<same-relative-path>.md`
- Do not translate code comments, in-app UI strings, or `LICENSE` text.
- Leave legal and privacy documents in English. Link to them from translations instead of translating them. This repository has none right now.

## Supported languages

| Code | Language | File |
| --- | --- | --- |
| en | English (source) | [README.md](../README.md) |
| es | Spanish | [README.es.md](../README.es.md) |
| fr | French | [README.fr.md](../README.fr.md) |
| de | German | [README.de.md](../README.de.md) |
| pt-BR | Portuguese (Brazil) | [README.pt-BR.md](../README.pt-BR.md) |
| it | Italian | [README.it.md](../README.it.md) |
| zh-CN | Chinese (Simplified) | [README.zh-CN.md](../README.zh-CN.md) |
| zh-TW | Chinese (Traditional) | [README.zh-TW.md](../README.zh-TW.md) |
| ja | Japanese | [README.ja.md](../README.ja.md) |
| ko | Korean | [README.ko.md](../README.ko.md) |
| ar | Arabic | [README.ar.md](../README.ar.md) |
| hi | Hindi | [README.hi.md](../README.hi.md) |
| ru | Russian | [README.ru.md](../README.ru.md) |
| vi | Vietnamese | [README.vi.md](../README.vi.md) |
| tr | Turkish | [README.tr.md](../README.tr.md) |
| id | Indonesian | [README.id.md](../README.id.md) |
| pl | Polish | [README.pl.md](../README.pl.md) |
| nl | Dutch | [README.nl.md](../README.nl.md) |
| uk | Ukrainian | [README.uk.md](../README.uk.md) |
| fil | Filipino | [README.fil.md](../README.fil.md) |
| sw | Swahili | [README.sw.md](../README.sw.md) |

## When the English text changes

1. Edit the English file first (`README.md`, or the English doc you added).
2. Update every translation so it matches the English meaning. Do not add features, screens, or setup steps that are not in the English source.
3. Leave these untranslated so they keep working:
   - fenced code blocks, commands, and keyboard keys
   - file paths
   - URLs
   - product and platform names: `sports-agent-app`, React Native, Expo, web, iOS, Android
   - badges and images
4. Fix relative links so they resolve from the translated file. From a root `README.<lang>.md`, links to other languages are `README.fr.md` and the link to this guide is `docs/TRANSLATIONS.md`. From `docs/<lang>/...`, step up with `../` until the target resolves.
5. Keep the language switcher near the top of `README.md` and every `README.<lang>.md`. Each file links to every language. The file's own language is bold and is not a link.
6. Keep the short machine-assisted note at the top of each translation. It must say the translation is machine-assisted and link to the English source as the authoritative version.
7. For Arabic (`README.ar.md`), put the translated prose inside `<div dir="rtl" lang="ar">` so it renders right to left. Write that prose as HTML (`<p>`, `<a>`, and headings), because GitHub does not render Markdown inside a raw HTML block. Leave the language switcher outside the wrapper so the links stay left to right.

## Adding a language

1. Copy the English file to `README.<lang>.md` (or `docs/<lang>/...` for a doc under `docs/`).
2. Translate the prose. Keep the items in step 3 of the update list unchanged.
3. Add the language to the switcher in `README.md` and in every translated README.
4. Add a row to the table in this file.
