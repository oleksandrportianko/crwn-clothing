import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

import { buttonVariables } from "../../utils/variables/defaultVariables";
import { selectTotalCartSum } from "../../redux/reducers/cart/cart.selector";
import { selectCurrentUser } from "../../redux/reducers/user/user.selector";

import { PaymentFormContainer, FormContainer, PaymentButton } from './payment-form.styles';

const PaymentForm = () => {
    const [paymentIsProcessing, setPaymentIsProccessing] = useState(false)
    const totalAmount = useSelector(selectTotalCartSum)
    const currentUser = useSelector(selectCurrentUser)
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        setPaymentIsProccessing(true)

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: totalAmount * 100
            })
        }).then(res => res.json())

        const clientSecret = response.paymentIntent.client_secret

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser?.displayName ? currentUser?.displayName : 'Guest' 
                }
            }
        })

        setPaymentIsProccessing(false)

        if (paymentResult.error) {
            alert(paymentResult.error)
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment successful')
            }
        }
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit card payment:</h2>
                <CardElement />
                <PaymentButton isLoading={paymentIsProcessing} buttonType={buttonVariables.inverted}>Pay now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm