import { useState } from 'react';

export const useForm = initialValues => {
  const [values, setValues] = useState({ changedValues: [], ...initialValues });

  return [
    values,
    e => {
      setValues({
        ...values,
        changedValues: [...values.changedValues, e.target.name],
        [e.target.name]: e.target.value,
      });
    },
  ];
};
