import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { buttonVariables } from "../../utils/variables/defaultVariables";

import Button from '../button/button.component';

import { PaymentFormContainer, FormContainer } from './payment-form.styles';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }
    }

    return (
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit card payment:</h2>
                <CardElement />
                <Button buttonType={buttonVariables.inverted}>Pay now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm