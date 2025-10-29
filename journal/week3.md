# Week 3 — Decentralized Authentication

in Amplify 6, the Auth class is no longer exported from aws-amplify. Instead, you:

keep Amplify (for configure) from 'aws-amplify'

import Auth functions (e.g., signIn, signOut, getCurrentUser, fetchAuthSession, signUp, etc.) from 'aws-amplify/auth'



aws cognito-idp admin-set-user-password --user-pool-id ap-southeast-2_Xrwr8nr3L --username test@gmail.com --password "Test1234$" --permanent

https://aws.plainenglish.io/how-to-set-up-user-auth-in-react-with-aws-amplify-and-cognito-73c3072971fc