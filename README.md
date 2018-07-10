# unsave-changes-detector
When user add/edit a web page form data and forget to save changes then try to leave the web page, have to warn the user about it(warning message). In that scenario have to check each and every form field value(if there is not isDirty property like angular) to check whether the form fields are edited or not. unsave-changes-detector will help you to detect JavaScript property changes and return boolean value. If you are working with aurelia, have @computedFrom and if you are working with angular, can check isDirty. unsave-changes-detector also do the same functionality but trying to make it easy for developers

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

### How to use in aurelia project
Please note that below example code written using the TypeScript.

``` javascript
// import the nessasary clases

// test.ts
export class Test{
  personData: any; // personData object properties bind to the html page form fields
  
  // Call the Initialize method inside the component's constructor.
  constructor(private app: App, private router: Router, private store: Store<State>) {
    this.personData = new Person();
    UnsaveChangesDetector.Initialize(new Person());
  }
  
  // Call the HasChanged method (canDeactivate method is a aurelia component life cycle method that we can implement)
  canDeactivate() {
    var hasChanged = UnsaveChangesDetector.HasChanged(this.personData);
    if (hasChanged) {
      return confirm('There are unsaved changes in this page.\nChanges will be lost when you navigate away from this page.');
    }
  }
}

// person.ts 
export class Person {
  Name: string;
  Surname: string;

  constructor() {
    this.Name = '';
    this.Surname = '';
  }
}

//test.html
<template>
  <form submit.delegate="submit()">
      name:     
      <input type="text" value.bind="personData.Name">
      address:
      <input type="text" value.bind="personData.Surname">

      <input type="submit" value="Submit">
    </form>
</template>
```
