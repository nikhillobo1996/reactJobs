// racfe
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import HomeCards from './components/HomeCards';
// import JobListings from './components/JobListings';
// import ViewAllJobs from './components/ViewAllJobs';
import HomePage from './pages/Homepage'
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';


const router = createBrowserRouter(
  // createRoutesFromElements(<Route path='/about' element={<h1>My App</h1>} />)
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/jobs/:id' element={<JobPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return (
    // <>
    //   <Navbar />
    //   {/* <Hero title="Test Title" subtitle="test subtitle" /> */}
    //   <Hero />
    //   <HomeCards />
    //   <JobListings />
    //   <ViewAllJobs />
    // </>

    <RouterProvider router={router} />
  )
};

export default App