# Contributing to ChannelVault

ChannelVault is an independent personal fork maintained by Jason Baron. Coding agents are permitted under the policies in [AGENTS.md](AGENTS.md).

Keep changes focused, preserve existing data compatibility, and update documentation with user-visible changes. Retain original copyright notices and the GPLv3 license. Do not send fork-specific issues or support requests to Tube Archivist.

## Development and validation

The inherited backend, frontend, Docker, and dependency setup is documented in [UPSTREAM_CONTRIBUTING.md](UPSTREAM_CONTRIBUTING.md#development-environment). Its contribution restrictions and upstream submission workflow do not govern this fork.

From `frontend/`, install dependencies with `npm ci`, run the development server with `npm run dev`, and validate changes with `npm run build` and `npm run lint`. Run the existing backend checks when changing backend behavior. Use isolated data for container testing.

Publishing, release automation, and repository URLs must be configured for ChannelVault before using inherited upstream workflows.
