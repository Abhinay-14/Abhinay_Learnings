import { Box, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import TextField from '../../atoms/textField'
import Button from '../../atoms/button'

const OuterContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
})

const InnerContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    border: '1px solid black',
    borderRadius: '0.4rem',
    padding: '1rem',
})

const OtpComponent = () => {
    const [otp, setOtp] = useState('')
    const [error, setError] = useState('')

    const validateOtp = (input: string) => {
        const pattern = new RegExp(/^\d{0,6}$/)
        if (!pattern.test(input)) {
            if (input.length > 6) {
                return 'Only 6 digits are allowed'
            }
            return 'Invalid OTP ( only digits are allowed )'
        }
        return ''
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value
        const errorMessage = validateOtp(input)
        setError(errorMessage)
        if (errorMessage === '') {
            setOtp(input)
        }
    }

    const handleSubmitButton = () => {
        console.log("Clicked Submit Button")
    }

    return (
        <OuterContainer>
            <InnerContainer>
                <Typography>Enter OTP</Typography>
                <TextField
                    placeholder='Enter OTP'
                    label='Enter your OTP'
                    value={otp}
                    onChange={handleChange}
                    sx={{
                        width: '20rem'
                    }}
                />
                {error.length > 0 ? <Typography sx={{ color: 'red' }}>{error}</Typography> : null}
                <Button
                    variant='contained'
                    onClick={handleSubmitButton}
                    disabled={otp.length !== 6}
                    sx={{
                        width: '20rem'
                    }}
                >
                    Submit
                </Button>
            </InnerContainer>
        </OuterContainer>
    )
}

export default OtpComponent
