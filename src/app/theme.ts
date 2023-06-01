interface ITheme {
  colors: {
    primary: string;
    white: {
      white: string;
      lightGray: string;
      mediumGray: string;
      darkGray: string;
    }
  }
}

export const theme: ITheme = {
  colors: {
    primary: '#0070f3',
    white:
    {
      white: "#FFFFFF",
      lightGray: "#D8E1EA",
      mediumGray: "#A9A9A9",
      darkGray: "#696969"
    },
  }
}
