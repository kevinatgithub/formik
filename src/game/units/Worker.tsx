import { Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React, { FC, useContext } from 'react'
import MyGridField from '../../components/examples/shared/MyGridField'
import { IField, IWorker } from '../types'
import * as Yup from 'yup'
import { World } from '../Game'
interface WorkerProps {
  worker: IWorker
}
interface WorkerForm {
  action: string,
  target: string
}
const Worker: FC<WorkerProps> = ({ worker }) => {

  const world = useContext(World)

  const initialValues: WorkerForm = {
    action: '',
    target: ''
  }

  const handleSubmit = (values: WorkerForm) => {
    alert(JSON.stringify(values))
  }

  const validationSchema = Yup.object({
    action: Yup.string().required('Select worker action'),
    target: Yup.string().required('Select a target')
  })
  return (
    <Card>
      <CardContent>
        ID : {worker.id}<br />
        State : {worker.state}<br />
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {f => <Form>
            <Grid container spacing={2} pt={2}>
              <Grid item xs={12} rowSpacing={2}>
                <Field name="action">
                  {(fieldProps: any) => {
                    const { field, form } = fieldProps
                    const { setFieldValue } = form;
                    return <FormControl fullWidth>
                      <InputLabel>Select Action</InputLabel>
                      <Select {...field} onChange={e => setFieldValue(field.name,e.target.value)}>
                        <MenuItem key={-1} value={""}></MenuItem>
                        <MenuItem key={0} value={"build"}>Build</MenuItem>
                        <MenuItem key={1} value={"assign"}>Assign</MenuItem>
                      </Select>
                    </FormControl>
                  }}
                </Field>
              </Grid>
              <Grid item xs={12} rowSpacing={2}>
                <Field name="target">
                  {(fieldProps: any) => {
                    const { field, form } = fieldProps
                    const { setFieldValue } = form;
                    return <FormControl fullWidth>
                      <InputLabel>Select Action</InputLabel>
                      <Select {...field} onChange={e => setFieldValue(field.name, e.target.value)}>
                        <MenuItem key={-1} value={""}></MenuItem>
                        <MenuItem key={0} value={"field"}>Field</MenuItem>
                      </Select>
                    </FormControl>
                  }}
                </Field>
              </Grid>
              <Grid item xs={12} rowSpacing={2}>
                <Button variant='contained' size="medium" onClick={() => f.submitForm()}>Confirm</Button>
                <Button style={{ marginLeft: 15 }} variant='contained' color='secondary' size="medium" onClick={() => f.resetForm()}>Clear</Button>
              </Grid>
            </Grid>
          </Form>}
        </Formik>
        {JSON.stringify(worker)}
      </CardContent>
    </Card>
  )
}

export default Worker