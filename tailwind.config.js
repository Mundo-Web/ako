/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                "font-general": ["Roboto", "serif"], //"Lato" "serif" usado para Sala Fabulosa
                "font-primary": ["Rajdhani", "sans-serif"], // usado para Stech Peru
                "font-secondary": ["Open Sans", "serif"],
                "roboto": ["Roboto", "sans-serif"], // usado para Xcleretor
            },
           
            margin: {
                primary: "5%",
            },
            padding: {
                primary: "5%",
            },
            objectPosition: {
                "right-25": "75% center", // Esto desplaza la imagen 75% a la derecha y la centra verticalmente
                "right-10": "90% center", // Esto desplaza la imagen 90% a la derecha y la centra verticalmente
            },
            fontStyle: {
                'oblique-light': 'oblique 5deg',
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwindcss-animated"),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
        // require('tailwind-scrollbar')({
        //     nocompatible: true,
        //     preferredStrategy: 'pseudoelements',
        // }),
        // Otros plugins si los tienes
    ],
    
};
