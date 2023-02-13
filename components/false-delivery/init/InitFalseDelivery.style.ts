import css from "styled-jsx/css"

const initStyle = css`
    .container-view {
        background: red;
        animation: fadeIn 0.5s;
    }


    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`

export { initStyle }