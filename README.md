# Persistence


## Usage example for your code

```

import { Persistence } from "https://deno.land/x/persistence/persistence.ts"

const commandToBeExecuted = 'deno -V'

console.log(await CommandLineProcessor.process(commandToBeExecuted))

```

## Call usage example via command line
```
deno run --allow-net --allow-read --allow-write --reload --allow-run https://raw.githubusercontent.com/michael-spengler/persistence/master/usage-example.ts
<!-- deno run --allow-net --allow-read --allow-write --reload --allow-run https://deno.land/x/persistence/usage-example.ts -->
```

## Execute the tests
```

deno test --reload --allow-net --allow-run --allow-read --allow-write https://raw.githubusercontent.com/michael-spengler/persistence/master/test.ts
deno test --reload --allow-net --allow-run --allow-read --allow-write https://deno.land/x/persistence/test.ts

``` # persistence-example-project-folder
