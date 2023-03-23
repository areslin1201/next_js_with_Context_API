# next js with context API framework

## Getting Started

First, run the development server:

```bash
npm run dev
```

### step 1
Create context.js file
```
.
└── src
    └── context
        └── context.js
```

setting value, setValue and transfer for Provider

#### context.js
```jsx
import { createContext, useState } from "react";

export const ContextData = createContext(null);

function Context({ children }) {
  const [value, setValue] = useState(0);

  return (
    <ContextData.Provider value={{value, setValue}}>
      {children}
    </ContextData.Provider>
  );
}

export default Context;
```

### step 2
Edit `_app.js`

```jsx
import Context from "@/context/context";

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  )
}
```

### step 3
use Context API

in `pages/index.js`,we can use useContext and ContextData get context value

#### in pages/index.js
```jsx
import { useContext } from "react";
import { ContextData } from "@/context/context";

export default function Home() {
  const {value, setValue} = useContext(ContextData);
}
```

### References
[Link-1](https://episyche.com/blog/how-to-use-context-api-in-a-nextjs-app)