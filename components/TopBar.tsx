'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const TopBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const router = useRouter();

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate loading delay
    const loadingTimer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after a delay
    }, 2000); // Adjust the delay to match your loading animation duration

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
      clearTimeout(loadingTimer); // Cleanup loading timer on unmount
    };
  }, []);

  // Format the time
  const formattedTime = currentTime.toLocaleTimeString();

  // Format the date as "10 March, 2025"
  const formattedDate = currentTime.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Don't render the TopBar until loading is complete
  if (isLoading) {
    return null;
  }

  return (
    <div className="top-bar">
      <div className="time-date">
        <span>{formattedDate}</span> | <span>{formattedTime}</span>
      </div>
      <button
        className="admin-login-button"
        onClick={() => router.push('/admin/login')}
      >
        Admin Login
      </button>
    </div>
  );
};

export default TopBar;