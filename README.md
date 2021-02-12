# Club.to - a platform for clubs in campus to post their events and activities.
Well I build this app mainly to learn [Next.js](https://nextjs.org/) and [Cloud Firestore](https://firebase.google.com/products/firestore). I'm kinda lazy to think of any cool idea so I just use this idea which I got from my lecturer. As my main focus here is to master Next, so there's no guarantee that I'll ever complete this (before I jump to other new idea, cliche but yeah). But I will try my best to complete what I have in mind.

## How to Run

1. First, clone this repository:

```
git clone https://github.com/CharaeKeow/clubto.git
```

2. And simply `cd` to the directory and install dependencies:

```
yarn install
```

3. Once it's done, run the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## My thoughts
### Here I write my thoughts when doing this project so far

1. Auth is harder than I thought
Seems like there is many thigns that is needed to be taken care of regarding authentication and handling users identity and profile. And I still haven't taking into account any security factors yet 😣.
First, I struggle to find ways to implement Firebase Auth. Besides, I got more confuse whether I should do it on server-side (SSR) or client. So I tried using [next-firebase-auth](https://github.com/gladly-team/next-firebase-auth) in my project as I think it is easier to use a library to handle this rather than doing from scratch.
However, as I am new to Next and using Firebase with it, I feel that using next-firebase-auth feels like high level and most of the time I just follow the docs without following what's going on behind the sense.
Thus, I am thinking of doing auth from scratch, i.e. I know what's going on and also probably have more control (because I know what's happening so easier to change and add more feature). Luckily, I found this excellent [course](https://docs.react2025.com/) by Lee Robinson, so I've been following this for implementing the auth. And so far I've successfully add the auth and at the same time am confident enough to tweak things here and there.