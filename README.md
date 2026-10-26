# ChannelVault

A self-hosted media harvester and library.

ChannelVault is Jason Baron's independent fork of [Tube Archivist](https://github.com/tubearchivist/tubearchivist), focused on clearer configuration, usability, and Plex workflows. YouTube is currently the supported source; support for other media sources is a future direction, not an implemented feature.

## Attribution and license

Built on the work of the Tube Archivist contributors. ChannelVault is independently maintained and is not affiliated with or supported by the upstream project. Original copyright notices and the [GPLv3 license](LICENSE) are retained.

The original project documentation is preserved in [UPSTREAM_README.md](UPSTREAM_README.md). Its screenshots, roadmap, donation links, release instructions, and support links refer to Tube Archivist, not ChannelVault. Please do not report fork-specific issues to upstream.

## Development

See [CONTRIBUTING.md](CONTRIBUTING.md) for fork policies and the preserved [upstream development instructions](UPSTREAM_CONTRIBUTING.md#development-environment) for the existing backend and frontend setup.

```bash
cd frontend
npm ci
npm run dev
```

The frontend requires the backend and its Redis and Elasticsearch services for application functionality.

## Compatibility and deployment

The application branding, browser titles, frontend package, have been renamed to ChannelVault. The intended local folder name is `channelvault`; the folder move is pending because filesystem protection blocked it. Existing API routes, configuration keys, `TA_*` environment variables, media paths, metadata namespaces, and database identifiers are retained for compatibility.

The inherited Compose file still references the upstream application image. To run ChannelVault changes, build this checkout using the existing Dockerfile instead of pulling the upstream image. Follow the upstream Docker development instructions, and use separate test data before upgrading an existing installation.

Existing version values describe the inherited upstream baseline. Upstream release notices are labeled separately and are not ChannelVault update instructions. A ChannelVault release process and support for additional sources have not yet been established.
