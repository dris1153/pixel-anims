# Flags

`vn.svg`, `cn.svg`, `jp.svg`, `kr.svg`, `th.svg`, `in.svg`, `ru.svg`, `gr.svg`, `eg.svg`, `no.svg`, `es.svg`, `ph.svg`, `tr.svg`, `fr.svg`, `us.svg`, `dk.svg`, `de.svg`, `br.svg`, `iq.svg`, `ir.svg`, `mx.svg`, `pe.svg`, `ng.svg`, `nz.svg`, `ie.svg`, `id.svg` and `gb-eng.svg` (England, its ISO 3166-2 code) are from [pixel-flags](https://github.com/tgines/pixel-flags) by Tony Gines,
copied unchanged from the npm package `pixel-flags@1.0.0` (`svg/<code>-<name>.svg`, renamed to the bare code). MIT, see `LICENSE`.

`gb-sct.svg` (Scotland, its ISO 3166-2 code) has no file in that package: it is the blue field and white saltire taken from the package's `gb-united-kingdom.svg`, with the white matched to the other flags.

To add a country: copy its SVG from the same package here as `<iso-3166-1-alpha-2>.svg` and add the id to `COUNTRIES` in `src/showcases.js`.
