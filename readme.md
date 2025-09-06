# Overview

These landing pages have assessment conversation bots for use in Lingro higher ed curriculum.
The bots leverage LSPark conversational bot infrastructure.

# Technical Details

## Deployment

The landing pages are deployed with AWS Amplify.

- [Here is the Github repo](https://github.com/Kalosal/lspark-assessment-landing)
- [Here is the app](https://us-east-2.console.aws.amazon.com/amplify/apps/d303qgzh2d01e/overview) in Amplify

The apps are deployed on a custom domain: [assess.lingrolearning.com](https://assess.lingrolearning.com/). DNS for this subdomain is managed in GoDaddy (as is lingrolearning.com). The subdomain is configured - via CNAME records - to point to this Amplify deployment. The security certificate is managed in AWS ACM and is specific to this subdomain.

## Integration with LSpark Chatbots

The chatbots used here are technically an LSPark asset, and are managed as part of the [LSPark web app](https://github.com/Kalosal/lspark-retool). The chatbot "frontent" is just our [Conversation Component](https://github.com/Kalosal/lspark-retool/blob/main/spark-retool-component/src/components/conversation/conversation.tsx).

### Backend and Chat Conversations

- Conversations are saved as `ExtraPractice` sessions (instances of `ExtraPracticeAttempt`).

### TBD

- Instructor uses THIS DASHBOARD to view history of their students' extra practice sessions
- How we "authenticate" learners using their email
