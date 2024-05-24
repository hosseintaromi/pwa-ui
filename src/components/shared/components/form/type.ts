import { FormikErrors } from 'formik';

export type setFieldValue = (field: string, value: any) => any;
export type handleChange = (params: any) => any;
export type errors<T> = FormikErrors<T>;
