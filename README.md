# Authlete React Sample

This client application is a basic React sample demonstrating how to integrate with Authlete Authorization Server. It utilizes [react-oidc-context](https://github.com/authts/react-oidc-context) library for OIDC authentication/authorization and implements authorization_code flow with PKCE to interact with Authlete.

## Overview

The Authlete server can be integrated with any authentication provider. This sample demonstrates how to work with SuperTokens for authentication. Upon successful authentication, the sample obtains an access token from Authlete and displays authenticated views.

## Technologies Used

- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [react-oidc-context](https://github.com/authts/react-oidc-context): React library for OIDC authentication/authorization.
- [shadcn](https://ui.shadcn.com/): Shadcn Component library for UI components.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for styling.

## Installation

To run the client application locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory and update Authlete configuration in `index.tsx`
```typescript
const oidcConfig = {
  authority: "https://localhost",
  client_id: "180418741236156",
  redirect_uri: window.location.href,
  onSigninCallback: async () => {
    window.history.replaceState(
      {},
      document.title,
      window.location.pathname
    )
  }
}
```
3. Install dependencies using `npm install` 
4. Run the application using `npm run dev`

## Usage

1. Access the application in your browser.
2. Authenticate using the provided authentication flow.
3. Upon successful authentication, navigate through the authenticated views to see the functionality.

## Future Enhancements

In the future, the sample will be extended to include the following features:

- Calling an API protected with Authlete.

Feel free to contribute to the project or suggest enhancements!

## License

This project is licensed under the [MIT License](#). See the [LICENSE](#) file for details.
