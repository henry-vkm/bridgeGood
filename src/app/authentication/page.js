import React from 'react';
import SignIn from '../../components/signin.component';
import SignUp from '../../components/signUp.component';
import Navigation from '../../components/navigation.component';
import Footer from '../../components/footer.component';

const Authentication = () => {
  return (
    <div>
      <Navigation />
      <div className="flex gap-[10px] max-w-[1240px] mx-auto justify-between mt-[50px]">
        <SignIn />
        <SignUp />
      </div>
      <Footer />
    </div>
  )
}

export default Authentication