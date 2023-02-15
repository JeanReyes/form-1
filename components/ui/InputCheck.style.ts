import css from "styled-jsx/css";

const check = css`
    input {
        width: auto;
        visibility: hidden;
        height: 24px;
        width: 24px;
    }
    label {
        width: auto;
        cursor: pointer;
        position: relative;
        margin-left: 0px;
        font-size: 12px;
        color: #495867;
    }
    label:before{
        position: absolute;
        border-radius: 1px;
        content: '';
        right: 0px;
        bottom: 0px;
        padding-top: 3px;
        height: 21px;
        width: 24px;
        outline: 1px solid #BFC4C9;
        border: 2px solid #fff;
        transition: .3s;
    }
    input:checked + label:before {
        content: '(*)';
        outline: 1px solid #FF6200;
        display: flex;
        padding-top: 3px;
    }
`

export { check }