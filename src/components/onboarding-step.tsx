import React from 'react'

interface IOnboardingStep {
    Icon: React.ElementType,
    title: string,
    description?: string,
    stepNumber: number
}

function OnboardingStep({ Icon, title, description, stepNumber }: IOnboardingStep) {
    return (
        <div className='lg:w-1/5 w-full text-center flex flex-col items-center justify-center py-4'>
            <div className='relative p-4 rounded-full flex items-center justify-center size-20'>
                <div className='bg-red-300 p-2 rounded-full'>
                    <Icon size={32} stroke='red' />
                </div>
                <div className='absolute size-28 shadow-[6px_8px_80px_0px_rgba(148,148,148,0.16)] bg-white -z-10 rounded-full'></div>
                <div className='absolute -top-6 bg-white/50 size-8 items-center flex justify-center rounded-full -left-12'>{stepNumber}</div>
            </div>
            <h3 className='mt-8 font-semibold text-xl'>{title}</h3>
            <p className='text-muted-foreground text-sm mt-2'>{description}</p>
        </div>
    )
}


export default OnboardingStep