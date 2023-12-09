import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true,
    },
    styles: {
        global: props => ({
            body: {
                bg: mode('#f0e7db', '#202023')(props)
            },
        }),
    },
    fonts: {
        heading: "'M PLUS Rounded 1c', sans-serif", // Include fallback font
        body: "'M PLUS Rounded 1c', sans-serif",    // Set body font to match heading font
    },
    colors: {
        grassTeal: '#88ccca',
    },
    components: {
        Heading: {
            variants: {
                'section-title': {
                    textDecoration: 'underline',
                    fontSize: 20,
                    textUnderlineOffset: 6,
                    textDecorationColor: '#525252',
                    textDecorationThickness: 4,
                    marginTop: 3,
                    marginBottom: 4
                }
            }
        },
        Link: {
            baseStyle: props => ({
                color: mode('#3d7aed', '#ff63c3')(props),
                textUnderlineOffset: 3
            })
        },
        Text: {
            baseStyle: props => ({
                color: mode('#58585e', '#f0e7db')(props),
            })
        }
    }
});

export default theme;
