import React, { Component } from 'react';
import { Container, Form, FormBtn, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text, } from './SigninElements';


class Signin extends Component {
    state = {  } 
    render() { 
        return (
            <>
             
                <Container>
                    <FormWrap>
                        <Icon to='/'>Logo</Icon>
                        <FormContent>
                            <Form action='#'>
                                <FormH1>
                                    Sign  in to You accound
                                </FormH1>
                                <FormLabel htmlFor='for'>Email</FormLabel>
                                <FormInput type='email' required />
                                 <FormLabel htmlFor='for'>Password</FormLabel>
                                <FormInput type='password' required />
                                <FormBtn type='submit' >Continue</FormBtn>
                                <Text>Forget Password</Text>
                            </Form>
                        </FormContent>
                    </FormWrap>
                </Container>
            </>
        );
    }
}
 
export default Signin;