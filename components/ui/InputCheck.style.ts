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
        border-radius: 0.5px;
        content: '';
        right: 0px;
        bottom: 0px;
        /* padding-tosp: 3px; */
        height: 20px;
        width: 20px;
        outline: 1px solid #BFC4C9;
        border: 1px solid #fff;
        transition: .3s;
    }
    input:checked + label:before {
        content: url('https://storage.googleapis.com/dev-corp-cust-mycases-front/images/Check.svg');
        outline: 1.5px solid #FF6200;
        display: flex;
        /* padding-top: 3px; */
    }

    .input-bloqued + label:before {
        content: url('https://storage.googleapis.com/dev-corp-cust-mycases-front/images/Line.svg');
        outline: 1.5px solid #BFC4C9;
        display: flex;
        /* paddking-top: 3px; */
    }
`

export { check }