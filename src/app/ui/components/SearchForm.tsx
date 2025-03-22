"use client"
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchForm() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstSelect = formData.get('firstSelect');
    const secondSelect = formData.get('secondSelect');
    const thirdSelect = formData.get('thirdSelect');

    console.log(firstSelect, secondSelect, thirdSelect);
    if (!firstSelect || !secondSelect || !thirdSelect) {
      console.error('Please select valid options for all fields');
      alert('Please select valid options for all fields');
      return;
    }

    const searchParams = new URLSearchParams({
      firstSelect: firstSelect as string,
      secondSelect: secondSelect as string,
      thirdSelect: thirdSelect as string
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.push(`/excursions?${searchParams.toString()}`);
  
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row mt-6 gap-4 bg-[#ffffff78] p-8 rounded-lg">
      <div className="flex flex-col w-full md:w-1/2">
        <select
          defaultValue={"invalid"}
          name="firstSelect"
          id="numberSelect"
          className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer">
          <option value="invalid" disabled>Select First</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <select
        defaultValue={"invalid"}
        name="secondSelect"
        className="w-full md:w-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer">
        <option value="invalid" disabled>Select Second</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <select 
        defaultValue={"invalid"}
        name="thirdSelect"
        className="w-full md:w-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer">
        <option value="invalid" disabled>Select Third</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <button 
        type="submit"
        className="w-full md:w-1/2 text-gray-800 px-4 py-2 rounded-lg border bg-[var(--fme-primary)] border-[var(--fme-primary)] focus:outline-none focus:[var(--fme-primary)]0 focus:border-[var(--fme-primary)] appearance-none cursor-pointer">
        <span className="text-white">Search</span>
      </button>
    </form>
  );
} 