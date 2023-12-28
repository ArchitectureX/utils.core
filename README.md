# @architecturex/utils.core

## core

This module provides utility functions to simplify working with `FormData` objects in TypeScript. It includes methods for extracting data from `FormData` and populating `FormData` with key-value pairs from a plain object.

### Installation

`npm install @architecturex/utils.core`

### Usage

```javascript
import core from '@architecturex/utils.core'
```

#### Extracting Data from FormData

Use `core.formData.get` to extract data from a `FormData` object into a plain object.

```typescript
import core from './core';

const formData = new FormData();
// ...populate formData...

const data = core.formData.get(formData);
```

### Contribution

Feel free to suggest improvements, report issues, or contribute to enhancing these utilities. Your feedback and contributions are welcome!
