'use client'
import Button from '@/components/elements/button/Button'
import { useTranslations } from 'next-intl'
import styles from './SubscribeForm.module.scss'
import http from '@/api/common-configuration'
import { useForm } from 'react-hook-form'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { IStatus } from '../subscribeModal/SubscribeModal'
import Image from 'next/image'
import loading from '@/assets/svg/loading.svg'

interface SignUpForm {
  email: string
}

interface Props {
  handleClose: () => void
  status: IStatus
  setStatus: Dispatch<SetStateAction<IStatus>>
}
const SubscribeForm = (props: Props) => {
  const t = useTranslations('Modal')
  const t1 = useTranslations('')
  const [points, setPoints] = useState<string[]>([])

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    let newPoints = [...points]
    e.target.checked
      ?
      newPoints = [...points, e.target.value]
      :
      newPoints = newPoints.filter(point => point !== e.target.value)
    setPoints(newPoints)
  }

  const { register, getValues, formState: { errors, isValid } } = useForm<SignUpForm>({
    defaultValues: {
      email: '',
    },
    mode: 'all'
  })

  const sendData = async () => {
    try {
      props.setStatus({ status: 'loading' })
      const result = await http.post('/', {
        email: getValues('email'),
        points: points,
        language: t1('Lang')
      })
      props.setStatus({ status: 'ok' })
    } catch (e) {
      props.setStatus({ status: 'error' })
    }
  }
  const emailPatternValidator = {
    value: /^\S+@\S+\.\S+$/,
    message: 'Please enter valid email'
  }
  return (
    <>
      <label className={styles.form__textInput}>
        <input
          type='email'
          placeholder="&nbsp;"
          {...register('email', { pattern: emailPatternValidator, required: 'Email is required' })}
        ></input>
        <span className={styles.form__textInput_placeholder}>{t('Hint')}</span>
      </label>
      <p>{t('Question')}</p>
      <div className={styles.form__checkList}>
        <label>
          <input type='checkbox' value='search_room' onChange={(e) => handleCheck(e)} />
          <span>{t('Point1')}</span>
        </label>
        <label>
          <input type='checkbox' value='rent_room' onChange={(e) => handleCheck(e)} />
          <span>{t('Point2')}</span>
        </label>
        <label>
          <input type='checkbox' value='search_people' onChange={(e) => handleCheck(e)} />
          <span>{t('Point3')}</span>
        </label>
        <label>
          <input type='checkbox' value='manage_household' onChange={(e) => handleCheck(e)} />
          <span>{t('Point4')}</span>
        </label>
      </div>
      {props.status.status === 'error' &&
        <p className={styles.form__error}>{t('Error')}</p>
      }
      <Button id='subscribe' onClick={sendData} disabled={!isValid || props.status.status === 'loading'}>
        {props.status.status === 'loading' ?
          <Image src={loading} alt='loading icon' width={16} height={16} className={styles.form__loading} /> :
          t('Button')}
      </Button>
    </>
  )
}
export default SubscribeForm