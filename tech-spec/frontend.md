# Frontend

## Pages

- login
- homepage
- trainer
- settings
- stats

## Modules

- authorization
- trainer
- stats

## Folders structure

- src
- - components - folder with modules
- - static - static sources
- - utils
- - views - templates for rendering
- - router.ts
- - index.ts
- - ...

### Rules

- if we have reccuring functionality we should move it to utils folder

## Technical specification

### Authorization module

Module should interact with authorization backend and authorize. We should create class to communicate with backend that authorize with telegram, google, yandex and GitHub OAuth providers, which we get from backend.

Class should has:

- method to get an array of providers
- method to send an OAuth token to backend and save access-token
- method to update access-token
- method to delete user

### Trainer

Module should interact with trainer backend and get text to train typing. We should create a class to communicate with backend that give us text.

Class should has:

- method to get text with special filters which you can find in docs for this backend
