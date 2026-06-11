import { useId } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage, type FormikHelpers } from 'formik';

import style from './FeedbackForm.module.css';

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  message: Yup.string()
    .min(3, 'Too short')
    .max(256, 'Too long')
    .required('Required'),
  level: Yup.string().oneOf(['good', 'neutral', 'bad']).required('Required'),
});

interface FormValues {
  username: string;
  email: string;
  message: string;
  level: 'good' | 'neutral' | 'bad';
}

function FeedbackForm() {
  const initialValues: FormValues = {
    username: '',
    email: '',
    message: '',
    level: 'good',
  };

  const formId = useId();

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <>
      <h2>FeedbackForm</h2>
      <Formik<FormValues>
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={style.form}>
          <div className={style.fieldGroup}>
            <label htmlFor={`${formId}_username`}>Username:</label>
            <Field
              name="username"
              // type="text"
              id={`${formId}_username`}
              className={style.field}
              placeholder="Username"
            />
            <ErrorMessage
              name="username"
              component="div"
              className={style.error}
            />
          </div>

          <div className={style.fieldGroup}>
            <label htmlFor={`${formId}_email`}>Email:</label>
            <Field
              name="email"
              // type="email"
              id={`${formId}_email`}
              className={style.field}
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className={style.error}
            />
          </div>

          <div className={style.fieldGroup}>
            <label htmlFor={`${formId}_message`}>Message:</label>
            <Field
              name="message"
              // type="text"
              as="textarea"
              rows={5}
              id={`${formId}_message`}
              className={style.field}
              placeholder="Message"
            />
            <ErrorMessage
              name="message"
              component="div"
              className={style.error}
            />
          </div>

          <div className={style.fieldGroup}>
            <label htmlFor={`${formId}_level`}>Level:</label>
            <Field
              name="level"
              as="select"
              id={`${formId}_level`}
              className={style.field}
            >
              <option value="good">Good</option>
              <option value="neutral">Neutral</option>
              <option value="bad">Bad</option>
            </Field>
            <ErrorMessage
              name="level"
              component="div"
              className={style.error}
            />
          </div>

          <button type="submit" className={style.button}>
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
}
export default FeedbackForm;
