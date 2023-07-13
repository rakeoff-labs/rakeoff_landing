# Rakeoff landing page

This repo contains the code and CSS design for the Rakeoff landing page that showcases info about the Rakeoff dApp.

You can visit the landing page here [rakeoff.io](https://rakeoff.io/)

## Overview of the tech stack

- [React.js](https://react.dev/) is used for the frontend.
- [Chakra UI](https://chakra-ui.com/) is used for the CSS components.
- The IC SDK: [DFX](https://internetcomputer.org/docs/current/developer-docs/setup/install) is used to make this is an ICP project.
- IC [Custom Domains](https://internetcomputer.org/docs/current/developer-docs/production/custom-domain/) is used for the URL.

### If you want to clone onto your local machine

Make sure you have `git`, `dfx` and `npm` installed
```bash
# clone the repo
git clone #<get the repo ssh>

# change directory
cd rakeoff_landing

# install the node packages
npm install

# set up the dfx local server
dfx start --background --clean

# deploy the canisters locally
dfx deploy

# ....
# when you are done make sure to stop the local server:
dfx stop
```

## License

The Rakeoff landing page code is distributed under the terms of the MIT License.

See LICENSE for details.
