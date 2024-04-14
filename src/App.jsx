// racfe
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from 'react';

import HomePage from './pages/Homepage'
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';




const App = () => {
  // add new job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //delete job
  const deleteJob = async (id) => {

    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  //update job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job),
    });
    return;
  };





  const router = createBrowserRouter(
    // createRoutesFromElements(<Route path='/about' element={<h1>My App</h1>} />)
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>

        <Route index element={<HomePage />} />

        <Route path='/jobs' element={<JobsPage />} />

        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />

        <Route path='/edit-jobs/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />

        <Route path='*' element={<NotFoundPage />} />

        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />

      </Route>
    )
  );




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