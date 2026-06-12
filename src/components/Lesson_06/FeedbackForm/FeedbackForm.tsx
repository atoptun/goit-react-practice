import { useId } from 'react';
import * as Yup from 'yup';
import { CiBeerMugFull } from 'react-icons/ci';
import { Formik, Field, Form, ErrorMessage, type FormikHelpers } from 'formik';

import style from './FeedbackForm.module.css';
import clsx from 'clsx';

const MUG_LEVELS = {
  '': 'gray',
  good: 'green',
  neutral: 'orange',
  bad: 'red',
} as const;

type Level = keyof typeof MUG_LEVELS;
const validLevels = Object.keys(MUG_LEVELS).filter(key => key !== '');

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
  level: Yup.string()
    .oneOf([...validLevels])
    .required('Required'),
});

export type FeedbackFormValues = Yup.InferType<typeof FeedbackSchema>;

const initialValues: FeedbackFormValues = {
  username: '',
  email: '',
  message: '',
  level: '',
};

type FeedbackFormProps = {
  onSubmit: (values: FeedbackFormValues) => void;
};

function FeedbackForm({ onSubmit }: FeedbackFormProps) {
  const formId = useId();

  const handleSubmit = (
    values: FeedbackFormValues,
    actions: FormikHelpers<FeedbackFormValues>
  ) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <>
      <h2>FeedbackForm</h2>
      <Formik<FeedbackFormValues>
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        {({ values, errors, touched }) => {
          return (
            <Form className={style.form}>
              <div className={style.fieldGroup}>
                <label htmlFor={`${formId}_username`}>Username:</label>
                <Field
                  name="username"
                  type="text"
                  id={`${formId}_username`}
                  className={clsx(style.field, {
                    [style.errorField]: errors.username && touched.username,
                  })}
                  placeholder="Username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className={style.errorMessage}
                />
              </div>

              <div className={style.fieldGroup}>
                <label htmlFor={`${formId}_email`}>Email:</label>
                <Field
                  name="email"
                  type="email"
                  id={`${formId}_email`}
                  className={clsx(style.field, {
                    [style.errorField]: errors.email && touched.email,
                  })}
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={style.errorMessage}
                />
              </div>

              <div className={style.fieldGroup}>
                <label htmlFor={`${formId}_message`}>Message:</label>
                <Field
                  name="message"
                  type="text"
                  as="textarea"
                  rows={5}
                  id={`${formId}_message`}
                  className={clsx(style.field, {
                    [style.errorField]: errors.message && touched.message,
                  })}
                  placeholder="Message"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className={style.errorMessage}
                />
              </div>

              <div className={style.fieldGroup}>
                <label htmlFor={`${formId}_level`}>Level:</label>
                <Field
                  name="level"
                  as="select"
                  id={`${formId}_level`}
                  className={clsx(style.field, {
                    [style.errorField]: errors.level && touched.level,
                  })}
                >
                  <option value="" disabled>
                    Select...
                  </option>
                  <option value="good">Good</option>
                  <option value="neutral">Neutral</option>
                  <option value="bad">Bad</option>
                </Field>
                <ErrorMessage
                  name="level"
                  component="div"
                  className={style.errorMessage}
                />

                <CiBeerMugFull
                  size={40}
                  color={MUG_LEVELS[values.level as Level]}
                />
              </div>

              <button type="submit" className={style.button}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
export default FeedbackForm;
