import React from 'react';
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function RootLayout({ children }) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log({user})
    } else {
      // User is signed out
      // ...
    }
  });
  return (
    <div className="w-full h-auto flex flex-row gap-2 items-start justify-start">
      <aside className="sticky top-0 left-0 h-screen">
        <Sidebar />
      </aside>
      <div className="w-full h-full px-1 py-6">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
}
