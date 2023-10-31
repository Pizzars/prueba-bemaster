'use client'
import FilterAlt from 'src/screens/components/general/Filter/FilterAlt'
import { TextIcons } from 'src/screens/components/icons/TextIcon'
import TextParagraph from 'src/screens/components/texts/TextParagraph'
import Label from '../components/Label'

import { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getArtistsData } from 'src/redux/features/artistsSlice'
import { StateRequest } from 'src/redux/features/baseReducer'
import Select from '../components/Select'

interface Params {
  updateData: (data: any, newStep: number) => void
}
const optionPlaceholders = [
  { title: 'ENGLISH', option: 'es' },
  { title: 'ESPAÑOL', option: 'en' }
]

const BookingRequest = ({ updateData }: Params) => {
  return (
    <div>
      <FilterAlt
        text={`BOOKing
        request`}
        alt='1/7'
        options={optionPlaceholders}
        className='bg-form-mobile uppercase'
      />
      <div className='pt-[15rem]'>
        <TextParagraph
          text='Please provide the following information to make an artist inquiry.'
          className='mx-8 my-4'
        />
        <div className='py-8'>
          <Select />
          <Label name='PREFERRED date' value='10-08-2023' icon={TextIcons.CALENDAR}>
            <div className='bg-black'>Hola</div>
          </Label>
          <Label name='ADDITIONAL INFORMATION'>
            <div className='bg-black'>Hola</div>
          </Label>
        </div>
      </div>
    </div>
  )
}

export default BookingRequest
