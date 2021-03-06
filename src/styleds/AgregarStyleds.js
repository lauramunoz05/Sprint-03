import styled from 'styled-components';

export const H1 = styled.h1 `
    color: RGBA(245,245,245,0.85);
    margin-top: 50px;
    text-align: center;
`

export const DivImagen = styled.div `

    & div {
        background-color: rgb(0, 0, 0, 0.70);
        text-align: center;
        border-radius: 10px;
        border: 1px solid white;
        color: white;
        width: 550px;
        font-size: 18px;
        margin: 15px 0 ;
        margin-left:25px;
    }

    
    & div:hover {
            border: 1px solid #FED941;
            color: #FED941;
        }
`

export const DivInputs = styled.div `
    & label {
        color: white;
        margin-left:25px;
    }

    & input {
        border-radius: 8px;
        border: 1px solid gray;
        margin-bottom: 15px;
        margin-left:25px;
        background: none;
        width: 550px;
        color: lightgray;
        outline: none;
    }
`

export const ButtonSave = styled.input`
    margin: auto;
    width: 274.98px;
    border-radius: 10px;
    font-weight: bold;
    background-color: rgb(0, 0, 0, 0.70);
    border: 1px solid #FED941;
    color: #FED941;

    &:hover {
        width: 274.98px;
        border-radius: 10px;
        font-weight: bold;
        background-color: #FED941;
        border: none;
        color: black;
    }
`

export const d1 = styled.h1 `

`