import React from 'react';
import styled from 'styled-components';
import { TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import { Formik, FormikProps, Form, Field } from 'formik';
import * as yup from 'yup';

const initialValues = {
    name: '',
    lastname: '',
    email: '',
    message: ''
};

const validationSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    lastname: yup.string().required('Nome obrigatório'),
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    message: yup.string().required('Mensagem obrigatória').required('Mensagem obrigatória'),
});

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTextField = styled(TextField)`
  margin: 10px;
  width: 300px;
`;

const StyledButton = styled(Button)`
  margin: 10px;
  width: 300px;
`;

const StyledButtonContainer = styled.div`
  margin-top: -30px;
`;

const StyledCard = styled(Card)`
  width: 400px;
  margin: 20px auto;
`;

const FormComponent: React.FC = () => {
    const handleSubmit = (values: typeof initialValues) => {
        console.log(values);
    };

    return (
        <StyledCard>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Contate-nos
                </Typography>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {(props: FormikProps<typeof initialValues>) => (
                        <StyledForm>
                            <Field name="name">
                                {({ field, meta }: { field: any; meta: any }) => (
                                    <StyledTextField

                                        {...field}
                                        label="Nome"
                                        error={meta.touched && Boolean(meta.error)}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                            <Field name="lastname">
                                {({ field, meta }: { field: any; meta: any }) => (
                                  <StyledTextField

                                        {...field}
                                        label="Sobrenome"
                                        error={meta.touched && Boolean(meta.error)}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                            <Field name="email">
                                {({ field, meta }: { field: any; meta: any }) => (
                               <StyledTextField

                                        {...field}
                                        label="E-mail"
                                        error={meta.touched && Boolean(meta.error)}
                                        helperText={meta.touched && meta.error}
                                    />
                                )}
                            </Field>
                            <Field name="message">
                                {({ field, meta }: { field: any; meta: any }) => (
                                    <div style={{ height: '200px', width: '300px', paddingTop: '20px' }}>
                                        <TextField
                                            {...field}
                                            label="Mensagem"
                                            id="outlined-basic"
                                            variant="outlined"
                                            multiline
                                            rows={4}
                                            error={meta.touched && Boolean(meta.error)}
                                            helperText={meta.touched && meta.error}
                                            style={{ width: '100%' }}
                                        />
                                    </div>
                                )}
                            </Field>
                            <StyledButtonContainer>
                                <StyledButton variant="contained" color="primary" type="submit">
                                    Enviar
                                </StyledButton>
                            </StyledButtonContainer>
                        </StyledForm>
                    )}
                </Formik>
            </CardContent>
        </StyledCard>
    );
};

export default FormComponent;
