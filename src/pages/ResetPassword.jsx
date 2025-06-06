import React from 'react';
import { Form, useNavigation, useActionData } from 'react-router-dom';

import { useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import TextField from '../components/TextField';
import { Button } from '../components/Button';
import { CircularProgress, LinearProgress } from '../components/Progress';
import Logo from '../components/Logo';
//animation
import { AnimatePresence } from 'framer-motion';

//assests
import {  banner } from '../assets/assets';

//Custom Hook for Snackbar
import { useSnackbar } from '../hooks/useSnackbar';

const ResetPassword = () => {
  //get error data from form using useAtciondata
  const error = useActionData();
  console.log(error);
  //get navigation from submitting and loading
  const navigation = useNavigation();

  const { showSnackBar } = useSnackbar();

  useEffect(() => {
    //show snackbar with the same error messages
    if (error?.message) {
      showSnackBar({
        message: error.message,
        type: 'error',
      });
    }
  }, [error, showSnackBar]);

  return (
    <>
      <PageTitle title='Enter New Password' />
      <div className='relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-4'>
          <Logo classes='mb-auto sm:mx-auto lg:mx-0'/>
          

          <div className='flex flex-col gap-2 max-w-[480px] mx-auto w-full'>
            <h2 className='text-displaySmall font-semibold text-light-onBackground dark:text-dark-onBackground text-center'>
              Set a new password
            </h2>
            <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
              Please choose a new password for your account.Must be at least 8 characters long.
            </p>
            <Form
              method='POST'
              className='grid grid-cols-1 gap-4'
            >

              <TextField
                type='password'
                name='password'
                label='Password'
                placeholder='Enter new password'
                required={true}
                autoFocus={true}
              />


              <Button
                type='submit'
                disabled={navigation.state === 'submitting'}
              >
                {navigation.state === 'submitting' ? (
                  <CircularProgress size='small' />
                ) : (
                  'Reset Password'
                )}
              </Button>
            </Form>
            
          </div>
          <p className='mt-auto mx-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-bodyMedium lg:mx-0'>
            &copy; 2025 Cryptic Nomand All rights reserved.
          </p>
        </div>

        <div className='hidden lg:block lg:relative lg:rounded-large img-box'>
          <img
            src={banner}
            alt='synchat banner'
            className='img-cover'
          />
          <p className='absolute bottom-10 left-12 right-12 z-10 text-displayLarge font-semibold leading-tight text-right text-dark-onSurface drop-shadow-sm 2xl:text-[72px]'>
          FinSafe
          </p>
        </div>
      </div>
      <AnimatePresence>
        {navigation.state === 'loading' && (
          <LinearProgress classes='absolute top-0 left-0 right-0' />
        )}
      </AnimatePresence>
    </>
  );
};

export default ResetPassword;
