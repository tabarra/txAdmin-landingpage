import { NextPage } from 'next';
import Header from '../components/layout/Header';
import { MainNavBar } from '../components/NavBar/MainNavBar';

const TestPage: NextPage = () => {
  return (
    <div className='h-screen bg-black'>
      <MainNavBar />
    </div>
  );
};

export default TestPage;
