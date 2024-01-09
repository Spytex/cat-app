# PetsPaw

🚧 **Under Development** 🚧

Welcome to PetsPaw! This project is currently under active development, and some features may be incomplete or subject to change. 🛠

I'm dedicated to crafting something great, so stay tuned for updates and improvements! 🌟

## About the Project

PetsPaw is a Next.js project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To clone the project and install dependencies, run the following commands in your terminal:

```bash
git clone https://github.com/Spytex/cat-app
cd cat-app
npm install
# or
yarn install
# or
pnpm install
```

Once the installation is complete, start the development server with one of the following commands:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Cat API Key Configuration

To access cat data within this project, you need an API key from [TheCatAPI](https://thecatapi.com). Follow these steps to obtain the API key:

1. Visit [TheCatAPI website](https://thecatapi.com) and sign up for an account.
2. After signing in, navigate to your account dashboard or the API section to obtain your API key.
3. Once you have your API key, locate the `.env.local.example` file in the root directory of the project.
4. Rename `.env.local.example` to `.env.local`.
5. Open the newly renamed `.env.local` file in a text editor.
6. Inside `.env.local`, find or add the line `NEXT_PUBLIC_CAT_API=<your-cat-api-key-here>` and replace `<your-cat-api-key-here>` with your actual API key obtained from TheCatAPI.

Remember to keep your API keys secure and never expose them publicly, especially in version control systems.
