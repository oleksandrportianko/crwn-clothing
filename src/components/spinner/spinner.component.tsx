import { SpinnerOverlay, SpinnerContainer, SpinnerBlock } from './spinner.styles'

const Spinner = () => {
    return (
        <SpinnerBlock>
            <SpinnerContainer>
                <SpinnerOverlay />
            </SpinnerContainer>
        </SpinnerBlock>
    )
}

export default Spinner