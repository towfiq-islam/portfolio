"use client";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {loading && (
        <div className="fixed inset-0 bg-[#000014] flex items-center justify-center z-[9999]">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500 border-solid" />
        </div>
      )}
    </div>
  );
};

export default Loader;
