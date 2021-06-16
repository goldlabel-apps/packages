# Theme

MUI Themes are easy to adjust

Use this file`./src/theme/theme.jsx` to override defaults

```javascript

let primaryColor = `#421c5d` // purple
let secondaryColor = `#ccd31f` // green

export const theme = {
  palette: {
    type: 'light',
    background: {
      paper: '#fff',
      default: '#fff'
    },
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  }
}
```