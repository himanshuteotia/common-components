import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signup } from './signup-service';

function SignupForm() {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {
          await signup(values.name, values.email, values.password);
        } catch (error) {
          setErrors({ signup: error.message });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Sign up
          </button>
          <ErrorMessage name="signup" component="div" />
        </Form>
      )}
    </Formik>
  );
}
