import React from 'react';

export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>
        Welcome to our College Space !
      </h1>
      <p className='mb-4 text-slate-700'>
      Our college Space Website, built using the MERN stack, serves as the central hub for interaction between students and teachers. Within this comprehensive platform, educators can seamlessly upload lecture notes, make important announcements, and administer quizzes to gauge student understanding.
      </p>
      <p className='mb-4 text-slate-700'>
      Simultaneously, students benefit from a plethora of features, including the ability to monitor their attendance status and receive notifications if their attendance falls below the critical 75% threshold. Additionally, students can conveniently access their mid-semester marks, providing them with valuable insights into their academic progress.
      </p>
      <p className='mb-4 text-slate-700'>
      This integrated digital space fosters a dynamic learning environment, promoting seamless communication and academic transparency between faculty and students.
      </p>
    </div>
  );
}
