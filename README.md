# myface

myface is a simple application for the [Internet Computer](https://dfinity.org/) that shows off your face. Well, it can show off whatever you want. It's your own personal website!

Add your own picture, bio, projects you're working on, links to your friend's canisters. What can you come up with?

## Development

1. [Get the dfinity sdk](https://sdk.dfinity.org/docs/download.html)
2. Ensure you have [npm](https://www.npmjs.com/get-npm) installed.
2. In one terminal:
    ```
    # cd into this repo, then
    dfx start
    ```
3. In another terminal
    ```
    dfx canister create --all
    dfx build
    dfx canister install --all
    # this next line should open in a web browser in some OS
    open "http://127.0.0.1:8000/?canisterId=$(dfx canister id myface_assets)"
    ```
4. Make any changes you want to customize your myface profile. Take a look at [./src/myface_assets/public/index.js](./src/myface_assets/public/index.js) or overwrite [./src/myface_assets/public/myface.jpg](./src/myface_assets/public/myface.jpg). Then repeat the previous step to redeploy.

## Example Deployments

* first: https://ccgce-babaa-aaaaa-aaaaa-caaaa-aaaaa-aaaaa-q.ic0.app/
