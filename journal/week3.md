# Week 3 — Decentralized Authentication

in Amplify 6, the Auth class is no longer exported from aws-amplify. Instead, you:

keep Amplify (for configure) from 'aws-amplify'

import Auth functions (e.g., signIn, signOut, getCurrentUser, fetchAuthSession, signUp, etc.) from 'aws-amplify/auth'