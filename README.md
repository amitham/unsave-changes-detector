# unsave-changes-detector
Detect JavaScript property changes and return boolean

## Installation

unsave-changes-detector is available through npm:

```
npm install unsave-changes-detector --save
```

## Example

``` javascript
const UnsaveChangesDetector = require('unsave-changes-detector');

// Call the Initialize method and passed the new object as a parameter when the component is loading
UnsaveChangesDetector.Initialize(new Person());

// Then call the HasChanged method and passed the object with changes
var hasChanged = UnsaveChangesDetector.HasChanged(this.personData);
```
