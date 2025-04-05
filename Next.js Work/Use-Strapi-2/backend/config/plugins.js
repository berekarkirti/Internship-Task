module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        providers: {
          google: {
            clientId: env('GOOGLE_CLIENT_ID'),
            clientSecret: env('GOOGLE_CLIENT_SECRET'),
            redirectUri: 'http://localhost:3000/connect/google/callback',
          },
          github: {
            clientId: env('GITHUB_CLIENT_ID'),
            clientSecret: env('GITHUB_CLIENT_SECRET'),
            redirectUri: 'http://localhost:3000/connect/github/callback',
          },
        },
      },
    },
  });
  