import { Formik, Form, Field, ErrorMessage } from 'formik';
import { login } from './login-service';

function LoginForm() {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {
          await login(values.username, values.password);
        } catch (error) {
          setErrors({ login: error.message });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
          <ErrorMessage name="login" component="div" />
        </Form>
      )}
    </Formik>
  );
}
