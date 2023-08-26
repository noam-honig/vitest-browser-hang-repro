# Vitest browser fails

To reproduce:

```sh
npm i
npm run test-browser
```

You'll see that it hangs.

Running regular vitest or vite works when calling the same method (makeTitle)
