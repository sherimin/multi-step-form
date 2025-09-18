import React, { useState } from 'react'
import SelectInput from '../Input/SelectInput'
import arcadeAvatar from '../../assets/images/icon-arcade.svg';
import advancedAvatar from '../../assets/images/icon-advanced.svg';
import proAvatar from '../../assets/images/icon-pro.svg';

const step2Selections = [
    {
        avatar: arcadeAvatar,
        title: 'Arcade',
        monthlyPrice: '$9/mo',
        yearlyPrice: '$90/yr',
    },
    {
        avatar: advancedAvatar,
        title: 'Advanced',
        monthlyPrice: '$12/mo',
        yearlyPrice: '$120/yr',
    },
    {
        avatar: proAvatar,
        title: 'Pro',
        monthlyPrice: '$15/mo',
        yearlyPrice: '$150/yr',
    }
]

const Step2 = ({ isMonthly }) => {
    

  return (
    <div className='bg-green-200 flex flex-col h-full w-full justify-start items-center mt-10'>
        <div className='flex w-full h-1/2 gap-4'>
            {step2Selections.map((selection) => <SelectInput avatar={selection.avatar} title={selection.title} price={isMonthly ? selection.monthlyPrice : selection.yearlyPrice} isMonthly={isMonthly} />)}
        </div>

        <div className='flex flex-row mt-10'>
            <div>Monthly</div>
            <div>Button</div>
            <div>Yearly</div>
        </div>
    </div>
  )
}

export default Step2