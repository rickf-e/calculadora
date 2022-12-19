import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(#000046, #49e0f5);

    display: flex;
    align-items: center;
    justify-content: center;
`
export const Content = styled.div`
    background-color: #FFF;
    max-width: 300px;
    position: relative;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`